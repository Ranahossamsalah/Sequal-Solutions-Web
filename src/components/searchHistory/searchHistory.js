/** @format */


import React, { useState } from "react";
import "./searhHistory.css";

function SearchHistory(props) {

  const [authorization, setauthorization] = useState("false");
  const [  signInVisibility, setsignInVisibility] = useState("displayNone");

  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");
  console.log(props.DiscriptionState);
  return (
    <div className="search">

      <div className="titleHistory">{props.textState}</div>{" "}
      <div className="discriptionHistory">{props.DiscriptionState}</div>
    </div>
  );
}

export default SearchHistory;
