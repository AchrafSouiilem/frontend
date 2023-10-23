import "../../Styles/Register.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/Actions/authActions";
import { Box, /*IconButton, Typography,*/ useMediaQuery } from "@mui/material";
import axios from "axios";
//import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
//import { FlexBetween } from "../../components/Flex";
//import Dropzone from "react-dropzone";

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

  const baseURL = "https://backend-pi-gilt.vercel.app";
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", image);
    axios.post(`${baseURL}/upload`, formData);
  };
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
            <input
              type="file"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
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
            onClick={() => {
              handleRegister();
              // handleUpload();
            }}
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
