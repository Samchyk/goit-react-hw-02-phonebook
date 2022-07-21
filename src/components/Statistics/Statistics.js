import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
   return (
      <div>
         <p className={s.text}>
            Good:<span>{good}</span>
         </p>
         <p className={s.text}>
            Neutral:<span>{neutral}</span>
         </p>
         <p className={s.text}>
            Bad:<span>{bad}</span>
         </p>
         <p className={s.text}>
            Total:<span>{total}</span>
         </p>
         <p className={s.text}>
            Positive feedback:
            <span>{percentage}%</span>
         </p>
      </div>
   );
};

Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   percentage: PropTypes.number.isRequired,
};

export default Statistics;
