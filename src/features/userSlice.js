import { createSlice } from "@reduxjs/toolkit";
import { parse } from "postcss";

// Creating Intital State or Blank State

const initialState = {
  data: [],
  isLogin: false,
  isSignIn: true,
  isSignUp: false,
  name: "",
};

export const userSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      const storedData = localStorage.getItem("userData");
      const parsedData = JSON.parse(storedData);
      // Stroing thr Parsed Data in the State...
      state.data = parsedData;

      //Geting the Previous State and Checking the Data
      state.data.map((user) => {
        if (
          user.userInput === action.payload.userInput &&
          user.password === action.payload.password
        ) {
          state.name = user.userInput;
          // alert("User Logged In Successful!!!");

          //Changing my Checks...
          state.isLogin = true;
          state.isSignIn = false;
          state.isSignUp = false;
        }
      });
    },
    loadFromLocalStorage: (state, action) => {
      const newDataset = action.payload;
      // Getting Data from Local Storage and Parsing It
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);

        state.data = parsedData;
        //Pushing the Data into the State, so every Component can access it
        state.data.push(newDataset);
        localStorage.setItem("userData", JSON.stringify(state.data));
      } else {
        // if the user is using this for the first time then, it will create a data storage as soon as user signup...
        const newData = localStorage.setItem(
          "userData",
          JSON.stringify([newDataset])
        );
      }
    },
    login: (state, action) => {
      //Checking States
      state.isLogin = action.payload;
    },
    signUp: (state, action) => {
      state.isSignUp = action.payload;
    },
    signIn: (state, action) => {
      console.log(action.payload);
      state.isSignIn = action.payload;
    },
    nameCheck: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {
  checkStatus,
  loadFromLocalStorage,
  login,
  signIn,
  signUp,
  nameCheck,
} = userSlice.actions;

const statusReducer = userSlice.reducer;

export default statusReducer;
