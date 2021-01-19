import PropTypes from 'prop-types'
import FriendsListItem from './FriendsListItem'

function FriendsList({friends}) {
    return (
        <ul>
            {friends.map(({ id, avatar, name, isOnline }) =>
                (<FriendsListItem key={id} avatar={avatar} name={name} status={isOnline} />))}
        </ul>
    )
}

FriendsList.protoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )
}

export default FriendsList;