import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.rtl.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./redux/reducers";


const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducers);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
