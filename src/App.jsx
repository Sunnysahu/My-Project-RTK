import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

import { signIn, signUp } from "./features/userSlice";

function App() {
  // USed UseSelector from Redux

  //Getting Login State for Login Check
  const login = useSelector((state) => state.isLogin);

  const signup = useSelector((state) => state.isSignUp);

  //Getting Signup State for Signup Check

  const signIn = useSelector((state) => state.isSignIn);

  //Getting Signin State for Sign Check

  const name = useSelector((state) => state.name);
  return (
    <>
      <h1 className="bg-gray-500 text-3xl text-black mb-4">Hello {name}!!!</h1>
      // All the Checks Going on got from my Redux Store.
      {signIn ? <Signin /> : null}
      {signup ? <Signup /> : null}
      {login ? <Login /> : null}
    </>
  );
}

export default App;
