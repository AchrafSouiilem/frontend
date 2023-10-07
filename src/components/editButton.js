import "../Styles/Edit.css";
import React from "react";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { FlexBetween } from "./Flex";
import { editProfile } from "../Redux/Actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const EditButton = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const { _id, firstName, lastName, picturePath, location, occupation } = user;
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

  const isMobileScreens = useMediaQuery("(max-width: 412px)");

  return (
    <Box>
      {isMobileScreens ? (
        <>
          <MenuItem onClick={() => handleOpen()}>Edit</MenuItem>
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="res_register_box">
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
                  <div className="res_register_container">
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
        </>
      ) : (
        <>
          <MenuItem onClick={() => handleOpen()}>Edit</MenuItem>
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
        </>
      )}
    </Box>
  );
};

export default EditButton;
