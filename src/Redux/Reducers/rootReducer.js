import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";
import settingsReducer from "./settingReducer";

const rootRecducer = combineReducers({
  authReducer,
  postsReducer,
  userReducer,
  settingsReducer,
});

export default rootRecducer;
