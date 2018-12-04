import { connect } from "react-redux";
import SidebarComponent from "../components/Sidebar";
import { joinChatroom, chatUser } from "../actions";
function mapStateToProps(state) {
  return {
    users: state.users,
    currentUser: state.currentUser,
    chatrooms: state.chatrooms
  };
}

const mapDispatchToProps = dispatch => ({
  selectChatroom: (id, room) => {
    dispatch(joinChatroom(id, room));
  },
  selectUser: (id, name) => {
    dispatch(chatUser(id, name));
  }
});

export const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarComponent);
