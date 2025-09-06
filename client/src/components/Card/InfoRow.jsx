import PropTypes from 'prop-types';

const InfoRow = ({ label, value, highlight = false }) => (
  <div className='flex justify-between items-center'>
    <span className='text-sm text-gray-600 dark:text-chalk-300 font-medium'>
      {label}:
    </span>
    <span
      className={`text-sm font-semibold ${
        highlight
          ? 'text-primary-600 dark:text-accent-blue'
          : 'text-gray-900 dark:text-chalk-200'
      }`}
    >
      {value}
    </span>
  </div>
);

InfoRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  highlight: PropTypes.bool,
};

export default InfoRow;
