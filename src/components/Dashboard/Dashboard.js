import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ProfileSideBar } from "../hoc/SideBars/AllSideBars";
import { Switch, Route, withRouter } from "react-router-dom";
import LessonPage from "../Lesson/AllLessonPages";

const ProfilePage = styled.div`
  height: auto;
  width: 100%;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  /* background: #00a7e1; */
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
  position: relative;
`;

// PROFILE BOX
const ProfileBox = styled.div`
  width: 95%;
  height: 400px;
  background: teal;
  display: flex;
  margin: 7vh 0 2vh 0;
  border-radius: 14px;
`;
const ProfileLeft = styled.div`
  width: 40%;
  height: 100%;
  background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px 0 0 14px;
`;
const ProfileRight = styled.div`
  width: 60%;
  height: 100%;
  background: skyblue;
  border-radius: 0 14px 14px 0;
`;
const ProfileInfoBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4vh 0 0 0;
`;
const ProfilePic = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  box-shadow: 1px 1px 12px #54595e;
  border: solid 2px #202020;
  background-color: #00a7e1;
  margin-top: 2vh;
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

// PURPOSE/BACKGROUND

const ProfileInfo = styled.div`
  height: auto;
  width: auto;
  /* background: skyblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const PurBackContainer = styled.div`
  height: auto;
  width: 20vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: auto;
  width: 95%;
  /* background: lightgray; */
  box-sizing: border-box;
  border-radius: 14px;
  margin-bottom: 1.2vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &.HTML {
    margin-top: 1.2vh;
  }
`;
const CourseCard = styled.div`
  height: 300px;
  width: 48%;
  background: lightblue;
  margin-bottom: 30px;
  border-radius: 14px;
  &.stuff {
    background: lightcoral;
  }
`;
const OpenButton = styled.button`
  height: 20px;
  width: 20px;
  position: fixed;
  left: 20px;
  top: 9vh;
`;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    };
    this.clickOpen = this.clickOpen.bind(this);
  }

  clickOpen(e) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    console.log(this.props);
    const { sidebar } = this.state;
    const { background, goals, pic, purpose, username, email } = this.props;
    return (
      <div>
        <Switch>
          <Route
            path="/lesson/:lesson_id/:pageoflesson"
            render={() => <LessonPage user={this.props.user} />}
          />
          <Route
            path="/"
            render={() => (
              <ProfilePage>
                {sidebar && <ProfileSideBar />}
                {this.state.sidebar ? (
                  <ProfileContainer>
                    <ProfileMain>
                      <OpenButton onClick={e => this.clickOpen(e)} />
                      <ProfileBox>
                        <ProfileLeft>
                          <ProfileInfoBox>
                            <ProfilePic src={pic} />
                            <NameContainer>
                              <UserName>{username}</UserName>
                              <Email>{email}</Email>
                            </NameContainer>
                          </ProfileInfoBox>
                        </ProfileLeft>
                        <ProfileRight>
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
                        </ProfileRight>
                      </ProfileBox>

                      <CourseContainer className="HTML">
                        <CourseCard className="stuff">HTML</CourseCard>
                        <CourseCard>CSS</CourseCard>
                        <CourseCard>SANDBOX</CourseCard>
                        <CourseCard className="stuff">dude</CourseCard>
                      </CourseContainer>
                    </ProfileMain>
                  </ProfileContainer>
                ) : (
                  <ProfileContainer className="fullScreen">
                    <ProfileMain>
                      <OpenButton onClick={e => this.clickOpen(e)} />
                      <ProfileBox>
                        <ProfileLeft>
                          <ProfileInfoBox>
                            <ProfilePic src={pic} />
                            <NameContainer>
                              <UserName>{username}</UserName>
                              <Email>{email}</Email>
                            </NameContainer>
                          </ProfileInfoBox>
                        </ProfileLeft>
                        <ProfileRight>
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
                        </ProfileRight>
                      </ProfileBox>
                      <CourseContainer className="HTML">
                        <CourseCard className="stuff">HTML</CourseCard>
                        <CourseCard>CSS</CourseCard>
                        <CourseCard>SANDBOX</CourseCard>
                        <CourseCard className="stuff">dude</CourseCard>
                      </CourseContainer>
                    </ProfileMain>
                  </ProfileContainer>
                )}
              </ProfilePage>
            )}
          />
        </Switch>
      </div>
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
export default withRouter(connect(mapStateToProps)(Dashboard));
