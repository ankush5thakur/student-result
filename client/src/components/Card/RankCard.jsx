import PropTypes from 'prop-types';

const RankCard = ({ rank, label, icon: Icon, color }) => {
  const colorClasses = {
    emerald:
      'bg-emerald-50 dark:bg-chalk-750 text-emerald-700 dark:text-accent-green border-emerald-200 dark:border-chalk-400',
    blue: 'bg-blue-50 dark:bg-chalk-750 text-blue-700 dark:text-accent-blue border-blue-200 dark:border-chalk-400',
    purple:
      'bg-purple-50 dark:bg-chalk-750 text-purple-700 dark:text-accent-purple border-purple-200 dark:border-chalk-400',
  };

  return (
    <div
      className={`p-3 rounded-lg border text-center ${colorClasses[color]} transition-colors duration-200`}
    >
      <Icon className='w-4 h-4 mx-auto mb-1' />
      <p className='text-lg font-bold'>{rank}</p>
      <p className='text-xs font-medium'>{label}</p>
    </div>
  );
};

RankCard.propTypes = {
  rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.oneOf(['emerald', 'blue', 'purple']).isRequired,
};

export default RankCard;
