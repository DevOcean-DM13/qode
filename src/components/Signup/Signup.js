import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SignUpSideBar } from "../hoc/SideBars/AllSideBars";
import {
  BackgroundButtons,
  PurposeButtons
} from "../hoc/SignButtons/AllSignButtons";
import { connect } from "react-redux";
import { registerUser } from "../../ducks/userReducer";
import LoginForm from "../Landing/LoginForm";
import { NavLink, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import prof1 from "../../QodeProfilePics/prof1.png";
import prof2 from "../../QodeProfilePics/prof2.png";
import prof3 from "../../QodeProfilePics/prof3.png";
import prof4 from "../../QodeProfilePics/prof4.png";
import prof5 from "../../QodeProfilePics/prof5.png";
import prof6 from "../../QodeProfilePics/prof6.png";
import prof7 from "../../QodeProfilePics/prof7.png";
import prof8 from "../../QodeProfilePics/prof8.png";
import prof9 from "../../QodeProfilePics/prof9.png";
import prof10 from "../../QodeProfilePics/prof10.png";
import prof11 from "../../QodeProfilePics/prof11.png";
import prof12 from "../../QodeProfilePics/prof12.png";
import prof13 from "../../QodeProfilePics/prof13.png";
import prof14 from "../../QodeProfilePics/prof14.png";
import prof15 from "../../QodeProfilePics/prof15.png";
import prof16 from "../../QodeProfilePics/prof16.png";
import prof17 from "../../QodeProfilePics/prof17.png";
import prof18 from "../../QodeProfilePics/prof18.png";
import prof19 from "../../QodeProfilePics/prof19.png";
import prof20 from "../../QodeProfilePics/prof20.png";

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
  padding-bottom: 150px;
  background: #fffffd;
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
  margin-bottom: 20px;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  &.space {
    margin-top: 34px;
    margin-bottom: 40px;
  }
  &.spaceJam {
    margin-top: 34px;
    margin-bottom: 30px;
  }
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
  border: solid 1px #a0dcff;
  outline: none;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 10px 10px 10px 15px;
  font-size: 0.75em;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  background: transparent;

  &.texty:hover {
    box-shadow: 0.5px 0.5px 3px #dee9f9;
    transition: 0.2s;
  }
`;

// Inputs

const InputCard = styled.div`
  width: 24.5vw;
  height: auto;
  border: solid 1px #a0dcff;
  border-radius: 6px;
  box-sizing: border-box;
  padding-left: 2vw;
  padding-bottom: 2vw;
  margin-right: 2.1vw;
`;
const InputContainer = styled.div`
  height: auto;
  width: 100%;
  padding-left: 9vw;
  padding-right: 50px;
  display: flex;
  margin-right: 2vw;
  box-sizing: border-box;
`;
const InputBox = styled.div`
  height: 20px;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: solid 1px #afbec6;
`;
const Input = styled.input`
  height: 20px;
  width: 20vw;
  outline: none;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  box-sizing: border-box;
  background: transparent;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #434747;
`;
const InputTitle = styled.p`
  font-size: 0.9em;
  box-sizing: border-box;
  padding-left: 10px;
  margin-bottom: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

// ProfilePicGenerator

const ProfilePicBox = styled.div`
  height: auto;
  width: 19.4vw;
  border: solid 1px #a0dcff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 60px 0;
`;
const ImageGenBox = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GenerateButton = styled.button`
  height: 30px;
  width: 90px;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #a0dcff;

  &.backButt:hover {
    box-shadow: 0.5px 0.5px 3px #dee9f9;
    transition: 0.5s;
    cursor: pointer;
    background: #ff7860;
    color: white !important;
    border: none;
  }
`;
const ImageGen = styled.img`
  border-radius: 50%;
  border: solid 2px #202020;
  background-color: #00a7e1;
  width: 120px;
  height: 120px;
`;
// Register Bar

const Register = styled.div`
  height: 60px;
  width: 63.8vw;
  position: fixed;
  bottom: 0px;
  border-top: solid 1px #a0dcff;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  background: #fffffd;
`;
const RegisterButton = styled.button`
  height: 35px;
  width: 180px;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #a0dcff;
  margin-right: 10px;

  &.backButt:hover {
    box-shadow: 0.5px 0.5px 3px #dee9f9;
    transition: 0.5s;
    cursor: pointer;
    background: #ff7860;
    color: white !important;
    border: none;
  }
`;

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      goals: "",
      userName: "",
      password: "",
      email: "",
      profilePic: "",
      profilePicList: [
        prof1,
        prof2,
        prof3,
        prof4,
        prof5,
        prof6,
        prof7,
        prof8,
        prof9,
        prof10,
        prof11,
        prof12,
        prof13,
        prof14,
        prof15,
        prof16,
        prof17,
        prof18,
        prof19,
        prof20
      ]
    };
  }
  userInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.props);
  };

  randomizePic = () => {
    const { profilePicList } = this.state;
    const newProPic =
      profilePicList[Math.floor(Math.random() * profilePicList.length)];
    this.setState({ profilePic: newProPic });
  };

  register = () => {
    if (/^[a-z0-9_]+@[a-z0-9_]+\.[a-z0-9_]+$/.test(this.state.email)) {
      this.props
        .registerUser(
          this.state.userName,
          this.state.email,
          this.state.password,
          this.props.coding_background,
          this.props.purpose,
          this.state.goals,
          this.state.profilePic
        )
        .then(response => {
          console.log(response, "here ya go michael");
          response.value
            ? this.props.history.push("/")
            : Swal({
                title: "Something went wrong!",
                text: "This username or email is already taken!",
                type: "warning"
              });
        })
        .catch(console.log);
      console.log(
        "THIS POST RIGHT HERE",
        this.state.userName,
        "FROM THE BACK",
        this.props.user
      );
    } else {
      Swal({
        title: "Something went wrong!",
        confirmButtonText: "Ok",
        text: "Please enter a valid email!",
        type: "warning"
      });
    }
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <SignUpSideBar />
        <SignUpForm>
          <QodingBackground>
            <Question>
              What is your coding background?
              {/* <button onClick={this.onLoginClick}>Open modal</button> */}
            </Question>
            <BackgroundButtons />
          </QodingBackground>
          <QodingPurpose>
            <Question>What are you here to do?</Question>
            <PurposeButtons />
          </QodingPurpose>
          <QodingGoal>
            <Question>What are your goals?</Question>
            <GoalText
              data-cy-goals
              placeholder="ex. &quot;I want to be able to code a website for my personal business&quot;"
              name="goals"
              value={this.state.goals}
              onChange={e => this.userInput(e)}
              className="texty"
            />
          </QodingGoal>
          <InputContainer>
            <InputCard>
              <Question className="space">Create Your Account</Question>
              <InputTitle>Email</InputTitle>
              <InputBox>
                <Input
                  data-cy-create-email
                  onChange={e => this.userInput(e)}
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                />
              </InputBox>
              <InputTitle>Username</InputTitle>
              <InputBox>
                <Input
                  data-cy-create-user
                  onChange={e => this.userInput(e)}
                  name="userName"
                  placeholder="Username"
                  value={this.state.userName}
                  pattern="/^[a-z0-9_]+@[a-z0-9_]+\.[a-z0-9_]+$/"
                />
              </InputBox>
              <InputTitle>Password</InputTitle>
              <InputBox>
                <Input
                  data-cy-create-password
                  onChange={e => this.userInput(e)}
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                />
              </InputBox>
            </InputCard>
            <ProfilePicBox>
              <ImageGenBox>
                <Question className="spaceJam">Pick a Profile Picture</Question>
                <GenerateButton
                  className="backButt picButton"
                  onClick={this.randomizePic}
                >
                  Generate
                </GenerateButton>
              </ImageGenBox>
              <ImageGen
                className="cypress-prof-img"
                src={this.state.profilePic}
                onError={e => {
                  e.target.src =
                    "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
                }}
              />
            </ProfilePicBox>
          </InputContainer>

          <Register>
            <RegisterButton
              data-cy-register-user
              onClick={() => this.register()}
              className="backButt"
            >
              Register
            </RegisterButton>
          </Register>
        </SignUpForm>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.userReducer
    // coding_background: state.userReducer.coding_background,
    // purpose: state.userReducer.purpose
  };
  // return state;
};
export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(Signup)
);
