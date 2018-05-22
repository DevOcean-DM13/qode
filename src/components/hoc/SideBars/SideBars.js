import React, { Component } from "react";

const createSideBar = WrappedComponent => {
  class SideBar extends Component {
    constructor() {
      super();
      this.state = {
        styleProps: {
          height: "100vh",
          width: "32vw",
          left: "0",
          background: "#47e0ff",
          position: "fixed"
        }
      };
    }
    render() {
      return (
        <div>
          <WrappedComponent {...this.state} />
        </div>
      );
    }
  }
  return SideBar;
};

export default createSideBar;
