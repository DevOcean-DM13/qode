import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const AccordionItem = styled.div`
  &.active .folding-pannel {
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 13px;
  }
  &.inactive .folding-pannel {
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
`;

const ItemHover = styled.div`
  &:hover {
    background: #ff7860;
  }
`;

const AccordionContainer = styled.div`
  width: 60%;
  min-width: 500px;
  margin: 5vh auto;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 0px 3px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 13px;
`;

const AccordionLabel = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  line-height: 25px;
  padding: 15px;
  display: inline-block;
`;

const FoldingPanel = styled.div`
  display: block;
  transition: all 0.1s ease-in;
  background: #fff;
  color: black;

  &.active {
    transition: all 0.4s ease-in-out;
    line-height: 40px;
    text-indent: 40px;
  }
`;

const AccordionTitle = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 66px;
  margin-top: 10vh;
  letter-spacing: 10px;
`;

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }
  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    const lesson = this.props.details;
    return (
      <AccordionItem className={activeClass} onClick={this.toggle}>
        <AccordionLabel className="title">{lesson.title}</AccordionLabel>
        <FoldingPanel className="folding-pannel description">
          {lesson.summary}
        </FoldingPanel>
      </AccordionItem>
    );
  }
}

export default class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      lessons: sampleQuestions
    };
    this.renderQuestion = this.renderQuestion.bind(this);
  }
  renderQuestion(key) {
    return (
      <ItemHover>
        <Item key={key} index={key} details={this.state.lessons[key]} />{" "}
      </ItemHover>
    );
  }
  render() {
    return (
      <AccordionContainer className="accordion-container">
        {Object.keys(this.state.lessons).map(this.renderQuestion)}
      </AccordionContainer>
    );
  }
}

const sampleQuestions = {
  lesson1: {
    title: "HTML",
    summary:
      "The backbone of a website! Learn what HTML is, how it's used and how to write a basic HTML skeleton."
  },
  lesson2: {
    title: "CSS",
    summary:
      "What's life without style? Learn how to manipulate the way your html looks."
  },
  lesson3: {
    title: "Javascript",
    summary:
      "Learn how to make your website functional with the de facto language of the internet!. (courses coming soon)"
  }
};
