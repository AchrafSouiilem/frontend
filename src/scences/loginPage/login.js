import "../../Styles/Login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Actions/authActions.js";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogin = (e) => {
    const userLogin = { email, password };
    e.preventDefault();
    dispatch(loginUser(userLogin, navigate));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form>
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
          <div className="links">
            <Link to={"#"}>Forget Password?</Link>
            <Link to={"/register"}>Signup</Link>
          </div>
          <Link onClick={HandleLogin}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            SUBMIT
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
