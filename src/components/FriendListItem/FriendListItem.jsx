import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const statusClassName = clsx(isOnline ? [css.online] : [css.offline]);
    return (
        <>
            <img src={avatar}
                alt="Avatar"
                width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={statusClassName}>{isOnline ? 'Online' : 'Offline'}</p>
        </>
    )
}