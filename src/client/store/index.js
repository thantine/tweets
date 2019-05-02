import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import messageEpic from "./epic";
import reducer from "./reducer";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(messageEpic);

export default store;