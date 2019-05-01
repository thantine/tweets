export const defaultState = {
  messages: [{
    id: 1,
    part: 1,
    total: 1,
    content: "This is a full message",
    createdAt: new Date().getTime()
  },
  {
    id: 2,
    part: 1,
    total: 2,
    content: "1/2 This is a first part of message",
    createdAt: new Date().getTime()
  },
  {
    id: 2,
    part: 2,
    total: 2,
    content: "2/2 This is a second part of message",
    createdAt: new Date().getTime()
  }]
}