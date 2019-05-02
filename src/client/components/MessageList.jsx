import React from "react";
import { connect } from "react-redux";

import { fetchMessages } from "../store/actions";
import Message from "./Message";

const style = { marginTop: "20px" };
const getKey = (msg) => `${msg.id}-${msg.part}`;

class MessageList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    return (
      <ul className="list-group" style={style}>
        {messages.map(msg => <Message key={getKey(msg)} content={msg.content} createdAt={msg.createdAt} />)}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: _ => dispatch(fetchMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
