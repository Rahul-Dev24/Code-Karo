import { createStore } from "redux";
import myReducers from "./reducers";

const Store = createStore(myReducers);

export default Store;
