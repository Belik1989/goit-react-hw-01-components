import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, children }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.shape).isRequired,
};
