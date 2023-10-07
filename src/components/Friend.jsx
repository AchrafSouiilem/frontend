import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FlexBetween } from "../components/Flex.jsx";
import UserImage from "../components/UserImage.jsx";
import { addRemoveFriends } from "../Redux/Actions/userActions.js";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {

  const dispatch= useDispatch()
  const user = useSelector((state) => state.authReducer.user);
  console.log(user.friends)

  const primaryLight = "#00353F";
  const primaryDark = "#99EEFD";
  const main = "#C2C2C2";

  const isFriend = user.friends.find((friend) => friend._id === friendId);

  const patchFriend = () => {
      dispatch(addRemoveFriends(user._id, friendId))
  }

  return (
    <FlexBetween>
      <FlexBetween gap="0.5rem" style={{ padding: "12px"}}>
        <UserImage image={userPicturePath.path} style={{ size: "55px", padding: "8px" }} /> 
        <Box>
          <Typography
            color={"#fffaf3"}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: "#ffffff",
                cursor: "pointer",
                textShadow: "1px 1px 2px black, 0 0 25px #00353F, 0 0 5px white"
              },
            }}
          >
            {name}
            
          </Typography>
          <Typography color={main} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
