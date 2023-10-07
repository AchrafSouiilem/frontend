import React, { useState } from "react";
import { FlexBetween } from "../../components/Flex";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Modal,
  Typography,
} from "@mui/material";
import {
  DeleteOutlined,
  Edit,
  EditOutlined,
  PersonAddOutlined,
  PersonRemoveOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import UserImage from "../../components/UserImage";
import { addFriends, deleteFriend } from "../../Redux/Actions/userActions";
import { updateFeedPost, updatePost } from "../../Redux/Actions/postActions";
import Dropzone from "react-dropzone";

const FriendList = ({
  name,
  subtilte,
  isProfile,
  userPostId,
  id,
  firstName,
  lastName,
  location,
  postId,
  postDescription,
  picturePath,
  userPicturePath,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const { _id } = useSelector((state) => state.authReducer.user);
  const userId = _id;
  const friends = useSelector((state) => state.userReducer.user);
  const isFriend = friends.find((friend) => friend.id === userPostId);
  const addFriend = () => {
    dispatch(addFriends(userId, userPostId));
  };

  const removeFriend = () => {
    dispatch(deleteFriend(userId, id));
  };
  /* COLORS */
  const primaryLight = "#00353F";
  const primaryDark = "#99EEFD";
  const main = "#C2C2C2";
  const medium = "#858585";

  /* DELETE BUTTON */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#00353F",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    color: "#fffaf3",
    p: 4,
  };

  /* EDIT BUTTON */
  const [description, setDescription] = useState(postDescription);
  const [image, setImage] = useState(picturePath);
  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", description);
    if (!image) {
      formData.append("picture", image);
      formData.append("image", image.name);
    }
    if (isProfile) {
      dispatch(updatePost(postId, userId, { description, picturePath: image }));
    } else {
      dispatch(updateFeedPost(postId, { description, picturePath: image }));
    }
  };
  return (
    <>
      {isFriend ? (
        <>
          <FlexBetween>
            <FlexBetween gap="0.5rem" style={{ padding: "12px" }}>
              <Box>
                <Typography
                  color={"#fffaf3"}
                  variant="h6"
                  fontWeight="300"
                  whiteSpace={"nowrap"}
                  sx={{
                    "&:hover": {
                      color: "#ffffff",
                      cursor: "pointer",
                      textShadow:
                        "1px 1px 2px black, 0 0 25px #00353F, 0 0 5px white",
                    },
                  }}
                >
                  {firstName} {lastName}
                </Typography>
                <Typography color={main} fontSize="0.75rem">
                  {location}
                </Typography>
              </Box>
            </FlexBetween>
            <IconButton sx={{ backgroundColor: primaryLight }}>
              <IconButton onClick={() => handleOpen()}>
                <PersonRemoveOutlined sx={{ color: primaryDark }} />
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
                    are you sure to remove {firstName} {lastName} from your
                    friends List?
                  </Typography>
                  <FlexBetween>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() => removeFriend()}
                    >
                      YES
                    </Button>
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
          </FlexBetween>
        </>
      ) : (
        <>
          <FlexBetween>
            {userId === userPostId ? (
              <>
                <FlexBetween gap="0.5rem" style={{ padding: "12px" }}>
                  <UserImage
                    image={user.picturePath.path}
                    style={{ size: "30px", padding: "8px" }}
                  />
                  <Box>
                    <Typography
                      color={"#fffaf3"}
                      variant="h6"
                      fontWeight="300"
                      whiteSpace={"nowrap"}
                      sx={{
                        "&:hover": {
                          color: "#ffffff",
                          cursor: "pointer",
                          textShadow:
                            "1px 1px 2px black, 0 0 25px #00353F, 0 0 5px white",
                        },
                      }}
                    >
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography color={main} fontSize="0.75rem">
                      {user.location}
                    </Typography>
                  </Box>
                </FlexBetween>
              </>
            ) : (
              <>
                <FlexBetween gap="0.5rem" style={{ padding: "12px" }}>
                  <UserImage
                    image={userPicturePath.path}
                    style={{ size: "30px", padding: "8px" }}
                  />
                  <Box>
                    <Typography
                      color={"#fffaf3"}
                      variant="h6"
                      fontWeight="300"
                      whiteSpace={"nowrap"}
                      sx={{
                        "&:hover": {
                          color: "#ffffff",
                          cursor: "pointer",
                          textShadow:
                            "1px 1px 2px black, 0 0 25px #00353F, 0 0 5px white",
                        },
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography color={main} fontSize="0.75rem">
                      {subtilte}
                    </Typography>
                  </Box>
                </FlexBetween>
              </>
            )}
            {userPostId === userId ? (
              <IconButton sx={{ backgroundColor: primaryLight }}>
                <IconButton
                  style={{ color: "#99EEFD" }}
                  onClick={() => handleOpen()}
                >
                  <Edit />
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
                      EDIT POST
                    </Typography>
                    <InputBase
                      placeholder="What's on your mind..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      sx={{
                        color: "#E0E0E0",
                        width: "100%",
                        backgroundColor: "#333333",
                        borderRadius: "2rem",
                        padding: "1rem 2rem",
                      }}
                    />
                    <Box
                      border={`1px solid ${medium}`}
                      borderRadius="5px"
                      mt="1rem"
                      p="1rem"
                    >
                      <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <FlexBetween>
                            <Box
                              {...getRootProps()}
                              border={`2px dashed #00D5FA`}
                              p="1rem"
                              width="100%"
                              sx={{ "&:hover": { cursor: "pointer" } }}
                            >
                              <input {...getInputProps()} />
                              {!image ? (
                                <p style={{ color: "#99EEFD", margin: "0px" }}>
                                  Add Image Here
                                </p>
                              ) : (
                                <FlexBetween>
                                  <Typography
                                    style={{ color: "#99EEFD", margin: "0px" }}
                                  >
                                    {image.name}
                                  </Typography>
                                  <EditOutlined />
                                </FlexBetween>
                              )}
                            </Box>
                            {image && (
                              <IconButton
                                onClick={() => setImage("")}
                                sx={{ width: "15%", color: "#fffaf3" }}
                              >
                                <DeleteOutlined />
                              </IconButton>
                            )}
                          </FlexBetween>
                        )}
                      </Dropzone>
                    </Box>
                    <FlexBetween style={{ marginTop: "25px" }}>
                      {isProfile}
                      <Button
                        size="small"
                        variant="contained"
                        color="success"
                        onClick={handlePost}
                      >
                        UPDATE
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        onClick={handleClose}
                      >
                        CANCEL
                      </Button>
                    </FlexBetween>
                  </Box>
                </Modal>
              </IconButton>
            ) : (
              <IconButton
                onClick={() => addFriend()}
                sx={{ backgroundColor: primaryLight }}
              >
                <PersonAddOutlined sx={{ color: primaryDark }} />
              </IconButton>
            )}
          </FlexBetween>
        </>
      )}
    </>
  );
};

export default FriendList;
