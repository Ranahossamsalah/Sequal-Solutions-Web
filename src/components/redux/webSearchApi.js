/** @format */


// import { start, sucess } from "./slices/massegeSlice"
// import axios from "axios";
// export const addMassege=async(massege,dispatch)=>{
//     dispatch(start());
//     try {
//         const res = await axios.post(' https://chatgpt-open-ai-nlp.p.rapidapi.com/',massege);
//         dispatch(sucess(res.data))
//         console.log(res.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// import usertextSlice, {
//   addDiscription,
//   addUserText,
//   start,
// } from "../redux/slices/usertextSlice";
// import { useDispatch, useSelector } from "react-redux";
// import React, { useEffect, useState } from "react";

// export const FetchApi =async() =>{
//   const dispatch = useDispatch();
//   dispatch(start());
//   const userTextState = useSelector((state) => state.usertextSlice.userText);
//   const userDiscriptionState = useSelector(
//     (state) => state.usertextSlice.userdiscription
//   );

//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "ae822103d0msh890010ddadace4ep14f398jsn814a473463bc",
//       "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
//     },
//   };
//   let fetchData;
// useEffect(async()=>
//   fetchData = await fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response,userTextState ))
//   .catch((err) => console.error(err))

// )
   
  //  fetch(
    // `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${userTextState}&pageNumber=${1}&pageSize=${10}&autoCorrect=${true}`,
    // options
  // )
    
//   return <div>WebSearchApi</div>;
// }



// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
//   params: {q: 'taylor swift', pageNumber: '1', pageSize: '10', autoCorrect: 'true'},
//   headers: {
//     'X-RapidAPI-Key': 'ae822103d0msh890010ddadace4ep14f398jsn814a473463bc',
//     'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
//   params: {q: 'taylor swift', pageNumber: '1', pageSize: '10', autoCorrect: 'true'},
//   headers: {
//     'X-RapidAPI-Key': 'ae822103d0msh890010ddadace4ep14f398jsn814a473463bc',
//     'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

