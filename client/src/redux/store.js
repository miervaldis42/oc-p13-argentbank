// Imports
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { userReducer } from "./userSlice";

/*
    Store
*/
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
