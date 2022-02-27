import { combineReducers } from "redux";
import userReducers from "./userReducers";
import usersReducers from "./usersReducers";

const rootReducer = combineReducers({
  user: userReducers,
  users: usersReducers,
});

export default rootReducer;
