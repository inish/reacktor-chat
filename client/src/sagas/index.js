import { takeEvery } from "redux-saga/effects";
import {
  JOIN_ROOM,
  SEND_MESSAGE,
  LOGIN,
  CHAT_USER
} from "../../src/constants/ActionTypes";

const handleSocket = function* handleSocket(params) {
  yield takeEvery(LOGIN, action => {
    params.emit(LOGIN, action);
  });

  yield takeEvery(JOIN_ROOM, action => {
    params.emit(JOIN_ROOM, action);
  });

  yield takeEvery(SEND_MESSAGE, action => {
    params.emit(SEND_MESSAGE, action);
  });

  yield takeEvery(CHAT_USER, action => {
    params.emit(CHAT_USER, action);
  });
};

export default handleSocket;
