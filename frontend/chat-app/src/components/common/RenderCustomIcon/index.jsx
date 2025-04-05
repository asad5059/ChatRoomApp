import PropTypes from 'prop-types';
import './styles.scss';

function RenderCustomIcon(props) {
    const { icon } = props;
    return (
        <div className="custom-icon">
            {icon}
        </div>
    )
}

RenderCustomIcon.propTypes = {
    icon: PropTypes.node.isRequired,
};

export default RenderCustomIcon;

