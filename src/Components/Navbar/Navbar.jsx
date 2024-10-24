import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import "../Navbar/Navbar.css";
import user from "../Images/img4.png";
import logo from "../Images/img1.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo">
          <div className="logo-cont">
            <img src={logo} alt="img" className="logo-img" />
          </div>
          <h1>Santric Technologies</h1>
        </div>
      </div>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faBell} className="bell-logo" />
        <img src={user} alt="User Profile" className="profile-pic" />
      </div>
    </nav>
  );
}

export default Navbar;
