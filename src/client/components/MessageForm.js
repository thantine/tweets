import React, { createRef } from "react";
import { connect } from "react-redux";

import splitMessage from "../libs/split-message";
import { addMessage } from "../store/actions";

class MessageForm extends React.PureComponent {
  messageInput = createRef()

  handleAddNewMessage = (evt) => {
    evt.preventDefault();
    const messageText = this.messageInput.value;

    if (!messageText) { return; }

    this.props.addMessage(splitMessage(messageText));
  }

  render() {
    return (
      <form onSubmit={this.handleAddNewMessage}>
        <div className="form-group">
          <textarea
            ref={(node) => this.messageInput = node}
            className="form-control"
            placeholder="Enter a tweet ..."
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMessage: msgParts => dispatch(addMessage(msgParts))
});

export default connect(null, mapDispatchToProps)(MessageForm);
