import { connect } from "react-redux";
import ChatHeaderComponent from "../../components/ChatComponent/ChatHeader";

function mapStateToProps(state) {
	return {
		chatroom: state.chat.chatroom,
		currentUser: state.currentUser,
		chatName: state.chat.chatName
	};
}

export const ChatHeader = connect(mapStateToProps)(ChatHeaderComponent);
