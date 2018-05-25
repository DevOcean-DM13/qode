import React, { Component } from "react";
import { EleAndTagSideBar } from "../hoc/SideBars/AllSideBars";
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
    this.state = {
      buttonChosen: "",
      current: "One"
    };
  }
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.html.sectionOne.pre.one.answers);
  }

  handleCorrect(event) {}
  handleClick = e => {
    this.setState({ buttonChosen: e });
    if (e == this.props.html["section" + this.state.current].pre.one.correct) {
      alert("correct!");
    } else {
      alert("wrong");
    }
  };

  render() {
    const mapped = this.props.html.sectionOne.pre.one.answers.map((e, i) => {
      return (
        <AnswerBox onClick={event => this.handleClick(e)} key={i}>
          {e}
        </AnswerBox>
      );
    });
    return (
      <div>
        <EleAndTagSideBar />
        <QuizComponent>
          <h1>Quiz 1</h1>
          <h2>{this.props.html.sectionOne.pre.one.prompt}</h2>
          <AnswersContainer>{mapped}</AnswersContainer>
        </QuizComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.quizReducer };
};

export default connect(mapStateToProps, { getHtmlQuestions })(Quiz);
