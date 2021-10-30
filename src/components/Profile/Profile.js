import PropTypes from 'prop-types';
import s from './Profile.module.scss';

export function Profile({ name, tag, location, avatar, stats }) {
  return (
    <>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt={name} className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p className={s.text}>@{tag}</p>
          <p className={s.text}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.stats__item}>
            <span className={s.text}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li className={s.stats__item}>
            <span className={s.text}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li className={s.stats__item}>
            <span className={s.text}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

Profile.defaultProps = {
  name: 'User',
  avatar: '../../logo.svg',
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
