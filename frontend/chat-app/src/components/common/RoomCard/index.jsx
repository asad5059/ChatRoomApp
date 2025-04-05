import PropTypes from 'prop-types';
import './styles.scss';

function RoomCard(props) {
    const { name, icon } = props;
    return (
        <div className="room-card">
            <div className="room-card__icon">{icon}</div>
            <div className="room-card__name">{name}</div>
        </div>
    )
}

RoomCard.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

export default RoomCard;