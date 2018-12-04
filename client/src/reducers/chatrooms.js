import { CHAT_ROOMS } from "../../src/constants/ActionTypes";

const chatrooms = (state = [], action) => {
	switch (action.type) {
		case CHAT_ROOMS:
			return action.cahtrooms;
		default:
			return state;
	}
};
export default chatrooms;
