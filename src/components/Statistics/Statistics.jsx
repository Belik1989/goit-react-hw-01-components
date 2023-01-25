import css from './Statistics.module.css';

export const Statistics =({title, children}) => {
    return(
        <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        {children}
        </section>
    );
};