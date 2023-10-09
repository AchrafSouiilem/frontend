import {
  GET_POSTS_LOAD,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_USER_POSTS,
  LIKE_POSTS,
} from "../constants/ActionTypes";
import axios from "axios";

import dotenv from "dotenv";
dotenv.config();

export const loadPosts = () => {
  return { type: GET_POSTS_LOAD };
};

export const getFeedPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOAD });
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get(`${process.env.baseURL}/API/posts/`, config);
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data.posts });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAIL, payload: error });
  }
};

export const getUserPosts = (userId) => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOAD });
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get(`${process.env.baseURL}/API/posts/${userId}`, config);
    dispatch({ type: GET_USER_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, id) => async (dispatch) => {
  dispatch(loadPosts());
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    await axios.post(`${process.env.baseURL}/API/posts/`, post, config);
    dispatch(getUserPosts(id));
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, userId, post) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    await axios.put(`${process.env.baseURL}/API/posts/${id}`, post, config)
    dispatch(getUserPosts(userId))
  } catch (error) {
    console.log(error)
  }
}

export const updateFeedPost = (id, post) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    await axios.put(`${process.env.baseURL}/API/posts/${id}`, post, config)
    dispatch(getFeedPosts())
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id, userId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    await axios.delete(`${process.env.baseURL}/API/posts/${id}`, config);
    dispatch(getUserPosts(userId));
  } catch (error) {
    console.log(error);
  }
};

export const deleteFeedPost = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    await axios.delete(`${process.env.baseURL}/API/posts/${id}`, config);
    dispatch(getFeedPosts());
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const res = await axios.patch(`${process.env.baseURL}/API/posts/${postId}/like`);
    dispatch({ type: LIKE_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};
