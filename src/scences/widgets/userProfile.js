import React from "react";
import "../../Styles/Register.css";
import {
  DeleteOutlined,
  EditOutlined,
  LocationOnOutlined,
  ManageAccountsOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Button,
  Modal,
} from "@mui/material";
import UserImage from "../../components/UserImage.jsx";
import { FlexBetween } from "../../components/Flex.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTrue } from "../../Redux/Actions/settingActions.js";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { editProfile } from "../../Redux/Actions/authActions.js";

const baseURL = "https://backend-pi-gilt.vercel.app"

const UserProfile = ({ userImage, isProfile = false }) => {
  const user = useSelector((state) => state.authReducer.user);
  const friend = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    _id,
    firstName,
    lastName,
    picturePath,
    location,
    occupation,
    viewedProfile,
    impressions,
  } = user;

  /* EDIT BUTTON */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstname, setFirstName] = useState(firstName);
  const [lastname, setLastName] = useState(lastName);
  const [image, setImage] = useState(picturePath);
  const [Location, setLocation] = useState(location);
  const [Occupation, setOccupation] = useState(occupation);

  const handleEdit = () => {
    dispatch(
      editProfile(_id, {
        firstName: firstname,
        lastName: lastname,
        picturePath: image,
        location: Location,
        occupation: Occupation,
      })
    );
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setImage("");
    setLocation("");
    setOccupation("");
  };

  /* COLORS */
  const primaryLight = "#00353F";
  //const medium = "#858585";

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem">
        <Box>
          <UserImage image={userImage} />
        </Box>
        <Box>
          <Typography
            variant="h6"
            noWrap
            color="#e0e0e0"
            sx={{
              "&:hover": {
                color: "#ffffff",
                cursor: "pointer",
                textShadow:
                  "1px 1px 2px black, 0 0 25px #00353F, 0 0 5px white",
              },
            }}
            onClick={() => {
              dispatch(toggleTrue());
              if (isProfile) {
                navigate("/profile");
              }
            }}
          >
            {firstName} {lastName}
          </Typography>
          <Typography color="#858585">{friend.length} friends</Typography>
        </Box>
        <Box sx={{ backgroundColor: primaryLight }}>
          <IconButton
            style={{
              color: "#fffaf3",
              backgroundColor: "transparent !important",
            }}
            onClick={() => handleOpen()}
          >
            <ManageAccountsOutlined />
          </IconButton>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="register_box">
              <IconButton style={{ color: "#fffaf3" }} onClick={handleReset}>
                <DeleteOutlined />
              </IconButton>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ textAlign: "center", marginBottom: "25px" }}
              >
                EDIT PROFILE
              </Typography>
              <form>
                <div className="register_container">
                  <div className="user-box">
                    <input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                    <label>Firstname</label>
                  </div>
                  <div className="user-box">
                    <input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    ></input>
                    <label>Lastname</label>
                  </div>
                  <div className="user-box">
                    <input
                      type="text"
                      value={Location}
                      onChange={(e) => setLocation(e.target.value)}
                    ></input>
                    <label>Location</label>
                  </div>
                  <div className="user-box">
                    <input
                      type="text"
                      value={Occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    ></input>
                    <label>Occupation</label>
                  </div>

                  <Box
                    gridColumn={"1 / 3"}
                    border={"1px solid #858585"}
                    borderRadius="5px"
                    p="1rem"
                    margin={"0 20px"}
                  >
                    <Box>
                      <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <FlexBetween>
                            <Box
                              {...getRootProps()}
                              border={`2px dashed ${"#03e9f4"}`}
                              p="1rem"
                              width="100%"
                              sx={{ "&:hover": { cursor: "pointer" } }}
                            >
                              <input {...getInputProps()} />
                              {!image ? (
                                <p
                                  style={{
                                    margin: "0px",
                                    color: "#03e9f4",
                                  }}
                                >
                                  Add Picture Here
                                </p>
                              ) : (
                                <FlexBetween>
                                  <Typography
                                    style={{
                                      margin: "0px",
                                      color: "#03e9f4",
                                    }}
                                  >
                                    {image.path}
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
                  </Box>
                </div>
                <FlexBetween style={{ marginTop: "25px" }}>
                  <Button
                    style={{ gridColumn: "1 / 3" }}
                    size="small"
                    variant="contained"
                    color="success"
                    onClick={() => {
                      handleEdit();
                      handleClose();
                    }}
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
              </form>
            </div>
          </Modal>
        </Box>
      </FlexBetween>

      <Divider />
      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: "#c2c2c2" }} />
          <Typography color="#858585">{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: "#c2c2c2" }} />
          <Typography color="#858585">{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color="#858585">Who's viewed your profile</Typography>
          <Typography color="#c2c2c2" fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color="#858585">Impressions of your post</Typography>
          <Typography color="#c2c2c2" fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color="#c2c2c2" fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
             {/*<img src={`${baseURL}/assets/twitter.png`} alt="twitter" />*/}
             <img src={`${baseURL}/Images/twitter.png`} alt="twitter" />
            <Box>
              <Typography color="#c2c2c2" fontWeight="500">
                Twitter
              </Typography>
              <Typography color="#858585">Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: "#c2c2c2" }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            {/*<img src={`${baseURL}/assets/linkedin.png`} alt="linkedin" />*/}
            <img src={`${baseURL}/Images/linkedin.png`} alt="linkedin" />
            <Box>
              <Typography color="#c2c2c2" fontWeight="500">
                Linkedin
              </Typography>
              <Typography color="#858585">Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: "#c2c2c2" }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserProfile;
