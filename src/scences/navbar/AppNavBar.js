import "../../Styles/Navbar.css";
import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  Switch,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/Actions/authActions";
import {
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { FlexBetween } from "../../components/Flex.jsx";
import { Help, Message, Notifications } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { toggleFalse, toggleTrue } from "../../Redux/Actions/settingActions";
import { styled } from "@mui/material/styles";
import curlyBrackets from "../../images/curlyBracekts.png";
import EditButton from "../../components/editButton";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const AppNavBar = ({ isHome = false, setFliterTitle }) => {
  const isMobileScreens = useMediaQuery("(max-width: 412px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const [theme, settheme] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: theme ? "light" : "dark",
    },
  });
  const handleChange = (event) => {
    settheme(event.target.checked);
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  const handleSettings = () => {
    dispatch(toggleFalse());
  };

  return (

    <FlexBetween className="navBar" backgroundColor="#00353F" padding="0.5rem">
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        {isAuth ? (
          <>
            {isMobileScreens ? (
              <Link to={"/Home"}>
                <img
                  height={"50px"}
                  width={"50px"}
                  src={curlyBrackets}
                  alt="LOGO"
                ></img>
              </Link>
            ) : (
              <>
                <>
                  <Link to={"/Home"}>
                    <Typography
                      style={{
                        display: "inline-block",
                        height: "50px",
                        fontWeight: "bold",
                        fontSize: "clamp(1rem, 2rem, 2.25rem)",
                        whiteSpace: "nowrap",
                      }}
                      color={"#979797"}
                      sx={{
                        "&:hover": {
                          color: "#ffffff",
                          cursor: "pointer",
                          textShadow:
                            "1px 1px 2px black, 0 0 25px red, 0 0 5px red",
                        },
                      }}
                      onClick={handleSettings}
                    >
                      Gomycode Forum
                    </Typography>
                  </Link>
                  {isHome ? (
                    <FlexBetween
                      backgroundColor={"#f0f0f0"}
                      borderRadius="9px"
                      marginLeft={"20px"}
                    >
                      <Search style={{ color: "#000000" }}>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search…"
                          inputProps={{ "aria-label": "search" }}
                          onChange={(e) => {
                            setFliterTitle(e.target.value);
                          }}
                        />
                      </Search>
                    </FlexBetween>
                  ) : (
                    <></>
                  )}
                </>
              </>
            )}
          </>
        ) : (
          <>
            {isMobileScreens ? (
              <>
                <Link to={"/"}>
                  <img
                    height={"50px"}
                    width={"50px"}
                    src={curlyBrackets}
                    alt="LOGO"
                  ></img>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/"}>
                  <Typography
                    style={{
                      display: "inline-block",
                      height: "50px",
                      fontWeight: "bold",
                      fontSize: "clamp(1rem, 2rem, 2.25rem)",
                      whiteSpace: "nowrap",
                    }}
                    color={"#979797"}
                    sx={{
                      "&:hover": {
                        color: "#ffffff",
                        cursor: "pointer",
                        textShadow:
                          "1px 1px 2px black, 0 0 25px red, 0 0 5px red",
                      },
                    }}
                  >
                    Gomycode Forum
                  </Typography>
                </Link>
              </>
            )}
          </>
        )}
      </div>

      {/* IF isAuth ARE TRUE */}
      {isAuth ? (
        <>
          {isMobileScreens ? (
            <>
              <FlexBetween gap="2rem">
                <ThemeProvider theme={darkTheme}>
                  <CssBaseline />
                  <Switch
                    checked={theme}
                    color="success"
                    onChange={handleChange}
                  />
                </ThemeProvider>
                <a
                  href="https://gomycode.com/tn/hackerspaces/"
                  alt="link"
                  target="blank"
                >
                  <Help sx={{ fontSize: "25px", color: "#f0f0f0" }} />
                </a>
                <FormControl
                  variant="standard"
                  value={`${user.firstName} ${user.lastName}`}
                >
                  <Select
                    value={`${user.firstName} ${user.lastName}`}
                    sx={{
                      backgroundColor: "#f0f0f0",
                      width: "150px",
                      borderRadius: "0.25rem",
                      p: "0.25rem 1rem",
                      "& .MuiSvgIcon-root": {
                        pr: "0.25rem",
                        width: "3rem",
                      },
                      "& .MuiSelect-select:focus": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                    input={<InputBase />}
                  >
                    <MenuItem value={`${user.firstName} ${user.lastName}`}>
                      <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
                    </MenuItem>
                    <Link
                      to={"/profile"}
                      style={{ textDecoration: "none", color: "#000000DE" }}
                    >
                      <MenuItem
                        onClick={() => {
                          dispatch(toggleTrue());
                          if (isHome) {
                            navigate("/profile");
                          }
                        }}
                      >
                        Profile
                      </MenuItem>
                    </Link>
                    <EditButton />
                    <Link
                      to={"/"}
                      style={{ textDecoration: "none", color: "#000000DE" }}
                    >
                      <MenuItem onClick={logout}>Log Out</MenuItem>
                    </Link>
                  </Select>
                </FormControl>
              </FlexBetween>
            </>
          ) : (
            <>
              <FlexBetween>
                <FlexBetween gap="2rem">
                  <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Switch
                      checked={theme}
                      color="success"
                      onChange={handleChange}
                    />
                  </ThemeProvider>
                  <Message sx={{ color: "#f0f0f0", fontSize: "25px" }} />
                  <Notifications sx={{ color: "#f0f0f0", fontSize: "25px" }} />
                  <a
                    href="https://gomycode.com/tn/hackerspaces/"
                    alt="link"
                    target="blank"
                  >
                    <Help sx={{ fontSize: "25px", color: "#f0f0f0" }} />
                  </a>
                  <FormControl
                    variant="standard"
                    value={`${user.firstName} ${user.lastName}`}
                  >
                    <Select
                      value={`${user.firstName} ${user.lastName}`}
                      sx={{
                        backgroundColor: "#f0f0f0",
                        width: "150px",
                        borderRadius: "0.25rem",
                        p: "0.25rem 1rem",
                        "& .MuiSvgIcon-root": {
                          pr: "0.25rem",
                          width: "3rem",
                        },
                        "& .MuiSelect-select:focus": {
                          backgroundColor: "#f0f0f0",
                        },
                      }}
                      input={<InputBase />}
                    >
                      <MenuItem value={`${user.firstName} ${user.lastName}`}>
                        <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
                      </MenuItem>
                      <Link
                        to={"/profile"}
                        style={{ textDecoration: "none", color: "#000000DE" }}
                      >
                        <MenuItem
                          onClick={() => {
                            dispatch(toggleTrue());
                            if (isHome) {
                              navigate("/profile");
                            }
                          }}
                        >
                          Profile
                        </MenuItem>
                      </Link>
                      <EditButton />
                      <Link
                        to={"/"}
                        style={{ textDecoration: "none", color: "#000000DE" }}
                      >
                        <MenuItem onClick={logout}>Log Out</MenuItem>
                      </Link>
                    </Select>
                  </FormControl>
                </FlexBetween>
              </FlexBetween>
            </>
          )}
        </>
      ) : (
        /* IF isAuth ARE FALSE */
        <>
          {isMobileScreens ? (
            <>
                  <a
                    href="https://gomycode.com/tn/hackerspaces/"
                    target="blank"
                  >
                    <Help sx={{ fontSize: "25px", color: "#f0f0f0" }} />
                  </a>
                  <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Switch
                      checked={theme}
                      color="success"
                      onChange={handleChange}
                    />
                  </ThemeProvider>
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    variant="contained"
                    color="error"
                  >
                    LOGIN
                  </Button>
                </Link>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button variant="contained" color="error">
                    REGISTER
                  </Button>
                </Link>
            </>
          ) : (
            <>
              {" "}
              <FlexBetween>
                <FlexBetween gap="2rem">
                  <a
                    href="https://gomycode.com/tn/hackerspaces/"
                    target="blank"
                  >
                    <Help sx={{ fontSize: "25px", color: "#f0f0f0" }} />
                  </a>
                  <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Switch
                      checked={theme}
                      color="success"
                      onChange={handleChange}
                    />
                  </ThemeProvider>
                </FlexBetween>
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    style={{ margin: "0px 10px 0px 40px" }}
                  >
                    LOGIN
                  </Button>
                </Link>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button variant="contained" color="error">
                    REGISTER
                  </Button>
                </Link>
              </FlexBetween>
            </>
          )}
        </>
      )}
    </FlexBetween>
  );
};

export default AppNavBar;
