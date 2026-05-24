import { ArrowLeft } from 'lucide-react';
import { MealPlan } from '../App';

type DayViewProps = {
  selectedDate: Date;
  mealPlan: MealPlan;
  onUpdateMeal: (mealPlan: MealPlan) => void;
  onBack: () => void;
};

export function DayView({ selectedDate, mealPlan, onUpdateMeal, onBack }: DayViewProps) {
  const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
  const dateString = selectedDate.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });

  const handleMealChange = (mealType: keyof MealPlan, value: string) => {
    onUpdateMeal({
      ...mealPlan,
      [mealType]: value
    });
  };

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-500 dark:text-blue-400 mb-4 hover:text-blue-600 dark:hover:text-blue-300 transition-colors p-2 -ml-2 active:scale-95"
      >
        <ArrowLeft className="size-5" />
        <span className="font-medium">Back to Calendar</span>
      </button>

      {/* Date Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 mb-4 shadow-sm">
        <h2 className="font-semibold text-gray-900 dark:text-white text-lg">{dayName}</h2>
        <p className="text-base text-gray-500 dark:text-gray-400 mt-1">{dateString}</p>
      </div>

      {/* Meal Inputs */}
      <div className="space-y-4">
        <MealInput
          label="Breakfast"
          value={mealPlan.breakfast}
          onChange={(value) => handleMealChange('breakfast', value)}
          emoji="🍳"
        />
        <MealInput
          label="Lunch"
          value={mealPlan.lunch}
          onChange={(value) => handleMealChange('lunch', value)}
          emoji="🥗"
        />
        <MealInput
          label="Dinner"
          value={mealPlan.dinner}
          onChange={(value) => handleMealChange('dinner', value)}
          emoji="🍽️"
        />
        <MealInput
          label="Snacks"
          value={mealPlan.snacks}
          onChange={(value) => handleMealChange('snacks', value)}
          emoji="🍎"
        />
      </div>
    </div>
  );
}

type MealInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  emoji: string;
};

function MealInput({ label, value, onChange, emoji }: MealInputProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
      <label className="flex items-center gap-2 mb-3 font-medium text-gray-700 dark:text-gray-300 text-base">
        <span className="text-xl">{emoji}</span>
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()} plan...`}
        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
        rows={3}
      />
    </div>
  );
}