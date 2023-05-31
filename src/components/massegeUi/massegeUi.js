/** @format */

import React from "react";
import "./massegeUi.css";
import robot from "../../pic/robot.png";
function MassegeUi(props) {
  return (
    <>
      <div className="massageUiContainer" >
        <img src={robot} alt='robot' className="roboticon"/>
        <div className="massageUi container">
      { props.answer} 
      <a href={props.url}  target="_blank">{props.url}</a>
      
        </div>
      </div>
    </>
  );
}

export default MassegeUi;
