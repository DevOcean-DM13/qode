import React, { Component } from "react";
import createButton from "./SignButtons";
import styled from "styled-components";

class Background extends Component {
  constructor() {
    super();
    this.state = {
      backgroundName: [
        "Developer",
        "Designer",
        "Student",
        "Teacher",
        "Marketing",
        "Other"
      ]
    };
  }
  render() {
    const backMapped = this.state.backgroundName.map((e, i) => {
      return <button style={this.props.styleProps}>{e}</button>;
    });
    return <div>{backMapped}</div>;
  }
}

export const BackgroundButtons = createButton(Background);

class Purpose extends Component {
  constructor() {
    super();
    this.state = {
      purposeName: ["Have Fun", "Just Learn", "Career Interest"]
    };
  }
  render() {
    const purpMapped = this.state.purposeName.map((e, i) => {
      return <button style={this.props.styleProps}>{e}</button>;
    });
    return <div>{purpMapped}</div>;
  }
}

export const PurposeButtons = createButton(Purpose);
