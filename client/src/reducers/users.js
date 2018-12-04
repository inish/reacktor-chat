import { USERS_LIST } from "../../src/constants/ActionTypes";

const users = (state = [], action) => {
	switch (action.type) {
		case USERS_LIST: {
			return action.users;
		}
		default:
			return state;
	}
};
export default users;
