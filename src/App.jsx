// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

import Form from "./components/Form";
import Login from "./components/Login";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <h1 className="bg-red-500 text-3xl text-black mb-4">Hello Sunny!!!</h1>

      <Form />
      {isLoggedIn ? <Login /> : null}
    </>
  );
}

export default App;
