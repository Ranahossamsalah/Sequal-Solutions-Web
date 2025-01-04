/** @format */

import { createSlice } from "@reduxjs/toolkit";

const usertextSlice = createSlice({
  name: "usertext",
  initialState: {
    userText: [],
    userdiscription: [],
    userName:"",
    loading: null,
    error: false,
    response: ""
  },
  reducers: {
    addUserText(state, action) {
      state.userText.push(action.payload);
  
    },
    addDiscription(state, action) {
      state.userdiscription.push(action.payload);
    },
    addUserName(state,action){
      state.userName=action.payload
    },
    start: (state) => {
      state.loading = true;
    },
    sucess: (state, action) => {
      state.response=action.payload.items
      console.log(action);
     
      // state.userText = action.payload.text;
      // state.userdiscription = action.payload.disc;
      // state.loading = null;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { addUserText, addDiscription,addUserName, start, sucess, error } =
  usertextSlice.actions;
export default usertextSlice.reducer;
