const StudentDetailGhostLoader = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-chalk-900 transition-colors duration-300'>
      {/* Header Ghost */}
      <div className='bg-white dark:bg-chalk-850 shadow-sm border-b border-gray-200 dark:border-chalk-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          {/* Back Button Ghost */}
          <div className='h-6 w-32 bg-gray-300 dark:bg-chalk-600 rounded mb-6 animate-pulse'></div>

          {/* Student Info Header Ghost */}
          <div className='bg-gradient-to-r from-gray-100 to-gray-200 dark:from-chalk-800 dark:to-chalk-750 rounded-2xl p-6 mb-6 dark:border dark:border-chalk-500 animate-pulse'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
              <div className='flex items-center space-x-4 mb-4 md:mb-0'>
                <div className='w-16 h-16 bg-gray-300 dark:bg-chalk-600 rounded-full'></div>
                <div>
                  <div className='h-7 w-48 bg-gray-300 dark:bg-chalk-600 rounded mb-2'></div>
                  <div className='h-5 w-32 bg-gray-300 dark:bg-chalk-600 rounded'></div>
                </div>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className='text-center'>
                    <div className='h-4 w-16 bg-gray-300 dark:bg-chalk-600 rounded mb-1 mx-auto'></div>
                    <div className='h-6 w-12 bg-gray-300 dark:bg-chalk-600 rounded mx-auto'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Ghost */}
          <div className='mt-6 border-b border-gray-200 dark:border-chalk-500'>
            <nav className='-mb-px flex space-x-8'>
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className='h-8 w-20 bg-gray-300 dark:bg-chalk-600 rounded-t animate-pulse'
                ></div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content Ghost */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        {/* Charts Section Ghost */}
        <div className='mb-8'>
          <div className='bg-white dark:bg-chalk-800 rounded-2xl shadow-sm border border-gray-200 dark:border-chalk-500 p-6 animate-pulse'>
            <div className='h-6 w-64 bg-gray-300 dark:bg-chalk-600 rounded mb-4'></div>
            <div className='h-4 w-96 bg-gray-300 dark:bg-chalk-600 rounded mb-6'></div>

            {/* Stats Cards Ghost */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className='p-4 rounded-xl border border-gray-200 dark:border-chalk-500 bg-gray-50 dark:bg-chalk-750'
                >
                  <div className='h-4 w-16 bg-gray-300 dark:bg-chalk-600 rounded mb-2'></div>
                  <div className='h-6 w-12 bg-gray-300 dark:bg-chalk-600 rounded mb-1'></div>
                  <div className='h-3 w-20 bg-gray-300 dark:bg-chalk-600 rounded'></div>
                </div>
              ))}
            </div>

            {/* Chart Area Ghost */}
            <div className='h-96 bg-gray-100 dark:bg-chalk-700 rounded-xl'></div>
          </div>
        </div>

        {/* Semester Cards Ghost */}
        <div className='space-y-4'>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className='bg-white dark:bg-chalk-800 rounded-2xl shadow-sm border border-gray-200 dark:border-chalk-500 animate-pulse'
            >
              <div className='p-6'>
                {/* Semester Header Ghost */}
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-gray-300 dark:bg-chalk-600 rounded-full'></div>
                    <div>
                      <div className='h-5 w-24 bg-gray-300 dark:bg-chalk-600 rounded mb-1'></div>
                      <div className='h-4 w-32 bg-gray-300 dark:bg-chalk-600 rounded'></div>
                    </div>
                  </div>
                  <div className='h-6 w-6 bg-gray-300 dark:bg-chalk-600 rounded'></div>
                </div>

                {/* Stats Row Ghost */}
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  {Array.from({ length: 2 }).map((_, j) => (
                    <div key={j} className='flex items-center space-x-2'>
                      <div className='w-5 h-5 bg-gray-300 dark:bg-chalk-600 rounded'></div>
                      <div className='h-4 w-12 bg-gray-300 dark:bg-chalk-600 rounded'></div>
                      <div className='h-6 w-16 bg-gray-300 dark:bg-chalk-600 rounded-full'></div>
                    </div>
                  ))}
                </div>

                {/* Summary Ghost */}
                <div className='bg-gray-50 dark:bg-chalk-750 rounded-lg p-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <div className='h-4 w-16 bg-gray-300 dark:bg-chalk-600 rounded mb-1'></div>
                      <div className='h-6 w-12 bg-gray-300 dark:bg-chalk-600 rounded'></div>
                    </div>
                    <div className='h-8 w-20 bg-gray-300 dark:bg-chalk-600 rounded'></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDetailGhostLoader;
