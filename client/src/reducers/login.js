import { ERROR } from "../../src/constants/ActionTypes";

const login = (state = [], action) => {
	switch (action.type) {
		case ERROR: {
			return { error: action.error };
		}
		default:
			return state;
	}
};

export default login;
