import React, { Component } from "react";
import createButton from "./SignButtons";
import styled from "styled-components";

const Button = styled.button`
  &.backButt:hover {
    background: pink;
    transition: 0.5s;
  }
`;

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
      return (
        <Button className="backButt" style={this.props.styleProps}>
          {e}
        </Button>
      );
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
      return (
        <Button className="backButt" style={this.props.styleProps}>
          {e}
        </Button>
      );
    });
    return <div>{purpMapped}</div>;
  }
}

export const PurposeButtons = createButton(Purpose);
