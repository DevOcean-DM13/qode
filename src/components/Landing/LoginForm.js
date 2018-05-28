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
  width: 30vw;
  background: #00a7e1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginContainer = styled.form`
  background: white;
  border-radius: 3px;
  /* border: solid 1px black; */
  width: 25vw;
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
  margin-top: 10vh;
  margin-bottom: 6vh;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
`;
// Inputs

const InputBoxed = styled.div`
  height: 25vh;
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
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: solid 2px #bbbcbf;
`;
const Input = styled.input`
  height: 30px;
  width: 19vw;
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
  width: 14vw;
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
    console.log(`HERE`, this.props);
    console.log(this.state);
    return (
      <LoginContainerBox>
        <SignUpTitle>Welcome</SignUpTitle>
        <LoginContainer
          id="login"
          onSubmit={e => this.userPressesLoginButton(e)}
          method="POST"
        >
          <Welcome />
          <InputBoxed>
            <InputContainer>
              <Input
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
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.userLogin(e)}
                type="password"
                required
              />
            </InputContainer>
          </InputBoxed>
          <Login className="hover" type="submit" value="Login" />
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

export default connect(mapStateToProps, { login })(LoginForm);
