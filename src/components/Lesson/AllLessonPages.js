import React, { Component } from "react";
import createLessonPage from "./Lessons";
import styled from "styled-components";

// i dont think this is the right way of doing it but i'm trying it out <--michael
import { EleAndTagSideBar } from "../hoc/SideBars/AllSideBars.js";
import TextEditor from "../hoc/TextEditor/TextEditor.js";

export default class LessonOne extends Component {
  render() {
    return (
      <div>
        <EleAndTagSideBar />
        <div style={this.props.styleProps}>
          <TextEditor />
        </div>
      </div>
    );
  }
}

export const LessonOneTest = createLessonPage(LessonOne);
