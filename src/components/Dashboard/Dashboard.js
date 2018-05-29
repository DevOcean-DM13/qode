import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ProfileSideBar } from "../hoc/SideBars/AllSideBars";

const ProfilePage = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  /* background: #3f5566; */
`;

const ProfileContainer = styled.div`
  height: auto;
  width: 65vw;
  box-sizing: border-box;
  margin-left: 35vw;
  /* background: #3f5566; */
  overflow-y: hidden;

  &.fullScreen {
    width: 68vw;
    margin-left: 0;
    transition: 0.3s;
  }
`;
// Main Portion
const ProfileMain = styled.div`
  height: 70vh;
  /* background: pink; */
  width: auto;
  box-sizing: border-box;
  padding-top: 30vh;
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
  box-shadow: 1px 1px 16px #54595e;
  border: solid 6px #00a7e1;
  background-color: white;
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
  padding: 3vh 0 3vh 0;
`;
const PurbackTitle = styled.p`
  font-size: 0.7em;
  margin-bottom: 0.5vh;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  /* color: white; */
`;
const PurbackContent = styled.div`
  font-size: 1.6em;
  height: auto;
  width: auto;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  /* color: white; */
`;

const NameContainer = styled.div`
  height: auto;
  box-sizing: border-box;
  margin-top: 1.8vh;
  width: 100%;
  /* background: teal; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserName = styled.p`
  font-size: 3.5em;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: -1vh;
  box-sizing: border-box;
  /* color: white; */
`;
const Email = styled.p`
  font-size: 0.8em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  /* color: white; */
`;
const OpenButton = styled.button`
  height: 20px;
  width: 20px;
`;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    };
    this.clickOpen = this.clickOpen.bind(this);
  }

  clickOpen(e) {
    this.setState({ sidebar: !this.state.sidebar });
    console.log(`hit`);
    console.log(this.state.sidebar);
  }

  render() {
    const { sidebar } = this.state;
    const { background, goals, pic, purpose, username, email } = this.props;
    return (
      <ProfilePage>
        {sidebar && <ProfileSideBar />}
        {!this.state.sidebar ? (
          <ProfileContainer className="fullScreen">
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
              <NameContainer>
                <UserName>{username}</UserName>
                <Email>{email}</Email>
                <OpenButton onClick={e => this.clickOpen(e)} />
              </NameContainer>
            </ProfileMain>
          </ProfileContainer>
        ) : (
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
              <NameContainer>
                <UserName>{username}</UserName>
                <Email>{email}</Email>
                <OpenButton onClick={e => this.clickOpen(e)} />
              </NameContainer>
            </ProfileMain>
          </ProfileContainer>
        )}
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
