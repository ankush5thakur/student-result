import PropTypes from 'prop-types';

const GhostLoader = ({ count = 9, showSearchFeedback = false }) => {
  return (
    <div className='space-y-6'>
      {/* Optional Search Feedback */}
      {showSearchFeedback && (
        <div className='bg-white dark:bg-chalk-800 rounded-2xl shadow-sm border border-gray-200 dark:border-chalk-500 p-6 animate-pulse'>
          <div className='h-4 w-48 bg-gray-300 dark:bg-chalk-600 rounded mb-2'></div>
          <div className='h-3 w-32 bg-gray-300 dark:bg-chalk-600 rounded'></div>
        </div>
      )}

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className='group relative bg-white dark:bg-chalk-800 border border-gray-200 dark:border-chalk-500 rounded-xl shadow-sm transition-all duration-300 animate-pulse'
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Serial Number Badge Skeleton */}
            <div className='absolute -top-2 -right-2 w-8 h-8 bg-gray-300 dark:bg-chalk-600 rounded-full'></div>

            <div className='p-6'>
              {/* Student Name Skeleton */}
              <div className='h-6 bg-gray-300 dark:bg-chalk-600 rounded mb-4 w-3/4 mx-auto'></div>

              {/* Basic Info Grid Skeleton */}
              <div className='space-y-3 mb-6'>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className='flex justify-between items-center'>
                    <div className='h-4 bg-gray-300 dark:bg-chalk-600 rounded w-1/3'></div>
                    <div className='h-4 bg-gray-300 dark:bg-chalk-600 rounded w-1/4'></div>
                  </div>
                ))}
              </div>

              {/* Rankings Skeleton */}
              <div className='grid grid-cols-3 gap-2 mb-6'>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className='p-3 rounded-lg border border-gray-200 dark:border-chalk-500 text-center bg-gray-50 dark:bg-chalk-750'
                  >
                    <div className='w-4 h-4 bg-gray-300 dark:bg-chalk-600 rounded mx-auto mb-1'></div>
                    <div className='h-5 bg-gray-300 dark:bg-chalk-600 rounded mb-1'></div>
                    <div className='h-3 bg-gray-300 dark:bg-chalk-600 rounded w-3/4 mx-auto'></div>
                  </div>
                ))}
              </div>

              {/* Button Skeleton */}
              <div className='w-full h-12 bg-gray-300 dark:bg-chalk-600 rounded-lg'></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className='bg-white dark:bg-chalk-800 rounded-2xl shadow-sm border border-gray-200 dark:border-chalk-500 p-6 animate-pulse'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
          {/* Page Navigation Skeleton */}
          <div className='flex items-center gap-2'>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className='w-10 h-10 bg-gray-300 dark:bg-chalk-600 rounded'
              ></div>
            ))}
          </div>

          {/* Results per page Skeleton */}
          <div className='flex items-center space-x-2'>
            <div className='h-4 w-20 bg-gray-300 dark:bg-chalk-600 rounded'></div>
            <div className='h-10 w-16 bg-gray-300 dark:bg-chalk-600 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

GhostLoader.propTypes = {
  count: PropTypes.number,
  showSearchFeedback: PropTypes.bool,
};

export default GhostLoader;
