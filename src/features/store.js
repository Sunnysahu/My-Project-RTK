import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { username: "Sunny", password: "Sunny@123" },
    { username: "John", password: "John@123" },
  ],

  isLoggedIn: false,
};

export const statusSlice = {
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
  },
};

export const { checkStatus } = statusSlice.actions;

const statusReducer = statusSlice.reducer;

export default statusReducer;
