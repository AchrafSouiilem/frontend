import axios from "axios";
import {
  GET_USER_FRIENDS,
  FRIENDS_LOAD,
  ADD_USER_FRIENDS,
} from "../constants/ActionTypes";

const baseURL = "https://backend-pi-gilt.vercel.app"

export const friendsLoading = () => (dispatch) => {
  dispatch({ type: FRIENDS_LOAD });
};

export const getUserFriends = (id) => async (dispatch) => {
  dispatch(friendsLoading());
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get(`${baseURL}/API/users/${id}/friends`, config);
    dispatch({ type: GET_USER_FRIENDS, payload: res.data.friends });
  } catch (error) {
    console.log(error);
  }
};

export const addFriends = (id, friendId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.patch(`${baseURL}/API/users/${id}/${friendId}`, config);
    dispatch({ type: ADD_USER_FRIENDS, payload: res.data.friends });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFriend = (id, friendId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.patch(`${baseURL}/API/users/${id}/${friendId}/remove`, config);
    dispatch({ type: ADD_USER_FRIENDS, payload: res.data.friends });
  } catch (error) {
    console.log(error);
  }
};
