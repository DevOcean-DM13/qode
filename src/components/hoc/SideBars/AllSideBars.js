import React, { Component } from "react";
import createSideBar from "./SideBars";
import styled from "styled-components";

const Welcome = styled.h1`
  color: #001e30;
`;
const Intro = styled.p`
  font-size: 1.5em;
`;
class SignUp extends Component {
  render() {
    return (
      <div>
        <div style={this.props.styleProps}>
          <Welcome>
            Welcome to <br /> Qode
          </Welcome>
          <Intro>
            You are about to start your coding journey with us. Before you do,
            let use get to know you.
          </Intro>
        </div>
      </div>
    );
  }
}

export const SignUpSideBar = createSideBar(SignUp);
