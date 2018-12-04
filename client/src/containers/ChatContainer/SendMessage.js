import { connect } from "react-redux";
import SendMessageComponent from "../../components/ChatComponent/SendMessage";
import { addMessage } from "../../actions";

const mapDispatchToProps = dispatch => ({
	sendMessage: (message, ownerID, roomID, chatType) => {
		dispatch(addMessage(message, ownerID, roomID, chatType));
	}
});

const mapStateToProps = state => {
	return {
		userID: state.currentUser.id,
		chat: state.chat
	};
};

export const SendMessage = connect(
	mapStateToProps,
	mapDispatchToProps
)(SendMessageComponent);
