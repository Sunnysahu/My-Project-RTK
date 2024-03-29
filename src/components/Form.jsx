import React, { useState } from "react";

import { useSelector } from "react-redux";

function Form() {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");

  const check = useSelector((state) => state.data);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userInput, password);
    console.log(check);
  };

  return (
    <div>
      <h1 className="font">Sign Up Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          className=" border border-black rounded-lg"
          type="text"
          placeholder="Enter Your Username"
          onChange={(e) => setUserInput(e.target.value)}
        />

        <input
          className="border border-black rounded-lg m-2"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-red-500 rounded-lg border border-black px-2"
          type="submit"
        >
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default Form;
