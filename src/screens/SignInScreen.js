import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SigninScreen.css";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import axios from "axios";
import copy from "copy-to-clipboard";

function SignInScreen() {
  const user = useSelector(selectUser);
  const [signUpForm, setSignUpForm] = useState(false);
  const [forgetForm, setForgetForm] = useState(false);
  const [file, setFile] = useState(null);
  const [retreivedPassword, setRetreivedPassword] = useState();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const DOBRef = useRef(null);
  const securityQuesRef = useRef(null);
  const [image, setImage] = React.useState();
  // const [cookies, setCookies, removeCookies] = useCookies("[users]");

  /* const dispatch = useDispatch();
  
  const getUser = async() =>{
    try{
    console.log(user);
    const res =  await axios.post("http://localhost:5000/auth/login",
    {
      email: emailRef.current.value,
	    password: passwordRef.current.value,
    });
    const email = res.data.email; const uid =  res.data.id; const isAdmin  = res.data.isAdmin;
    console.log(res.data.email)
    setCookies('email', email);
    setCookies('uid', uid);
    setCookies('isAdmin', isAdmin)
    setCookies('image', res.data.image)
    console.log('Cookies',cookies)
    console.log(res.data.image)
    dispatch(
      login({
        uid: res.data.id, 
        email: res.data.email,
        isAdmin: res.data.isAdmin,
        image: res.data.image
      }
      )
    );
    console.log(user)
    // const email = res.data.email; const uid =  res.data.id
    // localStorage.setItem('email', email);
    // localStorage.setItem('id', uid);
    // dispatch(
    //   login({
    //     uid, 
    //     email
    //   })
    // )
    // console.log(user)
  }
    catch(err){
      toast.error(err.response.data.message);
    }
  }

  const signUserIn = async() => {
    const formData = new FormData();
    formData.append('name', nameRef.current.value)
    formData.append('email', emailRef.current.value)
    formData.append('password', passwordRef.current.value)
    formData.append('contact', phoneRef.current.value)
    formData.append('dob', DOBRef.current.value)
    formData.append('image', file)
    const res = await axios.post('http://localhost:5000/auth/register/', formData);
    const email = res.data.email; const uid =  res.data.id; const isAdmin = res.data.isAdmin; const image = res.data.image
    console.log(isAdmin)
    setCookies('email', email);
    setCookies('uid', uid);
    setCookies('isAdmin', isAdmin);
    setCookies('image', image);
    console.log('Cookies',cookies);
    dispatch(
      login({
        uid: res.data.id, 
        email: res.data.email,
        isAdmin: res.data.isAdmin,
        image: res.data.image
      }
      )
    );
    // .then(user => {
    //   console.log(user);
    //   console.log(user.data.uid);
    //   console.log(user.data.name)
    //   setCookies('uid', user.data.uid);
    //   setCookies('email', user.data.name);
    //   console.log("YECOOKIES: ",cookies);
    // })
  }
  // console.log(image);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const onFileChange = async(e) =>{
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  const signUp = (e) => {
    e.preventDefault();
    // if (
    //   emailRef.current.value === "" ||
    //   passwordRef.current.value === "" ||
    //   phoneRef.current.value === "" ||
    //   regIDRef.current.value === ""
    // ) {
    //   toast.error("Incomplete Credentials");
    // } else if (!isValidEmail(emailRef.current.value)) {
    //   toast.error("Email is invalid.");
    // } else if (passwordRef.current.value.length < 7) {
    //   toast.error("Password too short.");
    // } else if (!image) toast.error("Add Image to complete Signup.");
    // else {
    //   if (image.size > 2097152) {
    //     toast.error("Image too large, Maximum limit is 2mb.");
    //     return;
    //   }
    // }
    console.log(nameRef.current.value,emailRef.current.value,
                passwordRef.current.value, phoneRef.current.value,
                 DOBRef.current.value, file);
    signUserIn();
  };

  const signIn = (e) => {
    e.preventDefault();
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      toast.error("Please enter your email and password.");
    } else if (emailRef.current.value === "") {
      toast.error("Please enter your email.");
    } else if (passwordRef.current.value === "") {
      toast.error("Please enter your password.");
    } else if (!isValidEmail(emailRef.current.value)) {
      toast.error("Email is invalid.");
    } else {
      getUser();
      
      // dispatch(
      //   login({
      //     uid: 'Ibad',
      //     email: 'noemail',
      //   })
      // );
      // auth
      //   .signInWithEmailAndPassword(
      //     emailRef.current.value,
      //     passwordRef.current.value
      //   )
      //   .then((authUser) => {})
      //   .catch((error) => {
      //     toast.error(error.message);
      //   });
    }
  };

  */

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const setAll = () => {
    setForgetForm(true);
    setSignUpForm(true);
  };

  const setOne = () => {
    setForgetForm(false);
    setSignUpForm(true);
  };
  const signUp = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value == "" ||
      emailRef.current.value == "" ||
      passwordRef.current.value == "" ||
      phoneRef.current.value == "" ||
      DOBRef.current.value == "" ||
      securityQuesRef.current.value == ""
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

  const copyText = () => {
    if (!retreivedPassword) return;
    navigator.clipboard.writeText(retreivedPassword);
    toast.success("Password copied to clipboard", {
      duration: 2000,
      position: "top-center",
      style: {},
      className: "",
      icon: "👏",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });
  };

  return !signUpForm ? (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button className="signin_btn" type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4 className="new_page">
          <span className="signupScreen__gray">New to the Page? </span>
          <span onClick={setOne} className="signupScreen__link">
            {" "}
            Sign Up now.
          </span>
        </h4>

        <h4 onClick={setAll} className="for_pass">
          Forgot Password!
        </h4>
      </form>
      <Toaster />
    </div>
  ) : !forgetForm ? (
    <div className="signUpScreen">
      <form>
        <h1>Sign Up</h1>
        <input ref={nameRef} placeholder="Full Name" type="text" />
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <input ref={phoneRef} placeholder="Phone Number" type="number" />

        <input
          ref={DOBRef}
          placeholder="Date Of Birth(DD-MM-YYYY)"
          type="date"
        />
        <p className="security__ques">Name of your elementary school?</p>
        <input
          ref={securityQuesRef}
          placeholder="Security Question"
          type="text"
        />
        <h5 className="select_tag">Select Image</h5>
        <input type="file" /*onChange={(e) => onFileChange(e)}*/ />
        <button className="signin_btn" type="submit" onClick={signUp}>
          Sign Up
        </button>
        <h4 className="h4_form">
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
  ) : (
    <div className="signUpScreen1">
      <form>
        <h1>Forgot Password</h1>
        <p className="security__ques">Enter details below!</p>
        <input ref={nameRef} placeholder="Full Name" type="text" />
        <input ref={emailRef} placeholder="Email" type="email" />
        <input
          ref={DOBRef}
          placeholder="Date Of Birth(DD-MM-YYYY)"
          type="date"
        />
        <p className="security__ques">Name of your elementary school?</p>
        <input
          ref={securityQuesRef}
          placeholder="Security Question"
          type="text"
        />
        <button className="signin_btn" type="submit" onClick={signUp}>
          Retrieve Password
        </button>
        <div className="hover_div">
          <h5 className="hover_text">Hover white strip to reveal password.</h5>
          <p
            onMouseEnter={copyText}
            className={retreivedPassword ? "spoiler" : "spoiler1"}
          >
            {retreivedPassword ? (
              <>
                Your password is : &nbsp;<span>{retreivedPassword}</span>
              </>
            ) : (
              "Enter correct details and click the button."
            )}
          </p>
        </div>

        <h4 className="h4_form">
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
