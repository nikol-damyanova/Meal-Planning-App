import { useEffect, useRef, useState } from 'react';
import { Plus, X } from 'lucide-react';
import {
  loadGroceryItems,
  loadGroupProfile,
  saveGroceryItems,
  type GroceryItem,
  type GroupProfile,
} from '../lib/firebase';

type GroceryListProps = {
  onClose: () => void;
  userId: string;
  groupId: string | null;
  currentUserDisplayName: string;
  onOpenFamilyGroup: () => void;
};

const memberColors = [
  'text-red-600 dark:text-red-400 border-l-red-500',
  'text-blue-600 dark:text-blue-400 border-l-blue-500',
  'text-green-600 dark:text-green-400 border-l-green-500',
  'text-amber-600 dark:text-amber-400 border-l-amber-500',
  'text-purple-600 dark:text-purple-400 border-l-purple-500',
  'text-teal-600 dark:text-teal-400 border-l-teal-500',
  'text-pink-600 dark:text-pink-400 border-l-pink-500',
  'text-orange-600 dark:text-orange-400 border-l-orange-500',
];

export function GroceryList({ onClose, userId, groupId, currentUserDisplayName }: GroceryListProps) {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [newItemText, setNewItemText] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [groupProfile, setGroupProfile] = useState<GroupProfile | null>(null);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    void loadItems();
  }, [groupId, userId]);

  const loadItems = async () => {
    setLoading(true);
    try {
      const currentGroup = groupId ? await loadGroupProfile(groupId) : null;
      setGroupProfile(currentGroup);

      const savedItems = await loadGroceryItems(userId, groupId);
      setItems(savedItems.filter((item) => !item.checked));
    } catch (error) {
      console.error('Error loading grocery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveItems = async (itemsToSave: GroceryItem[]) => {
    setSaving(true);
    try {
      await saveGroceryItems(userId, groupId, itemsToSave);
    } catch (error) {
      console.error('Error saving grocery items:', error);
    } finally {
      setSaving(false);
    }
  };

  const debouncedSave = (itemsToSave: GroceryItem[]) => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      void saveItems(itemsToSave);
    }, 500);
  };

  const addItem = () => {
    if (!newItemText.trim()) return;

    const newItem: GroceryItem = {
      id: Date.now().toString() + Math.random().toString(),
      text: newItemText.trim(),
      checked: false,
      createdByUserId: userId,
      createdByDisplayName: currentUserDisplayName,
      createdAt: new Date().toISOString(),
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setNewItemText('');
    debouncedSave(updatedItems);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const toggleItem = (id: string) => {
    const item = items.find((entry) => entry.id === id);
    if (!item) return;

    const updatedItems = items.map((entry) => (entry.id === id ? { ...entry, checked: true } : entry));
    void saveItems(updatedItems);

    setTimeout(() => {
      const filteredItems = items.filter((entry) => entry.id !== id);
      setItems(filteredItems);
    }, 300);
  };

  const handleClose = () => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    void saveItems(items).then(() => {
      onClose();
    });
  };

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  const getAuthorClassName = (item: GroceryItem) => {
    if (!groupProfile || !item.createdByUserId) {
      return 'text-gray-900 dark:text-white border-l-gray-300 dark:border-l-gray-600';
    }

    if (item.createdByUserId === groupProfile.ownerId) {
      return 'text-gray-900 dark:text-white border-l-gray-900 dark:border-l-white';
    }

    const memberIds = groupProfile.memberIds.filter((memberId) => memberId !== groupProfile.ownerId);
    const memberIndex = memberIds.indexOf(item.createdByUserId);
    const colorClass = memberColors[Math.max(0, memberIndex) % memberColors.length];

    return colorClass;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Shared Grocery List
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              All family members can edit
              {saving && <span className="ml-2">• Saving...</span>}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="size-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new grocery item..."
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />
            <button
              onClick={addItem}
              className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-colors active:scale-95 flex items-center gap-2 flex-shrink-0"
            >
              <Plus className="size-5" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">Loading...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">No items yet. Add your first grocery item above!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-l-4 ${getAuthorClassName(item)}`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex-shrink-0 w-8 h-8 rounded-full border-3 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-green-500 dark:hover:border-green-500 transition-all active:scale-95 flex items-center justify-center group"
                    aria-label="Check item"
                  >
                    <div className="w-5 h-5 rounded-full bg-transparent group-hover:bg-green-500 transition-colors" />
                  </button>
                  <p className={`flex-1 text-lg font-medium ${getAuthorClassName(item)}`}>
                    {groupProfile && item.createdByDisplayName ? `${item.createdByDisplayName}: ${item.text}` : item.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
