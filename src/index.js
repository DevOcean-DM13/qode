import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { Provider } from "react-redux";
import store from "./ducks/store";

import "./index.css";
import App from "./App";

const client = new ApolloClient({ uri: "http://localhost:4891/graphql" });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
