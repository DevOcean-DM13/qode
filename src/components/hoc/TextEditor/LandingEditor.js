import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Button from "../../MP-Components/Button.js";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/ambiance";
import "brace/theme/monokai";
import Swal from "sweetalert2";

// IMPORTING IN A FEW STYLED COMPONENTS CAPS LOCK
import styled from "styled-components";
const EditorAndDisplay = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

const DisplayWindow = styled.div`
  height: 60.6vh;
  /* width: 42.5vh; */
  border: 1px solid lightgray;
  display: block;
  width: 0px;
  z-index: -1;
`;
const TextEditorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 88%;
`;
class LandingEditor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userInput: this.props.default,
      showHTML: true,
      correct: false,
      correctAnswer: `
<!-- Pass this small test to proceed to sign up -->

<h1>Hi from an h1 tag!</h1>   
<h2>Hi from an h2 tag!</h2> 

<!-- What is missing below? -->

<p>What is it?</p>`
    };
    this.onChange = this.onChange.bind(this);
    this.createWindow = this.createWindow.bind(this);
    this.showHTML = this.showHTML.bind(this);
  }

  onChange(newValue) {
    // console.log("change", newValue);
    this.setState({ userInput: newValue });
  }
  createWindow() {
    return { __html: `${this.state.userInput}` };
  }
  showHTML() {
    this.setState({ showHTML: !this.state.showHTML });
  }

  checkAnswer = () => {
    Swal({
      text: "Good Try",
      type: "success",
      confirmButtonText: "Sign Up"
    }).then(() => {
      this.props.history.push("/signup");
    });
  };
  render() {
    return (
      <TextEditorContainer>
        <EditorAndDisplay>
          <AceEditor
            mode="html"
            theme="monokai"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            height="300px"
            width="35vw"
            highlightActiveLine={true}
            defaultValue={this.props.default}
            editorProps={{
              $blockScrolling: true
            }}
            value={this.state.userInput}
            setOptions={{
              enableBasicAutoCompletion: true,
              enableSnippets: true
            }}
          />
        </EditorAndDisplay>
        <SignUpContainer>
          <Button data-cy-checkanswer onClick={this.checkAnswer}>
            Check Answer
          </Button>
        </SignUpContainer>
      </TextEditorContainer>
    );
  }
}

export default withRouter(LandingEditor);
const SignUpContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
