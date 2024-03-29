import { configureStore } from "@reduxjs/toolkit";

import statusReducer from "../features/userSlice";

export const store = configureStore({
  reducer: statusReducer,
});
