import React, { Component } from "react";
import createSideBar from "./SideBars";
import styled from "styled-components";
import { NavLink as Link, withRouter } from "react-router-dom";
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
const LessonHeader = styled.div`
  & h1.Title {
    color: #00a7e1;
    font-weight: 700;
    font-family: "Work Sans", sans-serif;
    font-size: 2.5rem;
    background: inherit;
    letter-spacing: inherit;
    text-align: start;
    padding: inherit;
    margin: inherit;
    height: auto;
    width: auto;
    border: none;
    opacity: inherit;
    visibility: visible;
    display: inherit;
  }
  & h2.Subtitle {
    color: #00a7e1;
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    font-size: 2rem;
    background: inherit;
    letter-spacing: inherit;
    text-align: start;
    padding: 0.5vh 0 1.5vh 0;
    margin: inherit;
    height: auto;
    width: auto;
    border: none;
    opacity: inherit;
    visibility: visible;
    display: inherit;
  }
`;

const PrettyBox = styled.div`
  height: auto;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  padding: 50px 50px 50px 50px;
`;
const LessonContent = styled.div`
  h1 {
    font-weight: 900;
  }
  h2 {
    font-weight: 700;
  }
`;
const QuizTitle = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-size: 30px;
  margin-bottom: 40px;
  padding: 20px;
  border-bottom: 1.5px solid #ff7860;
`;
const QuizSubtitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 20px;
  margin-bottom: 40px;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  &.contentText {
    color: #00a7e1;
    font-size: 1rem;
  }
`;

const ForwardButton = styled.button`
  height: 70px;
  width: 70px;
  position: fixed;
  z-index: 1000;
  font-size: 75px;
  line-height: 60px;
  text-align: center;
  left: 28vw;
  bottom: 5vh;
  margin-right: 5vw;
  background: transparent;
  border: transparent;
  border-radius: 5px;
  transition: 0.4s;
  padding-bottom: 10px;
  outline: none;
  &:hover {
    background: #ffffff;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
const PrevButton = styled.button`
  height: 70px;
  width: 70px;
  position: fixed;
  left: 0;
  z-index: 1000;
  border: transparent;
  font-size: 75px;
  line-height: 60px;
  text-align: center;
  bottom: 5vh;
  margin-left: 2vw;
  background: transparent;
  border: transparent;
  border-radius: 5px;
  transition: 0.4s;
  outline: none;
  padding-bottom: 10px;
  &:hover {
    background: #ffffff;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLesson: this.props.match.params.lesson_id,
      currentPage: this.props.match.params.pageoflesson
    };
  }
  // handleForward = e => {
  //   let currentLessonAsNum = parseInt(this.state.currentLesson);
  //   // if currentLessonAsNum=
  //   this.setState({ currentLesson: currentLessonAsNum + 1 });
  // };
  // handleBack = e => {
  //   let currentLessonAsNum = parseInt(this.state.currentLesson);
  //   this.setState({ currentLesson: currentLessonAsNum - 1 });
  // };

  forwardClick = e => {
    let currentLesson = this.state.currentLesson;
    let currentPage = this.state.currentPage;
    let nextPage;
    let nextLesson;

    if (this.props.page[parseInt(currentPage) + 1]) {
      nextPage = parseInt(currentPage) + 1;
      nextLesson = currentLesson;
    } else if (!this.props.page[parseInt(currentPage) + 1]) {
      nextPage = 0;
      nextLesson = parseInt(currentLesson) + 1;
    }
    // console.log(currentLesson, currentPage);

    this.props.history.push(`/lesson/${nextLesson}/${nextPage}`);
  };

  backClick = e => {
    let currentLesson = this.state.currentLesson;
    let currentPage = this.state.currentPage;
    let nextPage;
    let nextLesson;

    if (this.props.page[parseInt(currentPage) - 1]) {
      nextPage = parseInt(currentPage) - 1;
      nextLesson = currentLesson;
    } else if (!this.props.page[parseInt(currentPage) - 1]) {
      nextPage = 0;
      nextLesson = parseInt(currentLesson) - 1;
    }

    this.props.history.push(`/lesson/${nextLesson}/${nextPage}`);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      // console.log("do something");
      this.setState({
        currentLesson: this.props.match.params.lesson_id,
        currentPage: this.props.match.params.pageoflesson
      });
    }
  }

  render() {
    // console.log(`Lesson`, this.state);

    // console.log(`This is this.props`, this.props);
    const { content } =
      this.props.page[this.props.match.params.pageoflesson] || [];

    let currentLesson = this.state.currentLesson;
    let currentPage = this.state.currentPage;

    let nextPage;
    let nextLesson;
    let lastLesson;
    let lastPage;

    if (this.props.page[parseInt(currentPage) + 1]) {
      nextPage = parseInt(currentPage) + 1;
      nextLesson = currentLesson;
    } else if (!this.props.page[parseInt(currentPage) + 1]) {
      nextPage = 0;
      nextLesson = parseInt(currentLesson) + 1;
    }
    if (this.props.page[currentPage - 1] && currentPage > 0) {
      lastPage = currentPage - 1;
      lastLesson = currentLesson;
    } else if (this.props.page[currentPage - 1] && currentPage === 0) {
      lastPage = 0;
      lastLesson = parseInt(currentLesson) - 1;
    }

    return (
      <LessonContent style={this.props.styleProps}>
        <PrettyBox>
          <LessonHeader>
            <h1 className="Title">
              {this.props.page.length &&
                this.props.page[this.state.currentPage].lesson_title}
            </h1>
            <h2 className="Subtitle">
              {this.props.match.params.lesson_id}.{
                this.props.match.params.pageoflesson
              }-
              {this.props.page.length &&
                this.props.page[this.state.currentPage].subtitle}
            </h2>
          </LessonHeader>

          {content &&
            content.map((e, i) => {
              /* console.log(e); */
              return (
                <ContentText className="contentText" key={i}>
                  {e}
                </ContentText>
              );
            })}

          <ForwardButton onClick={e => this.forwardClick(e)}>></ForwardButton>

          <PrevButton onClick={e => this.backClick(e)}>{`<`}</PrevButton>
        </PrettyBox>
      </LessonContent>
    );
  }
}
const mapStateToProps = state => {
  return {
    page: state.lessReducer.lesson
  };
};

