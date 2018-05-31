import React, { Component } from "react";
// Import Brace and the AceEditor Component
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/ambiance";
import "brace/theme/ambiance";

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

export default class LandingEditor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userInput: `
<!-- Pass this small test to proceed to sign up -->

<h1>Hi from an h1 tag!</h1>   
<h2>Hi from an h2 tag!</h2> 

<!-- What is missing below? -->

<p>What is it?
  `,
      showHTML: true
    };
    this.onChange = this.onChange.bind(this);
    this.createWindow = this.createWindow.bind(this);
    this.showHTML = this.showHTML.bind(this);
  }

  onChange(newValue) {
    // console.log("change", newValue);
    this.setState({ userInput: newValue });
    console.log(this.state.userInput);
  }
  createWindow() {
    return { __html: `${this.state.userInput}` };
  }
  showHTML() {
    this.setState({ showHTML: !this.state.showHTML });
  }
  render() {
    return (
      <TextEditorContainer>
        <EditorAndDisplay>
          <AceEditor
            mode="html"
            theme="ambiance"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            height="300px"
            width="35vw"
            highlightActiveLine={true}
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
        {/* <div>
          <Button onClick={e => this.showHTML(e)}>Run code</Button>
        </div> */}
      </TextEditorContainer>
    );
  }
}
