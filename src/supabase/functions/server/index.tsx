import { Hono } from 'npm:hono@4';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

// Admin client for privileged operations
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Client for validating user JWTs
const supabaseAuth = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? '',
);

// Middleware to verify user authentication
async function verifyAuth(c: any) {
  try {
    // Try standard Authorization header
    const authHeader = c.req.header('Authorization') || c.req.header('authorization');
    
    if (!authHeader) {
      console.log('verifyAuth: No Authorization header');
      return null;
    }
    
    // Create a client with the user's token
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );
    
    // Get the user from the token
    const { data: { user }, error } = await supabaseClient.auth.getUser();
    
    if (error) {
      console.log('verifyAuth: Supabase error:', error);
      return null;
    }
    
    if (!user) {
      console.log('verifyAuth: No user found');
      return null;
    }
    
    console.log('verifyAuth: Token valid for user:', user.id);
    return user;
  } catch (error) {
    console.log('verifyAuth: Exception during validation:', error);
    return null;
  }
}

// Sign up new user
app.post('/make-server-f038bb2f/auth/signup', async (c) => {
  try {
    const { email, password, displayName } = await c.req.json();
    
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { display_name: displayName },
      email_confirm: true, // Auto-confirm since email server isn't configured
    });

    if (error) {
      console.log('Sign up error:', error);
      return c.json({ error: error.message }, 400);
    }

    // Create user's family group
    const groupId = `group_${data.user.id}`;
    await kv.set(`group:${groupId}`, {
      id: groupId,
      ownerId: data.user.id,
      ownerName: displayName,
      createdAt: new Date().toISOString(),
    });

    // Add user to their own group
    await kv.set(`user:${data.user.id}:group`, groupId);

    return c.json({ user: data.user });
  } catch (error) {
    console.log('Sign up error:', error);
    return c.json({ error: 'Sign up failed' }, 500);
  }
});

