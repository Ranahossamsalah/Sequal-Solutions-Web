/** @format */

//https://rapidapi.com/openai-api-openai-api-default/api/openai80/

import { configureStore } from "@reduxjs/toolkit";
import usertextSlice from "./slices/usertextSlice";
import authSlice from "./slices/authSlice";
import  dataSlice from "./slices/dataSlice";

export const store = configureStore({
  reducer: {
    usertextSlice: usertextSlice,
    authSlice: authSlice,
    // dataSlice :dataSlice
  },
});
