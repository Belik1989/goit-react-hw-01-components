import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transaction__history}>
<thead className={css.thead}>
    <tr className={css.table__head}>
    <th className={css.thead__type}>Type</th>
    <th className={css.thead__amount}>Amount</th>
    <th className={css.thead__currency}>Currency</th>
    </tr>
</thead>

<tbody>
    {items.map(({type, amount, currency, id}) => (
        <TransactionHistoryItem
        key = {id}
        type = {type}
        currency = {currency}
        amount = {amount}
        />
    ))}
</tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.string
}