import {
  FETCHING_MESSAGES_SUCCESS,
  FETCHING_MESSAGES_FAILURE,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE
} from "./constants";

const initialState = {
  messages: [],
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_MESSAGES_FAILURE:
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case FETCHING_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload
      }
    
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...action.payload, ...state.messages]
      }

    default:
      return state;
  }
}