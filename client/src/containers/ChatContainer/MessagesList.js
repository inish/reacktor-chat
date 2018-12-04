import { connect } from "react-redux";
import MessagesListComponent from "../../components/ChatComponent/MessagesList";

const mapStateToProps = state => {
  if (state.chat.chatroom.id === state.messages.roomID) {
    // && state.chat.chatHistory.length < state.messages.id) {
    const newHistory = state.chat.chatHistory.concat(state.messages);
    state.chat.chatHistory = newHistory;
  }
 
  return {
    chatHistory: state.chat.chatHistory,
    currentUser: state.currentUser,
    error: state.messages.error
  };
};

export const MessagesList = connect(mapStateToProps)(MessagesListComponent);
