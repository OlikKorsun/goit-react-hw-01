import css from './Profile.module.css';

export default function Profile(
    {   name,
        tag,
        location,
        image,
        stats: {
            followers,
            views,
            likes } }
    ) {
    return (
        <div className={css.card}>
            <div className={css.userCard}>
                <img
                className={css.avatar}
                src={image}
                alt="User avatar"
                />
                <p className={css.userName}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.listItem}>
                <span className={css.listItemTitle}>Followers</span>
                <span className={css.listItemValue}>{followers}</span>
                </li>
                <li className={css.listItem}>
                <span className={css.listItemTitle}>Views</span>
                <span className={css.listItemValue}>{views}</span>
                </li>
                <li className={css.listItem}>
                <span className={css.listItemTitle}>Likes</span>
                <span className={css.listItemValue}>{likes}</span>
                </li>
            </ul>
    </div>
    )
}