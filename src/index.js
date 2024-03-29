import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.rtl.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./redux/reducers";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/features/Users";
import movieReducer from "./components/features/Movie";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    users: userReducer,
    movies: movieReducer,
  },
});
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((res) => {
      if (res.installing) {
        console.log("installing service worker");
      }
      if (res.waiting) {
        console.log("waiting for service worker");
      }
      if (res.active) {
        console.log("active service worker");
      }
    })
    .catch((rej) => {
      console.log("rejected service worker or register has error");
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
