import React, { Component } from "react";
import styled from "styled-components";

// i dont think this is the right way of doing it but i'm trying it out <--michael
import { LessonBar } from "../hoc/SideBars/AllSideBars.js";
import TextEditor from "../hoc/TextEditor/TextEditor.js";
import Quiz from "../Quiz/Quiz";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getLesson } from "../../ducks/lessReducer";
import { getUser } from "../../ducks/userReducer";

const LessonsPages = styled.div`
  height: 100vh;
  width: 65vw;
  right: 0;
  position: fixed;
  font-family: "Roboto", sans-serif;
  background: #435058;
  color: white;
  /* z-index: -10; */

  &.Quiz {
    width: 100vw;
  }
`;

class LessonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.match.params.pageoflesson
    };
  }
  componentDidMount() {
    this.props.getLesson(this.props.match.params.lesson_id);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.getLesson(this.props.match.params.lesson_id).then(() => {
        this.setState({ page: this.props.match.params.pageoflesson });
      });
    }
  }
  render() {
    console.log(
      `page`,
      this.state.page,
      `all lesson`,
      this.props.lesson,
      `params object`,
      this.props.match.params,
      `page content`,
      this.props.lesson[this.state.page]
    );
    console.log(this.props);

    return (
      <div>
        {this.state.page !== 0 && <LessonBar lesson={this.props.lesson} />}

        {this.props.lesson[this.state.page] &&
          this.props.lesson[this.state.page].has_editor_imp && (
            <LessonsPages>
              <TextEditor
                default={`<html>
  <body>
    <p>Hello</p>
  </body>
</html>`}
              />
            </LessonsPages>
          )}

        {this.props.lesson[this.state.page] &&
          this.props.lesson[this.state.page].page_type === "prequiz" && (
            <LessonsPages className="Quiz" page={this.state.page}>
              <Quiz
                quiz_id={this.props.lesson[this.state.page].quiz_id}
                pageContent={this.props.lesson[this.state.page]}
              />
            </LessonsPages>
          )}
        {this.props.lesson[this.state.page] &&
          this.props.lesson[this.state.page].page_type === "postquiz" && (
            <LessonsPages className="Quiz">
              <Quiz
                quiz_id={this.props.lesson[this.state.page].quiz_id}
                pageContent={this.props.lesson[this.state.page]}
              />
            </LessonsPages>
          )}
        {this.props.lesson[this.state.page] &&
          this.props.lesson[this.state.page].page_type === "lesson" && (
            <LessonsPages page={this.state.page} />
          )}
      </div>
    );
  }
}
//this.props.userReducer.user
//this.props.user
//

const mapStateToProps = state => {
  console.log("mstp state", state);
  return {
    lesson: state.lessReducer.lesson,
    user: state.userReducer.user
  };
};

export default withRouter(
  connect(mapStateToProps, { getLesson, getUser })(LessonPage)
);
