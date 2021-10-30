import s from './FriendsList.module.scss';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={s.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendListItem.defaultProps = {
  name: 'User',
  avatar: '/public/logo192.png',
};
