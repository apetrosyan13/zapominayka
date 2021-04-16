import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { colors } from "utils";
import { nextLevel, liveDown, restart } from "store/actions";
import Card from "./Card";
import Progress from "./Progress";
import Restart from "./Restart";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
`;

export default function Board(props) {
  const [toRender, setToRender] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const { size, level, lives } = props.store;
  const cardWidth = size === 2 ? 150 : size < 6 ? 100 : 50;
  let board = [];
  const newColorsArray = [];
  let flippedCards = [];
  let openedCards = [];
  const dispatch = useDispatch();
  useEffect(() => {
    if (!lives) {
      setGameOver(true);
    }
  });
  useEffect(() => {
    const colorsArr = [...colors];
    let i = 0;
    let bull = false;
    const colorsArray = [];
    while (colorsArray.length < size * size) {
      colorsArray.push(colorsArr[i]);
      if (bull) {
        if (colorsArr.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
      }
      bull = !bull;
    }
    while (colorsArray.length) {
      const index = Math.floor(Math.random() * colorsArray.length);
      newColorsArray.push(colorsArray[index]);
      colorsArray.splice(index, 1);
    }
    for (let i = 0; i < size * size; i++) {
      const card = {
        flip: false,
        id: i,
        opened: false,
        desc: newColorsArray[i].id,
      };
      board.push(card);
    }
    setToRender(
      board.map((card) => (
        <Card
          id={card.id}
          key={card.id}
          clickHandler={clickHandler}
          width={cardWidth}
          flip={card.flip}
          color={newColorsArray[card.id]}
          opened={card.opened}
        />
      ))
    );
  }, [level]);

  const getDesc = (string) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      if (!+string[i] && string[i] != 0) result += string[i];
    }
    return result;
  };

  const restartHandler = () => {
    flippedCards = [];
    openedCards = [];
    setGameOver(false);
    dispatch(restart());
  };

  const clickHandler = (e) => {
    if (flippedCards.length) {
      if (flippedCards.length > 1) {
        return;
      }
      if (getDesc(e.target.id) == flippedCards[0].desc) {
        openedCards.push(flippedCards[0].id, parseInt(e.target.id));
        flippedCards = [];
        board = board.map((card) => {
          card.flip = false;
          return card;
        });
        setToRender(
          board.map((card) => (
            <Card
              id={card.id}
              key={card.id}
              clickHandler={clickHandler}
              width={cardWidth}
              flip={card.flip}
              color={newColorsArray[card.id]}
              opened={openedCards.includes(card.id)}
            />
          ))
        );
        if (openedCards.length === board.length) {
          setTimeout(() => dispatch(nextLevel(level)), 1500);
          setTimeout(() => {
            flippedCards = [];
            openedCards = [];
            board = board.map((card) => {
              card.flip = false;
              return card;
            });
            setToRender(
              board.map((card) => (
                <Card
                  id={card.id}
                  key={card.id}
                  clickHandler={clickHandler}
                  width={cardWidth}
                  flip={card.flip}
                  color={newColorsArray[card.id]}
                  opened={openedCards.includes(card.id)}
                />
              ))
            );
          }, 1000);
          flippedCards.push({
            id: parseInt(e.target.id),
            desc: getDesc(e.target.id),
          });
          board = board.map((card) => {
            card.flip =
              openedCards.includes(card.id) ||
              flippedCards[0].id == card.id ||
              flippedCards[1].id == card.id
                ? true
                : false;
            return card;
          });
          setToRender(
            board.map((card) => (
              <Card
                id={card.id}
                key={card.id}
                clickHandler={clickHandler}
                width={cardWidth}
                flip={card.flip}
                color={newColorsArray[card.id]}
                opened={openedCards.includes(card.id)}
              />
            ))
          );
        }
      } else {
        setTimeout(() => {
          flippedCards = [];
          board = board.map((card) => {
            card.flip = false;
            return card;
          });
          dispatch(liveDown());
          setToRender(
            board.map((card) => (
              <Card
                id={card.id}
                key={card.id}
                clickHandler={clickHandler}
                width={cardWidth}
                flip={card.flip}
                color={newColorsArray[card.id]}
                opened={openedCards.includes(card.id)}
              />
            ))
          );
        }, 1000);
        flippedCards.push({
          id: parseInt(e.target.id),
          desc: getDesc(e.target.id),
        });
        board = board.map((card) => {
          card.flip =
            openedCards.includes(card.id) ||
            flippedCards[0].id == card.id ||
            flippedCards[1].id == card.id
              ? true
              : false;
          return card;
        });
        setToRender(
          board.map((card) => (
            <Card
              id={card.id}
              key={card.id}
              clickHandler={clickHandler}
              width={cardWidth}
              flip={card.flip}
              color={newColorsArray[card.id]}
              opened={openedCards.includes(card.id)}
            />
          ))
        );
      }
    } else {
      flippedCards.push({
        id: parseInt(e.target.id),
        desc: getDesc(e.target.id),
      });
      board = board.map((card) => {
        if (card.id == parseInt(e.target.id)) card.flip = true;
        return card;
      });
      setToRender(
        board.map((card) => (
          <Card
            id={card.id}
            clickHandler={clickHandler}
            key={card.id}
            width={cardWidth}
            flip={card.flip}
            color={newColorsArray[card.id]}
            opened={openedCards.includes(card.id)}
          />
        ))
      );
    }
  };
  return (
    <>
      <Restart gameOver={gameOver} restartHandler={restartHandler} />
      <Progress store={props.store} />
      <Wrapper size={size * cardWidth}>{toRender}</Wrapper>
    </>
  );
}
