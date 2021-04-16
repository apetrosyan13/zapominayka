import React from "react";
import styled from "styled-components";
import backImg from "images/back.png";

const Flipper = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${({ flip, opened }) =>
    flip || opened ? "rotateY(180deg)" : "none"};
`;

const Wrapper = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 5px;
  box-sizing: border-box;
  display: inline-block;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  background-image: url(${({ image }) => image});
  background-size: contain;
  box-sizing: border-box;
  border: 2px solid black;
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  backface-visibility: hidden;
  box-sizing: border-box;
  border: 2px solid black;
  position: absolute;
`;

export default function Card({ width, flip, color, clickHandler, id, opened }) {
  return (
    <Wrapper width={width}>
      <Flipper flip={flip} opened={opened}>
        <Back id={id + color.id} color={color.color} />
        <Front onClick={(e) => clickHandler(e)} id={id + color.id} />
      </Flipper>
    </Wrapper>
  );
}
