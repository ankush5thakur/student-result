import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Functionality from '../components/Functionality';
import Pagination from '../components/Pagination';
import Error from '../components/Error';
import GhostLoader from '../components/GhostLoader';
import CardsGhostLoader from '../components/CardsGhostLoader';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [branchFilter, setBranchFilter] = useState('');
  const [batchFilter, setBatchFilter] = useState('');
  const [sortOption, setSortOption] = useState('cgpi-desc');
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const [students, setStudents] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
    resultsPerPage: 9,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const firstLoadRef = useRef(true);
  const inFlightRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Unified data fetch effect – fires on relevant dependency changes
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      // Prevent overlapping requests
      if (inFlightRef.current) return;
      inFlightRef.current = true;

      const isInitial = firstLoadRef.current;
      if (isInitial) {
        setIsLoading(true);
      } else {
        setIsSearching(true);
      }
      setError('');
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/students`,
          {
            params: {
              page: pagination.currentPage,
              limit: pagination.resultsPerPage,
              search: debouncedSearchTerm,
              branch: branchFilter,
              batch: batchFilter,
              sortBy: sortOption,
            },
          }
        );

        if (cancelled) return;

        setStudents(data.students || []);

        // Merge pagination safely (backend key fallbacks handled)
        const p = data.pagination || {};
        setPagination((prev) => {
          const currentPage = p.currentPage ?? p.page ?? prev.currentPage;
          const totalPages = p.totalPages ?? p.pages ?? prev.totalPages;
          const totalResults =
            p.totalResults ??
            p.total ??
            prev.totalResults ??
            (data.students ? data.students.length : 0);
          const resultsPerPage =
            p.resultsPerPage ?? p.limit ?? prev.resultsPerPage;
          return {
            ...prev,
            currentPage,
            totalPages,
            totalResults,
            resultsPerPage,
            hasNextPage:
              p.hasNextPage !== undefined
                ? p.hasNextPage
                : currentPage < totalPages,
            hasPrevPage:
              p.hasPrevPage !== undefined ? p.hasPrevPage : currentPage > 1,
          };
        });
      } catch (err) {
        if (!cancelled) {
          console.error('Failed to fetch students:', err);
          setError('Failed to load student data. Please try again later.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
          setIsSearching(false);
          firstLoadRef.current = false;
        }
        inFlightRef.current = false;
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [
    pagination.currentPage,
    pagination.resultsPerPage,
    debouncedSearchTerm,
    branchFilter,
    batchFilter,
    sortOption,
  ]);

  // Reset to first page when query-driving inputs change
  useEffect(() => {
    setPagination((prev) => {
      if (prev.currentPage === 1) return prev;
      return { ...prev, currentPage: 1 };
    });
  }, [debouncedSearchTerm, branchFilter, batchFilter, sortOption]);

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilterBranch = (branch) => setBranchFilter(branch);
  const handleFilterBatch = (batch) => setBatchFilter(batch);
  const handleSort = (sort) => setSortOption(sort);

  const handlePageChange = (newPage) => {
    if (newPage === pagination.currentPage || newPage < 1) return;
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
  };

  const handleLimitChange = (newLimit) => {
    if (newLimit === pagination.resultsPerPage) return;
    setPagination((prev) => ({
      ...prev,
      resultsPerPage: newLimit,
      currentPage: 1,
    }));
  };

  if (isLoading && students.length === 0) {
    return (
      <div className='min-h-screen bg-gray-50 dark:bg-chalk-900 transition-colors duration-300'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-chalk-100 mb-4'>
              Student Results
            </h1>
            <p className='text-lg text-gray-600 dark:text-chalk-300 max-w-2xl mx-auto'>
              Explore academic performance data with comprehensive search and
              filter options
            </p>
          </div>

          <div className='mb-8'>
            <div className='bg-white dark:bg-chalk-800 rounded-2xl shadow-sm border border-gray-200 dark:border-chalk-500 p-6 animate-pulse'>
              <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-1'>
                  <div className='h-12 bg-gray-300 dark:bg-chalk-600 rounded-lg'></div>
                </div>
                <div className='flex gap-2'>
                  <div className='h-12 w-32 bg-gray-300 dark:bg-chalk-600 rounded-lg'></div>
                  <div className='h-12 w-32 bg-gray-300 dark:bg-chalk-600 rounded-lg'></div>
                </div>
              </div>
            </div>
          </div>

          <GhostLoader count={5} />
        </div>
      </div>
    );
  }

  if (error && students.length === 0) {
    return <Error message={error} showRetry={true} />;
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-chalk-900 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-chalk-100 mb-4'>
            Student Results
          </h1>
          <p className='text-lg text-gray-600 dark:text-chalk-300 max-w-2xl mx-auto'>
            Explore academic performance data with comprehensive search and
            filter options
          </p>
        </div>

        <div className='mb-8'>
          <Functionality
            searchValue={searchTerm}
            onSearch={handleSearch}
            onFilterBranch={handleFilterBranch}
            onFilterBatch={handleFilterBatch}
            onSort={handleSort}
          />
        </div>

        <div className='mb-6 flex justify-between items-center'>
          <p className='text-sm text-gray-600 dark:text-chalk-300'>
            Showing{' '}
            {students.length > 0
              ? (pagination.currentPage - 1) * pagination.resultsPerPage + 1
              : 0}
            -
            {Math.min(
              pagination.currentPage * pagination.resultsPerPage,
              pagination.totalResults
            )}{' '}
            of {pagination.totalResults} results
            {searchTerm && (
              <span className='ml-2 text-primary-600 dark:text-accent-blue'>
                for &quot;{searchTerm}&quot;
              </span>
            )}
          </p>
          {isSearching && (
            <div className='flex items-center space-x-2'>
              <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600'></div>
              <span className='text-sm text-gray-500 dark:text-chalk-400'>
                Searching...
              </span>
            </div>
          )}
        </div>

        {isSearching ? (
          <CardsGhostLoader count={pagination.resultsPerPage} />
        ) : students.length > 0 ? (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
              {students.map((student, index) => (
                <div
                  key={student._id}
                  className='animate-fade-in'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card
                    serialNumber={student.serialNumber}
                    name={student.name}
                    branch={student.branch}
                    batch={student.batch}
                    rollNumber={student.roll_number}
                    cgpa={student.cgpi}
                    yrank={student.year_rank}
                    brank={student.branch_rank}
                    crank={student.class_rank}
                  />
                </div>
              ))}
            </div>

            <Pagination
              currentPage={pagination.currentPage}
              totalResults={pagination.totalResults}
              resultsPerPage={pagination.resultsPerPage}
              onPageChange={handlePageChange}
              onLimitChange={handleLimitChange}
            />
          </>
        ) : (
          <div className='text-center py-16'>
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-chalk-100 mb-2'>
              No results found
            </h3>
            <p className='text-gray-600 dark:text-chalk-300'>
              {searchTerm || branchFilter || batchFilter
                ? 'Try adjusting your search criteria or filters'
                : 'Start by searching for students or applying filters'}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className='mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200'
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
