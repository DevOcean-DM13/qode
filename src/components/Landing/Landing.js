import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//IMPORTED COMPONENTS
import LessonAccordion from "./Accordion";
import LoginForm from "./LoginForm";

// IMPORTED STYLED COMPONENTS
import Button from "../MP-Components/Button.js";
import ButtonWrapper from "../MP-Components/ButtonWrapper.js";

//IMPORTED ASSETS

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
  background: white;
  width: 100%;
  backface-visibility: hidden;
  z-index: 500;
  transition-duration: .15s;
 
}
`;
/* FIRST HALF OF THE LANDING */
const TopPage = styled.div`
  height: 100vh;
  width: 100%;
  background: salmon;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopPageContent = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
`;
const TextContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Introduction = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-size: 46px;
  color: black;
  line-height: 59.8px;
  text-align: center;
  height: 33%;
  width: 100%;
`;
const Blurb = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  color: black;
  line-height: 59.8px;
  text-align: center;
  font-weight: 400;
  height: 33%;
  width: 100%;
`;
const Idk = styled.div`
  height: 33%;
  width: 100%;
`;
const LandingProblem = styled.div`
  width: 50%;
  height: 100%;
`;
/* BOTTOM HALF OF THE LANDING */
const BottomPage = styled.div`
  height: 100vh;
  width: 100%;
  ${"" /* background: lightblue; */} display: flex;
  align-items: center;
  justify-content: center;
`;
const BottomPageContent = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
`;
const Curriculum = styled.div`
  width: 50%;
  height: 100%;
`;
const PictureSlide = styled.div`
  width: 50%;
  height: 100%;
`;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.clickLogin = this.clickLogin.bind(this);
  }
  clickLogin(e) {
    this.setState({ opened: !this.state.opened });
    console.log(`hit`);
  }
  render() {
    return (
      <LandingBody>
        <NavBar>
          <ButtonWrapper>
            <Button onClick={e => this.clickLogin(e)} nav>
              Login
            </Button>
            <Button nav>Register</Button>
          </ButtonWrapper>
        </NavBar>
        <TopPage>
          <TopPageContent>
            <TextContent>
              <Introduction>
                Learn how to code, without the fear of drowning.
              </Introduction>
              <Blurb>
                Don't know where to start on the path of coding? Allow us to be
                your floatie.
              </Blurb>
              <Idk />
            </TextContent>
            <LandingProblem />
          </TopPageContent>
        </TopPage>
        {this.state.opened && <LoginForm />}
        <BottomPage>
          <BottomPageContent>
            <Curriculum>
              <LessonAccordion />
            </Curriculum>
            <PictureSlide />
          </BottomPageContent>
        </BottomPage>
      </LandingBody>
    );
  }
}

export default Landing;
