import React from "react";
import moment from "moment";

const style = { marginBottom: "10px" };
const formatDate = (timestamp) => moment(timestamp).format("YYYY-MM-DD HH:mm:ss");

const Message = ({content, createdAt}) => (
  <li className="list-group-item">
    <div className="d-flex w-100 justify-content-between" style={style}>
      <small>{formatDate(createdAt)}</small>
    </div>
    <p>{content}</p>
  </li>
);

export default Message;
