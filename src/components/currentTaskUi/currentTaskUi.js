/** @format */

import React from "react";
import "./currentTaskUi.css";
import robot from "../../pic/robot.png";
function CurrentTaskUi(props) {
  
  return (
    <>
      <div className="currentTaskContainer">
        <img src={robot} alt="robot" className="roboticon" />
        <div className="massageUi container">{props.task}</div>
      </div>
    </>
  );
}
export default CurrentTaskUi;