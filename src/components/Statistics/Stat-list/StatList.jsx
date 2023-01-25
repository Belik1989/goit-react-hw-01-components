import css from './StatList.module.css'

export const StatList = ({stats}) => {
    return(
        <ul className={css.stats}>
            {stats.map(data =>(
            <li key = {data.id} className={css.item}>
        <span className={css.label}>{data.label}</span>
        <span className={css.percentage}>{data.percentage}%</span>
            </li>
            ))}
        </ul>
            
            );
};