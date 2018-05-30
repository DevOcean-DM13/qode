import React, { Component } from "react";
import { LessonBar } from "../hoc/SideBars/AllSideBars";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getQuiz } from "../../ducks/quizRedux";
import Swal from "sweetalert2";

const QuizComponent = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  width: 90vw;
  height: 90vh;
  margin: 5vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 5px;
  background: #000000;
  justify-content: space-between;

  & h1 {
    font-size: 4rem;
    font-family: "Work Sans", sans-serif;
  }
  & h2 {
    font-size: 3rem;
    font-family: "Roboto", sans-serif;
  }
`;

const AnswersContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid transparent;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  height: 60vh;
  border-radius: 5px;
  width: 100%;
  background: white;
`;

const AnswerBox = styled.div`
  /* display: inline-block; */
  height: 10vh;
  width: 40%;
  border: 1px solid transparent;
  border-radius: 5px;
  margin: 2vh 1vw;
  text-align: center;
  font-size: 2rem;
  background: #848c8e;
  font-family: "Roboto", sans-serif;
  &:hover {
    transition: 0.4s;
    background: #ff7860;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const NextQuestionButton = styled.button`
  height: 35px;
  width: 180px;
  border-radius: 6px;
  outline: none;
  font-size: 0.75em;
  border: solid 1px transparent;

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
      score: 0,
      showSweetAlert: false
    };
  }

  answerQuestion = e => {
    this.setState({ chosenAnswer: e.e }, () => this.evaluateAnswer());
  };

  evaluateAnswer = () => {
    console.log(
      this.state.chosenAnswer,
      this.props.quiz[this.state.questionIndex].correct_answer
    );
    Swal({
      position: "center",
      target: "AnswerBox"
    });
    // this.state.chosenAnswer ===
    //   this.props.quiz[this.state.questionIndex].correct_answer
    //     ? alert("That's right, you're a coding ninja!")
    //     : alert("Try again");
  };

  componentDidMount() {
    this.props.getQuiz(this.props.quiz_id).then(() => {
      Swal({
        title: `${this.props.pageContent.content[0]}`,
        confirmButtonText: "I'm Ready",
        padding: "3em",
        color: "#ffffff",
        background: "#000000",
        confirmButtonColor: "#00a7e1"
      });
    });
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
        {/* <LessonBar
          id="QuizLessonBar"
          style={{ background: "red ! important" }}
        /> */}
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

            {this.state.questionIndex <= 1 ? (
              <NextQuestionButton
                onClick={() =>
                  this.setState({ questionIndex: this.state.questionIndex + 1 })
                }
              >
                Next Q
              </NextQuestionButton>
            ) : (
              <NextQuestionButton
                onClick={() =>
                  this.props.history.push(`/lesson/${nextLesson}/${nextPage}`)
                }
              >
                Continue to Lesson
              </NextQuestionButton>
            )}
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
