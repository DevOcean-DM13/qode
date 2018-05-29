import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

//IMPORTED COMPONENTS
import LessonAccordion from "./Accordion";
import LoginForm from "./LoginForm";
import LandingEditor from "../hoc/TextEditor/LandingEditor.js";
import SimpleSlider from "./LandingSlides.js";

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
/* FIRST HALF OF THE LANDING */
const TopPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopPageContent = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const TextContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Introduction = styled.h1`
  font-weight: 700;
  font-size: 46px;
  color: black;
  line-height: 59.8px;
  text-align: center;
  height: 33%;
  width: 100%;
  font-family: "Work Sans", sans-serif;
`;
const Blurb = styled.h2`
  font-size: 20px;
  color: black;
  line-height: 59.8px;
  text-align: center;
  font-weight: 400;
  height: 33%;
  width: 100%;
  font-family: "Roboto", sans-serif;
`;
const Idk = styled.div`
  height: 33%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LandingContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 1px lightgrey;
`;
/* BOTTOM HALF OF THE LANDING */
const BottomPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000501;
`;
const BottomPageContent = styled.div`
  height: 80%;
  width: 85%;
  display: flex;
`;
const Curriculum = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SlideShow = styled.div`
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
    console.log(this.props);

    return (
      <LandingBody>
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
              <Idk>
                <NavLink to="/signup">
                  <Button>Sign Up Now</Button>
                </NavLink>
              </Idk>
            </TextContent>
            <LandingContainer>
              <LandingEditor />
            </LandingContainer>
          </TopPageContent>
        </TopPage>
        {this.props.opened && <LoginForm />}
        <BottomPage>
          <BottomPageContent>
            <Curriculum>
              <LessonAccordion />
            </Curriculum>
            <SlideShow>
              <SimpleSlider />
            </SlideShow>
          </BottomPageContent>
        </BottomPage>
      </LandingBody>
    );
  }
}

export default Landing;
