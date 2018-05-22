import styled from "styled-components";

export default styled.button`
  background-color: grey;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  margin: 4px 2px;
  border-radius: 25px;
  &:hover {
    background-color: tomato;
  }
  width: ${props => (props.nav ? "8vh" : "16vh")};
  height: ${props => (props.nav ? "4vh" : "8vh")};
`;
