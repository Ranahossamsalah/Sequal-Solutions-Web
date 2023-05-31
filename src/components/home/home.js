/** @format */
import background from'../../pic/bg6.png'
import React from "react";
import "./home.css";
import Gptform from "../gptform/gptform";
import Header from "../header/header";

function Home() {
  return (
  <div className="homebg  " style={{backgroundImage:`url(${background}`}}>
   <Header/>
   <Gptform/>
      </div>
  );
}

export default Home;
