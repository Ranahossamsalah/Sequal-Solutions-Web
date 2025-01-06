/** @format */

import React, { useState } from "react";
import "./searhHistory.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserText } from "../redux/slices/usertextSlice";

function SearchHistory(props) {
  const [authorization, setauthorization] = useState("false");
  const [signInVisibility, setsignInVisibility] = useState("displayNone");

  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");
  const userTextState = useSelector((state) => state.usertextSlice.userText);
  const dispatch = useDispatch();
  /////////////////////////////////////////////////revise again
  const dispatchSearch = () => {
    // settitle(props.textState);
    // console.log("====================================");
    // console.log(props.textState);
    // console.log("====================================");
    // console.log(title);
    // console.log("====================================");
    // dispatch(addUserText(title));
    // console.log("====================================");
    // console.log(userTextState);
    // console.log("====================================");
  };

  return (
    <Link to="/">
      {" "}
      <div className="search" onClick={dispatchSearch}>
        <div className="titleHistory">{props.textState}</div>{" "}
        <div className="discriptionHistory">
          {props.DiscriptionState ? props.DiscriptionState : "--"}
        </div>
      </div>
    </Link>
  );
}

export default SearchHistory;
