import {
  MESSAGE_RECEIVED,
  ROOM_DETAILS,
  CHAT_STARTED,
  USERS_LIST,
  ERROR
} from "../../src/constants/ActionTypes";

const messages = (state = [], action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED: {
      return {
        message: action.message,
        owner: action.owner,
        id: action.messageID,
        roomID: action.roomID,
        time: action.time
      };
    }

    case ROOM_DETAILS:
    case CHAT_STARTED:
    case USERS_LIST: {
      return {};
    }

    case ERROR: {
      return { error: action.error };
    }

    default:
      return state;
  }
};

export default messages;
