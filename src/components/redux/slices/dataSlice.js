// /** @format */

// import { createSlice } from "@reduxjs/toolkit";
// export const dataSlice = createSlice({
//   name: "data",
//   initialState: {
//     searchData: {
//       massege:[],
//       task: []
//     },
//     loading: null,
//     error: false,
//   },
//   reducers: {
//     addData: (state, action) => {
//       state.massege.push(action.payload);
//       state.task = action.payload.action;
//     },
//     start: (state) => {
//       state.loading = true;
//     },
//     sucess: (state, action) => {
//       state.massegeData = action.payload;
//     },

//   },
// });
// export const {addMessage,start,sucess}=dataSlice.actions
// export default dataSlice.reducer