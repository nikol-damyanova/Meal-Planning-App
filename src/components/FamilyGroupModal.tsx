import { useEffect, useState } from 'react';
import { Check, Copy, Link as LinkIcon, Trash2, Users, X } from 'lucide-react';
import QRCode from 'qrcode';
import type { User } from 'firebase/auth';
import {
  createFamilyGroup,
  loadGroupMembers,
  loadGroupProfile,
  removeGroupMember,
  rotateInviteCode,
  type AppUserProfile,
  type GroupMember,
  type GroupProfile,
} from '../lib/firebase';

type FamilyGroupModalProps = {
  onClose: () => void;
  user: User | null;
  profile: AppUserProfile | null;
  onProfileChange: (profile: AppUserProfile | null) => void;
};

export function FamilyGroupModal({ onClose, user, profile, onProfileChange }: FamilyGroupModalProps) {
  const [members, setMembers] = useState<GroupMember[]>([]);
  const [group, setGroup] = useState<GroupProfile | null>(null);
  const [isOwner, setIsOwner] = useState(false);
  const [inviteLink, setInviteLink] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    void loadMembers();
  }, [profile?.groupId, user?.uid]);

  const buildInviteAssets = async (inviteCode: string) => {
    const link = `${window.location.origin}?invite=${inviteCode}`;
    setInviteLink(link);
    setQrCode(await QRCode.toDataURL(link));
  };

  const loadMembers = async () => {
    try {
      if (!profile?.groupId) {
        setGroup(null);
        setMembers([]);
        setIsOwner(false);
        setInviteLink('');
        setQrCode('');
        return;
      }

      const currentGroup = await loadGroupProfile(profile.groupId);
      if (!currentGroup) {
        setGroup(null);
        setMembers([]);
        setIsOwner(false);
        setInviteLink('');
        setQrCode('');
        return;
      }

      setGroup(currentGroup);
      setIsOwner(currentGroup.ownerId === user?.uid);
      setMembers(await loadGroupMembers(profile.groupId));
      await buildInviteAssets(currentGroup.inviteCode);
    } catch (error) {
      console.error('Failed to load members:', error);
    } finally {
      setLoading(false);
    }
  };

  const createGroup = async () => {
    if (!user) {
      return;
    }

    setLoading(true);
    try {
      const createdGroup = await createFamilyGroup(user, localStorage.getItem('groupName') || 'My Family Group');
      const currentProfile = await loadUserProfile(user.uid);
      onProfileChange(currentProfile);
      setGroup(createdGroup);
      setIsOwner(true);
      setMembers(await loadGroupMembers(createdGroup.groupId));
      await buildInviteAssets(createdGroup.inviteCode);
    } catch (error) {
      console.error('Failed to create group:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateInvite = async () => {
    if (!group) {
      await createGroup();
      return;
    }

    try {
      const inviteCode = await rotateInviteCode(group.groupId);
      await buildInviteAssets(inviteCode);
    } catch (error) {
      console.error('Failed to generate invite:', error);
    }
  };

  const revokeMember = async (memberId: string) => {
    if (!group) return;

    if (!confirm('Are you sure you want to remove this member?')) {
      return;
    }

    try {
      await removeGroupMember(group.groupId, memberId);
      setMembers(await loadGroupMembers(group.groupId));
    } catch (error) {
      console.error('Failed to revoke access:', error);
    }
  };

  const copyInviteLink = async () => {
    await navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white dark:bg-gray-800 w-full rounded-t-3xl max-h-[90vh] flex flex-col animate-slide-up max-w-md mx-auto">
        <div className="flex items-center justify-between p-5 border-b dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white text-lg flex items-center gap-2">
            <Users className="size-5" />
            Family Group
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
          >
            <X className="size-6 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex-1 p-5 overflow-y-auto space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">Members</h3>
            {loading ? (
              <p className="text-gray-500 dark:text-gray-400">Loading...</p>
            ) : (
              <div className="space-y-2">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {member.displayName}
                        {member.isOwner && (
                          <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                            Owner
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
                    </div>
                    {isOwner && !member.isOwner && (
                      <button
                        onClick={() => revokeMember(member.id)}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {group ? (
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Invite Family Members</h3>

              {!inviteLink ? (
                <button
                  onClick={generateInvite}
                  className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors active:scale-95 flex items-center justify-center gap-2"
                >
                  <LinkIcon className="size-5" />
                  Generate Invite Link
                </button>
              ) : (
                <div className="space-y-4">
                  {qrCode && (
                    <div className="bg-white p-4 rounded-xl flex justify-center">
                      <img src={qrCode} alt="Invite QR Code" className="w-48 h-48" />
                    </div>
                  )}

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inviteLink}
                      readOnly
                      className="flex-1 px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl"
                    />
                    <button
                      onClick={copyInviteLink}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors active:scale-95"
                    >
                      {copied ? (
                        <Check className="size-5 text-green-500" />
                      ) : (
                        <Copy className="size-5 text-gray-600 dark:text-gray-300" />
                      )}
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Share this link or QR code with family members
                  </p>

                  <button
                    onClick={generateInvite}
                    className="w-full text-blue-500 dark:text-blue-400 py-2 text-sm font-medium"
                  >
                    Generate New Link
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3 rounded-2xl bg-gray-50 dark:bg-gray-700 p-4">
              <h3 className="font-medium text-gray-900 dark:text-white">Create a Family Group</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Create a group first, then generate an invite link to share with family members.
              </p>
              <button
                onClick={createGroup}
                className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors active:scale-95"
              >
                Create Group
              </button>
            </div>
          )}
        </div>

        <div className="p-5 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
          <button
            onClick={onClose}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
