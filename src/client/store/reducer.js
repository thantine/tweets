import {
  FETCHING_MESSAGES,
  FETCHING_MESSAGES_SUCCESS,
  FETCHING_MESSAGES_FAILURE,
  ADD_MESSAGE,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE
} from "./constants";

const initialState = {
  loading: true,
  messages: [],
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_MESSAGES:
    case ADD_MESSAGE:
      return {
        ...state,
        loading: true
      };
    
    case FETCHING_MESSAGES_FAILURE:
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case FETCHING_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload
      }
    
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...action.payload, ...state.messages]
      }

    default:
      return state;
  }
}