import React, { Component } from "react";
import styled from "styled-components";
import { ProfileSideBar } from "../hoc/SideBars/AllSideBars";

const ProfilePage = styled.div`
  height: auto;
  width: 100%;
`;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ProfilePage>
        <ProfileSideBar />
      </ProfilePage>
    );
  }
}

export default Dashboard;
