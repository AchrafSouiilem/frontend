import {
  EDIT_PROFILE,
  GET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  USER_LOADING,
} from "../constants/ActionTypes";
import axios from "axios";
import { toast } from "react-toastify";
import dotenv from "dotenv";
dotenv.config();

export const userLoading = () => (dispatch) => {
  dispatch({ type: USER_LOADING });
};



const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

/* REGISTER USER */
export const registerUser = (formData, navigate) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post(`${process.env.baseURL}/API/auth/register`, formData);
    if (res) {
      toast.success(res.data.msg, toastOptions);
    }
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
    navigate("/login");
  } catch (error) {
    console.log(error);
    const { errors } = error.response.data;
    errors.forEach((err) => toast.error(err.msg, toastOptions));
  }
};

/* LOGIN USER */
export const loginUser = (formData, navigate) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post(`${process.env.baseURL}/API/auth/login`, formData);
    if (res) {
      toast.success(res.data.msg, toastOptions);
    }
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
    navigate("/Home");
  } catch (error) {
    console.log(error);
    const { errors, msg } = error.response.data;
    if (msg) {
      toast.error(msg, toastOptions);
    } else {
      errors.forEach((err) => toast.error(err.msg, toastOptions));
    }
  }
};

/* LOGOUT USER*/
export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

/* GET USER*/
export const getUser = (navigate) => async (dispatch) => {
  dispatch(userLoading());
  try {
    //headers
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get(`${process.env.baseURL}/API/auth/`, config);
    dispatch({
      type: GET_USER,
      payload: res.data.response,
    });
    navigate("/Home");
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = (id, edit) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.put(`${process.env.baseURL}/API/auth/${id}`, edit, config)
    dispatch({ type: EDIT_PROFILE, payload: res.data.update})
    dispatch(getUser())
  } catch (error) {
    console.log(error)
  }
}
