import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//IMPORT COMPONENTS
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/queries/GetUserQuery";
<<<<<<< HEAD
import Login from "./components/mutations/AddUserMutation";
=======
import Signup from "./components/Signup/Signup";
>>>>>>> master
//IMPORT ASSETS AND CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage render={data => console.log(data)} />
        {/* <Login /> */}
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
