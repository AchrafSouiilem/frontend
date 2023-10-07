import React, { useEffect } from "react";
import { getFeedPosts, getUserPosts } from "../../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Typography } from "@mui/material";
import TestPost from "./testPost";

const PostsWidget = ({ isProfile= false, filterTitle }) => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const loadPosts = useSelector((state) => state.postsReducer.loadPosts);
  const user = useSelector((state) => state.authReducer.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if(isProfile) {
      dispatch(getUserPosts(user._id))
    } else {
    dispatch(getFeedPosts())
  } 
//eslint-disable-next-line
}, []);
  return (
    <div>
      {loadPosts ? (
        <Typography style={{ margin: "20px auto 0", textAlign: "center" }}>
          <CircularProgress />
        </Typography>
      ) : posts.length === 0 ? (
        <h2 style={{ textAlign: "center", color: "#99EEFD", margin: "0px"}}>There is no post</h2>
      ) : isProfile ? posts.map(((post) => <TestPost isProfile={isProfile} post={ post } key={post._id} /> )) : 
      posts.filter((posts) => posts.firstName.toLowerCase().trim().includes(filterTitle.toLowerCase().trim())).map(((post) => <TestPost post={ post } key={post._id} /> ))
      }
    </div>
  );
};

export default PostsWidget;
