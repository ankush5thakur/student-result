import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';

const Pagination = ({
  currentPage,
  totalResults,
  resultsPerPage,
  onPageChange,
  onLimitChange,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    // Calculate range
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className='bg-white dark:bg-chalk-800 rounded-2xl shadow-sm border border-gray-200 dark:border-chalk-500 p-6 transition-colors duration-300'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
        {/* Results Info */}
        <div className='text-sm text-gray-600 dark:text-chalk-300'>
          Showing {startResult}-{endResult} of {totalResults} results
        </div>

        {/* Page Navigation */}
        <div className='flex items-center space-x-2'>
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-500 dark:text-chalk-300 bg-gray-50 dark:bg-chalk-700 border border-gray-200 dark:border-chalk-500 rounded-lg hover:bg-gray-100 dark:hover:bg-chalk-600 hover:text-gray-700 dark:hover:text-chalk-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
          >
            <ChevronLeft className='w-4 h-4' />
            <span className='hidden sm:inline'>Previous</span>
          </button>

          {/* Page Numbers */}
          <div className='flex items-center space-x-1'>
            {getVisiblePages().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={page === '...'}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  page === currentPage
                    ? 'bg-primary-600 text-white shadow-sm'
                    : page === '...'
                    ? 'text-gray-400 dark:text-chalk-400 cursor-default'
                    : 'text-gray-500 dark:text-chalk-300 bg-gray-50 dark:bg-chalk-700 border border-gray-200 dark:border-chalk-500 hover:bg-gray-100 dark:hover:bg-chalk-600 hover:text-gray-700 dark:hover:text-chalk-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-500 dark:text-chalk-300 bg-gray-50 dark:bg-chalk-700 border border-gray-200 dark:border-chalk-500 rounded-lg hover:bg-gray-100 dark:hover:bg-chalk-600 hover:text-gray-700 dark:hover:text-chalk-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
          >
            <span className='hidden sm:inline'>Next</span>
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>

        {/* Items per page */}
        <div className='flex items-center space-x-2'>
          <span className='text-sm text-gray-600 dark:text-chalk-300'>
            Show:
          </span>
          <select
            value={resultsPerPage}
            onChange={(e) => onLimitChange(Number(e.target.value))}
            className='px-3 py-2 text-sm bg-gray-50 dark:bg-chalk-700 border border-gray-200 dark:border-chalk-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-accent-blue dark:focus:border-accent-blue text-gray-900 dark:text-chalk-200 transition-colors duration-200'
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onLimitChange: PropTypes.func.isRequired,
};

export default Pagination;
