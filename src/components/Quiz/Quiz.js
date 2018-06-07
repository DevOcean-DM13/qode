import React, { Component } from "react";
import { LessonBar } from "../hoc/SideBars/AllSideBars";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getQuiz } from "../../ducks/quizRedux";
import { getLast } from "../../ducks/lessReducer.js";
import { getUser } from "../../ducks/userReducer.js";
import Swal from "sweetalert2";

const QuizComponent = styled.div`
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 10vh;
  width: 90vw;
  height: 90vh;
  margin: 0 5vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 5px;
  background: #000000;
  justify-content: space-around;

  & h1 {
    font-size: 4rem;
    font-family: "Work Sans", sans-serif;
  }

  & h2 {
    font-size: 3rem;
    font-family: "Roboto", sans-serif;
  }

  &.blurred {
    filter: blur(1rem);
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
  display: flex;
  justify-content: center;
  align-items: center;
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
const PrevButton = styled.button`
  width: 10vw;
  font-size: 15px;
  position: top;
  left: 0;
  bottom: 0;
  z-index: 1000;
  border: 1px solid;
  line-height: 60px;
  text-align: center;
  bottom: 5vh;
  background: white;
  border-radius: 5px;
  transition: 0.4s;
  padding: 1vh 0;
  outline: none;
  &:hover {
    background: #9b111e;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
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
      blurPage: true,
      moveOn: false
    };
  }

  answerQuestion = e => {
    this.setState({ chosenAnswer: e.e }, () => this.evaluateAnswer());
  };

  backClick = e => {
    let currentLesson = this.state.currentLesson;
    let currentPage = this.state.currentPage;
    let nextLesson;
    let nextPage;

    if (currentPage > 0) {
      nextLesson = parseInt(currentLesson);
      nextPage = 1;
    } else if (currentPage === 0) {
      console.log(`hereherehereh ${currentLesson - 1}`);
      console.log(this.state);
      nextLesson = currentLesson - 1;
      nextPage = 1;

      console.log(nextPage);
    }

    this.props.history.push(`/lesson/${nextLesson}/${nextPage}`);
  };

  evaluateAnswer = () => {
    console.log(
      `chosen`,
      this.state.chosenAnswer,
      `correct`,
      this.props.quiz[this.state.questionIndex].correct_answer
    );

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

    let chosen = this.state.chosenAnswer;
    let correct = this.props.quiz[this.state.questionIndex].correct_answer;
    chosen === correct
      ? Swal({
          type: "success",
          title: "Congrats",
          text: `${this.props.quiz[this.state.questionIndex].explanation[0]}`,
          position: "center",
          target: "AnswerBox",
          confirmButtonColor: "#00a7e1"
        }).then(
          () =>
            this.state.questionIndex <= 1
              ? this.setState({ questionIndex: this.state.questionIndex + 1 })
              : this.props.history.push(`/lesson/${nextLesson}/${nextPage}`)
        )
      : Swal({
          title: "Your work has been saved",
          type: "warning",
          text: `${this.props.quiz[this.state.questionIndex].explanation[1]}`
        });
  };

  componentDidMount() {
    this.props.getUser();
    this.props.getQuiz(this.props.quiz_id).then(() => {
      Swal({
        title: `${this.props.pageContent.content[0]}`,
        confirmButtonText: "I'm Ready",
        padding: "3em",
        color: "#ffffff",
        background: "#000000",
        confirmButtonColor: "#00a7e1"
      }).then(() => this.setState({ blurPage: !this.state.blurPage }));
    });

    let currentLesson = this.state.currentLesson;
    this.props.getLast(currentLesson - 1);
  }

  render() {
    // console.log(
    //   `THIS IS THIS.PROPS.QUIZ:`,
    //   this.props.quiz,
    //   `ABOVE IS THIS.PROPS.QUIZ:`,
    //   this.props,
    //   this.state,
    //   `Current Lesson`,
    //   currentLesson,
    //   `currentPage`,
    //   currentLesson,
    //   `Next Lesson:`,
    //   nextLesson,
    //   `Next Page:`,
    //   nextPage
    // );
    console.log(this.props);
    console.log(this.props.lessons);
    return (
      <div>
        {/* <LessonBar
          id="QuizLessonBar"
          style={{ background: "red ! important" }}
        /> */}
        {this.props.quiz.length && (
          <QuizComponent className={this.state.blurPage && "blurred"}>
            <PrevButton data-cy-back-button onClick={e => this.backClick(e)}>
              back to lesson
            </PrevButton>

            <h3>Question {this.state.questionIndex + 1}:</h3>
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
          </QuizComponent>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quiz: state.quizRedux.quiz,
    lessons: state.lessReducer.lesson,
    lastLesson: state.lessReducer.lastLesson
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getQuiz, getLast, getUser }
  )(Quiz)
);
