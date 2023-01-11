import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SigninScreen.css";
import toast, { Toaster } from "react-hot-toast";

function SignInScreen() {
  const [signUpForm, setSignUpForm] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const regIDRef = useRef(null);
  const [image, setImage] = React.useState();

  // console.log(image);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const signUp = (e) => {
    e.preventDefault();
    if (
      emailRef.current.value == "" ||
      passwordRef.current.value == "" ||
      phoneRef.current.value == "" ||
      regIDRef.current.value == ""
    ) {
      toast.error("Incomplete Credentials");
    } else if (!isValidEmail(emailRef.current.value)) {
      toast.error("Email is invalid.");
    } else if (passwordRef.current.value.length < 7) {
      toast.error("Password too short.");
    } else if (!image) toast.error("Add Image to complete Signup.");
    else {
      if (image.size > 2097152) {
        toast.error("Image too large, Maximum limit is 2mb.");
        return;
      }
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    if (emailRef.current.value == "" || passwordRef.current.value == "") {
      toast.error("Please enter your email and password.");
    } else if (emailRef.current.value == "") {
      toast.error("Please enter your email.");
    } else if (passwordRef.current.value == "") {
      toast.error("Please enter your password.");
    } else if (!isValidEmail(emailRef.current.value)) {
      toast.error("Email is invalid.");
    } else {
      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {})
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return !signUpForm ? (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to the Page? </span>
          <span
            onClick={() => setSignUpForm(true)}
            className="signupScreen__link"
          >
            {" "}
            Sign Up now.
          </span>
        </h4>
      </form>
      <Toaster />
    </div>
  ) : (
    <div className="signUpScreen">
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <input ref={phoneRef} placeholder="Phone Number" type="number" />
        <input ref={regIDRef} placeholder="MCS Reg ID" type="number" />
        <h5 className="select_tag">Select Image</h5>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image-upload"
          accept="image/png ,image/jpeg"
        />
        <button type="submit" onClick={signUp}>
          Sign Up
        </button>
        <h4>
          <span
            onClick={() => setSignUpForm(false)}
            className="signinScreen__link"
          >
            {" "}
            Back to logIn
          </span>
        </h4>
      </form>
      <Toaster />
    </div>
  );
}

export default SignInScreen;

/* if(this.files[0].size > 2097152){
       alert("File is too big!");
       this.value = "";
    };*/
