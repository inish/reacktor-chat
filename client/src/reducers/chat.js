import { ROOM_DETAILS, CHAT_STARTED } from "../constants/ActionTypes";

const chat = (state = [], action) => {
  switch (action.type) {
    case ROOM_DETAILS: {
      return {
        chatroom: action.chatroom,
        chatHistory: action.chatHistory,
        chatType: action.chatType,
        chatName: ""
      };
    }

    case CHAT_STARTED: {
      return {
        chatroom: action.chatroom,
        chatHistory: action.chatHistory,
        chatType: action.chatType,
        chatName: ""
      };
    }
    default:
      return state;
  }
};

export default chat;
