import { GraduationCap } from 'lucide-react';

const Loader = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-chalk-900 flex items-center justify-center transition-colors duration-300'>
      <div className='text-center'>
        <div className='relative mb-8'>
          <div className='w-20 h-20 border-4 border-gray-200 dark:border-chalk-600 rounded-full animate-spin'></div>
          <div className='absolute top-0 left-0 w-20 h-20 border-4 border-primary-600 dark:border-accent-blue border-t-transparent rounded-full animate-spin'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <GraduationCap className='w-8 h-8 text-primary-600 dark:text-accent-blue animate-bounce-subtle' />
          </div>
        </div>
        <h2 className='text-xl font-semibold text-gray-900 dark:text-chalk-100 mb-2'>
          Loading Student Data
        </h2>
        <p className='text-gray-600 dark:text-chalk-300'>
          Please wait while we fetch the information...
        </p>
        <div className='mt-4 flex justify-center space-x-1'>
          <div
            className='w-2 h-2 bg-primary-600 dark:bg-accent-blue rounded-full animate-bounce'
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className='w-2 h-2 bg-primary-600 dark:bg-accent-blue rounded-full animate-bounce'
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className='w-2 h-2 bg-primary-600 dark:bg-accent-blue rounded-full animate-bounce'
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
