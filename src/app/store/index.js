import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

const initialState = {
  messages: []
}

export const store = createStore(
  function reducers(state = initialState, action) {
    switch(action.type) {
      default:
        return state;
    }
  },
  applyMiddleware(epicMiddleware)
);