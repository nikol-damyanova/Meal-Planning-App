import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MealData } from '../App';

type MonthViewProps = {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onDayClick: (date: Date) => void;
  mealData: MealData;
};

export function MonthView({ selectedDate, onDateChange, onDayClick, mealData }: MonthViewProps) {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const previousMonth = () => {
    onDateChange(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    onDateChange(new Date(year, month + 1, 1));
  };

  const hasMealPlan = (day: number): boolean => {
    const date = new Date(year, month, day);
    const dateKey = date.toISOString().split('T')[0];
    const meals = mealData[dateKey];
    return meals && (meals.breakfast || meals.lunch || meals.dinner || meals.snacks) ? true : false;
  };

  const days = [];
  
  // Empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="aspect-square" />);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isToday = 
      new Date().getDate() === day &&
      new Date().getMonth() === month &&
      new Date().getFullYear() === year;

    days.push(
      <button
        key={day}
        onClick={() => onDayClick(date)}
        className={`aspect-square rounded-xl flex flex-col items-center justify-center relative transition-colors active:scale-95 ${
          isToday
            ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
            : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
        }`}
      >
        <span className={`text-base ${isToday ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
          {day}
        </span>
        {hasMealPlan(day) && (
          <div className="absolute bottom-1.5 w-1.5 h-1.5 bg-green-500 rounded-full" />
        )}
      </button>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={previousMonth}
          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
        >
          <ChevronLeft className="size-6 dark:text-gray-300" />
        </button>
        <h2 className="font-semibold text-gray-900 dark:text-white text-lg">
          {monthNames[month]} {year}
        </h2>
        <button
          onClick={nextMonth}
          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95"
        >
          <ChevronRight className="size-6 dark:text-gray-300" />
        </button>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-center text-sm text-gray-500 dark:text-gray-400 font-medium py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {days}
      </div>
    </div>
  );
}