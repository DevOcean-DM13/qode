import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SignUpSideBar } from "../hoc/SideBars/AllSideBars";

const SignUpForm = styled.div`
  height: auto;
  width: 68vw;
  box-sizing: border-box;
  margin-left: 32vw;
`;

const 
class Signup extends Component {
  render() {
    return (
      <div>
        <SignUpSideBar />
        <SignUpForm>

        </SignUpForm>
      </div>
    );
  }
}

export default Signup;
