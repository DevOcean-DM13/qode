import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../ducks/userReducer";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.form`
  position: absolute;
  right: 5vw;
  top: 5vh;
  background: white;
  border: 1px solid black;
  height: auto;
  display: flex;
  flex-direction: column;
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameEmail: "",
      password: ""
    };
  }

  userLogin = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  userPressesLoginButton = e => {
    e.preventDefault();
    this.props.login(this.state.usernameEmail, this.state.password);
  };
  render() {
    console.log(`HERE`, this.props);
    console.log(this.state);
    return (
      <LoginContainer
        id="login"
        onSubmit={e => this.userPressesLoginButton(e)}
        method="POST"
      >
        <p>Username or Email</p>
        <input
          name="usernameEmail"
          value={this.state.usernameEmail}
          onChange={e => this.userLogin(e)}
          required
        />

        <p>password</p>
        <input
          name="password"
          value={this.state.password}
          onChange={e => this.userLogin(e)}
          type="password"
          required
        />
        <input type="submit" value="Login" />
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, { login })(LoginForm);
