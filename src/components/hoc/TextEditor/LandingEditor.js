import React, { Component } from "react";
// Import Brace and the AceEditor Component
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/ambiance";

// IMPORTING IN A FEW STYLED COMPONENTS CAPS LOCK
import styled from "styled-components";
import Button from "../../MP-Components/Button.js";

const EditorAndDisplay = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

const DisplayWindow = styled.div`
  height: 60.6vh;
  ${"" /* width: 42.5vh; */} border: 1px solid lightgray;
  display: block;
`;
const TextEditorContainer = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default class LandingEditor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userInput: "",
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
            theme="monokai"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            highlightActiveLine={true}
            editorProps={{
              $blockScrolling: true
            }}
            value={this.state.userInput}
            setOptions={{
              enableBasicAutoCompletion: true,
              enableSnippets: true
            }}
            height="70vh;"
          />

          {this.state.showHTML ? (
            <DisplayWindow dangerouslySetInnerHTML={this.createWindow()} />
          ) : (
            <DisplayWindow />
          )}
        </EditorAndDisplay>
        <div>
          <Button onClick={e => this.showHTML(e)}>Run code</Button>
        </div>
      </TextEditorContainer>
    );
  }
}