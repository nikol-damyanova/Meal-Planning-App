import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MealData, MealPlan } from '../App';

type WeekViewProps = {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  mealData: MealData;
  onUpdateMeal: (date: Date, mealPlan: MealPlan) => void;
};

export function WeekView({ selectedDate, onDateChange, mealData, onUpdateMeal }: WeekViewProps) {
  const getWeekDates = (date: Date): Date[] => {
    const current = new Date(date);
    const day = current.getDay();
    const diff = current.getDate() - day; // Sunday
    
    const weekDates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const weekDate = new Date(current);
      weekDate.setDate(diff + i);
      weekDates.push(weekDate);
    }
    return weekDates;
  };

  const weekDates = getWeekDates(selectedDate);

  const previousWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    onDateChange(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    onDateChange(newDate);
  };

  const getMealPlan = (date: Date): MealPlan => {
    const dateKey = date.toISOString().split('T')[0];
    return mealData[dateKey] || {
      breakfast: '',
      lunch: '',
      dinner: '',
      snacks: ''
    };
  };

  const weekStart = weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const weekEnd = weekDates[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div>
      {/* Week Navigation */}
      <div className="flex items-center justify-between mb-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
        <button
          onClick={previousWeek}
          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
        >
          <ChevronLeft className="size-6 dark:text-gray-300" />
        </button>
        <h2 className="font-semibold text-gray-900 dark:text-white text-base">
          {weekStart} - {weekEnd}
        </h2>
        <button
          onClick={nextWeek}
          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
        >
          <ChevronRight className="size-6 dark:text-gray-300" />
        </button>
      </div>

      {/* Week Days */}
      <div className="space-y-4">
        {weekDates.map((date, index) => {
          // Skip Sunday (index 0), start from Monday
          if (index === 0) return null;
          
          const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
          const dateString = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          const mealPlan = getMealPlan(date);
          const isToday = 
            new Date().toISOString().split('T')[0] === date.toISOString().split('T')[0];

          return (
            <DayCard
              key={date.toISOString()}
              dayName={dayName}
              dateString={dateString}
              mealPlan={mealPlan}
              onUpdateMeal={(updatedPlan) => onUpdateMeal(date, updatedPlan)}
              isToday={isToday}
            />
          );
        })}
      </div>
    </div>
  );
}

type DayCardProps = {
  dayName: string;
  dateString: string;
  mealPlan: MealPlan;
  onUpdateMeal: (mealPlan: MealPlan) => void;
  isToday: boolean;
};

function DayCard({ dayName, dateString, mealPlan, onUpdateMeal, isToday }: DayCardProps) {
  const handleMealChange = (mealType: keyof MealPlan, value: string) => {
    onUpdateMeal({
      ...mealPlan,
      [mealType]: value
    });
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm ${isToday ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`font-semibold text-base ${isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
          {dayName}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{dateString}</span>
      </div>

      <div className="space-y-3">
        <MealRow
          label="🍳 Breakfast"
          value={mealPlan.breakfast}
          onChange={(value) => handleMealChange('breakfast', value)}
        />
        <MealRow
          label="🥗 Lunch"
          value={mealPlan.lunch}
          onChange={(value) => handleMealChange('lunch', value)}
        />
        <MealRow
          label="🍽️ Dinner"
          value={mealPlan.dinner}
          onChange={(value) => handleMealChange('dinner', value)}
        />
        <MealRow
          label="🍎 Snacks"
          value={mealPlan.snacks}
          onChange={(value) => handleMealChange('snacks', value)}
        />
      </div>
    </div>
  );
}

type MealRowProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function MealRow({ label, value, onChange }: MealRowProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter meal..."
        className="w-full px-3 py-2.5 text-base border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}