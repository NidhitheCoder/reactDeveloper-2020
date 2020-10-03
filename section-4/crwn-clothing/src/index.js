import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </provider>,
  document.getElementById("root")
);
