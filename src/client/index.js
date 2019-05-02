import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";

import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";

const style = {
  width: "500px",
  margin: "auto",
  padding: "20px 10px"
};

ReactDOM.render(
  <Provider store={store}>
    <div style={style}>
      <MessageForm />
      <MessageList />
    </div>
  </Provider>,
  document.getElementById("app")
);
