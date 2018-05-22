import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//IMPORT COMPONENTS
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";

//IMPORT ASSETS AND CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={() => (this.props.user ? <Dashboard /> : <Landing />)}
        />
      </div>
    );
  }
}

export default App;
