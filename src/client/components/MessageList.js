import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchMessages } from "../store/actions";
import Message from "./Message";

const style = { marginTop: "20px" };
const getKey = (msg) => `${msg.id}-${msg.part}`;

class MessageList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages, loading } = this.props;
    const spinner = loading ? (<Loader
      type="ThreeDots"
      color="#00BFFF"
      height="50"	
      width="50"
    />) : null;

    return (
      <div style={style}>
        {spinner}
        <ul className="list-group">
          {messages.map(
            msg =><Message key={getKey(msg)} content={msg.content} createdAt={msg.createdAt} />
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: _ => dispatch(fetchMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
