import React from "react";
import { Outlet } from "react-router-dom";
import ProfileTop from "../components/Profile/ProfileTop";
import "./Profile.css";
import About from "../components/About";
import ProfileOutlet from "../components/Profile/ProfileOutlet";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="main-profile" style={{ maxWidth: "750px" }}>
        <div className="profile-top" style={{ marginBottom: "30px" }}>
          <ProfileTop />
        </div>
        <ProfileOutlet />
      </div>
      <div className="side-profile">
        <About />
      </div>
    </div>
  );
};

export default Profile;
