import { useState, useEffect } from 'react';
import { X, Plus, Trash2, Edit2, Check, RefreshCw } from 'lucide-react';

type GroceryItem = {
  id: string;
  text: string;
  addedBy: string;
  addedByName: string;
  checked: boolean;
  createdAt: string;
};

type SharedGroceryListProps = {
  onClose: () => void;
  accessToken: string;
  userId: string;
  darkMode: boolean;
};

export function SharedGroceryList({ onClose, accessToken, userId, darkMode }: SharedGroceryListProps) {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [newItemText, setNewItemText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const { projectId } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/grocery`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      const data = await response.json();
      setItems(data.items || []);
    } catch (err) {
      console.error('Failed to load grocery items:', err);
    }
  };

  const addItem = async () => {
    if (!newItemText.trim()) return;

    setLoading(true);
    try {
      const { projectId } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/grocery/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ text: newItemText.trim() })
      });

      if (response.ok) {
        setNewItemText('');
        await loadItems();
      }
    } catch (err) {
      console.error('Failed to add item:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleCheck = async (item: GroceryItem) => {
    try {
      const { projectId } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/grocery/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ 
          itemId: item.id, 
          checked: !item.checked 
        })
      });

      if (response.ok) {
        await loadItems();
      }
    } catch (err) {
      console.error('Failed to toggle item:', err);
    }
  };

  const startEdit = (item: GroceryItem) => {
    if (item.addedBy !== userId) return;
    setEditingId(item.id);
    setEditText(item.text);
  };

  const saveEdit = async () => {
    if (!editText.trim() || !editingId) return;

    try {
      const { projectId } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/grocery/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ 
          itemId: editingId, 
          text: editText.trim()
        })
      });

      if (response.ok) {
        setEditingId(null);
        setEditText('');
        await loadItems();
      }
    } catch (err) {
      console.error('Failed to update item:', err);
    }
  };

  const deleteItem = async (itemId: string) => {
    try {
      const { projectId } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-f038bb2f/grocery/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ itemId })
      });

      if (response.ok) {
        await loadItems();
      }
    } catch (err) {
      console.error('Failed to delete item:', err);
    }
  };

  const getUserColor = (addedBy: string): string => {
    if (addedBy === userId) return 'text-blue-600 dark:text-blue-400';
    
    // Generate consistent colors for other users
    const colors = [
      'text-green-600 dark:text-green-400',
      'text-purple-600 dark:text-purple-400',
      'text-orange-600 dark:text-orange-400',
      'text-pink-600 dark:text-pink-400',
      'text-indigo-600 dark:text-indigo-400',
    ];
    
    const hash = addedBy.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className={`bg-white dark:bg-gray-800 w-full rounded-t-3xl max-h-[90vh] flex flex-col animate-slide-up max-w-md mx-auto ${darkMode ? 'dark' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white text-lg">Grocery List</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={loadItems}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
              aria-label="Refresh"
            >
              <RefreshCw className="size-5 dark:text-gray-300" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
            >
              <X className="size-6 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Add Item */}
        <div className="p-5 border-b dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
              placeholder="Add grocery item..."
              className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={addItem}
              disabled={loading || !newItemText.trim()}
              className="px-4 py-3 bg-green-500 dark:bg-green-600 text-white rounded-xl hover:bg-green-600 dark:hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Plus className="size-5" />
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 p-5 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <p>No items yet</p>
              <p className="text-sm mt-2">Add your first grocery item above</p>
            </div>
          ) : (
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-3 p-4 rounded-xl transition-colors ${
                    item.checked 
                      ? 'bg-gray-100 dark:bg-gray-700/50' 
                      : 'bg-white dark:bg-gray-700'
                  } border border-gray-200 dark:border-gray-600`}
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleCheck(item)}
                    className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                      item.checked
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300 dark:border-gray-500 hover:border-green-500'
                    }`}
                  >
                    {item.checked && <Check className="size-4 text-white" />}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {editingId === item.id ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                          className="flex-1 px-3 py-1 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          autoFocus
                        />
                        <button
                          onClick={saveEdit}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          <Check className="size-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <p className={`${item.checked ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                          {item.text}
                        </p>
                        <p className={`text-xs mt-1 ${getUserColor(item.addedBy)}`}>
                          {item.addedBy === userId ? 'You' : `Added by ${item.addedByName}`}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Actions */}
                  {editingId !== item.id && (
                    <div className="flex gap-1">
                      {item.addedBy === userId && (
                        <button
                          onClick={() => startEdit(item)}
                          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <Edit2 className="size-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      )}
                      {item.addedBy === userId && (
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                        >
                          <Trash2 className="size-4 text-red-500" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
          <button
            onClick={onClose}
            className="w-full bg-green-500 dark:bg-green-600 text-white py-4 rounded-xl font-medium hover:bg-green-600 dark:hover:bg-green-700 transition-colors active:scale-95"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
