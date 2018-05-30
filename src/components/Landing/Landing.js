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
// const NavBar = styled.div`
//   width: 100%;
//   height: 7vh;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   background: white;
//   width: 100%;
//   backface-visibility: hidden;
//   border-bottom: solid 1px lightgrey;
//   position: fixed;
//   z-index: 500;
//   transition-duration: .15s;

// }
// `;
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
// LEFT SIDE. PG 1
const Banner = styled.div`
  width: 50%;
  height: 100%;
  background: #202020;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 14px;
  box-sizing: border-box;
  padding: 4vh 0 4vh 0;
`;
const Solve = styled.div`
  font-size: 3em;
  color: white;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
`;
const SignUpContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 12vh 0 10vh 0;
`;
const IntroCarrier = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const Introduction = styled.h1`
  font-weight: 700;
  font-size: 5em;
  color: black;
  line-height: 65px;
  text-align: center;
  height: auto;
  width: 34vw;
  font-family: "Work Sans", sans-serif;
  padding-bottom: 24px;
  text-align: left;
`;
const Blurb = styled.h2`
  font-size: 17px;
  color: black;
  line-height: 28px;
  text-align: center;
  font-weight: 300;
  height: auto;
  width: 34vw;
  font-family: "Roboto", sans-serif;
  text-align: left;
`;
const LandingContainer = styled.div`
  width: auto;
  height: auto;
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
  /* background: teal; */
  box-sizing: border-box;
`;
const BottomPageContent = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  box-sizing: border-box;
  padding: 5vh 0 5vh 0;
  /* background: pink; */
`;
const Curriculum = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: skyblue; */

  & h1 {
    color: white;
    font-size: 5em;
    margin-bottom: 4vh;
  }
`;
const Comp = styled.div`
  color: #00a7e1;
`;
const SlideShow = styled.div`
  width: 50%;
  height: 100%;
`;

class Landing extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     opened: false
  //   };
  //   this.clickLogin = this.clickLogin.bind(this);
  // }
  // clickLogin(e) {
  //   this.setState({ opened: !this.state.opened });
  //   console.log(`hit`);
  // }
  render() {
    console.log(this.props);

    return (
      <LandingBody>
        <TopPage>
          <TopPageContent>
            <Banner>
              <Solve>Try solving it!</Solve>
              <LandingContainer>
                <LandingEditor />
              </LandingContainer>
              <SignUpContainer>
                <NavLink to="/signup">
                  <Button>Sign Up Now</Button>
                </NavLink>
              </SignUpContainer>
            </Banner>
            <TextContent>
              <IntroCarrier>
                <Introduction>
                  Learn how to code, without the fear of drowning.
                </Introduction>
                <Blurb>
                  Don't know where to start on the path of coding? <br />Allow
                  us to be your floatie.
                </Blurb>
              </IntroCarrier>
            </TextContent>
          </TopPageContent>
        </TopPage>
        {this.props.opened && <LoginForm />}
        <BottomPage>
          <BottomPageContent>
            <Curriculum>
              <h1>
                <Comp>Complexity,</Comp> made simple.
              </h1>
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

const mapStateToProps = state => {
  return {
    // opened: state.loginReducer.opened
  };
};

export default connect(mapStateToProps)(Landing);
