import React, { Component } from "react";
import styled from "styled-components";

// i dont think this is the right way of doing it but i'm trying it out <--michael
import { EleAndTagSideBar } from "../hoc/SideBars/AllSideBars.js";
import TextEditor from "../hoc/TextEditor/TextEditor.js";

const LessonsPages = styled.div`
  height: 100vh;
  width: 65vw;
  right: 0;
  background: #122932;
  position: fixed;
  font-family: "Noto Sans", sans-serif;
`;

export default class LessonOneTest extends Component {
  render() {
    return (
      <div>
        <EleAndTagSideBar />
        <LessonsPages>
          <TextEditor />
        </LessonsPages>
      </div>
    );
  }
}
