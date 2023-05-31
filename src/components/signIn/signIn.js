/** @format */
// import background from'../../pic/bg5.png'
import React, { useEffect, useState } from "react";
import "./signIn.css";
import { Link, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import authSlice, { changeAuth } from "../redux/slices/authSlice";

function SignIn() {
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.authSlice.auth);
  const [authorization, setauthorization] = useState(false);
  dispatch(changeAuth(authorization));
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [passward, setpassward] = useState("");
  const [title, settitle] = useState("Sign In To Your account");
  const handleSubmit = (e) => {
    // e.preventDefault();
  };
  let storageName = localStorage.getItem("name");
  let storageEmail = localStorage.getItem("email");
  let storagePassward = localStorage.getItem("passward");

  const getEmail = (e) => {
    setemail(e.target.value);
  };
  const getPassward = (e) => {
    setpassward(e.target.value);
  };
  const handleSignIn = (e) => {
    e.preventDefault();

    console.log(
      email,
      JSON.parse(storageEmail),
      passward,
      JSON.parse(storagePassward)
    );
    if (
      email === JSON.parse(storageEmail) &&
      passward === JSON.parse(storagePassward)
    ) {
      console.log("authorized");
      setauthorization(true);
      dispatch(changeAuth(authorization));
      settitle('Move To Home Page')
      // console.log(authState);
    } else 
    alert('your email or passward is not right please re-enter your data also if you donot have an account  you can signup for a new accout');
    console.log("notauthorized");
  };
  useEffect(() => {
    console.log(authorization, authState);
  });

  return (
    <>
      <div id="signInBg"></div>
      <div className="container " id="signInFormContainer">
        <h2 id="signInTitle ">{title}</h2>
        <form className="signInForm" onSubmit={handleSubmit()}>
          <div className="email">
            <input
              type="text"
              className="emailInput "
              placeholder="email"
              onChange={getEmail}
            ></input>
          </div>

          <div className="passward-wrapper my-2  ">
            <input
              type="passward"
              className="w-100"
              placeholder="passward"
              onChange={getPassward}
            ></input>
          </div>

          <div id="signInBtns">
            <button onClick={handleSignIn} type="submit">
              Sign In
            </button>
            <button type="submit">Register</button>
          </div>

          <Link to="/register" id="newAccount">
            Sign Up For A New Account new accout
          </Link>
        </form>
        <Outlet />
      </div>
    </>
  );
}

export default SignIn;
