import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import userReducer from "../../ducks/userReducer";

const ProfilePage = styled.div`
  height: auto;
  width: 100%;
`;
// Top Profile
const InformationCarrier = styled.div`
  height: 300px;
  width: 100%;
  background: #222223;
  box-sizing: border-box;
  padding: 20vh 8vw 0 13vw;
  display: flex;
`;
const ProPic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const UserName = styled.h1`
  font-size: 3em;
  color: white;
`;

// Body Profile
const ProfileCarrier = styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 8vw 0 8vw;
`;

// Course Profile
const CourseCarrier = styled.div`
  height: 1000px;
  width: 100%;
  background: skyblue;
`;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { background, goals, pic, purpose, username, email } = this.props;
    return (
      <ProfilePage>
        <InformationCarrier>
          <ProPic src={pic} />
          <UserName>{username}</UserName>
        </InformationCarrier>
        <ProfileCarrier>
          <CourseCarrier />
        </ProfileCarrier>
      </ProfilePage>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.userReducer;
  return {
    background: user.coding_background,
    goals: user.goals,
    pic: user.profile_pic,
    purpose: user.purpose,
    username: user.user_name,
    email: user.user_email
  };
};
export default connect(mapStateToProps)(Dashboard);
