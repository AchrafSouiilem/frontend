import { TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/ActionTypes";

const intialState = {
  settings: false,
};

const settingsReducer = (state = intialState, { type }) => {
  switch (type) {
    case TOGGLE_TRUE:
      return { ...state, settings: true };
    case TOGGLE_FALSE:
      return { ...state, settings: false };
    default:
      return state;
  }
};

export default settingsReducer
