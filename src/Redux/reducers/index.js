import {combineReducers} from "redux"
import postReducer from "./postReducer"


// lebih dari satu orang yang berwenang 
export default combineReducers({
  manager1: postReducer,
});