import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";

const myReducers = combineReducers({
  user: userAuthReducer,
});

export default myReducers;
