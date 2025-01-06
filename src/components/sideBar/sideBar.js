/** @format */
import githubPic from "../../pic/github.png";
import linkedInPic from "../../pic/linkedIn.png";
import menuePic from "../../pic/sidebar.png";
import slackPic from "../../pic/slack.png";
import loginPic from "../../pic/login.png";
import supportPic from "../../pic/support.png";
import helpPic from "../../pic/help.png";
import homePic from "../../pic/home.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./sideBar.css";
import HorizontalLine from "../uiComponents/horizontalLine";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
  const [reload, setreload] = useState(false);
  const [visiblility, setvisiblility] = useState("visible");
  const [clicked, setclicked] = useState(true);
  const [menueIconClickability, setmenueIconClickability] =
    useState("menueIconCliked");
  // const dispatch = useDispatch();

  const userNameState = useSelector((state) => state.usertextSlice.userName);
  // const storageName = localStorage.getItem("name");
  // const [userName, setuserName] = useState("");
  // setuserName(storageName)
  const toggleMenue = () => {
    clicked ? setvisiblility("notVisible") : setvisiblility("visible");
    clicked
      ? setmenueIconClickability("menueIconNotCliked")
      : setmenueIconClickability("menueIconCliked");
    setclicked(!clicked);
  };

  const signOut = () => {
    if (reload == true) {
      setreload(true);
      window.location.reload();
      localStorage.clear();
    }
  };

  return (
    <>
      <div id="sideBarContainer">
        <img
          onClick={toggleMenue}
          id={menueIconClickability}
          src={menuePic}
          alt="menue"
        ></img>

        <div id="sideBar" className={visiblility}>
          <div id="name"> {userNameState?userNameState:" Hi, Guest"}</div>
          <Link to="/searchhistorycontainer">
            {" "}
            <div className="searchHistory"> Search Histoty</div>
          </Link>

          <ul id="settingList">
            <HorizontalLine />
            <li>
              {" "}
              <Link to="/" className="link flex" >
                {" "}
                <img src={homePic} alt="login"></img>
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/signin" className="link flex">
                <img src={loginPic} alt="login"></img> <h3>SignIn</h3>
              </Link>
            </li>
            <li className="flex" >
              <img src={helpPic} alt="help"></img>
              <a>
                {" "}
                <h3>Help</h3>
              </a>
            </li>
            <li className="flex">
              <img src={supportPic} alt="support"></img>
              <a>
                {" "}
                <h3>Support</h3>
              </a>
            </li>
          </ul>
          <HorizontalLine />
          <div
            className="searchHistory"
            // onclick={signOut}
          >
            {" "}
            Sign Out{" "}
          </div>
         
          <ul id="socialMediaIcons" className="container">
            <li>
              <a href="https://github.com/" target="_blank">
                <img src={githubPic} alt="githubLink"></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/sequel-solutions/about/"
                target="_blank"
              >
                {" "}
                <img src={linkedInPic} alt="linkedInLink"></img>{" "}
              </a>
            </li>
            <li>
              <a
                href="https://app.slack.com/client/T03LCDGUKT5/C055U20VA4B"
                target="_blank"
              >
                {" "}
                <img src={slackPic} alt="slackLink"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
