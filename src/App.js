//Import Dependencies
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//IMPORT COMPONENTS
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
<<<<<<< HEAD
=======
import LoginPage from "./components/queries/GetUserQuery";
import Login from "./components/mutations/AddUserMutation";
>>>>>>> master
import Signup from "./components/Signup/Signup";

//IMPORT ASSETS AND CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/signup" render={() => <Signup />} />
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
