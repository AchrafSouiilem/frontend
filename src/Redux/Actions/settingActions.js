import { TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/ActionTypes";

export const toggleTrue = () => (dispatch) => {
  dispatch({ type: TOGGLE_TRUE });
};

export const toggleFalse = () => (dispatch) => {
  dispatch({ type: TOGGLE_FALSE });
};
