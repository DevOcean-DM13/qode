import React, { Component } from "react";
import createSideBar from "./SideBars";
import styled from "styled-components";

const Beep = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
const Welcome = styled.h1`
  color: white;
  margin-bottom: 0.5vh;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 2em;
`;
const Intro = styled.p`
  font-size: 0.9em;
  line-height: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
`;
const Qode = styled.div`
  font-size: 5em;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: 8vh;
`;
class SignUp extends Component {
  render() {
    return (
      <div>
        <Beep style={this.props.styleProps}>
          <Welcome>Welcome to</Welcome>
          <Qode>Qode</Qode>
          <Intro>
            You are about to start your coding journey with us. Before we get
            started, let us get to know you better.
          </Intro>
        </Beep>
      </div>
    );
  }
}

export const SignUpSideBar = createSideBar(SignUp);

// anotha one
const FirstQuizTitle = styled.h1`
  font-family: "Tajawal", sans-serif;
  font-weight: 700;
`;
const TextBox = styled.div``;
class EleAndTag extends Component {
  render() {
    return (
      <div style={this.props.styleProps}>
        <FirstQuizTitle>Yabba Dabba Doooo</FirstQuizTitle>
      </div>
    );
  }
}
export const EleAndTagSideBar = createSideBar(EleAndTag);

class ProfileSide extends Component {
  constructor() {
    super();
    this.state = {
      opened: false
    };
  }
  render() {
    return (
      <div style={this.props.styleProps}>
        <div>Courses</div>
      </div>
    );
  }
}

export const ProfileSideBar = createSideBar(ProfileSide);
