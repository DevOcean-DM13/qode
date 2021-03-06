import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../ducks/userReducer";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const LoginContainerBox = styled.div`
  position: fixed;
  right: 0;
  top: 5vh;
  height: 100%;
  width: 385px;
  background: rgba(0, 167, 225, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding-bottom: 5vh;
`;
const LoginContainer = styled.form`
  background: white;
  border-radius: 3px;
  /* border: solid 1px black; */
  width: 320px;
  height: 422px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background: teal; */
  box-sizing: border-box;
  padding-bottom: 5vh;
  box-shadow: 1px 1px 30px #0071aa;
`;

const SignUpTitle = styled.p`
  font-size: 2em;
  color: white;
  margin-bottom: 30px;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
`;
// Inputs

const InputBoxed = styled.div`
  height: 160px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 13px;
  padding-bottom: 17px;
`;
const InputContainer = styled.div`
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: solid 2px #bbbcbf;
`;
const Input = styled.input`
  height: 30px;
  width: 250px;
  outline: none;
  border: none;
  background: transparent;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 0.9em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
`;
const Welcome = styled.div`
  margin-top: 20px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: white;
  border: solid 9px #00a7e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Login = styled.input`
  height: 35px;
  width: 180px;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #dce8ef;
  color: white;
  background: #80c6cc;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;

  &.hover:hover {
    box-shadow: 0.5px 0.5px 3px #dee9f9;
    background: tomato;
    transition: 0.3s;
  }
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
    return (
      <LoginContainerBox data-cy-login-box>
        <SignUpTitle>Welcome</SignUpTitle>
        <LoginContainer
          id="login"
          //check 500 server error
          onSubmit={this.userPressesLoginButton}
          method="POST"
        >
          <Welcome />
          <InputBoxed>
            <InputContainer>
              <Input
                data-cy-login-user
                name="usernameEmail"
                placeholder="Username or Email"
                value={this.state.usernameEmail}
                onChange={e => this.userLogin(e)}
                required
                autofocus
              />
            </InputContainer>

            <InputContainer>
              <Input
                data-cy-login-password
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.userLogin(e)}
                type="password"
                required
              />
            </InputContainer>
          </InputBoxed>
          <Login
            data-cy-login-button
            className="hover"
            type="submit"
            value="Login"
          />
        </LoginContainer>
      </LoginContainerBox>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
