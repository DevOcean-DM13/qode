import styled from "styled-components";

export default styled.button`
  background-color: #00a7e1;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  margin: 4px 2px;
  border-radius: 25px;
  transition: 0.4s;
  &:hover {
    background: #ff7860;
  }
  width: ${props => (props.nav ? "15vh" : "21vh")};
  height: ${props => (props.nav ? "4vh" : "4vh")};
`;
