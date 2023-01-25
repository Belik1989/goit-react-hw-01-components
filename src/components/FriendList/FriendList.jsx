import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';


export const FriendList = ({friends}) => {
    return(
    <ul className={css.friend__list}>
        {friends.map(({name, avatar, isOnline, id}) =>(
            <FriendListItem
            key = {id}
            className={css.list__item}
            avatar = {avatar}
            name = {name}
            isOnline={isOnline}
            />
        
    ))}
    </ul>
    )
};

FriendList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
            })
    )
}

