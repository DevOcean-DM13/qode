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
import { getUser } from "./ducks/userReducer";

class App extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.user &&
  //     this.props.user &&
  //     prevProps.user.user_name !== this.props.user.user_name
  //   ) {
  //     this.props.getUser();
  //     console.log(`hellooooo`);
  //   }
  // }

  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(`look here`, this.props);
    return (
      <div className="App">
        <Switch>
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/test" render={() => <LessonOneTest />} />
          <Route
            path="/"
            render={() =>
              this.props.user && this.props.user.user_name ? (
                <Dashboard />
              ) : (
                <Landing />
              )
            }
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
export default withRouter(connect(mapStateToProps, { getUser })(App));
