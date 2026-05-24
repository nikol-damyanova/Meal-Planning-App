import { Calendar } from 'lucide-react';

type LandingScreenProps = {
  onNavigate: (screen: 'monthView' | 'weekView' | 'groceryList') => void;
  onGoToAuth: () => void;
  onContinueWithoutAccount: () => void;
  darkMode: boolean;
};

export function LandingScreen({
  onNavigate,
  onGoToAuth,
  onContinueWithoutAccount,
  darkMode,
}: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-6 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-blue-500 to-green-500 p-6 rounded-3xl shadow-lg">
            <Calendar className="size-16 text-white" />
          </div>
        </div>

        {/* Title and subtitle */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Meal Planner
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Plan your meals, manage groceries, and share with family
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-4 pt-4">
          <button
            onClick={onContinueWithoutAccount}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-4 rounded-2xl font-semibold text-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors active:scale-95 shadow-md"
          >
            Try without an Account
          </button>

          <button
            onClick={onGoToAuth}
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-green-600 transition-colors active:scale-95 shadow-md"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 px-4">
            Signing in allows for family groups, sharing grocery lists, and collaborative meal planning
          </p>
        </div>
      </div>
    </div>
  );
}