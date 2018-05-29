import React, { Component } from "react";
import { LessonBar } from "../hoc/SideBars/AllSideBars";
import styled from "styled-components";

import { getHtmlQuestions } from "../../ducks/quizReducer";
import { connect } from "react-redux";

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

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { question: 1, section: 1 };
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <LessonBar />
        <QuizComponent>
          <h1>hello</h1>
          <h2>Question 1</h2>
          <AnswersContainer>
            <AnswerBox>
              <p>Answer</p>
            </AnswerBox>
            <AnswerBox>Ansa 2</AnswerBox>
            <AnswerBox>Ansa 3</AnswerBox>
            <AnswerBox>Ansa 4</AnswerBox>
          </AnswersContainer>
        </QuizComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    htmlQuizes: state.quizReducer.html
  };
};

export default connect(mapStateToProps, { getHtmlQuestions })(Quiz);
