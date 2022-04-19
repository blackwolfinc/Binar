import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { RouterTes } from "./RouterTes";

import store from "./Redux/store/store";

store.subscribe(()=>{
  console.log(store.getState(), "state Data")
})

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
     <RouterTes />
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
