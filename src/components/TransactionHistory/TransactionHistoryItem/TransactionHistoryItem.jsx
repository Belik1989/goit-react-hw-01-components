import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css'
export const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <tr>
    <td className = {css.type}>{type}</td>
    <td className = {css.amount}>{amount}</td>
    <td className = {css.currency}>{currency}</td>
        </tr>
    
    )
} 

TransactionHistoryItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.string
}
