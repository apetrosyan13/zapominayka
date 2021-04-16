import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  margin-right: 15px;
  width: 60px;
  height: 20px;
  border: 2px solid red;
  border-radius: 5px;
  display: inline-block;
  text-align: left;
  color: green;
  padding: 2px;
`;

const Time = styled(Screen)`
  width: 120px;
`;

export default function Progress(props) {
  const { level, lives } = props.store;
  return (
    <div>
      <Screen>level: {level}</Screen>
      <Screen>lives: {lives}</Screen>
    </div>
  );
}
