import css from './Profile.module.css';
import PropTypes from 'prop-types';
import {BsFillPeopleFill, BsEyeFill } from "react-icons/bs";
import {AiTwotoneLike} from "react-icons/ai";

export const Profile = ({avatar, username, tag, location, stats}) => {
    return (
        <div className={css.profile}>
        <div className={css.description}>
        <img
            src= {avatar}
            alt="User avatar"
            className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
        <li>
        <BsFillPeopleFill className={css.label}/>
            <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
        <BsEyeFill className={css.label}/>
            <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
            <AiTwotoneLike className={css.label}/>
        <span className={css.quantity}>{stats.likes}</span>
        </li>
        </ul>
    </div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats:PropTypes.objectOf(PropTypes.shape).isRequired,
}