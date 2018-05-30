import React, { Component } from "react";
import { LessonBar } from "../hoc/SideBars/AllSideBars";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getQuiz } from "../../ducks/quizRedux";

const QuizComponent = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  width: 55vw;
  margin: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 4rem;
  }
  & h2 {
    font-size: 3rem;
  }
`;

const AnswersContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`;
const AnswerBox = styled.div`
  display: inline-block;
  height: 10vh;
  width: 40%;
  border: 1px solid black;
  margin: 2vh 1vw;
  text-align: center;
  font-size: 2rem;
`;
const NextQuestionButton = styled.button`
  height: 35px;
  width: 180px;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px #a0dcff;

  &:hover {
    outline: none;
    /* box-shadow: 0.5px 0.5px 3px #dee9f9; */
    background: #ff7860;
    transition: 0.2s;
    cursor: pointer;
  }
  &:active {
    /* background: #8bb8e3; */
    /* background: #51cc82; */
    background: #ff7860;
    color: white !important;
    border: none;
  }
`;
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      currentLesson: parseInt(this.props.match.params.lesson_id),
      currentPage: parseInt(this.props.match.params.pageoflesson),
      chosenAnswer: "",
      score: 0
    };
  }

  answerQuestion = e => {
    this.setState({ chosenAnswer: e.e });
    console.log(e.e);
  };
  componentDidMount() {
    this.props.getQuiz(this.props.quiz_id);
  }

  render() {
    // let { answerOptions } = this.props.quiz[this.state.questionIndex];

    let currentLesson = this.state.currentLesson;
    let currentPage = this.state.currentPage;
    let nextLesson;
    let nextPage;

    if (currentPage === 0) {
      nextLesson = parseInt(currentLesson);
      nextPage = parseInt(currentPage + 1);
    } else {
      nextPage = 0;
      nextLesson = parseInt(currentLesson) + 1;
    }

    console.log(
      this.props,
      this.state,
      `Current Lesson`,
      currentLesson,
      `currentPage`,
      currentLesson,
      `Next Lesson:`,
      nextLesson,
      `Next Page:`,
      nextPage
    );

    return (
      <div>
        <LessonBar />
        {this.props.quiz.length && (
          <QuizComponent>
            <h2>{this.props.quiz[this.state.questionIndex].text}</h2>

            <AnswersContainer>
              {this.props.quiz[this.state.questionIndex].options ? (
                this.props.quiz[this.state.questionIndex].options.map(
                  (e, i) => {
                    return (
                      <AnswerBox
                        name={e}
                        onClick={() => this.answerQuestion({ e })}
                        key={i}
                      >
                        {e}
                      </AnswerBox>
                    );
                  }
                )
              ) : (
                <h1>tests</h1>
              )}
            </AnswersContainer>
            <NextQuestionButton
              onClick={() =>
                this.setState({ questionIndex: this.state.questionIndex + 1 })
              }
            >
              Next Q
            </NextQuestionButton>
          </QuizComponent>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quiz: state.quizRedux.quiz
  };
};

export default withRouter(connect(mapStateToProps, { getQuiz })(Quiz));