// Generate invite link for family group
app.post('/make-server-f038bb2f/group/invite', async (c) => {
  try {
    const user = await verifyAuth(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = await kv.get(`user:${user.id}:group`);
    if (!groupId) {
      return c.json({ error: 'No group found' }, 404);
    }

    const group = await kv.get(`group:${groupId}`);
    if (!group || group.ownerId !== user.id) {
      return c.json({ error: 'Only group owner can create invites' }, 403);
    }

    // Create invite token
    const inviteToken = crypto.randomUUID();
    await kv.set(`invite:${inviteToken}`, {
      groupId,
      createdBy: user.id,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
    });

    return c.json({ inviteToken });
  } catch (error) {
    console.log('Create invite error:', error);
    return c.json({ error: 'Failed to create invite' }, 500);
  }
});

// Join family group via invite
app.post('/make-server-f038bb2f/group/join', async (c) => {
  try {
    const user = await verifyAuth(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { inviteToken } = await c.req.json();
    const invite = await kv.get(`invite:${inviteToken}`);
    
    if (!invite) {
      return c.json({ error: 'Invalid or expired invite' }, 404);
    }

    // Check if invite expired
    if (new Date(invite.expiresAt) < new Date()) {
      await kv.del(`invite:${inviteToken}`);
      return c.json({ error: 'Invite has expired' }, 400);
    }

    // Add user to group
    await kv.set(`user:${user.id}:group`, invite.groupId);

    // Add member to group members list
    const membersKey = `group:${invite.groupId}:members`;
    const members = await kv.get(membersKey) || [];
    if (!members.includes(user.id)) {
      members.push(user.id);
      await kv.set(membersKey, members);
    }

    return c.json({ success: true, groupId: invite.groupId });
  } catch (error) {
    console.log('Join group error:', error);
    return c.json({ error: 'Failed to join group' }, 500);
  }
});

// Get group members
app.get('/make-server-f038bb2f/group/members', async (c) => {
  try {
    const user = await verifyAuth(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = await kv.get(`user:${user.id}:group`);
    if (!groupId) {
      return c.json({ error: 'No group found' }, 404);
    }

    const group = await kv.get(`group:${groupId}`);
    const membersIds = await kv.get(`group:${groupId}:members`) || [];
    
    // Get all member details
    const members = [];
    
    // Add owner
    const ownerAuth = await supabase.auth.admin.getUserById(group.ownerId);
    if (ownerAuth.data.user) {
      members.push({
        id: group.ownerId,
        displayName: ownerAuth.data.user.user_metadata.display_name,
        email: ownerAuth.data.user.email,
        isOwner: true,
      });
    }

    // Add other members
    for (const memberId of membersIds) {
      if (memberId === group.ownerId) continue;
      const memberAuth = await supabase.auth.admin.getUserById(memberId);
      if (memberAuth.data.user) {
        members.push({
          id: memberId,
          displayName: memberAuth.data.user.user_metadata.display_name,
          email: memberAuth.data.user.email,
          isOwner: false,
        });
      }
    }

    return c.json({ members, isOwner: user.id === group.ownerId });
  } catch (error) {
    console.log('Get members error:', error);
    return c.json({ error: 'Failed to get members' }, 500);
  }
});

// Revoke member access
app.delete('/make-server-f038bb2f/group/member/:memberId', async (c) => {
  try {
    const user = await verifyAuth(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const memberId = c.req.param('memberId');
    const groupId = await kv.get(`user:${user.id}:group`);
    
    if (!groupId) {
      return c.json({ error: 'No group found' }, 404);
    }

    const group = await kv.get(`group:${groupId}`);
    if (group.ownerId !== user.id) {
      return c.json({ error: 'Only owner can revoke access' }, 403);
    }

    // Remove member from group
    const membersKey = `group:${groupId}:members`;
    const members = await kv.get(membersKey) || [];
    const updatedMembers = members.filter((id: string) => id !== memberId);
    await kv.set(membersKey, updatedMembers);

    // Remove group from user
    await kv.del(`user:${memberId}:group`);

    return c.json({ success: true });
  } catch (error) {
    console.log('Revoke access error:', error);
    return c.json({ error: 'Failed to revoke access' }, 500);
  }
});

// Get grocery list
app.get('/make-server-f038bb2f/grocery', async (c) => {
  try {
    const user = await verifyAuth(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    let groupId = await kv.get(`user:${user.id}:group`);
    
    // Auto-create group if user doesn't have one
    if (!groupId) {
      groupId = `group_${user.id}`;
      await kv.set(`group:${groupId}`, {
        id: groupId,
        ownerId: user.id,
        ownerName: user.user_metadata.display_name || user.email,
        createdAt: new Date().toISOString(),
      });
      await kv.set(`user:${user.id}:group`, groupId);
    }

    const notes = await kv.get(`grocery:${groupId}`) || '';
    return c.json({ notes });
  } catch (error) {
    console.log('Get grocery list error:', error);
    return c.json({ error: 'Failed to get grocery list' }, 500);
  }
});

// Save grocery list notes
app.post('/make-server-f038bb2f/grocery', async (c) => {
  try {
    const user = await verifyAuth(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    let groupId = await kv.get(`user:${user.id}:group`);
    
    // Auto-create group if user doesn't have one
    if (!groupId) {
      groupId = `group_${user.id}`;
      await kv.set(`group:${groupId}`, {
        id: groupId,
        ownerId: user.id,
        ownerName: user.user_metadata.display_name || user.email,
        createdAt: new Date().toISOString(),
      });
      await kv.set(`user:${user.id}:group`, groupId);
    }

    const { notes } = await c.req.json();
    await kv.set(`grocery:${groupId}`, notes);
    
    return c.json({ success: true });
  } catch (error) {
    console.log('Save grocery list error:', error);
    return c.json({ error: 'Failed to save grocery list' }, 500);
  }
});

// Get meal plans
app.get('/make-server-f038bb2f/meals', async (c) => {
  try {
    const user = await verifyAuth(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = await kv.get(`user:${user.id}:group`);
    if (!groupId) {
      return c.json({ meals: {} });
    }

    const meals = await kv.get(`meals:${groupId}`) || {};
    return c.json({ meals });
  } catch (error) {
    console.log('Get meals error:', error);
    return c.json({ error: 'Failed to get meals' }, 500);
  }
});

// Update meal plan
app.post('/make-server-f038bb2f/meals', async (c) => {
  try {
    const user = await verifyAuth(c);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const groupId = await kv.get(`user:${user.id}:group`);
    if (!groupId) {
      return c.json({ error: 'No group found' }, 404);
    }

    const { meals } = await c.req.json();
    await kv.set(`meals:${groupId}`, meals);
    
    return c.json({ success: true });
  } catch (error) {
    console.log('Update meals error:', error);
    return c.json({ error: 'Failed to update meals' }, 500);
  }
});

Deno.serve(app.fetch);