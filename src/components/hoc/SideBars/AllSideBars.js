import React, { Component } from "react";
import createSideBar from "./SideBars";
import styled from "styled-components";

const Beep = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
const Welcome = styled.h1`
  color: #001e30;
  margin-bottom: 50px;
`;
const Intro = styled.p`
  font-size: 1em;
  line-height: 24px;
`;
const Qode = styled.div`
  font-size: 1.8em;
`;
class SignUp extends Component {
  render() {
    return (
      <div>
        <Beep style={this.props.styleProps}>
          <Welcome>
            Welcome to <br /> <Qode>Qode</Qode>
          </Welcome>
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
  font-family: "Noto Sans", sans-serif;
`;
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

const ProfileSide = class ProfileSide extends Component {
  render() {
    return <div style={this.props.styleProps} />;
  }
};

export const ProfileSideBar = createSideBar(ProfileSide);
