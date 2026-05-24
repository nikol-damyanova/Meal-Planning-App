import { Calendar, CalendarDays, Moon, ShoppingCart, Sun, Users, User as UserIcon } from 'lucide-react';
import type { User } from 'firebase/auth';
import type { AppUserProfile } from '../lib/firebase';

type MainMenuProps = {
  onNavigate: (screen: 'monthView' | 'weekView' | 'groceryList' | 'groupManagement') => void;
  isAuthenticated: boolean;
  darkMode: boolean;
  user?: User | null;
  profile?: AppUserProfile | null;
  onGoToAuth: () => void;
  onToggleDarkMode: () => void;
};

export function MainMenu({ onNavigate, isAuthenticated, darkMode, user, profile, onGoToAuth, onToggleDarkMode }: MainMenuProps) {
  const savedDisplayName = localStorage.getItem('displayName');
  const displayName = savedDisplayName || profile?.displayName || user?.displayName || user?.email || 'User';
  const savedProfilePicture = localStorage.getItem('profilePicture');
  const profilePicture = savedProfilePicture || profile?.photoURL || user?.photoURL || '';

  const menuOptions = [
    {
      id: 'monthView' as const,
      icon: Calendar,
      title: 'Monthly View',
      description: 'View meals by month',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      id: 'weekView' as const,
      icon: CalendarDays,
      title: 'Weekly View',
      description: 'View meals by week',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      id: 'groceryList' as const,
      icon: ShoppingCart,
      title: 'Grocery List',
      description: 'Manage shopping items',
      gradient: 'from-green-500 to-green-600',
    },
    {
      id: 'groupManagement' as const,
      icon: Users,
      title: 'Make New Group',
      description: isAuthenticated ? 'Manage family group' : 'Login required',
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={onToggleDarkMode}
            className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md transition-colors active:scale-95"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="size-6 text-yellow-400" />
            ) : (
              <Moon className="size-6 text-gray-600" />
            )}
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl shadow-md">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                {profilePicture ? (
                  <img src={profilePicture} alt={displayName} className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="size-6 text-gray-400" />
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{displayName}</p>
              </div>
            </div>
          ) : (
            <button
              onClick={onGoToAuth}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:from-blue-600 hover:to-green-600 transition-colors active:scale-95"
            >
              Sign In
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => onNavigate(option.id)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all active:scale-95 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity`} />

                <div className="relative flex flex-col items-center text-center space-y-3">
                  <div className={`bg-gradient-to-br ${option.gradient} p-4 rounded-2xl`}>
                    <Icon className="size-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
