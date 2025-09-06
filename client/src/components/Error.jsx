import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Error = ({ message = 'Something went wrong', showRetry = false }) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-chalk-900 flex items-center justify-center transition-colors duration-300'>
      <div className='text-center max-w-md mx-auto px-6'>
        <div className='mb-8'>
          <div className='w-20 h-20 bg-red-100 dark:bg-chalk-800 rounded-full flex items-center justify-center mx-auto mb-6 dark:border dark:border-chalk-500'>
            <AlertTriangle className='w-10 h-10 text-red-600 dark:text-accent-red' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-chalk-100 mb-4'>
            Oops! Something went wrong
          </h1>
          <p className='text-gray-600 dark:text-chalk-300 text-lg mb-8'>
            {message}
          </p>
        </div>

        <div className='space-y-4'>
          {showRetry && (
            <button
              onClick={handleRetry}
              className='w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200'
            >
              <RefreshCw className='w-5 h-5' />
              <span>Try Again</span>
            </button>
          )}

          <Link
            to='/'
            className='w-full flex items-center justify-center space-x-2 bg-gray-100 dark:bg-chalk-800 hover:bg-gray-200 dark:hover:bg-chalk-700 text-gray-700 dark:text-chalk-200 font-medium py-3 px-6 rounded-lg border dark:border-chalk-500 transition-colors duration-200'
          >
            <Home className='w-5 h-5' />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className='mt-8 text-sm text-gray-500 dark:text-chalk-400'>
          <p>If the problem persists, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
  showRetry: PropTypes.bool,
};

export default Error;
