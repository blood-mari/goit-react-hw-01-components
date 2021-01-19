import PropTypes from 'prop-types'
import defaultImg from 'images/default-img.png'
import s from './FriendsListItem.module.css'

function FriendsListItem({avatar, status, name}) {
    return (
    <li className={s.item}>
            <span className={s.status} style={{backgroundColor : status ? 'green' : 'red'}}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
    </li>
    )
}

FriendsListItem.defaultProps = {
    avatar: defaultImg
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
}

export default FriendsListItem;
