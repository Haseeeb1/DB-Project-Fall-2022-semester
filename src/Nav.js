import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import logo from "./images/endlogo3.svg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        onClick={() => navigate("/")}
        className="nav__logo"
        src={logo}
        alt="Netflix Logo"
      />

      <img
        onClick={() => navigate("/profile")}
        className="nav__avatar"
        /*
    src={user.image ? `http://localhost:5000/resources/${user.image}` : 
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}  
  */
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
