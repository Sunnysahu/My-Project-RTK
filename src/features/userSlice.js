import { createSlice } from "@reduxjs/toolkit";
import { parse } from "postcss";

const initialState = {
  data: [
    // { username: "Sunny@123", password: "Sunny@123" },
    // { username: "John", password: "John@123" },
  ],
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
      // console.log("Hns", state.data.);
      const storedData = localStorage.getItem("userData");
      const parsedData = JSON.parse(storedData);
      state.data = parsedData;
      console.log(state.data);

      state.data.map((user) => {
        console.log("Check", user.userInput, user.password);
        console.log(
          "Check 2,0",
          action.payload.userInput,
          action.payload.password
        );

        if (
          user.userInput === action.payload.userInput &&
          user.password === action.payload.password
        ) {
          console.log("Im HEre");
          state.name = user.userInput;
          console.log("Nmae", state.name);
          // console.log(state.data.username);
          // console.log(state.isLogin);
          state.isLogin = true;
          // console.log(state.isLogin);
          state.isSignIn = false;
          state.isSignUp = false;
        }
        // console.log("Here", state.isLoggedIn);
      });
    },
    loadFromLocalStorage: (state, action) => {
      const newDataset = action.payload;
      console.log("newDataset", newDataset);
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        // console.log("Parsed", parsedData);

        state.data = parsedData;
        // console.log("state", state.data);

        // console.log("after", state.data);
        state.data.push(newDataset);
        localStorage.setItem("userData", JSON.stringify(state.data));
        console.log("test:", state.data);
      } else {
        const newData = localStorage.setItem(
          "userData",
          JSON.stringify([newDataset])
        );
      }
    },
    login: (state, action) => {
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
