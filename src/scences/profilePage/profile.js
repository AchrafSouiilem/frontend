import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import UserProfile from "../widgets/userProfile.js";
import PostsWidget from "../widgets/PostsWidget.jsx";
import AdvertWidget from "../widgets/AdvertWidget.jsx";
import MyPostWidget from "../widgets/MyPostWidget.jsx";
import AppNavBar from "../navbar/AppNavBar.js";
import FriendListWidget from "../widgets/FriendListWidget.js";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  const userImage = user.picturePath.path;
  const isMobileScreens = useMediaQuery("(max-width: 412px)");
  return (
    <>
      {isMobileScreens ? (
        <>
          <div
            style={{
              backgroundColor: "#dedede",
              width: "100%",
              position: "fixed",
              zIndex: "1",
            }}
          >
            <AppNavBar />
          </div>
          <Box
            position={"absolute"}
            marginTop={"60px"}
            width="100%"
            padding="2rem 2%"
            display={"flex"}
            justifyContent="space-between"
          >
            <Box
              style={{
                maxWidth: "350px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "0px 20px",
              }}
            >
              <MyPostWidget />
              <PostsWidget isProfile />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <div
            style={{
              backgroundColor: "#dedede",
              width: "100%",
              position: "fixed",
              zIndex: "1",
            }}
          >
            <AppNavBar />
          </div>
          <Box
            position={"absolute"}
            marginTop={"60px"}
            width="100%"
            padding="2rem 2%"
            display={"flex"}
            justifyContent="space-between"
          >
            <Box style={{ width: "100%", maxWidth: "25%" }}>
              <UserProfile userImage={userImage} />
            </Box>
            <Box
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "0px 20px",
              }}
            >
              <MyPostWidget />
              <PostsWidget isProfile />
            </Box>
            <Box style={{ maxWidth: "25%" }}>
              <AdvertWidget />
              <Box m={"2rem 0px"}>
                <FriendListWidget />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Profile;
