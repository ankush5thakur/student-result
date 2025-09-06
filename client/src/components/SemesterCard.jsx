import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Award, Target } from 'lucide-react';
import PropTypes from 'prop-types';

const SemesterCard = ({ semester, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0); // First semester expanded by default

  const getGradeColor = (grade) => {
    const gradeColors = {
      'A+': 'text-green-600 dark:text-accent-green bg-green-50 dark:bg-chalk-750 dark:border dark:border-chalk-400',
      A: 'text-green-600 dark:text-accent-green bg-green-50 dark:bg-chalk-750 dark:border dark:border-chalk-400',
      'B+': 'text-blue-600 dark:text-accent-blue bg-blue-50 dark:bg-chalk-750 dark:border dark:border-chalk-400',
      B: 'text-blue-600 dark:text-accent-blue bg-blue-50 dark:bg-chalk-750 dark:border dark:border-chalk-400',
      'C+': 'text-yellow-600 dark:text-accent-yellow bg-yellow-50 dark:bg-chalk-750 dark:border dark:border-chalk-400',
      C: 'text-yellow-600 dark:text-accent-yellow bg-yellow-50 dark:bg-chalk-750 dark:border dark:border-chalk-400',
      D: 'text-orange-600 dark:text-accent-orange bg-orange-50 dark:bg-chalk-750 dark:border dark:border-chalk-400',
      F: 'text-red-600 dark:text-accent-red bg-red-50 dark:bg-chalk-750 dark:border dark:border-chalk-400',
    };
    return (
      gradeColors[grade] ||
      'text-gray-600 dark:text-chalk-300 bg-gray-50 dark:bg-chalk-750 dark:border dark:border-chalk-400'
    );
  };

  const subjects = semester.subject_results || [];
  const totalSubjects = subjects.length;
  const avgGrade =
    subjects.length > 0
      ? (
          subjects.reduce(
            (sum, subject) => sum + (parseFloat(subject.sub_point) || 0),
            0
          ) / subjects.length
        ).toFixed(2)
      : '0.00';

  return (
    <div className='overflow-hidden'>
      {/* Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className='flex items-center justify-between p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-chalk-800 dark:to-chalk-750 border-b border-gray-200 dark:border-chalk-500 cursor-pointer hover:from-primary-100 hover:to-blue-100 dark:hover:from-chalk-750 dark:hover:to-chalk-700 transition-all duration-200'
      >
        <div className='flex items-center space-x-4'>
          <div className='w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center'>
            <BookOpen className='w-6 h-6 text-white' />
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-chalk-100'>
              Semester{' '}
              {semester.semester_number || semester.semester || index + 1}
            </h3>
            <p className='text-sm text-gray-600 dark:text-chalk-300'>
              {totalSubjects} subjects • SGPI: {semester.sgpi}
            </p>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          {/* CGPI Badge */}
          <div className='flex items-center space-x-2'>
            <Award className='w-5 h-5 text-primary-600 dark:text-accent-blue' />
            <span className='text-sm font-medium text-gray-600 dark:text-chalk-300'>
              CGPI:
            </span>
            <span className='px-3 py-1 bg-primary-600 dark:bg-accent-blue text-white rounded-full text-sm font-bold'>
              {semester.cgpi}
            </span>
          </div>

          {/* SGPI Badge */}
          <div className='flex items-center space-x-2'>
            <Target className='w-5 h-5 text-green-600 dark:text-accent-green' />
            <span className='text-sm font-medium text-gray-600 dark:text-chalk-300'>
              SGPI:
            </span>
            <span className='px-3 py-1 bg-green-600 dark:bg-accent-green text-white rounded-full text-sm font-bold'>
              {semester.sgpi}
            </span>
          </div>

          {/* Expand/Collapse Button */}
          <button className='p-2 rounded-full bg-white dark:bg-gray-600 shadow-sm hover:shadow-md transition-all duration-200'>
            {isExpanded ? (
              <ChevronUp className='w-5 h-5 text-gray-600 dark:text-gray-300' />
            ) : (
              <ChevronDown className='w-5 h-5 text-gray-600 dark:text-gray-300' />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'max-h-full opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className='p-6'>
          {/* Summary Stats */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center'>
              <p className='text-2xl font-bold text-gray-900 dark:text-white'>
                {totalSubjects}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Total Subjects
              </p>
            </div>
            <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center'>
              <p className='text-2xl font-bold text-gray-900 dark:text-white'>
                {avgGrade}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Average Points
              </p>
            </div>
            <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center'>
              <p className='text-2xl font-bold text-gray-900 dark:text-white'>
                {semester.sgpi}
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'>SGPI</p>
            </div>
          </div>

          {/* Subjects Table */}
          <div className='overflow-x-auto'>
            <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4'>
              <div className='grid grid-cols-4 gap-4 text-sm font-semibold text-gray-600 dark:text-gray-300'>
                <div>Subject Code</div>
                <div>Subject Name</div>
                <div className='text-center'>Points</div>
                <div className='text-center'>Grade</div>
              </div>
            </div>

            <div className='space-y-2'>
              {subjects.map((subject, subIndex) => (
                <div
                  key={subIndex}
                  className='grid grid-cols-4 gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-sm transition-all duration-200'
                >
                  <div className='font-medium text-gray-900 dark:text-white'>
                    {subject.subject_code}
                  </div>
                  <div className='text-gray-700 dark:text-gray-300'>
                    {subject.subject_name}
                  </div>
                  <div className='text-center font-semibold text-gray-900 dark:text-white'>
                    {subject.sub_point}
                  </div>
                  <div className='text-center'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(
                        subject.grade
                      )}`}
                    >
                      {subject.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SemesterCard.propTypes = {
  semester: PropTypes.shape({
    semester_number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    semester: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sgpi: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    cgpi: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    subject_results: PropTypes.arrayOf(
      PropTypes.shape({
        subject_name: PropTypes.string.isRequired,
        credits: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        grade: PropTypes.string.isRequired,
        marks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SemesterCard;
