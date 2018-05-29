//Import Dependencies
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

//IMPORT COMPONENTS
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import LessonPage from "./components/Lesson/AllLessonPages";

//IMPORT ASSETS AND CSS
import "./App.css";
import { getUser } from "./ducks/userReducer";

//IMPORT STYLED COMPONENTS
import Button from "./components/MP-Components/Button";
import ButtonWrapper from "./components/MP-Components/ButtonWrapper";
import NavBar from "./components/MP-Components/NavBar";

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

  constructor() {
    super();
    this.state = {
      opened: false
    };
    this.clickLogin = this.clickLogin.bind(this);
  }
  componentDidMount() {
    this.props.getUser();
  }
  clickLogin() {
    this.setState({ opened: !this.state.opened });
  }
  render() {
    console.log(`look here`, this.props);
    return (
      <div className="App">
        {this.props.user && this.props.user.user_name ? (
          <NavBar>
            <button>Logout</button>
          </NavBar>
        ) : (
          <NavBar>
            <ButtonWrapper>
              <Button onClick={this.clickLogin} nav>
                Login
              </Button>
              <NavLink to="/signup">
                <Button nav>Register</Button>
              </NavLink>
            </ButtonWrapper>
          </NavBar>
        )}
        <Switch>
          <Route path="/signup" render={() => <Signup />} />
          <Route
            path="/lesson/:lesson_id/:page_id"
            render={() => <LessonPage />}
          />
          <Route
            path="/"
            render={() =>
              this.props.user && this.props.user.user_name ? (
                <Dashboard />
              ) : (
                <Landing opened={this.state.opened} />
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
