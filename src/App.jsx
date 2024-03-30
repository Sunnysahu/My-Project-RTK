import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

import { signIn, signUp } from "./features/userSlice";

function App() {
  const login = useSelector((state) => state.isLogin);

  console.log("login", login);
  const signup = useSelector((state) => state.isSignUp);

  console.log("signup", signup);

  const signIn = useSelector((state) => state.isSignIn);

  console.log("singin", signIn);

  const name = useSelector((state) => state.name);
  return (
    <>
      <h1 className="bg-gray-500 text-3xl text-black mb-4">Hello {name}!!!</h1>
      {signIn ? <Signin /> : null}

      {signup ? <Signup /> : null}

      {login ? <Login /> : null}
    </>
  );
}

export default App;
