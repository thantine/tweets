import { createStore } from "redux";
import { defaultState } from "../../server/defaultState";

export const store = createStore(
  function reducers(state = defaultState, action) {
    return state;
  }
);