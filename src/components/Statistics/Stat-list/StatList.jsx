import css from './StatList.module.css';
import PropTypes from 'prop-types';

export const StatList = ({ stats }) => {
  return (
    <ul className={css.stats}>
      {stats.map(data => (
        <li key={data.id} className={css.item}>
          <span className={css.label}>{data.label}</span>
          <span className={css.percentage}>{data.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
