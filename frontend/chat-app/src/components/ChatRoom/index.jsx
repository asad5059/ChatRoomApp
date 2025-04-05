import ChatInputBox from "./ChatInputBox";
import SideBar from "./SideBar";

import './index.scss';

function ChatRoom() {
    return (
        <div className="chat-room">
            <SideBar />
            <ChatInputBox />
        </div>
    );
}

export default ChatRoom;