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
import UpdateEvent from "./screens/UpdateEvent";

function App() {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();

  //   const [cookies, setCookies, removeCookies] = useCookies('[users]');
  //   const user = useSelector(selectUser);
  //   const dispatch = useDispatch();
  //   console.log(user);

  //   const checkUserAndDispatch = () => {
  //     console.log('cookies', cookies);
  //     console.log('isAdmin:  ', typeof(cookies.isAdmin))
  //     if(cookies.uid && cookies.email){
  //       console.log('Login Dispatched')
  //       dispatch(
  //              login({
  //               uid: cookies.uid,
  //               email: cookies.email,
  //               isAdmin: cookies.isAdmin,
  //               image: cookies.image
  //               }))
  //     }
  //     else{
  //       console.log('Dispatch Logout')
  //       dispatch(logout());
  //     }
  //     console.log('Ye Wala',user)
  //   }

  // useEffect(() =>{
  //   checkUserAndDispatch();
  // }, [dispatch])

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
            <Route exact path="/updateEvent" element={<UpdateEvent />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
