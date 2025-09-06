import PropTypes from 'prop-types';

const StatCard = ({ title, value, color, icon }) => {
  const colorClasses = {
    blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
    green:
      'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
    purple:
      'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
    orange:
      'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20',
  };

  return (
    <div
      className={`p-4 rounded-xl border ${colorClasses[color]} transition-colors duration-200`}
    >
      <div className='flex items-center justify-between mb-2'>
        <span className='text-2xl'>{icon}</span>
      </div>
      <p className='text-2xl font-bold text-gray-900 dark:text-white'>
        {value}
      </p>
      <p className='text-sm text-gray-600 dark:text-gray-400'>{title}</p>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default StatCard;
