import React, { Component } from "react";

const createButton = WrappedComponent => {
  class SignButton extends Component {
    render() {
      return (
        <div>
          <WrappedComponent />
        </div>
      );
    }
  }
  return SignButton;
};

export default createButton;
