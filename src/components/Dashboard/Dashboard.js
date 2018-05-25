import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import userReducer from "../../ducks/userReducer";
import { ProfileSideBar } from "../hoc/SideBars/AllSideBars";

const ProfilePage = styled.div`
  height: auto;
  width: 100%;
`;

const ProfileContainer = styled.div`
  height: auto;
  width: 65vw;
  box-sizing: border-box;
  margin-left: 35vw;
  background: teal;
`;

// Profile Top Portion
const ProfileTop = styled.div`
  height: 40vh;
  width: 65vw;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-end;
  padding-top: 7vh;
  padding-bottom: 2vh;
`;
const ProfileBox = styled.div`
  height: 30vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
const ProfilePic = styled.img`
  height: 100px;
  width: 100px;
  border: solid 6px white;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 1px 1px 30px #555659;
`;
const ProfileName = styled.div`
  font-size: 2.1em;
  margin-bottom: 2px;
  color: white;
  letter-spacing: 1.1px;
`;
const ProfileEmail = styled.div`
  font-size: 0.8em;
  color: white;
  letter-spacing: 0.5px;
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
        <ProfileSideBar />
        <ProfileContainer>
          <ProfileTop>
            <ProfileBox>
              <ProfilePic src={pic} />
              <ProfileName>{username}</ProfileName>
              <ProfileEmail>{email}</ProfileEmail>
            </ProfileBox>
          </ProfileTop>
        </ProfileContainer>
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
