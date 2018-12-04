import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import init from "./sockets";
import appReducers from "./reducers";
import handleSocket from "./sagas";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducers, applyMiddleware(sagaMiddleware));

const socket = init(store.dispatch, "http://localhost:3231");
sagaMiddleware.run(handleSocket, socket);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
