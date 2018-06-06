//Import Dependencies
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//IMPORT COMPONENTS
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import LessonPage from "./components/Lesson/AllLessonPages";
import qode from "./qode.png";

// IMPORT STYLED COMPONENTS
import Button from "./components/MP-Components/Button";
import ButtonWrapper from "./components/MP-Components/ButtonWrapper";
import NavBar from "./components/MP-Components/NavBar";
// import { Wrappa, Sq1, Sq2 } from "./components/MP-Components/QoGo";
//IMPORT ASSETS AND CSS
import "./App.css";
import { getUser, logout } from "./ducks/userReducer";

const Logo = styled.img`
  height: 55px;
  width: 103px;
  outline: none;
  padding-left: 20px;
`;

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
    this.logout = this.logout.bind(this);
  }

  //USER OBJECT ALREADY EXISTS AFTER YOU LOGIN.
  componentDidMount() {
    this.props.getUser();
  }

  clickLogin() {
    this.setState({ opened: !this.state.opened });
  }

  logout() {
    this.setState({ opened: !this.state.opened });
    this.props.logout(this.props.user.user_name).then(response => {
      window.location.reload();
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.user && this.props.user.user_name ? (
          <NavBar className="NavBarProtected indy">
            <NavLink to="/dashboard">
              <Logo id="logoMain" src={qode} />
            </NavLink>
            <Button data-cy-logout-btn onClick={this.logout}>
              Logout
            </Button>
          </NavBar>
        ) : (
          <NavBar className="NavBarProtected">
            <NavLink to="/">
              <Logo src={qode} />
            </NavLink>
            <ButtonWrapper className="ButtonContainer">
              <Button data-cy-login onClick={this.clickLogin} nav>
                Login
              </Button>
              <NavLink to="/signup">
                <Button data-cy-register nav>
                  Register
                </Button>
              </NavLink>
            </ButtonWrapper>
          </NavBar>
        )}
        <Switch>
          <Route path="/signup" render={() => <Signup />} />
          <Route
            path="/"
            render={() =>
              this.props.user && this.props.user.user_name ? (
                <Dashboard user={this.props.user} />
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
export default withRouter(
  connect(
    mapStateToProps,
    { getUser, logout }
  )(App)
);
