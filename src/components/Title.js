import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(10deg);
        margin-right: 1px;
    }
    2% {
        transform: rotate(20deg);
        margin-right: 2px;
    }
    3% {
        transform: rotate(30deg);
        margin-right: 3px;
    }
    4% {
        transform: rotate(20deg);
        margin-right: 2px;
    }
    5% {
        transform: rotate(10deg);
        margin-right: 1px;
    }
    6% {
        transform: rotate(0deg);
        margin-right: 0;
    }
    7% {
        transform: rotate(-10deg);
        margin-right: 1px;
    }
    8% {
        transform: rotate(-20deg);
        margin-right: 2px;
    }
    9% {
        transform: rotate(-30deg);
        margin-right: 3px;
    }
    10% {
        transform: rotate(-20deg);
        margin-right: 2px;
    }
    11% {
        transform: rotate(-10deg);
        margin-right: 1px;
    }
    12% {
        transform: rotate(10deg);
        margin-right: 1px;
    }
    13% {
        transform: rotate(20deg);
        margin-right: 2px;
    }
    14% {
        transform: rotate(30deg);
        margin-right: 3px;
    }
    15% {
        transform: rotate(20deg);
        margin-right: 2px;
    }
    16% {
        transform: rotate(10deg);
        margin-right: 1px;
    }
    17% {
        transform: rotate(0deg);
        margin-right: 0;
    }
    18% {
        transform: rotate(-10deg);
        margin-right: 1px;
    }
    19% {
        transform: rotate(-20deg);
        margin-right: 2px;
    }
    20% {
        transform: rotate(-30deg);
        margin-right: 3px;
    }
    21% {
        transform: rotate(-20deg);
        margin-right: 2px;
    }
    22% {
        transform: rotate(-10deg);
        margin-right: 1px;
    }
    25% {
        transform: rotate(3600deg);
        margin-right: 10px;
    }
    40%{
        margin-right: 60px;
    }
    50%{
        transform: rotate(-10deg);
        margin-right: 1px;
    }
    100% {
        transform: rotate(0deg);
        margin-right: 0px;
    }
`;

const Rotate = styled.div`
 display: inline-block;
 font-family: cursive;
 font-size: 50px;
 font-weight: 900;
 color: red;
 animation: ${rotate} 5s cubic-bezier(0.000, 0.865, 0.000, 1.060) 0s  infinite forwards running;
`;

const TitleTile = styled.span`
font-family: cursive;
font-size: 30px;
font-weight: 900;
color: green;
`;

export default function Title (props) {
    return (
        <div>
            <Rotate>З</Rotate>
            <TitleTile>апоминайка</TitleTile>
        </div>
    )
}