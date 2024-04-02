import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { login, signIn, nameCheck } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name);
  return (
    <div>
      <div>Hello {name}</div>
      <h1>Thanks for Logging In...</h1>

      <button
        className="mt-4 bg-gray-200 rounded-lg border border-black px-3 py-1"
        type="submit"
        onClick={() => {
          alert("User Logged Out!!!");
          dispatch(login(false));
          dispatch(signIn(true));
          dispatch(nameCheck(""));
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
