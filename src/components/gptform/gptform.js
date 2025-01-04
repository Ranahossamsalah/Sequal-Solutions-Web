/** @format */

import React, { useState } from "react";
import "./gptform.css";
import MassegeUi from "../massegeUi/massegeUi";
import MassegeContainer from "../massegeContainer/massegeContainer";
import { addMassege } from "../redux/webSearchApi";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { changeAuth } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";
import { addDiscription, addUserText } from "../redux/slices/usertextSlice";
import { sucess } from "../redux/slices/usertextSlice";
import CurrentTaskContainer from "../currentTaskContainer/currentTaskContainer";

function Gptform() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authSlice.auth);
  const [authorization, setauthorization] = useState("false");

  let newResponse;
  // const [responseData, setresponseData] = useState(null);
  const res = useSelector((state) => state.usertextSlice.response);

  const [signInVisibility, setsignInVisibility] = useState("displayNone");

  const [massege, setmassege] = useState("");
  const [pleaseSignIn, setpleaseSignIn] = useState(null);
  const [task, settask] = useState("");
  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");

  const userTextState = useSelector((state) => state.usertextSlice.userText);
  const userDiscriptionState = useSelector(
    (state) => state.usertextSlice.userdiscription
  );

  const addDisc = (e) => {
    setdiscription(e.target.value);
    // console.log(discription);
  };
  const addTitle = (e) => {
    settitle(e.target.value);
    // console.log(title);
  };
  const generateResponse = async (e) => {
    e.preventDefault();
    if (authState == true) {
      dispatch(addUserText(title));
      dispatch(addDiscription(discription));

      console.log(userTextState);
      console.log(userDiscriptionState);
      //     const options = {
      //       method: "GET",
      //       headers: {
      //         "X-RapidAPI-Key":
      //           "ae822103d0msh890010ddadace4ep14f398jsn814a473463bc",
      //         "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      //       },
      //     };

      //     await fetch(
      //       `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${title}&pageNumber=1&pageSize=10&autoCorrect=true`,
      //       options
      //     )
      //       .then((response) => response.json())
      //       .then((response) => {
      //         console.log(response);
      //         newResponse = response;
      //         console.log(newResponse);
      //         dispatch(sucess(newResponse));
      //         console.log(res);
      //       })
      //       .catch((err) => console.error(err));
      //   } else {
      //     {
      //       setpleaseSignIn("please sign in to your accout");
      //       setsignInVisibility("displayBlock");
      //     }
//
//
//
      //https://rapidapi.com/neoscrap-net/api/google-search72/playground/apiendpoint_e7582fc8-c87f-4b32-9134-79bc0e570dd9

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ae822103d0msh890010ddadace4ep14f398jsn814a473463bc",
          "x-rapidapi-host": "google-search72.p.rapidapi.com",
        },
      };

      await fetch(
        `https://google-search72.p.rapidapi.com/search?q=word%20cup&lr=en-US&num=10`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          newResponse = response;
          console.log(newResponse);
          dispatch(sucess(newResponse));
          console.log(res);
        })
        .catch((err) => console.error(err));
    } else {
      {
        setpleaseSignIn("please sign in to your accout");
        setsignInVisibility("displayBlock");
      }
    }
  };
  //fetch data

  return (
    <>
      <div id="resultsUi" className="container">
        <MassegeContainer />
        <CurrentTaskContainer />
      </div>
      <div id="pleaseSignIn">
        <link to="/signin" />
        {pleaseSignIn}
        <Link to="/signin" className={signInVisibility} id="signInBtn">
          {" "}
          Click sign in{" "}
        </Link>
      </div>

      <form className="container form">
        <label for="Category" className="boxUi label">
          Title
        </label>
        <input
          id="Category"
          className="boxUi input"
          type="text"
          placeholder="Category..."
          onChange={addTitle}
        />
        <label for="goal" className="boxUi label">
          Discription
        </label>
        <input
          id="goal"
          className="boxUi input"
          type="text"
          placeholder="Ask me anything..."
          onChange={addDisc}
        />

        <button className="boxUi " id="deployBtn" onClick={generateResponse}>
          Generate Response
        </button>
        <button className="boxUi " id="stopBtn">
          Stop Agent
        </button>
      </form>
    </>
  );
}

export default Gptform;
