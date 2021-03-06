import React, { Component } from "react";
import { connect } from "react-redux";
import createButton from "./SignButtons";
import styled from "styled-components";
import { updateBackground, updatePurpose } from "../../../ducks/userReducer";

const Button = styled.button`
  border: solid 1px #a0dcff;
  /* flex-basis:1; */
  background: transparent;
  &.backButt:hover {
    box-shadow: 0.5px 0.5px 3px #dee9f9;
    transition: 0.2s;
    cursor: pointer;
  }
  &.backButt.chosen {
    /* background: #8bb8e3; */
    /* background: #51cc82; */
    background: #ff7860;
    color: white !important;
    border: none;
  }
`;
const ButtonContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

class Background extends Component {
  constructor() {
    super();
    this.state = {
      buttonChosen: "",
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
  backgroundChoice = e => {
    this.setState({ buttonChosen: e }, () => {
      this.props.updateBackground(this.state.buttonChosen);
    });
  };
  render() {
    const backMapped = this.state.backgroundName.map((e, i) => {
      return (
        <Button
          data-cy-background
          key={i}
          onClick={() => this.backgroundChoice(e)}
          className={`backButt ${
            this.state.buttonChosen === `${e}` ? "chosen" : "notChosen"
          }`}
          style={this.props.styleProps}
        >
          {e}
        </Button>
      );
    });
    return <ButtonContainer>{backMapped}</ButtonContainer>;
  }
}

const mapStateToProps = state => {
  return {
    purpose: state.userReducer.purpose,
    coding_background: state.userReducer.coding_background
  };
};

export const BackgroundButtons = createButton(
  connect(
    mapStateToProps,
    { updateBackground }
  )(Background)
);

class Purpose extends Component {
  constructor() {
    super();
    this.state = {
      buttonChoice: "",
      purposeName: ["Have Fun", "Just Learn", "Career Interest"]
    };
  }
  purposeChoice = e => {
    this.setState({ buttonChoice: e.e }, () =>
      this.props.updatePurpose(this.state.buttonChoice)
    );
  };
  render() {
    const purpMapped = this.state.purposeName.map((e, i) => {
      return (
        <Button
          data-cy-purpose
          key={i}
          onClick={() => this.purposeChoice({ e })}
          name={e}
          className={`backButt ${
            this.state.buttonChoice === `${e}` ? "chosen" : "notChosen"
          }`}
          style={this.props.styleProps}
        >
          {e}
        </Button>
      );
    });
    return <ButtonContainer>{purpMapped}</ButtonContainer>;
  }
}

export const PurposeButtons = createButton(
  connect(
    mapStateToProps,
    { updatePurpose }
  )(Purpose)
);
