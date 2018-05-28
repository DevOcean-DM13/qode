import React, { Component } from "react";
import createSideBar from "./SideBars";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHtmlLessons } from "../../../ducks/lessonReducer";

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
  margin-top: 19px;
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
  font-weight: 700;
`;
const TextBox = styled.div``;

const ForwardButton = styled.div`
  height: 70px;
  width: 70px;
  position: fixed;
  z-index: 1000;
  border: 1px solid black;
  font-size: 75px;
  line-height: 60px;
  text-align: center;
  left: 28vw;
  bottom: 5vh;
  margin-right: 5vw;
`;
const PrevButton = styled.div`
  height: 70px;
  width: 70px;
  position: fixed;
  left: 0;
  z-index: 1000;
  border: 1px solid black;
  font-size: 75px;
  line-height: 60px;
  text-align: center;
  bottom: 5vh;
  margin-left: 2vw;
`;
class EleAndTag extends Component {
  constructor() {
    super();
    this.state = {
      currentLesson: "1"
    };
  }
  handleForward = e => {
    let currentLessonAsNum = parseInt(this.state.currentLesson);
    // if currentLessonAsNum=
    this.setState({ currentLesson: currentLessonAsNum + 1 });
  };
  handleBack = e => {
    let currentLessonAsNum = parseInt(this.state.currentLesson);
    this.setState({ currentLesson: currentLessonAsNum - 1 });
  };

  componentDidMount() {
    this.props.getHtmlLessons();
  }
  render() {
    console.log(this.props);
    return (
      <div style={this.props.styleProps}>
        <FirstQuizTitle>Intro to HTML</FirstQuizTitle>
        <p style={{ fontSize: "2rem" }}>{`${
          this.props["lesson" + this.state.currentLesson]
        }`}</p>
        <ForwardButton onClick={e => this.handleForward(e)}>></ForwardButton>
        <PrevButton onClick={e => this.handleBack(e)}>{`<`}</PrevButton>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.lessonReducer
  };
};

export const EleAndTagSideBar = createSideBar(
  connect(mapStateToProps, { getHtmlLessons })(EleAndTag)
);

const CourseWrapper = styled.div`
  height: 20vh;
  width: auto;
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;
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
        <CourseWrapper>
          <CourseTitle>HTML</CourseTitle>
          <Link to="/test">Pre-quiz</Link>
          <a>Lesson/Activity</a>
          <a>Post-quiz</a>
        </CourseWrapper>
        <CourseWrapper>
          <CourseTitle>CSS</CourseTitle>
          <a>Pre-quiz</a>
          <a>Lesson/Activity</a>
          <a>Post-quiz</a>
        </CourseWrapper>
      </div>
    );
  }
}

export const ProfileSideBar = createSideBar(ProfileSide);
