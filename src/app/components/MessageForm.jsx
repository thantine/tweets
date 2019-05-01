import React from "react";

const MessageForm = () => (
  <form>
    <div className="form-group">
      <textarea className="form-control" placeholder="Enter a tweet ..." />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
)

export default MessageForm;