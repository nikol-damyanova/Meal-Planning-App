import { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { Calendar, Home, List, Moon, Sun } from 'lucide-react';
import { AuthScreen } from './components/AuthScreen';
import { DayView } from './components/DayView';
import { FamilyGroupModal } from './components/FamilyGroupModal';
import { GroceryList } from './components/GroceryList';
import { GroceryNotes } from './components/GroceryNotes';
import { GroupManagement } from './components/GroupManagement';
import { LandingScreen } from './components/LandingScreen';
import { MainMenu } from './components/MainMenu';
import { MonthView } from './components/MonthView';
import { WeekView } from './components/WeekView';
import {
  auth,
  isFirebaseConfigured,
  joinGroupByInviteCode,
  loadMealData,
  loadUserProfile,
  logout,
  saveMealData,
  type AppUserProfile,
  type MealData,
  type MealPlan,
} from './lib/firebase';

export default function App() {
  const [view, setView] = useState<'landing' | 'auth' | 'menu' | 'month' | 'week' | 'day' | 'groupManagement'>('landing');
  const [isInitializing, setIsInitializing] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [mealData, setMealData] = useState<MealData>(() => {
    const saved = localStorage.getItem('mealPlanner_mealData');
    return saved ? JSON.parse(saved) : {};
  });
  const [groceryNotes, setGroceryNotes] = useState(() => {
    const saved = localStorage.getItem('mealPlanner_groceryNotes');
    return saved || '';
  });
  const [showGroceryNotes, setShowGroceryNotes] = useState(false);
  const [showGroceryList, setShowGroceryList] = useState(false);
  const [showFamilyGroup, setShowFamilyGroup] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('mealPlanner_darkMode');
    return saved === 'true';
  });

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<AppUserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const inviteToken = new URLSearchParams(window.location.search).get('invite');
    if (inviteToken) {
      localStorage.setItem('pendingInvite', inviteToken);
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setProfile(null);
        setIsAuthenticated(false);
        setView('landing');
        setIsInitializing(false);
        return;
      }

      try {
        let currentProfile = await loadUserProfile(firebaseUser.uid);
        if (!currentProfile) {
          currentProfile = {
            uid: firebaseUser.uid,
            email: firebaseUser.email ?? '',
            displayName: firebaseUser.displayName ?? firebaseUser.email?.split('@')[0] ?? 'User',
            photoURL: firebaseUser.photoURL ?? '',
            groupId: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
        }

        const pendingInvite = localStorage.getItem('pendingInvite');
        if (pendingInvite) {
          try {
            await joinGroupByInviteCode(firebaseUser.uid, pendingInvite);
            localStorage.removeItem('pendingInvite');
            window.history.replaceState({}, '', window.location.pathname);
            currentProfile = (await loadUserProfile(firebaseUser.uid)) ?? currentProfile;
          } catch (error) {
            console.error('Failed to join invited group:', error);
          }
        }

        setUser(firebaseUser);
        setProfile(currentProfile);
        setIsAuthenticated(true);
        setMealData(await loadMealData(firebaseUser.uid, currentProfile.groupId));
        setView('menu');
      } catch (error) {
        console.error('Failed to restore auth state:', error);
        setUser(firebaseUser);
        setIsAuthenticated(true);
        setView('menu');
      } finally {
        setIsInitializing(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthenticatedUser = async (firebaseUser: User) => {
    try {
      let currentProfile = await loadUserProfile(firebaseUser.uid);
      if (!currentProfile) {
        currentProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? '',
          displayName: firebaseUser.displayName ?? firebaseUser.email?.split('@')[0] ?? 'User',
          photoURL: firebaseUser.photoURL ?? '',
          groupId: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
      }

      const pendingInvite = localStorage.getItem('pendingInvite');
      if (pendingInvite) {
        try {
          await joinGroupByInviteCode(firebaseUser.uid, pendingInvite);
          localStorage.removeItem('pendingInvite');
          window.history.replaceState({}, '', window.location.pathname);
          currentProfile = (await loadUserProfile(firebaseUser.uid)) ?? currentProfile;
        } catch (error) {
          console.error('Failed to join invited group:', error);
        }
      }

      setUser(firebaseUser);
      setProfile(currentProfile);
      setIsAuthenticated(true);
      setMealData(await loadMealData(firebaseUser.uid, currentProfile.groupId));
      setView('menu');
    } catch (error) {
      console.error('Failed to restore auth state:', error);
      setUser(firebaseUser);
      setIsAuthenticated(true);
      setView('menu');
    } finally {
      setIsInitializing(false);
    }
  };

  useEffect(() => {
    if (user && isAuthenticated) {
      void (async () => {
        const nextMealData = await loadMealData(user.uid, profile?.groupId ?? null);
        setMealData(nextMealData);
      })();
    }
  }, [isAuthenticated, profile?.groupId, user]);

  useEffect(() => {
    localStorage.setItem('mealPlanner_mealData', JSON.stringify(mealData));
  }, [mealData]);

  useEffect(() => {
    localStorage.setItem('mealPlanner_groceryNotes', groceryNotes);
  }, [groceryNotes]);

  useEffect(() => {
    localStorage.setItem('mealPlanner_darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('currentView', view);
  }, [view]);

  const handleSignOut = async () => {
    await logout();
    localStorage.removeItem('pendingInvite');
    setUser(null);
    setProfile(null);
    setIsAuthenticated(false);
    setView('landing');
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setView('day');
  };

  const handleUpdateMeal = (date: Date, mealPlan: MealPlan) => {
    const dateKey = date.toISOString().split('T')[0];
    setMealData((prev) => {
      const nextMealData = {
        ...prev,
        [dateKey]: mealPlan,
      };

      if (user) {
        void saveMealData(user.uid, profile?.groupId ?? null, nextMealData);
      }

      return nextMealData;
    });
  };

  const getMealPlan = (date: Date): MealPlan => {
    const dateKey = date.toISOString().split('T')[0];
    return mealData[dateKey] || {
      breakfast: '',
      lunch: '',
      dinner: '',
      snacks: '',
    };
  };

  const handleMenuNavigate = (screen: 'monthView' | 'weekView' | 'groceryList' | 'groupManagement') => {
    if (screen === 'groupManagement') {
      if (!isAuthenticated) {
        alert('This feature requires you to log in. Please sign in to create and manage family groups.');
        return;
      }
      setView('groupManagement');
      return;
    }

    if (screen === 'monthView') {
      setView('month');
      return;
    }

    if (screen === 'weekView') {
      setView('week');
      return;
    }

    if (screen === 'groceryList') {
      if (isAuthenticated) {
        setShowGroceryList(true);
      } else {
        setShowGroceryNotes(true);
      }
    }
  };

  if (isInitializing) {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'landing') {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-lg transition-colors active:scale-95"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="size-6 text-yellow-400" />
            ) : (
              <Moon className="size-6 text-gray-600" />
            )}
          </button>
        </div>
        <LandingScreen
          onNavigate={() => {}}
          onGoToAuth={() => {
            if (isFirebaseConfigured) {
              setView('auth');
            } else {
              alert('Firebase is not configured yet. The app will run in local mode until you add the VITE_FIREBASE_* values.');
            }
          }}
          onContinueWithoutAccount={() => {
            localStorage.setItem('localMode', 'true');
            setView('menu');
          }}
          darkMode={darkMode}
        />
      </div>
    );
  }

  if (view === 'auth') {
    if (!isFirebaseConfigured) {
      return (
        <div className={darkMode ? 'dark' : ''}>
          <LandingScreen
            onNavigate={() => {}}
            onGoToAuth={() => {}}
            onContinueWithoutAccount={() => setView('menu')}
            darkMode={darkMode}
            debugMessage={authDebugMessage}
          />
        </div>
      );
    }

    return (
      <div className={darkMode ? 'dark' : ''}>
        <AuthScreen
          onBack={() => setView('landing')}
          darkMode={darkMode}
          onAuthenticated={handleAuthenticatedUser}
        />
      </div>
    );
  }

  if (view === 'menu') {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <MainMenu
          onNavigate={handleMenuNavigate}
          isAuthenticated={isAuthenticated}
          darkMode={darkMode}
          user={user}
          profile={profile}
          onGoToAuth={() => setView('auth')}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />

        {showGroceryNotes && (
          <GroceryNotes
            notes={groceryNotes}
            onNotesChange={setGroceryNotes}
            onClose={() => setShowGroceryNotes(false)}
          />
        )}

        {showGroceryList && isAuthenticated && (
          <GroceryList
            onClose={() => setShowGroceryList(false)}
            userId={user?.uid ?? ''}
            groupId={profile?.groupId ?? null}
            onOpenFamilyGroup={() => {
              setShowGroceryList(false);
              setShowFamilyGroup(true);
            }}
          />
        )}

        {showFamilyGroup && isAuthenticated && (
          <FamilyGroupModal
            onClose={() => setShowFamilyGroup(false)}
            user={user}
            profile={profile}
            onProfileChange={setProfile}
          />
        )}
      </div>
    );
  }

  if (view === 'groupManagement' && isAuthenticated) {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <GroupManagement
          onClose={() => setView('menu')}
          darkMode={darkMode}
          user={user}
          profile={profile}
          onProfileChange={setProfile}
          onSignOut={handleSignOut}
        />
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-10">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setView('menu')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors active:scale-95"
                aria-label="Home"
              >
                <Home className="size-6 text-gray-600 dark:text-gray-300" />
              </button>
              <h1 className="text-center flex-1 dark:text-white">Meal Planner</h1>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors active:scale-95"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="size-6 text-yellow-400" />
                ) : (
                  <Moon className="size-6 text-gray-600" />
                )}
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setView('month')}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  view === 'month'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Calendar className="size-5" />
                Monthly
              </button>
              <button
                onClick={() => setView('week')}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  view === 'week'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <List className="size-5" />
                Weekly
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 py-4">
          {view === 'month' && (
            <MonthView
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              onDayClick={handleDayClick}
              mealData={mealData}
            />
          )}
          {view === 'week' && (
            <WeekView
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              mealData={mealData}
              onUpdateMeal={handleUpdateMeal}
            />
          )}
          {view === 'day' && (
            <DayView
              selectedDate={selectedDate}
              mealPlan={getMealPlan(selectedDate)}
              onUpdateMeal={(mealPlan) => handleUpdateMeal(selectedDate, mealPlan)}
              onBack={() => setView('month')}
            />
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-50 dark:from-gray-900 via-gray-50 dark:via-gray-900 to-transparent pointer-events-none max-w-md mx-auto">
          <button
            onClick={() => (isAuthenticated ? setShowGroceryList(true) : setShowGroceryNotes(true))}
            className="w-full bg-green-500 dark:bg-green-600 text-white py-4 rounded-xl shadow-lg font-medium hover:bg-green-600 dark:hover:bg-green-700 transition-colors pointer-events-auto active:scale-95"
          >
            Grocery List
          </button>
        </div>

        {showGroceryNotes && (
          <GroceryNotes
            notes={groceryNotes}
            onNotesChange={setGroceryNotes}
            onClose={() => setShowGroceryNotes(false)}
          />
        )}

        {showGroceryList && isAuthenticated && (
          <GroceryList
            onClose={() => setShowGroceryList(false)}
            userId={user?.uid ?? ''}
            groupId={profile?.groupId ?? null}
            onOpenFamilyGroup={() => {
              setShowGroceryList(false);
              setShowFamilyGroup(true);
            }}
          />
        )}

        {showFamilyGroup && isAuthenticated && (
          <FamilyGroupModal
            onClose={() => setShowFamilyGroup(false)}
            user={user}
            profile={profile}
            onProfileChange={setProfile}
          />
        )}
      </div>
    </div>
  );
}
