import styled from "styled-components";

export default styled.button`
  background-color: #C0C0C0
  border: none;
  outline: none;
  color: white;
  text-align: center;
  margin: 4px 2px;
  border-radius: 25px;
  transition: 0.4s;
  &:active,
  &:hover {
    background: tomato;
  }
  width: ${props => (props.nav ? "8vh" : "16vh")};
  height: ${props => (props.nav ? "4vh" : "8vh")};
  ${"" /* font-family: "Noto Sans", sans-serif; */};
`;
