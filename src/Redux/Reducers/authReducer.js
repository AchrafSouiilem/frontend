import {
  EDIT_PROFILE,
  GET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  USER_LOADING,
} from "../constants/ActionTypes";

const intialState = {
  isLoading: true,
  isAuth: false,
  user: [],
  token: localStorage.getItem("token"),
};

const authReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return { ...state, isLoading: true };
    case REGISTER_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: payload.response,
        ...payload,
      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload.response,
        ...payload,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
        token: null,
      };
    case GET_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload,
        ...payload,
      };
    case EDIT_PROFILE:
      return { ...state, isLoading: false, isAuth: true, user: payload, ...payload };
    default: {
      return state;
    }
  }
};

export default authReducer;
