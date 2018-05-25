import styled from "styled-components";

export default styled.button`
  background: #00a7e1
  border: none;
  outline: none;
  color: white;
  text-align: center;
  margin: 10px 10px;
  border-radius: 25px;
  transition: 0.4s;
  &:active,
  &:hover {
    background: #ff7860;
  }
  width: ${props => (props.nav ? "10vh" : "16vh")};
  height: ${props => (props.nav ? "5vh" : "8vh")};
  ${"" /* font-size: ${props => (props.nav ? )} */}
`;
