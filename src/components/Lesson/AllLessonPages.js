import React, { Component } from "react";
import styled from "styled-components";

// i dont think this is the right way of doing it but i'm trying it out <--michael
import { LessonBar } from "../hoc/SideBars/AllSideBars.js";
import TextEditor from "../hoc/TextEditor/TextEditor.js";
import Quiz from "../Quiz/Quiz";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getLesson } from "../../ducks/lessReducer";

const LessonsPages = styled.div`
  height: 100vh;
  width: 65vw;
  right: 0;
  background: #122932;
  position: fixed;
  font-family: "Roboto", sans-serif;
  color: white;
  /* z-index: -10; */
`;

class LessonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.match.params.pageoflesson
      // currentLesson: this.props.match.params.lesson_id
      // currentPage: this.props.match.params.pageoflesson
    };
  }
  componentDidMount() {
    this.props
      .getLesson(this.props.match.params.lesson_id)
      .then(() =>
        console.log(
          `test for quiz_id`,
          this.props.lesson[this.state.page].quiz_id
        )
      );
    // .then(pageList =>
    //   this.setState({ page: pageList[this.props.match.params.pageoflesson] })
    // );
    // .then(() =>
    // console.log(
    //   `LOOK HERE BITCH`,
    //   this.props.lesson[this.props.match.params.lesson_id].has_editor_imp
    // )
    // );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.getLesson(this.props.match.params.lesson_id).then(() => {
        // console.log(`whyyounoupdate`);
        this.setState({ page: this.props.match.params.pageoflesson });
      });
    }
  }
  render() {
    console.log(
      `lesson props in AllLessonPages`,
      this.state.page,
      this.props.lesson,
      this.props.match.params,
      this.props.lesson[this.state.page]
    );

    return (
      <div>
        <LessonBar lesson={this.props.lesson} />

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
            <LessonsPages>
              <Quiz quiz_id={this.props.lesson[this.state.page].quiz_id} />
            </LessonsPages>
          )}
        {this.props.lesson[this.state.page] &&
          this.props.lesson[this.state.page].page_type === "postquiz" && (
            <LessonsPages>
              <Quiz quiz_id={this.props.lesson[this.state.page].quiz_id} />
            </LessonsPages>
          )}
        {this.props.lesson[this.state.page] &&
          this.props.lesson[this.state.page].page_type === "lesson" && (
            <LessonsPages />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lesson: state.lessReducer.lesson
  };
};

export default withRouter(connect(mapStateToProps, { getLesson })(LessonPage));
