import React, { Component } from "react";

const createLessonPage = WrappedComponent => {
  class LessonPage extends Component {
    constructor() {
      super();
      this.state = {
        styleProps: {
          height: "100vh",
          width: "65vw",
          right: "0",
          background: "#624f40",
          position: "fixed"
        }
      };
    }
    render() {
      return <WrappedComponent {...this.state} />;
    }
  }
  return LessonPage;
};

export default createLessonPage;
