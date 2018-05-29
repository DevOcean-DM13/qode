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
`;

class LessonPage extends Component {
  componentDidMount() {
    this.props.getLesson(this.props.match.params.lesson_id);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.getLesson(this.props.match.params.lesson_id).then(() => {
        console.log(`whyyounoupdate`);
        this.setState({});
      });
    }
  }
  render() {
    console.log(`LESSON HOC`, this.props);

    return (
      <div>
        <LessonBar lesson={this.props.lesson} />
        {this.props.lesson[this.props.match.params.lesson_id] &&
        this.props.lesson[this.props.match.params.lesson_id].has_editor_imp ? (
          <LessonsPages>
            <TextEditor
              default={`<html>
  <body>
    <p>Hello</p>
  </body>
</html>`}
            />
          </LessonsPages>
        ) : /* <Quiz /> */ null}
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
