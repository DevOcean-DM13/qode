import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SignUpSideBar } from "../hoc/SideBars/AllSideBars";
import {
  BackgroundButtons,
  PurposeButtons
} from "../hoc/SignButtons/AllSignButtons";

const SignUpForm = styled.div`
  height: auto;
  width: 65vw;
  box-sizing: border-box;
  margin-left: 35vw;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  justify-content: space-between;
  /* position: relative; */
`;

// Coding Background

const QodingBackground = styled.div`
  height: 169.56px;
  width: 100%;
  /* padding-top: 60.44px; */
  padding-left: 9vw;
  padding-right: 50px;
  box-sizing: border-box;
`;
const Question = styled.p`
  margin-top: 23px;
`;
const BackgroundQuestionButtons = styled.div`
  height: 88px;
  box-sizing: border-box;
  margin-top: 20px;
  display: flex;
`;

// Coding Purpose

const QodingPurpose = styled.div`
  height: 120px;
  width: 100%;
  padding-left: 9vw;
  padding-right: 50px;
  box-sizing: border-box;
`;
const PurposeQuestionButtons = styled.div`
  height: 35px;
  box-sizing: border-box;
  margin-top: 20px;
  display: flex;
`;

// Inputs
const InputContainer = styled.div`
  height: auto;
  width: 100%;
  padding-left: 9vw;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const Input = styled.input`
  height: 20px;
  width: 20vw;
  outline: none;
  border-radius: 5px;
  border: solid 1px #dce8ef;
  margin-bottom: 20px;
  padding-left: 10px;
`;
const InputTitle = styled.p`
  font-size: 0.7em;
`;

// Login

// const LoginModal = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 500px;
//   background: pink;
//   left: -450px;
//   top: 53px;
//   display: none;

//   &.open {
//     display: block;
//   }
//   &.hidden {
//     display: none;
//   }
// `;
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayModal: false
    };
    // this.onLoginClick = this.onLoginClick.bind(this);
  }

  // onLoginClick() {
  //   console.log(this.state.displayModal);
  //   this.setState({ displayModal: !this.state.displayModal });
  // }

  render() {
    return (
      <div>
        <SignUpSideBar />
        <SignUpForm>
          <QodingBackground>
            <Question>
              What is your coding background?
              {/* <button onClick={this.onLoginClick}>Open modal</button> */}
            </Question>
            <BackgroundQuestionButtons>
              <BackgroundButtons className="backHover" />
            </BackgroundQuestionButtons>
          </QodingBackground>
          <QodingPurpose>
            <Question>What are you here to do?</Question>
            <PurposeQuestionButtons>
              <PurposeButtons />
            </PurposeQuestionButtons>
          </QodingPurpose>
          <InputContainer>
            <Question>Register Your Account</Question>
            <InputTitle>Email</InputTitle>
            <Input placeholder="Email" />
            <InputTitle>Username</InputTitle>
            <Input placeholder="Username" />
            <InputTitle>Password</InputTitle>
            <Input placeholder="Password" />
          </InputContainer>
          {/* <LoginModal className={this.state.displayModal ? "open" : "hidden"}>
            <button onClick={this.onLoginClick}>close modal</button>
          </LoginModal> */}
        </SignUpForm>
      </div>
    );
  }
}

export default Signup;
