/** @format */

import React, { useState } from "react";
import "./massegeContainer.css";
import MassegeUi from "../massegeUi/massegeUi";
import { useSelector } from "react-redux";
import { Ring } from "react-awesome-spinners";

function MassegeContainer() {
  const responseData = useSelector((state) => state.usertextSlice.response); 
  console.log(responseData);
  const loading = useSelector((state) => state.usertextSlice.loading);
  return (
    <div id="searchResult" className="boxUi">
      <h3>Hi... you can ask me whatever you want and i will answer you here</h3>
      {loading ? <Ring color="orange" size= "40" sizeUnit= 'px' /> : ""}
      {responseData
        ? responseData.map((item) => (
            <MassegeUi
              task="item.title"
              answer={item.htmlSnippet}
              url={item.link}
            />
          ))
        : ""}
    </div>
  );
}

export default MassegeContainer;
