import { useEffect, useState } from 'react';
import { Camera, Check, Edit2, Link as LinkIcon, LogOut, QrCode, Trash2, User, Users, X } from 'lucide-react';
import QRCode from 'react-qr-code';
import type { User as FirebaseUser } from 'firebase/auth';
import {
  createFamilyGroup,
  loadGroupMembers,
  loadGroupProfile,
  loadUserProfile,
  removeGroupMember,
  rotateInviteCode,
  updateDisplayName,
  updateGroupName,
  type AppUserProfile,
  type GroupMember,
  type GroupProfile,
} from '../lib/firebase';

type GroupManagementProps = {
  onClose: () => void;
  darkMode: boolean;
  user: FirebaseUser | null;
  profile: AppUserProfile | null;
  onProfileChange: (profile: AppUserProfile | null) => void;
  onSignOut: () => void;
};

export function GroupManagement({ onClose, darkMode, user, profile, onProfileChange, onSignOut }: GroupManagementProps) {
  const [groupName, setGroupName] = useState('My Family Group');
  const [editingGroupName, setEditingGroupName] = useState(false);
  const [tempGroupName, setTempGroupName] = useState('');
  const [displayName, setDisplayName] = useState(user?.displayName || user?.email || 'User');
  const [editingDisplayName, setEditingDisplayName] = useState(false);
  const [tempDisplayName, setTempDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState<string>(user?.photoURL || '');
  const [inviteLink, setInviteLink] = useState('');
  const [showInviteOptions, setShowInviteOptions] = useState(false);
  const [familyMembers, setFamilyMembers] = useState<GroupMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [group, setGroup] = useState<GroupProfile | null>(null);

  useEffect(() => {
    loadGroupSettings();
  }, [profile?.groupId, user?.uid]);

  const loadGroupSettings = async () => {
    const savedGroupName = localStorage.getItem('groupName');
    const savedDisplayName = localStorage.getItem('displayName');
    const savedProfilePicture = localStorage.getItem('profilePicture');

    if (savedGroupName) setGroupName(savedGroupName);
    if (savedDisplayName) setDisplayName(savedDisplayName);
    if (savedProfilePicture) setProfilePicture(savedProfilePicture);

    if (!profile?.groupId) {
      setGroup(null);
      setFamilyMembers([]);
      setInviteLink('');
      return;
    }

    const currentGroup = await loadGroupProfile(profile.groupId);
    if (currentGroup) {
      setGroup(currentGroup);
      setGroupName(currentGroup.name);
      setFamilyMembers(await loadGroupMembers(currentGroup.groupId));
      setInviteLink(`${window.location.origin}?invite=${currentGroup.inviteCode}`);
    }
  };

  const ensureGroup = async () => {
    if (!user) {
      return null;
    }

    const createdGroup = await createFamilyGroup(user, groupName || 'My Family Group');
    const currentProfile = await loadUserProfile(user.uid);
    onProfileChange(currentProfile);
    setGroup(createdGroup);
    setInviteLink(`${window.location.origin}?invite=${createdGroup.inviteCode}`);
    setFamilyMembers(await loadGroupMembers(createdGroup.groupId));
    return createdGroup;
  };

  const generateInviteLink = async () => {
    try {
      const activeGroup = group ?? (await ensureGroup());
      if (!activeGroup) {
        return;
      }

      const inviteCode = await rotateInviteCode(activeGroup.groupId);
      setInviteLink(`${window.location.origin}?invite=${inviteCode}`);
    } catch (error) {
      console.error('Failed to generate invite link:', error);
    }
  };

  const fetchFamilyMembers = async () => {
    if (!group) return;
    setFamilyMembers(await loadGroupMembers(group.groupId));
  };

  const removeMember = async (memberId: string) => {
    if (!group) return;

    if (!confirm('Are you sure you want to remove this member from the group?')) {
      return;
    }

    setLoading(true);
    try {
      await removeGroupMember(group.groupId, memberId);
      await fetchFamilyMembers();
    } catch (error) {
      console.error('Failed to remove member:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfilePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setProfilePicture(result);
      localStorage.setItem('profilePicture', result);
    };
    reader.readAsDataURL(file);
  };

  const saveGroupName = () => {
    setGroupName(tempGroupName);
    localStorage.setItem('groupName', tempGroupName);
    if (group) {
      void updateGroupName(group.groupId, tempGroupName);
    }
    setEditingGroupName(false);
  };

  const saveDisplayName = () => {
    setDisplayName(tempDisplayName);
    localStorage.setItem('displayName', tempDisplayName);
    if (user) {
      void updateDisplayName(user.uid, tempDisplayName);
      onProfileChange(
        profile
          ? {
              ...profile,
              displayName: tempDisplayName,
            }
          : profile
      );
    }
    setEditingDisplayName(false);
  };

  const copyInviteLink = () => {
    const textArea = document.createElement('textarea');
    textArea.value = inviteLink;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      alert('Invite link copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
      const input = document.querySelector('input[readonly]') as HTMLInputElement;
      if (input) {
        input.select();
        alert('Please press Ctrl+C (or Cmd+C on Mac) to copy the link');
      }
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const createGroup = async () => {
    setLoading(true);
    try {
      const activeGroup = await ensureGroup();
      if (!activeGroup) {
        return;
      }
      await fetchFamilyMembers();
      setShowInviteOptions(true);
    } catch (error) {
      console.error('Failed to create group:', error);
    } finally {
      setLoading(false);
    }
  };

  const groupExists = Boolean(group || profile?.groupId);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-5 flex items-center justify-between z-10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Group Management</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
          >
            <X className="size-6 dark:text-gray-300" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Profile</h3>

            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                  {profilePicture ? (
                    <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="size-12 text-gray-400" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 p-2 rounded-full cursor-pointer transition-colors active:scale-95 shadow-lg">
                  <Camera className="size-4 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Display Name</label>
                  {editingDisplayName ? (
                    <div className="flex gap-2 mt-1">
                      <input
                        type="text"
                        value={tempDisplayName}
                        onChange={(e) => setTempDisplayName(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
                        autoFocus
                      />
                      <button
                        onClick={saveDisplayName}
                        className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors active:scale-95"
                      >
                        <Check className="size-5 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-gray-900 dark:text-white font-medium">{displayName}</p>
                      <button
                        onClick={() => {
                          setTempDisplayName(displayName);
                          setEditingDisplayName(true);
                        }}
                        className="p-1 hover:bg-white/50 dark:hover:bg-gray-600 rounded-lg transition-colors active:scale-95"
                      >
                        <Edit2 className="size-4 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Email</label>
                  <p className="text-gray-900 dark:text-white mt-1 break-all">{user?.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Group Name</h3>
            {!groupExists && (
              <div className="mb-4 space-y-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create a family group to share meal plans and grocery lists.
                </p>
                <button
                  onClick={createGroup}
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors active:scale-95 disabled:opacity-50"
                >
                  Create Group
                </button>
              </div>
            )}
            {editingGroupName ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempGroupName}
                  onChange={(e) => setTempGroupName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg"
                  autoFocus
                />
                <button
                  onClick={saveGroupName}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors active:scale-95"
                >
                  <Check className="size-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">{group?.name || groupName}</p>
                <button
                  onClick={() => {
                    setTempGroupName(group?.name || groupName);
                    setEditingGroupName(true);
                  }}
                  className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors active:scale-95"
                >
                  <Edit2 className="size-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            )}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Invite Family Members</h3>
              <button
                onClick={() => setShowInviteOptions(!showInviteOptions)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors active:scale-95"
              >
                {showInviteOptions ? 'Hide' : 'Show'} Invite Options
              </button>
            </div>

            {showInviteOptions && groupExists && (
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <QrCode className="size-5" />
                    Scan QR Code
                  </h4>
                  <div className="flex justify-center p-4 bg-white rounded-lg">
                    <QRCode value={inviteLink} size={200} />
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <LinkIcon className="size-5" />
                    Share Link
                  </h4>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inviteLink}
                      readOnly
                      className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm"
                    />
                    <button
                      onClick={copyInviteLink}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors active:scale-95"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <button
                  onClick={generateInviteLink}
                  className="w-full text-blue-500 dark:text-blue-400 py-2 text-sm font-medium"
                >
                  Generate New Link
                </button>
              </div>
            )}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Users className="size-5" />
              Family Members ({familyMembers.length})
            </h3>

            {familyMembers.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                No family members yet. Share an invite link to add members!
              </p>
            ) : (
              <div className="space-y-2">
                {familyMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                        {member.photoURL ? (
                          <img src={member.photoURL} alt={member.displayName} className="w-full h-full object-cover" />
                        ) : (
                          <User className="size-5 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{member.displayName}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
                      </div>
                    </div>
                    {group?.ownerId === user?.uid && !member.isOwner && (
                      <button
                        onClick={() => removeMember(member.id)}
                        disabled={loading}
                        className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors active:scale-95 disabled:opacity-50"
                      >
                        <Trash2 className="size-5 text-red-500" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onSignOut}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-colors active:scale-95 flex items-center justify-center gap-2"
          >
            <LogOut className="size-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
