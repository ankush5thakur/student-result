import { Link } from 'react-router-dom';
import { Sun, Moon, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className='bg-white dark:bg-chalk-850 shadow-sm border-b border-gray-200 dark:border-chalk-500 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Link
            to='/'
            className='flex items-center space-x-3 hover:opacity-80 transition-opacity'
          >
            <div className='w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center'>
              <GraduationCap className='w-6 h-6 text-white' />
            </div>
            <div>
              <h1 className='text-xl font-bold text-gray-900 dark:text-chalk-100'>
                NITH Results
              </h1>
              <p className='text-xs text-gray-500 dark:text-chalk-300'>
                Academic Portal
              </p>
            </div>
          </Link>

          <button
            onClick={toggleTheme}
            className='p-2 rounded-lg bg-gray-100 dark:bg-chalk-700 hover:bg-gray-200 dark:hover:bg-chalk-600 transition-colors duration-200'
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <Sun className='w-5 h-5 text-accent-yellow' />
            ) : (
              <Moon className='w-5 h-5 text-gray-600' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
