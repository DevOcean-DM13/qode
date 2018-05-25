import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// AUXILLARY STYLED COMPONENTS
// const AccordionButton = styled.button`
//   background-color: #eee;
//   color: #444;
//   cursor: pointer;
//   padding: 18px;
//   width: 100%;
//   text-align: left;
//   border: none;
//   outline: none;
//   transition: 0.4s;
//   &:hover {
//     background: tomato;
//   }
// `;
// const AccordionPanel = styled.div`
//   padding: 0 18px;
//   background: white;
//   display: none;
//   overflow: hidden;
// `;

const AccordionItem = styled.div`
  &.active .folding-pannel {
    transform: perspective(350px) rotateX(0deg);
    transition: all 0.4s ease-in-out;
    line-height: 40px;
    text-indent: 40px;
  }
  &.inactive .folding-pannel {
    transform-origin: 50% 0%;
    transform: perspective(250px) rotateX(-90deg);
    transition: all 0.4s ease-in-out;
    height: 0;
  }
`;

const AccordionContainer = styled.div`
  width: 60%;
  min-width: 500px;
  margin: 5vh auto;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: -1px 2px 2px 1px #e2dfdf;

  &div {
    border-bottom: 3px solid;
    gitborder-color: purple;
    transition: border-color 0.5s ease-in;
  }
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
  transition: all 0.2s ease-in;
  line-height: 30px;
  border-top: 2px solid #3a3042;
  background: #3a3042;
  color: #fff;

  &.active {
    transform: perspective(350px) rotateX(0deg);
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
    return <Item key={key} index={key} details={this.state.lessons[key]} />;
  }
  render() {
    return (
      <div>
        <AccordionTitle>Lessons Include</AccordionTitle>
        <AccordionContainer className="accordion-container">
          {Object.keys(this.state.lessons).map(this.renderQuestion)}
        </AccordionContainer>
      </div>
    );
  }
}

const sampleQuestions = {
  lesson1: {
    title: "HTML",
    summary:
      "Learn what HTML is, how it's used and how to write a basic HTML skeleton."
  },
  lesson2: {
    title: "CSS",
    summary: "Learn how to manipulate the way your html looks."
  },
  lesson3: {
    title: "Javascript",
    summary:
      "Learn how to make your website functional with javascript methods."
  }
};
