import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Divider, InputBase, Modal } from "@mui/material";
import { FlexBetween } from "../../components/Flex";
import { Delete, FavoriteBorderOutlined } from "@mui/icons-material";
import WidgetWrapper from "../../components/WidgetWrapper";
import UserImage from "../../components/UserImage";
import { useDispatch, useSelector } from "react-redux";
import { deleteFeedPost, deletePost } from "../../Redux/Actions/postActions";
import FriendList from "./FriendList";

const baseURL = "https://backend-pi-gilt.vercel.app"

const TestPost = ({ post, isProfile }) => {
  /* POST DISTRUCTURING */
  const {
    _id,
    firstName,
    lastName,
    location,
    userId,
    description,
    picturePath,
    userPicturePath,
  } = post;
  const dispatch = useDispatch();

  /* DELETE BUTTON */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "420px",
    backgroundColor: "#00353F",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    color: "#fffaf3",
    p: 4,
  };

  const user = useSelector((state) => state.authReducer.user);
  const userImage = user.picturePath.path;
  return (
    <WidgetWrapper style={{ marginBottom: "20px", padding: "0px 15px" }}>
      <Card sx={{ backgroundColor: "#00353F", color: "#E0E0E0" }}>
        <FriendList
          name={`${firstName} ${lastName}`}
          subtilte={location}
          picturePath={picturePath}
          postId={_id}
          postDescription={description}
          userPostId={userId}
          userPicturePath={userPicturePath}
          isProfile={isProfile}
        />
        <CardContent>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          width="auto"
          height="350px"
          // src={`${baseURL}/assets/${picturePath.path}`}
          src={`${baseURL}/Images/${picturePath.path}`}
          alt="Picture"
        />
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px",
          }}
        >
          <Box style={{ display: "flex" }}>
            <IconButton>
              <FavoriteBorderOutlined sx={{ color: "#99EEFD" }} />
            </IconButton>
          </Box>
          <div>
            {userId === user._id ? (
              <>
                <IconButton>
                  <IconButton
                    style={{ color: "#99EEFD", padding: "0px" }}
                    onClick={handleOpen}
                  >
                    <Delete />
                  </IconButton>
                  <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        style={{ textAlign: "center", marginBottom: "25px" }}
                      >
                        are you sure to delete this post?
                      </Typography>
                      <FlexBetween>
                        {isProfile ? (
                          <Button
                            size="small"
                            variant="contained"
                            color="success"
                            onClick={() => dispatch(deletePost(_id, userId))}
                          >
                            YES
                          </Button>
                        ) : (
                          <Button
                            size="small"
                            variant="contained"
                            color="success"
                            onClick={() => dispatch(deleteFeedPost(_id))}
                          >
                            YES
                          </Button>
                        )}
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          onClick={handleClose}
                        >
                          NO
                        </Button>
                      </FlexBetween>
                    </Box>
                  </Modal>
                </IconButton>
              </>
            ) : (
              <IconButton>
                <ShareIcon style={{ color: "#99EEFD" }} />
              </IconButton>
            )}
          </div>
        </CardActions>
        <FlexBetween marginBottom={"10px"} gap="0.5rem">
          <UserImage image={userImage} />
          <InputBase
            placeholder="type your comment..."
            name="comments"
            sx={{
              color: "#E0E0E0",
              width: "100%",
              height: "40px",
              backgroundColor: "#333333",
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />
          <Button
            sx={{
              color: "#1A1A1A",
              backgroundColor: "#00D5FA",
              borderRadius: "3rem",
            }}
          >
            POST
          </Button>
        </FlexBetween>
        <Divider />
      </Card>
    </WidgetWrapper>
  );
};

export default TestPost;
