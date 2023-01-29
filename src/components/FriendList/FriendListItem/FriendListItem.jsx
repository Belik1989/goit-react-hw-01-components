import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.list__item}>
      {isOnline ? (
        <BsFillMicFill className={css.status__online} />
      ) : (
        <BsFillMicMuteFill className={css.status__offline} />
      )}
      <img
        className={css.friend__avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friend__name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
