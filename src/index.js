import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDCYMrTMFjQOu0aQjK-PRp1C-5Is9CcYk",
  authDomain: "cart-ccc6b.firebaseapp.com",
  projectId: "cart-ccc6b",
  storageBucket: "cart-ccc6b.appspot.com",
  messagingSenderId: "1068334312878",
  appId: "1:1068334312878:web:bd874e0bb9f7139245ec3f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
