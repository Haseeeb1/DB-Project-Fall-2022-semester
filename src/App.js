import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import Carddeatails from "./Carddeatails";
import AddEvent from "./screens/AddEvent";
import { useCookies } from "react-cookie";

function App() {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  /*const [cookies, setCookies, removeCookies] = useCookies('[users]');
    console.log(user);

     const checkUserAndDispatch = () => {
      console.log('cookies', cookies);
      if(cookies.uid && cookies.email){
        console.log('Login Dispatched')
        dispatch(
               login({
                uid: cookies.uid,
                email: cookies.email,
                isAdmin: cookies.isAdmin,
                image: cookies.image
                }))
      }
      else{
        console.log('Dispatch Logout')
        dispatch(logout());
      }
      console.log('Ye Wala',user)
    }
    
  useEffect(() =>{
    checkUserAndDispatch();
  }, [dispatch])
    */

  return (
    <div className="app">
      <Router>
        {!user ? (
          <>
            <Login />
            <button onClick={() => setUser(true)}>h</button>
          </>
        ) : (
          <Routes>
            <Route exact path="/profile" element={<ProfileScreen />} />
            <Route exact path="/event" element={<Carddeatails />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/addEvent" element={<AddEvent />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
