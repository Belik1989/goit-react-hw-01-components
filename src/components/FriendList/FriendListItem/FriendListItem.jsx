import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';


export const FriendListItem = ({avatar, name, isOnline}) => {
        return (
        <li className={css.list__item}>
            {isOnline ? (
        <span className={css.status__online}>Online</span>
    ) : (
        <span className={css.status__offline}>Offline</span>
    )}
        
        <img className={css.friend__avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.friend__name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    // id:PropTypes.string.isRequired
}