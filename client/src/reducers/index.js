import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";
import chatrooms from "./chatrooms";
import currentUser from "./currentUser";
import login from "./login";
import chat from "./chat";

const appReducers = combineReducers({
	messages,
	users,
	currentUser,
	login,
	chatrooms,
	chat
});

export default appReducers;
