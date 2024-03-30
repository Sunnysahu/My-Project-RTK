import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store.js";

// import Form from "./components/Form.jsx";
// import Signup from "./components/Signup.jsx";
// import Signin from "./components/Signin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>{<App />}</Provider>
);
