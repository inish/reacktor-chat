import { connect } from "react-redux";
import ChatComponent from "../../components/ChatComponent/Chat";

function mapStateToProps(state) {
  let chatName = "";
  if (state.chat.chatroom) {
    if (state.chat.chatroom.name) chatName = state.chat.chatroom.name;
    else if (
      state.chat.chatroom.firstUser.nickname === state.currentUser.nickname
    )
      chatName = state.chat.chatroom.secondUser.nickname;
    else chatName = state.chat.chatroom.firstUser.nickname;
    let tempState = { ...state.chat.chatName };
    tempState = chatName;
    state.chat.chatName = tempState;
  }
  return {
    chatName: state.chat.chatName,
    error: state.messages.error
  };
}

export const Chat = connect(mapStateToProps)(ChatComponent);
