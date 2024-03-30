import { useState } from "react";

import { useDispatch } from "react-redux";
import { signIn, signUp, checkStatus } from "../features/userSlice";

function Signin() {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(checkStatus({ userInput, password }));

    setUserInput("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="font">Sign In Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          className=" border border-black rounded-lg"
          type="text"
          placeholder="Enter Your Username"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <input
          className="border border-black rounded-lg m-2"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-red-500 rounded-lg border border-black px-2"
          type="submit"
        >
          Login
        </button>
      </form>
      <h1
        className="cursor-pointer hover:text-blue-900"
        onClick={() => {
          console.log("sign");
          dispatch(signIn(false));
          dispatch(signUp(true));
        }}
      >
        Not a User ? Sign Up Here
      </h1>
    </div>
  );
}

export default Signin;
