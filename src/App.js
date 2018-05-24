//Import Dependencies
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//IMPORT COMPONENTS
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import LessonOneTest from "./components/Lesson/AllLessonPages";

//IMPORT ASSETS AND CSS
import "./App.css";

class App extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user != this.props.user) {
      console.log(`hellooooo`);
      this.render();
    }
  }
  render() {
    console.log(`look here`, this.props);
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

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default withRouter(connect(mapStateToProps, {})(App));
