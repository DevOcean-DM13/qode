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
    color: white;
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
    color: white;
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

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  &.contentText {
    color: white;
    font-size: 1rem;
  }

  & p {
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

    // console.log(
    //   `current:`,
    //   currentLesson,
    //   currentPage,
    //   "next:",
    //   nextLesson,
    //   nextPage,
    //   "last:",
    //   lastLesson,
    //   lastPage
    // );

    //tests for css activities;
    //scores for quizes;
    //randomize in database;
    //check all content for grammar, spelling, 4 answers..
    //cypress tests
    //endpoints tests
    //TextEditor default values?
    //profile page lesson links
    //completed section functionality

    // this.props.page[this.state.currentPage + 1]
    //   ? this.setState({ nextPage: this.state.currentPage + 1 })
    //   : null;

    // this.props.page[this.state.currentPage + 1]
    //   ? null
    //   : this.setState({ nextLesson: this.state.currentLesson + 1 });
    // let nextlesson = this.state.nextLesson;
    // let nextpage = this.state.nextPage;

    // console.log(`HERE! LOOK HERE!`, this.props.page[this.state.currentPage]);

    return (
      <LessonContent style={this.props.styleProps}>
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
            {
              /* console.log(e); */
            }
            return (
              <ContentText className="contentText" key={i}>
                {e}
              </ContentText>
            );
          })}
        {/* <p style={{ fontSize: "2rem" }}>
          {`${this.props["lesson" + this.state.currentLesson]}`}
        </p> */}

        <ForwardButton onClick={e => this.forwardClick(e)}>></ForwardButton>

        <PrevButton onClick={e => this.backClick(e)}>{`<`}</PrevButton>
      </LessonContent>
    );
  }
}

const LessonContent = styled.div`
  & p.test {
    color: "white";
  }

  h1 {
    font-weight: 700;
  }
  h2 {
    font-weight: 400;
  }
`;

const mapStateToProps = state => {
  return {
    page: state.lessReducer.lesson
  };
};

export const LessonBar = createSideBar(
  withRouter(connect(mapStateToProps, {})(Lesson))
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
