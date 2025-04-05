import PropTypes from 'prop-types';
import './styles.scss';

function UserCard(props) {
    const { name, avatar } = props;
    return (
        <div className="user-card">
            <div className="user-card__icon">{avatar}</div>
            <div className="user-card__name">{name}</div>
        </div>
    )
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
};

export default UserCard;