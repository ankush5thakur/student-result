import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';
import PropTypes from 'prop-types';
import StatCard from './StatCard';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const PerformanceCharts = ({ data, studentName }) => {
  const [activeChart, setActiveChart] = useState('bar');

  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className='p-8 text-center'>
        <Activity className='w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4' />
        <p className='text-gray-500 dark:text-gray-400 text-lg'>
          No performance data available
        </p>
      </div>
    );
  }

  // Prepare data for charts
  const semesters = data.map(
    (item) => `Sem ${item.semester_number || item.semester}`
  );
  const cgpiData = data.map((item) => parseFloat(item.cgpi) || 0);
  const sgpiData = data.map((item) => parseFloat(item.sgpi) || 0);

  // Calculate statistics
  const avgCGPI = (
    cgpiData.reduce((a, b) => a + b, 0) / cgpiData.length
  ).toFixed(2);
  const avgSGPI = (
    sgpiData.reduce((a, b) => a + b, 0) / sgpiData.length
  ).toFixed(2);
  const maxCGPI = Math.max(...cgpiData).toFixed(2);
  const minCGPI = Math.min(...cgpiData).toFixed(2);

  // Chart configurations
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12, weight: '600' },
          color: document.documentElement.classList.contains('dark')
            ? '#D1D5DB'
            : '#374151',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        cornerRadius: 8,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: document.documentElement.classList.contains('dark')
            ? '#9CA3AF'
            : '#6B7280',
          font: { size: 11 },
        },
      },
      y: {
        beginAtZero: true,
        max: 10,
        grid: {
          color: document.documentElement.classList.contains('dark')
            ? 'rgba(75, 85, 99, 0.3)'
            : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          stepSize: 1,
          color: document.documentElement.classList.contains('dark')
            ? '#9CA3AF'
            : '#6B7280',
          font: { size: 11 },
        },
      },
    },
  };

  // Bar Chart Data
  const barData = {
    labels: semesters,
    datasets: [
      {
        label: 'CGPI',
        data: cgpiData,
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        borderRadius: 6,
      },
      {
        label: 'SGPI',
        data: sgpiData,
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: semesters,
    datasets: [
      {
        label: 'CGPI Trend',
        data: cgpiData,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: 'SGPI Trend',
        data: sgpiData,
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  // Performance Distribution (Doughnut)
  const gradeRanges = {
    'Excellent (9-10)': cgpiData.filter((score) => score >= 9).length,
    'Very Good (8-9)': cgpiData.filter((score) => score >= 8 && score < 9)
      .length,
    'Good (7-8)': cgpiData.filter((score) => score >= 7 && score < 8).length,
    'Average (6-7)': cgpiData.filter((score) => score >= 6 && score < 7).length,
    'Below Average (<6)': cgpiData.filter((score) => score < 6).length,
  };

  const doughnutData = {
    labels: Object.keys(gradeRanges).filter((key) => gradeRanges[key] > 0),
    datasets: [
      {
        data: Object.values(gradeRanges).filter((value) => value > 0),
        backgroundColor: [
          '#10B981', // Green
          '#3B82F6', // Blue
          '#F59E0B', // Yellow
          '#EF4444', // Red
          '#8B5CF6', // Purple
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartTypes = [
    { id: 'bar', label: 'Bar Chart', icon: BarChart3 },
    { id: 'line', label: 'Trend Line', icon: TrendingUp },
    { id: 'doughnut', label: 'Distribution', icon: PieChart },
  ];

  return (
    <div className='p-6'>
      {/* Header */}
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Academic Performance Analysis
        </h2>
        <p className='text-gray-600 dark:text-gray-400'>
          Comprehensive view of {studentName}&apos;s academic journey
        </p>
      </div>

      {/* Statistics Cards */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        <StatCard title='Average CGPI' value={avgCGPI} color='blue' icon='📊' />
        <StatCard
          title='Average SGPI'
          value={avgSGPI}
          color='green'
          icon='📈'
        />
        <StatCard
          title='Highest CGPI'
          value={maxCGPI}
          color='purple'
          icon='🏆'
        />
        <StatCard
          title='Lowest CGPI'
          value={minCGPI}
          color='orange'
          icon='📉'
        />
      </div>

      {/* Chart Type Selector */}
      <div className='flex flex-wrap gap-2 mb-6'>
        {chartTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveChart(type.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              activeChart === type.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <type.icon className='w-4 h-4' />
            <span>{type.label}</span>
          </button>
        ))}
      </div>

      {/* Chart Container */}
      <div className='bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6'>
        <div className='h-96'>
          {activeChart === 'bar' && (
            <Bar data={barData} options={commonOptions} />
          )}
          {activeChart === 'line' && (
            <Line data={lineData} options={commonOptions} />
          )}
          {activeChart === 'doughnut' && (
            <div className='flex items-center justify-center h-full'>
              <div className='w-80 h-80'>
                <Doughnut
                  data={doughnutData}
                  options={{
                    ...commonOptions,
                    scales: undefined,
                    plugins: {
                      ...commonOptions.plugins,
                      legend: {
                        position: 'bottom',
                        labels: {
                          padding: 20,
                          font: { size: 12 },
                          color: document.documentElement.classList.contains(
                            'dark'
                          )
                            ? '#D1D5DB'
                            : '#374151',
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PerformanceCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      semester: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      semester_number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      sgpi: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      cgpi: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      subject_results: PropTypes.arrayOf(
        PropTypes.shape({
          subject_name: PropTypes.string.isRequired,
          credits: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          grade: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  studentName: PropTypes.string.isRequired,
};

export default PerformanceCharts;
