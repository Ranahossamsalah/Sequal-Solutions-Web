/** @format */

import React, { useState } from "react";
import "./massegeContainer.css";
import MassegeUi from "../massegeUi/massegeUi";
import { useSelector } from "react-redux";


function MassegeContainer() {
  const responseData = useSelector((state) => state.usertextSlice.response);
  console.log(responseData);
  return (
    <div id="searchResult" className="boxUi">
      <h3>Hi... you can ask me whatever you want and i will answer you here</h3>
      {responseData
        ? responseData.map((item) => (
            <MassegeUi task="item.title" answer={item.htmlSnippet} url = {item.link}/>
          ))
        : ""}
    </div>
  );
}

export default MassegeContainer;
