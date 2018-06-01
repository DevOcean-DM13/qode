import styled from "styled-components";

export default styled.div`
  &.NavBarProtected {
    width: 100%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: white;
    width: 100%;
    backface-visibility: hidden;
    border-bottom: solid 1px lightgrey;
    z-index: 500;
    transition-duration: 0.15s;
    box-sizing: border-box;
    padding: 0 3vw 0 5vw;
    text-align: inherit;
    letter-spacing: inherit;
    margin: 0 0 0 0;
    background: white;
    position: sticky;
    top: 0;

    & div.ButtonContainer {
      margin: inherit;
      letter-spacing: inherit;
      text-align: inherit;
      padding: 0 0;
      justify-content: space-between;
      align-items: center;
      margin: inherit inherit;
      width: 16vw;
      height: auto;
      background: inherit;
    }

    & button {
      letter-spacing: inherit;
      padding: 0 auto;
      margin: inherit;
      position: inherit;
      visibility: inherit;
      display: block;
      align-self: center;
      color: white;
    }
  }
`;
