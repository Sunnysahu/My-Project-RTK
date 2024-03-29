import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { username: "Sunny", password: "Sunny@123" },
    { username: "John", password: "John@123" },
  ],

  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "status",
  initialState,

  reducer: {
    checkStatus: (state, action) => {
      state.data = state.data.map((user) => {
        if (user.username === action.payload.username) {
          return !state.isLoggedIn;
        }
      });
    },
    loadFromLocalStorage: (state, action) => {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        state.data = parsedData;
      }
    },
  },
});

export const { checkStatus, loadFromLocalStorage } = userSlice.actions;

const statusReducer = userSlice.reducer;

export default statusReducer;
