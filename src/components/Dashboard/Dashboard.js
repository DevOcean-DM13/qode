import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import userReducer from "../../ducks/userReducer";
import { ProfileSideBar } from "../hoc/SideBars/AllSideBars";

const ProfilePage = styled.div`
  height: auto;
  width: 100%;
  overflow-y: hidden;
`;

const ProfileContainer = styled.div`
  height: auto;
  width: 63.8vw;
  box-sizing: border-box;
  margin-left: 35vw;
  background: #3f5566;
`;

// Profile Top Portion
const ProfileTop = styled.div`
  height: 40vh;
  width: 63.8vw;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-end;
  padding-top: 7vh;
  padding-bottom: 2vh;
  /* background: teal; */
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

// Profile Middle Portion

const ProfileMid = styled.div`
  height: auto;
  width: 63.8vw;
  box-sizing: border-box;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-items: center; */
`;
const PurpBack = styled.div`
  height: 20vh;
  width: 55vw;
  /* background: gray; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px white;
  border-top: solid 1px white;
  margin-top: 4vh;
`;
const PurpBackBox = styled.div`
  height: 20vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 7vh 0 8vh 0;
`;
const PurpBackDivider = styled.div`
  height: 12vh;
  width: 1px;
  background: white;
`;
const PurpBackTitle = styled.div`
  font-size: 0.8em;
  color: white;
  letter-spacing: 0.5px;
`;
const PurpBackText = styled.div`
  font-size: 2.1em;
  color: white;
  letter-spacing: 1.1px;
`;

// Profile Mid Goals

const GoalsBox = styled.div`
  margin-top: 10vh;
  height: auto;
  width: 55vw;
  background: pink;
  box-sizing: border-box;
  padding: 0 7.6vw 0 7.6vw;
`;
const GoalsTitle = styled.div`
  font-size: 0.8em;
  color: white;
  letter-spacing: 0.5px;
  margin-bottom: 5vh;
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
          <ProfileMid>
            <PurpBack>
              <PurpBackBox>
                <PurpBackTitle>Background:</PurpBackTitle>
                <PurpBackText>{background}</PurpBackText>
              </PurpBackBox>
              <PurpBackDivider />
              <PurpBackBox>
                <PurpBackTitle>Purpose:</PurpBackTitle>
                <PurpBackText>{purpose}</PurpBackText>
              </PurpBackBox>
            </PurpBack>
            <GoalsBox>
              <GoalsTitle>Goals:</GoalsTitle>
              {goals}
            </GoalsBox>
          </ProfileMid>
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
