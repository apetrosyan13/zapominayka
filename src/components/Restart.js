import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 50px;
  left: 20%;
  top: 20%;
  z-index: 1000;
  background-color: rgb(255, 36, 47, 0.7);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const Button = styled.button`
  position: relative;
  width: 50%;
  height: 50%;
  border: none;
  border-radius: 10px;
  background-color: rgb(255, 36, 47);
  font-size: 50px;
  color: blue;
`;

export default function Restart(props) {
  return (
    <Wrapper show={props.gameOver}>
      <Button onClick={props.restartHandler}>Restart</Button>
    </Wrapper>
  );
}
