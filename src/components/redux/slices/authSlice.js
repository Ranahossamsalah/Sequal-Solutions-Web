/** @format */

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authorization",
  initialState: {
    auth: false,
  },
  reducers: {
    changeAuth(state, action) {
      state.auth = action.payload;
      console.log(action);
      console.log(state);
    },
  },
});

export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;
