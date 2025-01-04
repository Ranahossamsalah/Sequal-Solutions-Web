/** @format */

import React from "react";
import "./currentTaskContainer.css";
import CurrentTaskUi from "../currentTaskUi/currentTaskUi";
import { useSelector } from "react-redux";
//loader liberary
//https://github.com/tienpham94/react-awesome-spinners
import { Ring } from "react-awesome-spinners";
function CurrentTaskContainer() {
  const responseData = useSelector((state) => state.usertextSlice.response);
  const loading = useSelector((state) => state.usertextSlice.loading);
  return (
    <div id="currentTasks" className="boxUi  container">
      <h3>Current Tasks</h3>
      {loading ? <Ring color="orange" size="40" sizeUnit="px" /> : ""}
      {responseData
        ? responseData.map((item) => <CurrentTaskUi task={item.title} />)
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
