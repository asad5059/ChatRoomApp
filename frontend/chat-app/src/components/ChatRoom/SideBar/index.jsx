import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faShuffle } from '@fortawesome/free-solid-svg-icons';

import RoomCard from '../../common/RoomCard';
import UserCard from '../../common/UserCard';
import WomanAvatar from '../../common/CustomIcons/WomanAvatar';
import RenderCustomIcon from '../../common/RenderCustomIcon';
import ManAvatar from '../../common/CustomIcons/ManAvatar';

import './index.scss';

function SideBar() {
    const roomsAvailable = [
        {
            name: 'General',
            icon: <FontAwesomeIcon icon={faGlobe} />,
        },
        {
            name: 'Random',
            icon: <FontAwesomeIcon icon={faShuffle} />,
        }
    ];
    const onlineUsers = [
        {
            name: 'Alice',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
        {
            name: 'Aqib',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'Britney',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
        {
            name: 'Charlie',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'David',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'Nicole',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
        {
            name: 'Alice',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
        {
            name: 'Aqib',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'Britney',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
        {
            name: 'Charlie',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'David',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'Nicole',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
        {
            name: 'Alice',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
        {
            name: 'Aqib',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'Britney',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
        {
            name: 'Charlie',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'David',
            avatar: <RenderCustomIcon icon={<ManAvatar />} />,
        },
        {
            name: 'Nicole',
            avatar: <RenderCustomIcon icon={<WomanAvatar />} />,
        },
    ];

    return (
        <div className="chat-sidebar">
            <div className="rooms-list">
                <h3 className="title">Rooms</h3>
                {roomsAvailable.map(room => (
                    <RoomCard
                        key={room?.name}
                        name={room?.name}
                        icon={room?.icon}
                    />
                ))}
            </div>

            <div className="online-users">
                <h3 className="title"> Online </h3>
                {onlineUsers.map(user => (
                    <UserCard
                        key={user?.name}
                        name={user?.name}
                        avatar={user?.avatar}
                    />
                ))}
            </div>
        </div>
    );
}

export default SideBar;