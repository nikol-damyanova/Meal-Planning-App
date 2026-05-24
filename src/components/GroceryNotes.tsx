import { X } from 'lucide-react';

type GroceryNotesProps = {
  notes: string;
  onNotesChange: (notes: string) => void;
  onClose: () => void;
};

export function GroceryNotes({ notes, onNotesChange, onClose }: GroceryNotesProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white dark:bg-gray-800 w-full rounded-t-3xl max-h-[90vh] flex flex-col animate-slide-up max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white text-lg">Grocery List</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
          >
            <X className="size-6 dark:text-gray-300" />
          </button>
        </div>

        {/* Notes Area */}
        <div className="flex-1 p-5 overflow-y-auto">
          <textarea
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            placeholder="Write your grocery list here...&#10;&#10;Example:&#10;• Eggs&#10;• Milk&#10;• Bread&#10;• Chicken breast&#10;• Fresh vegetables"
            className="w-full h-full min-h-[400px] px-4 py-3 text-base border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
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