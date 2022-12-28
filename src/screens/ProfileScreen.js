import React from "react";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3 onClick={() => navigate("/")}>Back to main screen?</h3>
              <h6>Remove Account?</h6>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
