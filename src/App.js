import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./scences/homePage/home.js";
import Login from "./scences/loginPage/login.js";
import Register from "./scences/registerPage/Register.js";
import Profile from "./scences/profilePage/profile.js";
import AppNavbar from "./scences/navbar/AppNavBar.js";
import Userhome from "./scences/homePage/userHome.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoutes } from "./components/PrivateRoutes.jsx";
import { useDispatch } from "react-redux";
import { getUser } from "./Redux/Actions/authActions.js";
import { useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUser(navigate));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundColor: "#dedede",
          width: "100%",
          position: "fixed",
          zIndex: "1",
        }}
      >
        <AppNavbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
        <Route
          path="/Home"
          element={
            <PrivateRoutes>
              <Userhome />
            </PrivateRoutes>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
