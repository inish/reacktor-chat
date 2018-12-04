import { USER_VERIFIED } from "../../src/constants/ActionTypes";

const currentUser = (state = [], action) => {
  switch (action.type) {
    case USER_VERIFIED: {
      return {
        nickname: action.name,
        id: action.id
      };
    }
    default:
      return state;
  }
};
export default currentUser;
