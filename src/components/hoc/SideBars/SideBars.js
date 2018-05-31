import React, { Component } from "react";

const createSideBar = WrappedComponent => {
  class SideBar extends Component {
    constructor() {
      super();
      this.state = {
        styleProps: {
<<<<<<< HEAD
          height: "auto",
=======
          height: "130vh",
>>>>>>> master
          width: "35vw",
          left: "0",
          background: "#00a7e1",
          position: "fixed",
          padding: "100px 70px 380px 70px",
          boxSizing: "border-box",
          overflowY: "hidden",
          color: "#00a7e1"
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
