import React, { Component } from "react";
import createButton from "./SignButtons";

class Background extends Component {
  render() {
    return (
      <div>
        <button />
      </div>
    );
  }
}

export const BackgroundButtons = createButton(Background);

class Purpose extends Component {
  render() {
    return (
      <div>
        <button />
      </div>
    );
  }
}

export const PurposeButtons = createButton(Purpose);
