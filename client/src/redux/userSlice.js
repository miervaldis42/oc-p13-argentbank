// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  lastname: "Payet",
  firstname: "Dimitri",
};

/*
    Slice
*/
const userSlice = createSlice({
  name: "userSlice", // store name
  initialState,
  reducers: {
    resetUserState: (state) => Object.assign(state, initialState),
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
  },
});

export const { setFirstname, setLastname } = userSlice.actions;
export const userReducer = userSlice.reducer;
