import {
  CHAT_ROOMS,
  MESSAGE_RECEIVED,
  USERS_LIST,
  USER_VERIFIED,
  ERROR,
  ROOM_JOINED,
  CHAT_STARTED
} from "../../src/constants/ActionTypes";

import {
  userVerified,
  messageReceived,
  populateUsersList,
  errorMsg,
  populateChatRooms,
  startChat
} from "../actions";

const io = require("socket.io-client");
const init = (dispatch, rootURL) => {
 
  const socket = io.connect(rootURL);

  socket.on(USER_VERIFIED, data => {
    dispatch(userVerified(data));
  });

  socket.on(USERS_LIST, data => {
    dispatch(populateUsersList(data.users));
  });

  socket.on(ERROR, data => {
    dispatch(errorMsg(data.error));
  });
//
//  socket.on(MESSAGE_RECEIVED, data => {
//    dispatch(messageReceived(data.text, data.author, data.id));
//  });

  socket.on(CHAT_ROOMS, data => {
    dispatch(populateChatRooms(data.rooms));
  });

  socket.on(ROOM_JOINED, data => {
    dispatch(startChat(data.chatHistory, data.chatroom, data.chatType));
  });

  socket.on(MESSAGE_RECEIVED, data => {
    dispatch(
      messageReceived(data.message, data.owner, data.roomID, data.id, data.time)
    );
  });

  socket.on(CHAT_STARTED, data => {
    dispatch(startChat(data.chatHistory, data.chatroom, data.chatType));
  });

  return socket;
};

export default init;
