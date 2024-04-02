import { configureStore } from "@reduxjs/toolkit";

import statusReducer from "../features/userSlice";

//Creating the Store instance and Providing a Reducer instance
export const store = configureStore({
  reducer: statusReducer,
});