export const LessonBar = createSideBar(
  withRouter(connect(mapStateToProps, {})(Lesson))
);

const CourseWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const CourseTitle = styled.p`
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const LinkItem = styled.div`
  font-size: 0.7em;
  color: white;
  margin-bottom: 10px;
  margin-top: 7px;
  cursor: pointer;

  &.linkHover:hover {
    background: #202020;
    transition: 0.4s;
  }
`;
const LinkOptionBox = styled.div`
  height: auto;
  width: 6vw;
  display: none;
  &.one {
    display: flex;
    flex-direction: column;
  }
  &.two {
    display: flex;
    flex-direction: column;
  }
  &.three {
    display: flex;
    flex-direction: column;
  }
  &.four {
    display: flex;
    flex-direction: column;
  }
  &.five {
    display: flex;
    flex-direction: column;
  }
  &.six {
    display: flex;
    flex-direction: column;
  }
  &.seven {
    display: flex;
    flex-direction: column;
  }
  &.eight {
    display: flex;
    flex-direction: column;
  }
  &.nine {
    display: flex;
    flex-direction: column;
  }
`;
const LinkOptions = styled.div`
  width: auto;
  font-size: 0.5em;
  color: white;

  &.optionHover:hover {
    background: #202020;
    transition: 0.4s;
  }
