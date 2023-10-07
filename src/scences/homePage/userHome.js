import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import PostsWidget from "../widgets/PostsWidget";
import UserProfile from "../widgets/userProfile.js";
import AdvertWidget from "../widgets/AdvertWidget.jsx";
import AppNavBar from "../navbar/AppNavBar";
import FriendListWidget from "../widgets/FriendListWidget";
import { useSelector } from "react-redux";

const UserHome = () => {
  const user = useSelector((state) => state.authReducer.user);
  const userImage = user.picturePath.path;
  const [filterTitle, setFliterTitle] = useState("");
  const isNonMobileScreens = useMediaQuery("(max-width: 412px)");

  return (
    <>
      {isNonMobileScreens ? (
        <>
          <div
            style={{
              backgroundColor: "#dedede",
              width: "100%",
              position: "fixed",
              zIndex: "1",
            }}
          >
            <AppNavBar isHome setFliterTitle={setFliterTitle} />
          </div>
          <Box
            position={"absolute"}
            marginTop={"60px"}
            width="100%"
            padding="2rem 2%"
            display={"flex"}
            justifyContent="space-between"
          >
            <Box style={{ width: "100%", margin: "0px 20px" }}>
              <PostsWidget filterTitle={filterTitle} />
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
            <AppNavBar isHome setFliterTitle={setFliterTitle} />
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
              <UserProfile isProfile userImage={userImage} />
            </Box>
            <Box style={{ width: "100%", margin: "0px 20px" }}>
              <PostsWidget filterTitle={filterTitle} />
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

export default UserHome;
