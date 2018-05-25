import React, { Component } from "react";

const createButton = WrappedComponent => {
  class SignButton extends Component {
    constructor() {
      super();
      this.state = {
        styleProps: {
          height: "35px",
          width: "180px",
          borderRadius: "6px",
          outline: "none",
          marginRight: "25px",
          marginBottom: "18px",
          fontSize: ".75em",
          border: "solid 1px #a0dcff",
          color: "#434747",
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "400",
          letterSpacing: ".5px"
        }
      };
    }
    render() {
      return <WrappedComponent {...this.state} />;
    }
  }
  return SignButton;
};

export default createButton;
