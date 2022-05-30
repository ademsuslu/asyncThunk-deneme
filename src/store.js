import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Components/features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
