import styled from "styled-components";

export const Wrappa = styled.div`
  height: 50px;
  width: 50px;
  padding-left: 60px;
`;

export const Sq1 = styled.div`
  background: #ff7860;
  border-radius: 3px;
  height: 50px;
  position: fixed;
  transition: transform 0.8s;
  width: 50px;
`;

export const Sq2 = styled.div`
  background: #00a7e1;
  border-radius: 3px;
  height: 50px;
  transition: transform 0.8s;
  position: fixed;
  width: 50px;
  &:hover {
    transform: translate(20px, 20px);
  }
`;
