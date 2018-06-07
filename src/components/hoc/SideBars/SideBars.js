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
          background: "#00a7e1",
          position: "fixed",
          boxSizing: "border-box",
          overflowY: "hidden",
          color: "#00a7e1",
          padding: "50px 50px 50px 50px"
        }
      };
    }
    render() {
      return <WrappedComponent {...this.state} />;
    }
  }
  return SideBar;
};

export default createSideBar;
