import React, { Component } from "react";
import { connect } from "react-redux";
import createButton from "./SignButtons";
import styled from "styled-components";
import { updateBackground, updatePurpose } from "../../../ducks/userReducer";

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
    console.log("button Chosen: ", e);
  };
  render() {
    console.log(this.props);
    const backMapped = this.state.backgroundName.map((e, i) => {
      return (
        <Button
          key={i}
          onClick={() => this.backgroundChoice(e)}
          className="backButt"
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
    background: state.userReducer.background
  };
};

export const BackgroundButtons = createButton(
  connect(mapStateToProps, { updateBackground })(Background)
);

class Purpose extends Component {
  constructor() {
    super();
    this.state = {
      button: "",
      purposeName: ["Have Fun", "Just Learn", "Career Interest"]
    };
  }
  purposeChoice = e => {
    this.setState({ button: e.e });
    console.log(`button Chosen:`, e.e);
  };
  render() {
    const purpMapped = this.state.purposeName.map((e, i) => {
      return (
        <Button
          key={i}
          onClick={() => this.purposeChoice({ e })}
          name={e}
          className="backButt"
          style={this.props.styleProps}
        >
          {e}
        </Button>
      );
    });
    return <ButtonContainer>{purpMapped}</ButtonContainer>;
  }
}

export const PurposeButtons = connect(mapStateToProps, { updatePurpose })(
  createButton(Purpose)
);
