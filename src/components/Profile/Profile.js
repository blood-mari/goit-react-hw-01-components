import PropTypes from 'prop-types';
import defaultImg from 'images/default-img.png'
import StatsList from './StatsList';
import s from './Profile.module.css'

function Profile({ name, tag, location, avatar, stats }) {

  return (
    <div className={s.container}>
      <div className={s.profile}>
        <div className={s.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={s.avatar}
          />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>{`@${tag}`}</p>
          <p className={s.location}>{location}</p>
        </div>
        <StatsList list={stats} />

    </div>
    </div>);


}

Profile.defaultProps = {
  avatar: defaultImg,
  location: 'No location',
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
}

export default Profile;
