import axios from "axios";

const baseUrl = "http://localhost:3000/api";
const getMessagesUrl = `${baseUrl}/messages`;
const addNewMessageUrl = `${baseUrl}/message/new`;

export const getMessages = () => axios.get(getMessagesUrl);
export const addMessage = (msg) => axios.post(addNewMessageUrl, {message: msg});
