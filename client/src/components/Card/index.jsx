import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Target, Award } from 'lucide-react';
import PropTypes from 'prop-types';
import InfoRow from './InfoRow';
import RankCard from './RankCard';

const Card = ({
  serialNumber,
  name,
  branch,
  batch,
  rollNumber,
  cgpa,
  yrank,
  brank,
  crank,
}) => {
  return (
    <div className='group relative bg-white dark:bg-chalk-800 border border-gray-200 dark:border-chalk-500 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-chalk-400/10 transition-all duration-300 hover:-translate-y-1'>
      {/* Serial Number Badge */}
      <div className='absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg'>
        {serialNumber}
      </div>

      <div className='p-6'>
        {/* Student Name */}
        <h3 className='text-xl font-bold text-gray-900 dark:text-chalk-100 mb-4 text-center'>
          {name}
        </h3>

        {/* Basic Info Grid */}
        <div className='space-y-3 mb-6'>
          <InfoRow label='Branch' value={branch} />
          <InfoRow label='Batch' value={batch} />
          <InfoRow label='Roll Number' value={rollNumber} />
          <InfoRow label='CGPA' value={cgpa} highlight />
        </div>

        {/* Rankings */}
        <div className='grid grid-cols-3 gap-2 mb-6'>
          <RankCard rank={yrank} label='Year' icon={Trophy} color='emerald' />
          <RankCard rank={brank} label='Branch' icon={Target} color='blue' />
          <RankCard rank={crank} label='Class' icon={Award} color='purple' />
        </div>

        {/* More Details Button */}
        <Link to={`/s/${rollNumber}`}>
          <button className='w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg'>
            <span>View Details</span>
            <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  serialNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  batch: PropTypes.string.isRequired,
  rollNumber: PropTypes.string.isRequired,
  cgpa: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  yrank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  brank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  crank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
