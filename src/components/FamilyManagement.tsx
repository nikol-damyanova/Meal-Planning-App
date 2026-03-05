import { useState, useEffect } from 'react';
import { X, Users, Plus, QrCode, Link as LinkIcon, Trash2, Copy, Check } from 'lucide-react';
import QRCode from 'npm:qrcode';

type FamilyManagementProps = {
  onClose: () => void;
  accessToken: string;
  userId: string;
  darkMode: boolean;
};

type FamilyGroup = {
  id: string;
  name: string;
  ownerId: string;
  inviteCode: string;
  members: string[];
  memberProfiles: Array<{
    id: string;
    email: string;
    displayName: string;
  }>;
};

export function FamilyManagement({ onClose, accessToken, userId, darkMode }: FamilyManagementProps) {
  const [familyGroup, setFamilyGroup] = useState<FamilyGroup | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadFamilyGroup();
  }, []);

  useEffect(() => {
    if (familyGroup?.inviteCode) {
      generateQRCode();
    }
  }, [familyGroup]);

  const loadFamilyGroup = async () => {
    try {
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/family`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      const data = await response.json();
      setFamilyGroup(data.group);
    } catch (err) {
      console.error('Failed to load family group:', err);
    } finally {
      setLoading(false);
    }
  };

  const createFamily = async () => {
    if (!groupName.trim()) return;
    
    setError('');
    try {
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/family/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ name: groupName })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error);
      }

      setFamilyGroup(data.group);
      setShowCreateForm(false);
      setGroupName('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const joinFamily = async () => {
    if (!inviteCode.trim()) return;
    
    setError('');
    try {
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/family/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ inviteCode: inviteCode.trim() })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error);
      }

      setFamilyGroup(data.group);
      setShowJoinForm(false);
      setInviteCode('');
      await loadFamilyGroup();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const removeMember = async (memberId: string) => {
    if (!confirm('Are you sure you want to remove this member?')) return;

    try {
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/family/remove-member`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ memberId })
      });

      if (response.ok) {
        await loadFamilyGroup();
      }
    } catch (err) {
      console.error('Failed to remove member:', err);
    }
  };

  const generateQRCode = async () => {
    if (!familyGroup?.inviteCode) return;
    
    try {
      const inviteUrl = `${window.location.origin}?invite=${familyGroup.inviteCode}`;
      const qrDataUrl = await QRCode.toDataURL(inviteUrl, {
        width: 256,
        margin: 2,
        color: {
          dark: darkMode ? '#FFFFFF' : '#000000',
          light: darkMode ? '#1F2937' : '#FFFFFF'
        }
      });
      setQrCodeUrl(qrDataUrl);
    } catch (err) {
      console.error('Failed to generate QR code:', err);
    }
  };

  const copyInviteLink = () => {
    const inviteUrl = `${window.location.origin}?invite=${familyGroup?.inviteCode}`;
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyInviteCode = () => {
    navigator.clipboard.writeText(familyGroup?.inviteCode || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isOwner = familyGroup?.ownerId === userId;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className={`bg-white dark:bg-gray-800 w-full rounded-t-3xl max-h-[90vh] flex flex-col animate-slide-up max-w-md mx-auto ${darkMode ? 'dark' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Users className="size-6 text-blue-500" />
            <h2 className="font-semibold text-gray-900 dark:text-white text-lg">Family Group</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
          >
            <X className="size-6 dark:text-gray-300" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-y-auto">
          {loading ? (
            <div className="text-center py-8 text-gray-500">Loading...</div>
          ) : !familyGroup ? (
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Share your meal plans and grocery list with family members
              </p>

              <button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="w-full bg-blue-500 text-white py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="size-5" />
                Create Family Group
              </button>

              {showCreateForm && (
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl space-y-3">
                  <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Family group name (e.g., Smith Family)"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={createFamily}
                    className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
                  >
                    Create
                  </button>
                </div>
              )}

              <div className="text-center text-gray-500 dark:text-gray-400">or</div>

              <button
                onClick={() => setShowJoinForm(!showJoinForm)}
                className="w-full bg-green-500 text-white py-4 rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <LinkIcon className="size-5" />
                Join Existing Group
              </button>

              {showJoinForm && (
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl space-y-3">
                  <input
                    type="text"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    placeholder="Enter invite code"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={joinFamily}
                    className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
                  >
                    Join
                  </button>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 text-sm">
                  {error}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Group Info */}
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-1">{familyGroup.name}</h3>
                <p className="text-blue-100">{familyGroup.members.length} member{familyGroup.members.length !== 1 ? 's' : ''}</p>
              </div>

              {/* Invite Section (Owner only) */}
              {isOwner && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Invite Members</h4>
                  
                  {/* QR Code */}
                  {qrCodeUrl && (
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-2xl text-center">
                      <img src={qrCodeUrl} alt="Invite QR Code" className="mx-auto mb-3" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Scan to join family group</p>
                    </div>
                  )}

                  {/* Invite Code */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Invite Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={familyGroup.inviteCode}
                        readOnly
                        className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono"
                      />
                      <button
                        onClick={copyInviteCode}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                      >
                        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Invite Link */}
                  <button
                    onClick={copyInviteLink}
                    className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  >
                    {copied ? <Check className="size-5" /> : <LinkIcon className="size-5" />}
                    {copied ? 'Link Copied!' : 'Copy Invite Link'}
                  </button>
                </div>
              )}

              {/* Members List */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Members</h4>
                <div className="space-y-2">
                  {familyGroup.memberProfiles?.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-xl"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {member.displayName}
                          {member.id === familyGroup.ownerId && (
                            <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                              Owner
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
                      </div>
                      {isOwner && member.id !== familyGroup.ownerId && (
                        <button
                          onClick={() => removeMember(member.id)}
                          className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                        >
                          <Trash2 className="size-5 text-red-500" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
