import PropTypes from 'prop-types';
import s from './FriendsList.module.scss';
import { FriendListItem } from './FriendListItem';

export function FriendsList({ friends }) {
  return (
    <>
      <ul className={s.friend__list}>
        {friends.map(friend => {
          return (
            <li className={s.item} key={friend.id}>
              <FriendListItem
                id={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

FriendsList.prototypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};
