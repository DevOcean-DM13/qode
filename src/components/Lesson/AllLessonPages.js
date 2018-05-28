import React, { Component } from "react";
import styled from "styled-components";

// i dont think this is the right way of doing it but i'm trying it out <--michael
import { LessonBar } from "../hoc/SideBars/AllSideBars.js";
import TextEditor from "../hoc/TextEditor/TextEditor.js";

const LessonsPages = styled.div`
  height: 100vh;
  width: 65vw;
  right: 0;
  background: #122932;
  position: fixed;
  font-family: "Roboto", sans-serif;
`;

export default class LessonOneTest extends Component {
  render() {
    return (
      <div>
        <LessonBar />
        <LessonsPages>
          <TextEditor
            default={`<html>
  <body>
    <p>Hello</p>
  </body>
</html>`}
          />
        </LessonsPages>
      </div>
    );
  }
}
