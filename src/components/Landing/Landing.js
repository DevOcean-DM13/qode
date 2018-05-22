import React, { Component } from "react";
import styled from "styled-components";
// IMPORTED STYLED COMPONENTS
import Button from "../MP-Components/Button.js";
import ButtonWrapper from "../MP-Components/ButtonWrapper.js";

//  STYLED COMPONENTS
const LandingBody = styled.div`
  height: 200vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const NavBar = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  border-bottom: solid 1px lightgrey;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: white;
`;
const TopPage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: salmon;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopPageContent = styled.div`
  height: 80%;
  width: 80%;
  background-color: white;
`;
const TextContent = styled.div`
  width: 50%;
  height: 100%;
  background-color: lime;
`;
const BottomPage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BottomPageContent = styled.div`
  height: 80%;
  width: 80%;
  background-color: yellow;
`;
const Curriculum = styled.div`
  width: 50%;
  height: 100%;
  background-color: black;
`;
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LandingBody>
        <NavBar>
          <ButtonWrapper>
            <Button>Login</Button>
            <Button>Register</Button>
          </ButtonWrapper>
        </NavBar>
        <TopPage>
          <TopPageContent>
            <TextContent />
          </TopPageContent>
        </TopPage>
        <BottomPage>
          <BottomPageContent>
            <Curriculum />
          </BottomPageContent>
        </BottomPage>
      </LandingBody>
    );
  }
}

export default Landing;
