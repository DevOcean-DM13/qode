import React, { Component } from "react";
// Import Brace and the AceEditor Component
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/monokai";

// IMPORTING IN A FEW STYLED COMPONENTS CAPS LOCK
import styled from "styled-components";
import Button from "../../MP-Components/Button.js";

const EditorAndDisplay = styled.div`
  display: flex;
  width: 60vw;
  margin: 0 10vw;
  /* padding: auto 5vw; */
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 5vh; */
  /* align-items: */
`;

const DisplayWindow = styled.div`
  &.displayWindow {
    height: 70vh;
    width: 29.5vw;
    border: 1px solid lightgray;
    display: block;
    background: white;
    margin: 0vh;
    padding: 1vh 2.5vw 0 0vw;

    & p,
    h1 {
    }
  }
`;
const TextEditorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export default class TextEditor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userInput: this.props.default,
      showHTML: true
    };
    this.onChange = this.onChange.bind(this);
    this.createWindow = this.createWindow.bind(this);
  }

  onChange(newValue) {
    // console.log("change", newValue);
    this.setState({ userInput: newValue });
    console.log(this.state.userInput);
  }
  createWindow() {
    return { __html: `${this.state.userInput}` };
  }
  // showHTML(e) {
  //   console.log(e);
  //   this.setState({ showHTML: !this.state.showHTML });
  // }
  render() {
    return (
      <TextEditorContainer>
        <EditorAndDisplay>
          <AceEditor
            className="editor"
            mode="html"
            theme="monokai"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            highlightActiveLine={true}
            editorProps={{
              $blockScrolling: true
            }}
            wrapEnabled={true}
            value={this.state.userInput}
            setOptions={{
              enableBasicAutoCompletion: true,
              enableSnippets: true
            }}
            defaultValue={this.props.default}
            height="70vh"
            width="29.5vw"
          />

          {this.state.showHTML ? (
            <DisplayWindow
              className="displayWindow"
              dangerouslySetInnerHTML={this.createWindow()}
            />
          ) : (
            <DisplayWindow />
          )}
        </EditorAndDisplay>

        <Button style={{ marginTop: "2vh", alignSelf: "center" }}>
          Run Test
        </Button>
      </TextEditorContainer>
    );
  }
}
