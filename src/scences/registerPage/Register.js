import "../../Styles/Register.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/Actions/authActions";
import { Box, /*IconButton, Typography,*/ useMediaQuery } from "@mui/material";
// import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
// import { FlexBetween } from "../../components/Flex";
// import Dropzone from "react-dropzone";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      registerUser(
        {
          firstName,
          lastName,
          email,
          password,
          image,
          location,
          occupation,
        },
        navigate
      )
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setImage("");
    setLocation("");
    setOccupation("");
  };

  const isMobileScreens = useMediaQuery("(max-width: 412px)");

  const baseURL = "https://backend-pi-gilt.vercel.app"

  return (
    <div className="register_box">
      <h2>REGISTER</h2>
      <form>
        <div className="register_container">
          <div className="user-box">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label>Firstname</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label>Lastname</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
            <label>Location</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            ></input>
            <label>Occupation</label>
          </div>

          <Box
            gridColumn={"1 / 3"}
            border={"1px solid #858585"}
            borderRadius="5px"
            p="1rem"
          >
            {/* <Box>
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
                        <p style={{ margin: "0px", color: "#03e9f4" }}>
                          Add Picture Here
                        </p>
                      ) : (
                        <FlexBetween>
                          <Typography
                            style={{ margin: "0px", color: "#03e9f4" }}
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
                        sx={{ width: "15%" }}
                      >
                        <DeleteOutlined />
                      </IconButton>
                    )}
                  </FlexBetween>
                )}
              </Dropzone>
            </Box> */}
            <form method="POST" action={`${baseURL}/API/auth/register`} encType="multipart/form-data">
              <input type="file" name="image" />
            </form>
          </Box>
          <div className="links">
            {isMobileScreens ? (
              <>
                <Link to={"/login"}>YOU HAVE AN ACCOUNT? LOGIN</Link>
              </>
            ) : (
              <>
                <Link to={"/login"} style={{ gridColumn: "1 / 3" }}>
                  YOU ALREADY HAVE AN ACCOUNT? LOGIN
                </Link>
              </>
            )}
          </div>
          <Link
            style={{ gridColumn: "1 / 3" }}
            className="size"
            onClick={handleRegister}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            SUBMIT
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
