import { LEVEL_UP, LIVE_DOWN, SIZE_UP, Restart } from "./reducers";

export const nextLevel = (level) => {
  return {
    type: LEVEL_UP,
    payload: level + 1,
  };
};

export const liveDown = () => {
  return {
    type: LIVE_DOWN,
  };
};

export const restart = () => {
  return {
    type: Restart,
  };
};

export const sizeUp = (size) => {
  return {
    type: SIZE_UP,
    payload: size + 2,
  };
};
