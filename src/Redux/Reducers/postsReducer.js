import {
  GET_POSTS_FAIL,
  GET_POSTS_LOAD,
  GET_POSTS_SUCCESS,
  GET_USER_POSTS,
  LIKE_POSTS,
} from "../constants/ActionTypes";

const initialState = {
  loadPosts: false,
  errors: [],
  posts: [],
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_LOAD:
      return { ...state, loadPosts: true };
    case GET_POSTS_SUCCESS:
      return { ...state, loadPosts: false, posts: payload };
    case GET_USER_POSTS:
      return { ...state, loadPosts: false, posts: payload };
    case LIKE_POSTS:
      return { ...state, loadPosts: false, posts: payload };
    case GET_POSTS_FAIL:
      return { ...state, loadPosts: false, errors: payload };
    default:
      return state;
  }
};

export default postReducer;
