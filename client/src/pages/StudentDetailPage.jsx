import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  User,
  GraduationCap,
  Calendar,
  Building,
} from 'lucide-react';
import axios from 'axios';
import SemesterCard from '../components/SemesterCard';
import PerformanceCharts from '../components/PerformanceCharts';
import StudentDetailGhostLoader from '../components/StudentDetailGhostLoader';
import Error from '../components/Error';

const StudentDetailPage = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user`,
          {
            headers: { Roll_Number: id },
          }
        );

        if (res.data) {
          setStudentData(res.data);
        } else {
          setError('Student not found');
        }
      } catch (err) {
        setError('Failed to load student data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <StudentDetailGhostLoader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!studentData) {
    return <Error message='Student not found' />;
  }

  const {
    name,
    roll_number,
    cgpi,
    batch,
    branch,
    semester_results = [],
  } = studentData;

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-chalk-900 transition-colors duration-300'>
      <div className='bg-white dark:bg-chalk-850 shadow-sm border-b border-gray-200 dark:border-chalk-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <button
            onClick={() => navigate('/')}
            className='inline-flex items-center text-primary-600 dark:text-accent-blue hover:text-primary-800 dark:hover:text-accent-blue/80 mb-6 transition-colors duration-200'
          >
            <ChevronLeft className='w-5 h-5 mr-1' />
            Back to Results
          </button>

          <div className='bg-gradient-to-r from-primary-50 to-blue-50 dark:from-chalk-800 dark:to-chalk-750 rounded-2xl p-6 mb-6 dark:border dark:border-chalk-500'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
              <div className='flex items-center space-x-4 mb-4 md:mb-0'>
                <div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center'>
                  <User className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h1 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-chalk-100'>
                    {name}
                  </h1>
                  <p className='text-lg text-gray-600 dark:text-chalk-300'>
                    {roll_number}
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='text-center'>
                  <div className='flex items-center justify-center mb-1'>
                    <GraduationCap className='w-5 h-5 text-primary-600 dark:text-accent-blue mr-1' />
                  </div>
                  <p className='text-2xl font-bold text-gray-900 dark:text-chalk-100'>
                    {cgpi}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-chalk-300'>
                    CGPI
                  </p>
                </div>
                <div className='text-center'>
                  <div className='flex items-center justify-center mb-1'>
                    <Building className='w-5 h-5 text-primary-600 dark:text-accent-blue mr-1' />
                  </div>
                  <p className='text-lg font-semibold text-gray-900 dark:text-chalk-100'>
                    {branch}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-chalk-300'>
                    Branch
                  </p>
                </div>
                <div className='text-center'>
                  <div className='flex items-center justify-center mb-1'>
                    <Calendar className='w-5 h-5 text-primary-600 dark:text-accent-blue mr-1' />
                  </div>
                  <p className='text-lg font-semibold text-gray-900 dark:text-chalk-100'>
                    {batch}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-chalk-300'>
                    Batch
                  </p>
                </div>
                <div className='text-center'>
                  <p className='text-lg font-semibold text-gray-900 dark:text-chalk-100'>
                    {semester_results.length}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-chalk-300'>
                    Semesters
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='border-b border-gray-200 dark:border-chalk-500'>
            <nav className='-mb-px flex space-x-8'>
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                  activeTab === 'overview'
                    ? 'border-primary-500 text-primary-600 dark:text-accent-blue'
                    : 'border-transparent text-gray-500 dark:text-chalk-300 hover:text-gray-700 dark:hover:text-chalk-200 hover:border-gray-300 dark:hover:border-chalk-400'
                }`}
              >
                Performance Overview
              </button>
              <button
                onClick={() => setActiveTab('semesters')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                  activeTab === 'semesters'
                    ? 'border-primary-500 text-primary-600 dark:text-accent-blue'
                    : 'border-transparent text-gray-500 dark:text-chalk-300 hover:text-gray-700 dark:hover:text-chalk-200 hover:border-gray-300 dark:hover:border-chalk-400'
                }`}
              >
                Detailed Results
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {activeTab === 'overview' && (
          <div className='bg-white dark:bg-chalk-800 rounded-2xl shadow-lg border border-gray-200 dark:border-chalk-500 overflow-hidden'>
            <PerformanceCharts data={semester_results} studentName={name} />
          </div>
        )}

        {activeTab === 'semesters' && (
          <div className='space-y-6'>
            {semester_results.map((sem, index) => (
              <div
                key={index}
                className='bg-white dark:bg-chalk-800 rounded-2xl shadow-lg border border-gray-200 dark:border-chalk-500 overflow-hidden animate-slide-up'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SemesterCard semester={sem} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetailPage;
