import React, { useState } from "react";
import "./Login.css";
import SignInScreen from "./SignInScreen";
import logo from "../images/ooo.png";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img src={logo} className="loginScreen__logo" alt="" />
        <button
          onClick={signIn ? () => setSignIn(false) : () => setSignIn(true)}
          className="loginScreen__button"
        >
          {signIn ? "Home" : "SignIn"}
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Seminars,Sports,Main Campus Events and more.</h1>
            <h2>Register for your favorite events and pay directly.</h2>
            <h3>SignIn or create an Account to start</h3>
            <div className="loginScreen__input">
              <form>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  SignIn Now
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
