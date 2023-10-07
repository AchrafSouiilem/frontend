import { Box, CircularProgress, Typography } from "@mui/material";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserFriends } from "../../Redux/Actions/userActions";
import FriendList from "./FriendList";

const FriendListWidget = (isProfile = false) => {
  const dispatch = useDispatch();
  const loadFriends = useSelector((state) => state.userReducer.loadFriends);
  const friends = useSelector((state) => state.userReducer.user);
  const user = useSelector((state) => state.authReducer.user);

  useEffect(
    () => {
      dispatch(getUserFriends(user._id));
    }, //eslint-disable-next-line
    []
  );
  return (
    <WidgetWrapper style={{ padding: "15px" }}>
      <Typography
        color={"#E0E0E0"}
        variant="h5"
        fontWeight="500"
        padding={"8px"}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column">
        {loadFriends ? (
          <Typography style={{ margin: "20px auto 0", textAlign: "center" }}>
            <CircularProgress />
          </Typography>
        ) : friends.length === 0 ? (
          <h2
            style={{
              color: "#fffaf3",
              textAlign: "center",
            }}
          >
            there is no friend
          </h2>
        ) : (
          friends.map((friend) => (
            <FriendList
              friend={friend}
              id={friend._id}
              firstName={friend.firstName}
              lastName={friend.lastName}
              location={friend.location}
              picturePath={friend.picturePath}
              key={friend._id}
              isProfile={isProfile}
            />
          ))
        )}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
