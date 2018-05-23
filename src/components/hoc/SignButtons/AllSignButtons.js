import React, { Component } from "react";
import createButton from "./SignButtons";
import styled from "styled-components";

const Button = styled.button`
  &.backButt:hover {
    box-shadow: 0.5px 0.5px 3px #dee9f9;
    transition: 0.2s;
  }
`;
const ButtonContainer = styled.div`
  width: auto;
  height: auto;
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
    return <ButtonContainer>{backMapped}</ButtonContainer>;
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
    return <ButtonContainer>{purpMapped}</ButtonContainer>;
  }
}

export const PurposeButtons = createButton(Purpose);
