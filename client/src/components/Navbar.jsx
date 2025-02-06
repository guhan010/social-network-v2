import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import logo from "../assets/logo.svg";
import person from "../assets/person.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="input-box flex">
          <span>
            <CiSearch className="search-icon" />
          </span>
          <input type="text" />
        </div>
      </div>
      <div className="profile">
        <div className="text-section">
          <div className="profile-item text-item">Profile</div>
          <div className="my-netword text-item">My Network</div>
        </div>
        <div className="icons-section">
          <div className="chat icondiv">
            <MdMessage className="icons" />
          </div>
          <div className="settings icondiv">
            <IoIosSettings className="icons" />
          </div>
          <div className="notifications icondiv">
            <IoNotifications className="icons" />
            <div> </div>
          </div>
          <div className="profileicon">
            <img
              src={person}
              alt="avatar"
              width="38.5"
              height="38.5"
              className="avatar-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
