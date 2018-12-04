import {
  CHAT_ROOMS,
  JOIN_ROOM,
  SEND_MESSAGE,
  MESSAGE_RECEIVED,
  USERS_LIST,
  LOGIN,
  USER_VERIFIED,
  ERROR,
  ROOM_DETAILS,
  CHAT_USER,
  CHAT_STARTED
} from "../../src/constants/ActionTypes";

export const addMessage = (message, owner, room, chatType) => ({
  type: SEND_MESSAGE,
  text: message,
  owner,
  room,
  chatType
});

export const userVerified = currentUser => ({
  type: USER_VERIFIED,
  id: currentUser.id,
  name: currentUser.name
});

export const messageReceived = (message, owner, roomID, messageID, time) => ({
  type: MESSAGE_RECEIVED,
  roomID,
  messageID,
  message,
  owner,
  time
});

export const populateUsersList = users => ({
  type: USERS_LIST,
  users
});

export const loginSubmit = nickname => {
  return {
    type: LOGIN,
    nickname: nickname
  };
};

export const populateChatRooms = rooms => ({
  type: CHAT_ROOMS,
  cahtrooms: rooms
});

export const errorMsg = error => {
  return {
    type: ERROR,
    error: error
  };
};

export const joinChatroom = (id, name) => {
  return {
    type: JOIN_ROOM,
    id,
    name
  };
};

export const startChat = (chatHistory, chatroom, chatType) => {
  let type = ROOM_DETAILS;
  if (chatType === "U") type = CHAT_STARTED;
  return {
    type,
    chatroom,
    chatHistory,
    chatType
  };
};

export const chatUser = (id, name) => {
  return {
    type: CHAT_USER,
    id,
    name
  };
};
//export const startChat = (chatHistory, chatroom, chatType) => {
//  return {
//    type: CHAT_STARTED,
//     chatroom,
//    chatHistory,
//    chatType
//  };
//};