`;
class ProfileSide extends Component {
  constructor() {
    super();
    this.state = {
      oneOpened: false,
      twoOpened: false,
      threeOpened: false,
      fourOpened: false,
      fiveOpened: false,
      sixOpened: false,
      sevenOpened: false,
      eightOpened: false,
      nineOpened: false
    };
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);
    this.handleThree = this.handleThree.bind(this);
    this.handleFour = this.handleFour.bind(this);
    this.handleFive = this.handleFive.bind(this);
    this.handleSix = this.handleSix.bind(this);
    this.handleSeven = this.handleSeven.bind(this);
    this.handleEight = this.handleEight.bind(this);
    this.handleNine = this.handleNine.bind(this);
  }

  handleOne() {
    console.log(this.state.oneOpened);
    this.setState({ oneOpened: !this.state.oneOpened });
  }
  handleTwo() {
    this.setState({ twoOpened: !this.state.twoOpened });
  }
  handleThree() {
    this.setState({ threeOpened: !this.state.threeOpened });
  }
  handleFour() {
    this.setState({ fourOpened: !this.state.fourOpened });
  }
  handleFive() {
    this.setState({ fiveOpened: !this.state.fiveOpened });
  }
  handleSix() {
    this.setState({ sixOpened: !this.state.sixOpened });
  }
  handleSeven() {
    this.setState({ sevenOpened: !this.state.sevenOpened });
  }
  handleEight() {
    this.setState({ eightOpened: !this.state.eightOpened });
  }
  handleNine() {
    this.setState({ nineOpened: !this.state.nineOpened });
  }

  render() {
    return (
      <div style={this.props.styleProps}>
        <CourseWrapper>
          <CourseTitle>HTML</CourseTitle>
          <LinkItem className="linkHover" onClick={this.handleOne}>
            1.1 Intro to HTML
          </LinkItem>
          {this.state.oneOpened && (
            <LinkOptionBox className="one">
              <Link to="/lesson/1/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/1/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/1/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}
          <LinkItem className="linkHover" onClick={this.handleTwo}>
            1.2 Elements and Tags
          </LinkItem>
          {this.state.twoOpened && (
            <LinkOptionBox className="two">
              <Link to="/lesson/2/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/2/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/2/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}
          <LinkItem className="linkHover" onClick={this.handleThree}>
            1.3 Attributes
          </LinkItem>
          {this.state.threeOpened && (
            <LinkOptionBox className="three">
              <Link to="/lesson/3/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/3/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/3/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}
          <LinkItem className="linkHover" onClick={this.handleFour}>
            1.4 HTML Layout
          </LinkItem>
          {this.state.fourOpened && (
            <LinkOptionBox className="four">
              <Link to="/lesson/4/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/4/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/4/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}
          <LinkItem className="linkHover" onClick={this.handleFive}>
            1.5 Tying It All Together
          </LinkItem>
          {this.state.fiveOpened && (
            <LinkOptionBox className="five">
              <Link to="/lesson/5/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/5/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/5/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}
        </CourseWrapper>
        <CourseWrapper>
          <CourseTitle>CSS</CourseTitle>

          <LinkItem className="linkHover" onClick={this.handleSix}>
            2.1 Intro To CSS
          </LinkItem>
          {this.state.sixOpened && (
            <LinkOptionBox className="six">
              <Link to="/lesson/6/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/6/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/6/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}

          <LinkItem className="linkHover" onClick={this.handleSeven}>
            2.2 CSS Syntax
          </LinkItem>
          {this.state.sevenOpened && (
            <LinkOptionBox className="seven">
              <Link to="/lesson/7/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/7/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/7/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}

          <LinkItem className="linkHover" onClick={this.handleEight}>
            2.3 Styling Tools
          </LinkItem>
          {this.state.eightOpened && (
            <LinkOptionBox className="eight">
              <Link to="/lesson/8/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/8/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/8/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}

          <LinkItem className="linkHover" onClick={this.handleNine}>
            2.4 Tying It All Together
          </LinkItem>
          {this.state.nineOpened && (
            <LinkOptionBox className="nine">
              <Link to="/lesson/9/0">
                <LinkOptions className="optionHover">Pre-quiz</LinkOptions>
              </Link>
              <Link to="/lesson/9/1">
                <LinkOptions className="optionHover">Lesson</LinkOptions>
              </Link>
              <Link to="/lesson/9/2">
                <LinkOptions className="optionHover">Post-quiz</LinkOptions>
              </Link>
            </LinkOptionBox>
          )}
          <CourseTitle>Sandbox</CourseTitle>
        </CourseWrapper>
      </div>
    );
  }
}

export const ProfileSideBar = createSideBar(ProfileSide);
