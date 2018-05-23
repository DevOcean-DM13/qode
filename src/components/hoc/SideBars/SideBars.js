import React, { Component } from "react";

const createSideBar = WrappedComponent => {
  class SideBar extends Component {
    constructor() {
      super();
      this.state = {
        styleProps: {
          height: "100vh",
          width: "35vw",
          left: "0",
          background: "#C9DEF2",
          position: "fixed",
          padding: "100px 70px 380px 70px",
          boxSizing: "border-box"
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
