import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';
import {
  GoogleAuthProvider,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';

export type MealPlan = {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
};

export type MealData = Record<string, MealPlan>;

export type GroceryItem = {
  id: string;
  text: string;
  checked: boolean;
};

export type AppUserProfile = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  groupId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GroupProfile = {
  groupId: string;
  name: string;
  ownerId: string;
  inviteCode: string;
  memberIds: string[];
  createdAt: string;
  updatedAt: string;
};

export type GroupMember = {
  id: string;
  displayName: string;
  email: string;
  photoURL: string;
  isOwner: boolean;
};

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? 'AIzaSyBjqYy4wbjOBBnpA4MqhjgdeEi9BSgk1Ik',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? 'mealplanner-25b37.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? 'mealplanner-25b37',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? 'mealplanner-25b37.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '285617568583',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? '1:285617568583:web:9778c2998e4c4d2b6eea62',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? 'G-E1KMT4L1XQ',
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
);

let firebaseApp: FirebaseApp | null = null;
export const auth = isFirebaseConfigured ? getAuth((firebaseApp = initializeApp(firebaseConfig))) : null;
export const db = isFirebaseConfigured && firebaseApp ? getFirestore(firebaseApp) : null;
export const analytics: Promise<Analytics | null> = (async () => {
  if (!isFirebaseConfigured || !firebaseConfig.measurementId || typeof window === 'undefined') {
    return null;
  }

  const supported = await isSupported();
  if (!supported || !firebaseApp) {
    return null;
  }

  return getAnalytics(firebaseApp);
})();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

function requireFirebaseConfiguration() {
  if (!isFirebaseConfigured) {
    throw new Error(
      'Firebase environment variables are missing. Set the VITE_FIREBASE_* values before using auth.'
    );
  }
}

function requireDatabase() {
  if (!db) {
    throw new Error('Firebase Firestore is not configured. Set the VITE_FIREBASE_* values first.');
  }
}

function timestamp() {
  return new Date().toISOString();
}

function scopeKey(userId: string, groupId: string | null) {
  return groupId ? `group_${groupId}` : `user_${userId}`;
}

function userRef(userId: string) {
  requireDatabase();
  return doc(db, 'users', userId);
}

function groupRef(groupId: string) {
  requireDatabase();
  return doc(db, 'groups', groupId);
}

function mealRef(userId: string, groupId: string | null) {
  requireDatabase();
  return doc(db, 'mealPlans', scopeKey(userId, groupId));
}

function groceryRef(userId: string, groupId: string | null) {
  requireDatabase();
  return doc(db, 'groceryLists', scopeKey(userId, groupId));
}

function normalizeDisplayName(user: User, fallback?: string) {
  return fallback ?? user.displayName ?? user.email?.split('@')[0] ?? 'User';
}

function normalizePhotoURL(user: User, fallback?: string) {
  return fallback ?? user.photoURL ?? '';
}

function isPopupFallbackError(error: unknown) {
  const code = (error as { code?: string })?.code;
  return (
    code === 'auth/popup-blocked' ||
    code === 'auth/popup-closed-by-user' ||
    code === 'auth/operation-not-supported-in-this-environment'
  );
}

function generateInviteCode() {
  return crypto.randomUUID().replace(/-/g, '').slice(0, 12).toUpperCase();
}

export async function signInWithGoogle(): Promise<UserCredential | null> {
  requireFirebaseConfiguration();
  if (!auth) {
    throw new Error('Firebase Auth is not available.');
  }

  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    if (isPopupFallbackError(error)) {
      await signInWithRedirect(auth, googleProvider);
      return null;
    }

    throw error;
  }
}

export async function signInWithEmail(email: string, password: string) {
  requireFirebaseConfiguration();
  if (!auth) {
    throw new Error('Firebase Auth is not available.');
  }
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string
) {
  requireFirebaseConfiguration();
  if (!auth) {
    throw new Error('Firebase Auth is not available.');
  }

  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName });
  await upsertUserProfile(credential.user, { displayName });
  return credential;
}

export async function requestPasswordReset(email: string) {
  requireFirebaseConfiguration();
  if (!auth) {
    throw new Error('Firebase Auth is not available.');
  }
  return sendPasswordResetEmail(auth, email);
}

export async function logout() {
  if (!auth) {
    return;
  }
  return signOut(auth);
}

export async function loadUserProfile(userId: string) {
  const snapshot = await getDoc(userRef(userId));
  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as AppUserProfile;
}

export async function upsertUserProfile(user: User, changes: Partial<AppUserProfile> = {}) {
  const existingProfile = await loadUserProfile(user.uid);
  const profile: AppUserProfile = {
    uid: user.uid,
    email: user.email ?? existingProfile?.email ?? '',
    displayName: normalizeDisplayName(user, changes.displayName ?? existingProfile?.displayName),
    photoURL: normalizePhotoURL(user, changes.photoURL ?? existingProfile?.photoURL),
    groupId: changes.groupId ?? existingProfile?.groupId ?? null,
    createdAt: existingProfile?.createdAt ?? timestamp(),
    updatedAt: timestamp(),
  };

  await setDoc(userRef(user.uid), profile, { merge: true });
  return profile;
}

