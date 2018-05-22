import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//IMPORT COMPONENTS
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/queries/GetUserQuery";
//IMPORT ASSETS AND CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        <Switch>
          <Route
            path="/"
            render={() => (this.props.user ? <Dashboard /> : <Landing />)}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
