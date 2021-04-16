export const LEVEL_UP = "level_up";
export const LIVE_DOWN = "live_down";
export const SIZE_UP = "size_up";
export const Restart = "restart";

export const initialState = {
  level: 1,
  size: 2,
  lives: 30,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Restart:
      return initialState;
    case LEVEL_UP:
      return {
        ...state,
        level: action.payload,
        size: state.size + 2,
      };
    case LIVE_DOWN:
      return {
        ...state,
        lives: state.lives - 1,
      };
    case SIZE_UP:
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};
