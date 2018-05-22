import React, { Component } from "react";
import createSideBar from "./SideBars";

class SignUp extends Component {
  render() {
    return (
      <div>
        <div style={this.props.styleProps}>SideBar</div>
      </div>
    );
  }
}

export const SignUpSideBar = createSideBar(SignUp);
