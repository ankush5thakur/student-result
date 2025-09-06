import { useState } from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';
import PropTypes from 'prop-types';

const Functionality = ({
  onSearch,
  onFilterBranch,
  onFilterBatch,
  onSort,
  searchValue = '',
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    onSearch(value);

    if (value !== searchValue) {
      setIsSearching(true);
      setTimeout(() => setIsSearching(false), 500);
    }
  };

  return (
    <div className='bg-white dark:bg-chalk-800 rounded-2xl shadow-sm border border-gray-200 dark:border-chalk-500 p-6 transition-colors duration-300'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-1'>
          <div className='relative'>
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                isSearching
                  ? 'text-primary-600 dark:text-accent-blue animate-pulse'
                  : 'text-gray-400 dark:text-chalk-400'
              }`}
            />
            <input
              type='text'
              value={searchValue}
              placeholder='Search by name or roll number...'
              onChange={handleSearchChange}
              className='w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-chalk-700 border border-gray-200 dark:border-chalk-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-accent-blue dark:focus:border-accent-blue text-gray-900 dark:text-chalk-200 placeholder-gray-500 dark:placeholder-chalk-400 transition-colors duration-200'
            />
            {searchValue && (
              <button
                onClick={() => onSearch('')}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-chalk-400 hover:text-gray-600 dark:hover:text-chalk-200 transition-colors duration-200'
                title='Clear search'
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className='lg:hidden flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-chalk-700 text-gray-700 dark:text-chalk-200 rounded-lg hover:bg-gray-200 dark:hover:bg-chalk-600 transition-colors duration-200'
        >
          <Filter className='w-5 h-5 mr-2' />
          Filters
        </button>

        {/* Filters */}
        <div
          className={`${
            showFilters ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row gap-4 lg:gap-3`}
        >
          {/* Branch Filter */}
          <select
            onChange={(e) => onFilterBranch(e.target.value)}
            className='px-4 py-3 bg-gray-50 dark:bg-chalk-700 border border-gray-200 dark:border-chalk-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-accent-blue dark:focus:border-accent-blue text-gray-900 dark:text-chalk-200 transition-colors duration-200 min-w-0 lg:min-w-[160px]'
          >
            <option value=''>All Branches</option>
            <option value='Computer Science'>Computer Science</option>
            <option value='Electronics'>Electronics</option>
            <option value='Electrical'>Electrical</option>
            <option value='Mechanical'>Mechanical</option>
            <option value='Chemical'>Chemical</option>
            <option value='Civil'>Civil</option>
            <option value='Material'>Material</option>
            <option value='Engineering Physics'>Engineering Physics</option>
            <option value='Architecture'>Architecture</option>
            <option value='Computer Science Dual'>Computer Science Dual</option>
            <option value='Electronics Dual'>Electronics Dual</option>
          </select>

          {/* Batch Filter */}
          <select
            onChange={(e) => onFilterBatch(e.target.value)}
            className='px-4 py-3 bg-gray-50 dark:bg-chalk-700 border border-gray-200 dark:border-chalk-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-accent-blue dark:focus:border-accent-blue text-gray-900 dark:text-chalk-200 transition-colors duration-200 min-w-0 lg:min-w-[120px]'
          >
            <option value=''>All Batches</option>
            <option value='2027'>2027</option>
            <option value='2026'>2026</option>
            <option value='2025'>2025</option>
            <option value='2024'>2024</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
          </select>

          {/* Sort Options */}
          <div className='relative'>
            <SortAsc className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-chalk-400 w-5 h-5' />
            <select
              onChange={(e) => onSort(e.target.value)}
              className='pl-10 pr-4 py-3 bg-gray-50 dark:bg-chalk-700 border border-gray-200 dark:border-chalk-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-accent-blue dark:focus:border-accent-blue text-gray-900 dark:text-chalk-200 transition-colors duration-200 min-w-0 lg:min-w-[180px] appearance-none'
            >
              <option value='cgpi-desc'>CGPA: High to Low</option>
              <option value='cgpi-asc'>CGPA: Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

Functionality.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilterBranch: PropTypes.func.isRequired,
  onFilterBatch: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
};

export default Functionality;
