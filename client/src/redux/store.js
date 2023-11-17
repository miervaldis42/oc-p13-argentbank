// Imports
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { authReducer } from "./authSlice";
import { userReducer } from "./userSlice";

/*
    Store
*/
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
