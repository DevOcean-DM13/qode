import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ProfileSideBar } from "../hoc/SideBars/AllSideBars";

const ProfilePage = styled.div`
  height: auto;
  width: 100%;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  background: #00a7e1;
`;

const ProfileContainer = styled.div`
  height: auto;
  width: 65vw;
  box-sizing: border-box;
  margin-left: 35vw;
  /* background: #00a7e1; */
  overflow-y: hidden;

  &.fullScreen {
    width: 68vw;
    margin-left: 0;
    transition: 0.3s;
  }
`;
// MAIN SECTION

const ProfileMain = styled.div`
  height: auto;
  background: white;
  width: auto;
  box-sizing: border-box;
  padding-top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfilePicContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5vh 0 0 0;
`;
const ProfilePic = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  box-shadow: 1px 1px 12px #54595e;
  border: solid 2px #202020;
  background-color: white;
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
  padding-bottom: 5vh;
`;
const UserName = styled.p`
  font-size: 3em;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 0.6vh;
  box-sizing: border-box;
  /* color: white; */
`;
const Email = styled.p`
  font-size: 0.8em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #7c7c7c;
`;

// Purpose/Background

const ProfileInfo = styled.div`
  height: auto;
  width: 75%;
  /* background: skyblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3vw 0 3vw;
  box-sizing: border-box;
  border-top: solid 2px #a3a3a3;
  border-bottom: solid 2px #a3a3a3;
`;
const PurBackContainer = styled.div`
  height: auto;
  width: 20vw;
  /* background: skyblue; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-top: solid 2px #a3a3a3; */
  /* border-bottom: solid 2px #a3a3a3; */
  padding: 3vh 0 3vh 0;
`;
const PurbackTitle = styled.p`
  font-size: 0.4em;
  margin-bottom: 0.5vh;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  /* color: white; */
`;
const PurbackContent = styled.div`
  font-size: 0.9em;
  height: auto;
  width: auto;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  /* color: white; */
`;

// GOALS

const GoalsContainer = styled.div`
  width: 75%;
  height: auto;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4vh 0 7vh 0;
  border-bottom: solid 2px #a3a3a3;
`;
const GoalsTitle = styled.div`
  font-size: 0.4em;
  margin-bottom: 2vh;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
`;
const GoalsText = styled.p`
  font-size: 0.9em;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
`;
// COURSES

const CourseContainer = styled.div`
  height: 200px;
  width: 75%;
  background: #202020;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 2vh;

  &.HTML {
    margin-top: 2vh;
  }
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
              <OpenButton onClick={e => this.clickOpen(e)} />
              <ProfilePicContainer>
                <ProfilePic src={pic} />
              </ProfilePicContainer>
              <NameContainer>
                <UserName>{username}</UserName>
                <Email>{email}</Email>
              </NameContainer>
              <ProfileInfo>
                <PurBackContainer>
                  <PurbackTitle>Background:</PurbackTitle>
                  <PurbackContent>{background}</PurbackContent>
                </PurBackContainer>

                <PurBackContainer>
                  <PurbackTitle>Purpose:</PurbackTitle>
                  <PurbackContent>{purpose}</PurbackContent>
                </PurBackContainer>
              </ProfileInfo>
              <GoalsContainer>
                <GoalsTitle>Goals:</GoalsTitle>
                <GoalsText>{goals}</GoalsText>
              </GoalsContainer>
              <CourseContainer className="HTML">HTML</CourseContainer>
              <CourseContainer>CSS</CourseContainer>
              <CourseContainer>SANDBOX</CourseContainer>
            </ProfileMain>
          </ProfileContainer>
        ) : (
          <ProfileContainer>
            <ProfileMain>
              <OpenButton onClick={e => this.clickOpen(e)} />
              <ProfilePicContainer>
                <ProfilePic src={pic} />
              </ProfilePicContainer>
              <NameContainer>
                <UserName>{username}</UserName>
                <Email>{email}</Email>
              </NameContainer>
              <ProfileInfo>
                <PurBackContainer>
                  <PurbackTitle>Background:</PurbackTitle>
                  <PurbackContent>{background}</PurbackContent>
                </PurBackContainer>
                <PurBackContainer>
                  <PurbackTitle>Purpose:</PurbackTitle>
                  <PurbackContent>{purpose}</PurbackContent>
                </PurBackContainer>
              </ProfileInfo>
              <GoalsContainer>
                <GoalsTitle>Goals:</GoalsTitle>
                <GoalsText>{goals}</GoalsText>
              </GoalsContainer>
              <CourseContainer className="HTML">HTML</CourseContainer>
              <CourseContainer>CSS</CourseContainer>
              <CourseContainer>SANDBOX</CourseContainer>
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
