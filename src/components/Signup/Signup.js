import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SignUpSideBar } from "../hoc/SideBars/AllSideBars";
import {
  BackgroundButtons,
  PurposeButtons
} from "../hoc/SignButtons/AllSignButtons";
import { connect } from "react-redux";

const SignUpForm = styled.div`
  height: auto;
  width: 63.8vw;
  box-sizing: border-box;
  margin-left: 35vw;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  /* justify-content: space-between; */
  /* position: relative; */
  overflow-y: hidden;
  margin-bottom: 150px;
`;

// Coding Background

const QodingBackground = styled.div`
  height: auto;
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
  height: auto;
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

// Goals

const QodingGoal = styled.div`
  height: auto;
  width: 100%;
  padding-left: 9vw;
  padding-right: 50px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;
const GoalText = styled.textarea`
  width: 46vw;
  height: 20vh;
  border: solid 1px #dce8ef;
  outline: none;
  border-radius: 6px;
  box-sizing: border-box;

  &.texty:hover {
    box-shadow: 0.5px 0.5px 3px #dee9f9;
    transition: 0.2s;
  }
`;

// Inputs

const InputCard = styled.div`
  width: 27vw;
  height: auto;
  border: solid 1px #dce8ef;
  border-radius: 6px;
  box-sizing: border-box;
  padding-left: 2vw;
  padding-bottom: 2vw;
`;
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
  box-sizing: border-box;
`;
const InputTitle = styled.p`
  font-size: 0.7em;
  box-sizing: border-box;
`;

// Register Bar

const Register = styled.div`
  height: 60px;
  width: 63.8vw;
  position: fixed;
  bottom: 0px;
  background: white;
  border-top: solid 1px #dce8ef;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
`;
const RegisterButton = styled.button`
  height: 35px;
  width: 180px;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #dce8ef;
  margin-right: 10px;

  &.backButt:hover {
    box-shadow: 0.5px 0.5px 3px #dee9f9;
    transition: 0.5s;
  }
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
            <BackgroundButtons className="backHover" />
          </QodingBackground>
          <QodingPurpose>
            <Question>What are you here to do?</Question>
            <PurposeButtons />
          </QodingPurpose>
          <QodingGoal>
            <Question>What are your goals?</Question>
            <GoalText className="texty" />
          </QodingGoal>
          <InputContainer>
            <InputCard>
              <Question>Register Your Account</Question>
              <InputTitle>Email</InputTitle>
              <Input placeholder="Email" />
              <InputTitle>Username</InputTitle>
              <Input placeholder="Username" />
              <InputTitle>Password</InputTitle>
              <Input placeholder="Password" />
            </InputCard>
          </InputContainer>
          {/* <LoginModal className={this.state.displayModal ? "open" : "hidden"}>
            <button onClick={this.onLoginClick}>close modal</button>
          </LoginModal> */}
          <Register>
            <RegisterButton className="backButt"> Register </RegisterButton>
          </Register>
        </SignUpForm>
      </div>
    );
  }
}

export default connect(Signup);
