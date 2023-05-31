/** @format */

import React, { useEffect, useState } from "react";
import "./register.css";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { changeAuth } from "../redux/slices/authSlice";

function Register() {
  // const dispatch = useDispatch();
  // const authState = useSelector((state) => state.authSlice.auth);
  // const [authorization, setauthorization] = useState(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [passward, setpassward] = useState("");
  const [confirmPassward, setconfirmPassward] = useState("");
  const [signUpTitle, setsignUpTitle] = useState("Create An Account");
  const [invalidVisibility, setinvalidVisibility] = useState({
    invaildPassword1: "null",
    invaildPassword2: "null",
    invaildPassword3: "null",
    invaildPassword4: "null",
    invaildPassword5: "null",
    invaildEmail1: "null",
    invaildEmail2: "null",
    invaildConfirmPassword1: "null",
    invaildConfirmPassword2: "null",
    invaildName1: "null",
  });

  const [registerFormVisibility, setregisterFormVisibility] = useState("");
  const [register, setregister] = useState(false);

  const getName = (e) => {
    setname(e.target.value);
  };
  const getEmail = (e) => {
    setemail(e.target.value);
  };
  const getPassward = (e) => {
    setpassward(e.target.value);
  };
  const getConfirmPassward = (e) => {
    setconfirmPassward(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (!name) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildName1: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildName1: "notVisible" };
      });
    if (!email) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildEmail1: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildEmail1: "notVisible" };
      });

    if (!email.includes("@gmail.com")) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildEmail2: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildEmail2: "notVisible" };
      });

    if (!passward) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword1: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword1: "notVisible" };
      });

    if (!passward.match(/(?=.*[A-Z])/)) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword2: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword2: "notVisible" };
      });
    if (!passward.match(/(?=.*[a-z])/)) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword3: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword3: "notVisible" };
      });
    if (!passward.match(/(?=.*[0-9])/)) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword4: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword4: "notVisible" };
      });
    if (passward.length < 8) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword5: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildPassword5: "notVisible" };
      });
    if (!confirmPassward) {
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildConfirmPassword1: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildConfirmPassword1: "notVisible" };
      });
    if (confirmPassward !== passward) {
      console.log("invalid");
      setinvalidVisibility((previousState) => {
        return { ...previousState, invaildConfirmPassword2: "visible" };
      });
    } else
      setinvalidVisibility((previousState) => {
        console.log("valid");
        return { ...previousState, invaildConfirmPassword2: "notVisible" };
      });
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("passward", JSON.stringify(passward));

    //
  };
  useEffect(() => {
  if (
    invalidVisibility.invaildPassword1 == "notVisible" &&
    invalidVisibility.invaildPassword2 == "notVisible" &&
    invalidVisibility.invaildPassword3 == "notVisible" &&
    invalidVisibility.invaildPassword4 == "notVisible" &&
    invalidVisibility.invaildPassword5 == "notVisible" &&
    invalidVisibility.invaildEmail1 == "notVisible" &&
    invalidVisibility.invaildEmail2 == "notVisible" &&
    invalidVisibility.invaildConfirmPassword1 == "notVisible" &&
    invalidVisibility.invaildConfirmPassword2 == "notVisible" &&
    invalidVisibility.invaildName1 == "notVisible"
  ) {
    setregisterFormVisibility("registerFormNotVisible");
    setsignUpTitle("Move To Sign In");
    // setauthorization(true);
    // dispatch(authSlice(authorization));
    // console.log(authState);
    // <Link to="/signIn">signIn</Link>;
  }
  });
  return (
    <div className="container " id="registerFormContainer">
      <h2 id="registerTitle ">{signUpTitle}</h2>
      <form
        className="registerForm "
        id={registerFormVisibility}
        // onSubmit={handleSubmit}
      >
        <div className="name">
          <input
            type="text"
            className="nameInput "
            placeholder="enter your Name"
            onChange={getName}
          ></input>
          <p id={invalidVisibility.invaildName1}>please enter your name</p>
        </div>

        <div className="email">
          <input
            type="email"
            className="emailInput "
            placeholder="email"
            onChange={getEmail}
          ></input>
          <p id={invalidVisibility.invaildEmail1}>please enter your email</p>
          <p id={invalidVisibility.invaildEmail2}>
            "please enter your gmail ...@gmail.com"
          </p>
        </div>

        <div className="password ">
          <input
            type="password"
            className="passwordInput"
            placeholder="password"
            onChange={getPassward}
          ></input>
          <p id={invalidVisibility.invaildPassword1}>
            please enter your passward
          </p>
          <p id={invalidVisibility.invaildPassword2}>
            passward must includes 1 capital letter
          </p>
          <p id={invalidVisibility.invaildPassword3}>
            passward must includes 1 small letter
          </p>
          <p id={invalidVisibility.invaildPassword4}>
            passward must includes 1 number
          </p>
          <p id={invalidVisibility.invaildPassword5}>
            passward must be larger than 8
          </p>
        </div>

        <div className="confirmPassward">
          <input
            type="password"
            className="confirmPasswardInput"
            placeholder="confirm_passward"
            onChange={getConfirmPassward}
          ></input>
          <p id={invalidVisibility.invaildConfirmPassword1}>
            "please re-enter your passward"
          </p>
          <p id={invalidVisibility.invaildConfirmPassword2}>
            the pasward you entered is not the same
          </p>
        </div>

        <div id="registerBtns">
          <button onClick={handleRegister} type="submit">
            Register
          </button>
          <button type="submit"> Sign In</button>
        </div>
      </form>
      <Link to="/signin" id="moveToSignIn">
        if you already have an account! move To signIn
      </Link>
      <Outlet />
    </div>
  );
}

export default Register;
