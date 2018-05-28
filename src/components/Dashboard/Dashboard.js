import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ProfileSideBar } from "../hoc/SideBars/AllSideBars";

const ProfilePage = styled.div`
  height: auto;
  width: 100%;
  overflow-y: hidden;
`;

const ProfileContainer = styled.div`
  height: auto;
  width: 65vw;
  box-sizing: border-box;
  margin-left: 35vw;
  /* background: #3f5566; */
  overflow-y: hidden;
`;
// Main Portion
const ProfileMain = styled.div`
  height: 70vh;
  /* background: pink; */
  width: auto;
  box-sizing: border-box;
  padding-top: 20vh;
`;
const ProfileInfo = styled.div`
  height: auto;
  width: 100%;
  /* background: teal; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw 0 3vw;
  box-sizing: border-box;
`;
const ProfilePic = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  box-shadow: 3px 3px 30px #83878c;
`;
const PurBackContainer = styled.div`
  height: auto;
  width: 20vw;
  /* background: skyblue; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 2px #a0dcff;
  border-bottom: solid 2px #a0dcff;
  padding: 2vh 0 2vh 0;
`;
const PurbackTitle = styled.p`
  font-size: 0.7em;
  margin-bottom: 0.5vh;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
`;
const PurbackContent = styled.div`
  font-size: 1.6em;
  height: auto;
  width: auto;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
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
          <ProfileMain>
            <ProfileInfo>
              <PurBackContainer>
                <PurbackTitle>Background:</PurbackTitle>
                <PurbackContent>{background}</PurbackContent>
              </PurBackContainer>
              <ProfilePic src={pic} />
              <PurBackContainer>
                <PurbackTitle>Purpose:</PurbackTitle>
                <PurbackContent>{purpose}</PurbackContent>
              </PurBackContainer>
            </ProfileInfo>
          </ProfileMain>
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
