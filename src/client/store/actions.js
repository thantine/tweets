import { 
  FETCHING_MESSAGES,
  FETCHING_MESSAGES_SUCCESS,
  FETCHING_MESSAGES_FAILURE,
  ADD_MESSAGE,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE
} from "./constants";

export const fetchMessages = () => ({
  type: FETCHING_MESSAGES
});

export const getMessagesSuccess = (messages) => ({
  type: FETCHING_MESSAGES_SUCCESS,
  payload: messages
});

export const getMessagesFailure = (error) => ({
  type: FETCHING_MESSAGES_FAILURE,
  payload: error
});

export const addMessage = (messageParts) => ({
  type: ADD_MESSAGE,
  payload: messageParts
});

export const addMessageSuccess = (message) => ({
  type: ADD_MESSAGE_SUCCESS,
  payload: message
});

export const addMessageFailure = (error) => ({
  type: ADD_MESSAGE_FAILURE,
  payload: error
});
