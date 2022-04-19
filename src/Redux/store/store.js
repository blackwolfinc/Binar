import { createStore, compose, applyMiddleware } from "redux";
import thunk  from "redux-thunk"

import  combineReducers  from  "../reducers/index";

// Alat Pembantu Pekerjaan Manager Brangkas
const middlewereThunk = compose(
  applyMiddleware(thunk),  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//STEP 1 membuat brangkas 
const store = createStore(combineReducers ,middlewereThunk)

export default store