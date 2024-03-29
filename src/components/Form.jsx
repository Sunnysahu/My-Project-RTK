import React, { useState } from "react";

function Form() {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput, password);
  };

  return (
    <div>
      <h1>Sign Up Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          className=" border border-black rounded-lg"
          type="text"
          placeholder="Enter Your Username"
          onChange={(e) => setUserInput(e.target.value)}
          //   value={console.log(userInput)}
        />

        <input
          className="border border-black rounded-lg m-2"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          //   value={(e) => e.target.value}
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
