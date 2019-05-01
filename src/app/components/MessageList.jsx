import React from "react";
import { connect } from "react-redux";

import Message from "./Message";

const style = { marginTop: "20px" };

const MessageList = ({messages}) => (
  <ul className="list-group" style={style}>
    {messages.map(msg => <Message key={`${msg.id}-${msg.part}`} content={msg.content} createdAt={msg.createdAt} />)}
  </ul>
);

const mapStateToProps = (state) =>({
  messages: state.messages
});


export default connect(mapStateToProps)(MessageList);
