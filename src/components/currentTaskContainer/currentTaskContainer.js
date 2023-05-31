/** @format */

import React from "react";
import "./currentTaskContainer.css";
import CurrentTaskUi from "../currentTaskUi/currentTaskUi";
import { useSelector } from "react-redux";
function CurrentTaskContainer() {
  const responseData = useSelector((state) => state.usertextSlice.response);
  return (
    <div id="currentTasks" className="boxUi  container">
      <h3>Current Tasks</h3>
      {responseData
        ? responseData.map((item) => (
            <CurrentTaskUi task={item.title } />
          ))
        : ""}
    </div>
  );
}

export default CurrentTaskContainer;

//
// return (
//   <div id="searchResult" className="boxUi">
//     <h3>Hi... you can ask me whatever you want and i will answer you here</h3>
//
//   </div>
// );