export async function updateDisplayName(userId: string, displayName: string) {
  await setDoc(
    userRef(userId),
    {
      displayName,
      updatedAt: timestamp(),
    },
    { merge: true }
  );
}

export async function loadMealData(userId: string, groupId: string | null) {
  const snapshot = await getDoc(mealRef(userId, groupId));
  if (!snapshot.exists()) {
    return {} as MealData;
  }

  const data = snapshot.data() as { meals?: MealData };
  return data.meals ?? ({} as MealData);
}

export async function saveMealData(userId: string, groupId: string | null, meals: MealData) {
  await setDoc(
    mealRef(userId, groupId),
    {
      userId,
      groupId,
      meals,
      updatedAt: timestamp(),
    },
    { merge: true }
  );
}

export async function loadGroceryItems(userId: string, groupId: string | null) {
  const snapshot = await getDoc(groceryRef(userId, groupId));
  if (!snapshot.exists()) {
    return [] as GroceryItem[];
  }

  const data = snapshot.data() as { items?: GroceryItem[] };
  return data.items ?? [];
}

export async function saveGroceryItems(
  userId: string,
  groupId: string | null,
  items: GroceryItem[]
) {
  await setDoc(
    groceryRef(userId, groupId),
    {
      userId,
      groupId,
      items,
      updatedAt: timestamp(),
    },
    { merge: true }
  );
}

export async function createFamilyGroup(user: User, groupName: string) {
  requireFirebaseConfiguration();

  const groupId = crypto.randomUUID();
  const inviteCode = generateInviteCode();
  const createdAt = timestamp();
  const group: GroupProfile = {
    groupId,
    name: groupName,
    ownerId: user.uid,
    inviteCode,
    memberIds: [user.uid],
    createdAt,
    updatedAt: createdAt,
  };

  await setDoc(groupRef(groupId), group);
  await upsertUserProfile(user, { groupId });
  return group;
}

export async function loadGroupProfile(groupId: string) {
  const snapshot = await getDoc(groupRef(groupId));
  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as GroupProfile;
}

export async function rotateInviteCode(groupId: string) {
  const inviteCode = generateInviteCode();
  await updateDoc(groupRef(groupId), {
    inviteCode,
    updatedAt: timestamp(),
  });
  return inviteCode;
}

export async function joinGroupByInviteCode(userId: string, inviteCode: string) {
  const groupsQuery = query(collection(db, 'groups'), where('inviteCode', '==', inviteCode));
  const groupSnapshot = await getDocs(groupsQuery);

  if (groupSnapshot.empty) {
    throw new Error('Invite link is invalid or expired.');
  }

  const group = groupSnapshot.docs[0].data() as GroupProfile;
  const currentProfile = await loadUserProfile(userId);
  const currentGroupId = currentProfile?.groupId ?? null;

  const batch = writeBatch(db);
  if (currentGroupId && currentGroupId !== group.groupId) {
    batch.update(groupRef(currentGroupId), {
      memberIds: arrayRemove(userId),
      updatedAt: timestamp(),
    });
  }

  batch.update(groupRef(group.groupId), {
    memberIds: arrayUnion(userId),
    updatedAt: timestamp(),
  });

  batch.set(
    userRef(userId),
    {
      groupId: group.groupId,
      updatedAt: timestamp(),
    },
    { merge: true }
  );

  await batch.commit();
  return group;
}

export async function updateGroupName(groupId: string, name: string) {
  await setDoc(
    groupRef(groupId),
    {
      name,
      updatedAt: timestamp(),
    },
    { merge: true }
  );
}

export async function loadGroupMembers(groupId: string) {
  const group = await loadGroupProfile(groupId);
  if (!group) {
    return [] as GroupMember[];
  }

  const members = await Promise.all(
    group.memberIds.map(async (memberId) => {
      const snapshot = await getDoc(userRef(memberId));
      if (!snapshot.exists()) {
        return null;
      }

      const profile = snapshot.data() as AppUserProfile;
      return {
        id: memberId,
        displayName: profile.displayName || profile.email || 'User',
        email: profile.email,
        photoURL: profile.photoURL || '',
        isOwner: memberId === group.ownerId,
      } satisfies GroupMember;
    })
  );

  return members.filter((member): member is GroupMember => member !== null);
}

export async function removeGroupMember(groupId: string, userId: string) {
  const group = await loadGroupProfile(groupId);
  if (!group) {
    throw new Error('Group not found.');
  }

  const batch = writeBatch(db);
  batch.update(groupRef(groupId), {
    memberIds: arrayRemove(userId),
    updatedAt: timestamp(),
  });
  batch.set(
    userRef(userId),
    {
      groupId: null,
      updatedAt: timestamp(),
    },
    { merge: true }
  );
  await batch.commit();
}
