import React from "react";
import cover from "../../assets/cover.jpg";
import person from "../../assets/person.jpg";
import { NavLink } from "react-router-dom";

const ProfileTop = () => {
  return (
    <div
      className="rounded-md bg-[white]"
      style={{
        maxWidth: "750px",
        overflow: "hidden",
      }}
    >
      <div
        className="cover-img flex justify-center items-center"
        style={{
          maxWidth: "750px",
          maxHeight: "200px",
          overflow: "hidden",
        }}
      >
        <img src={cover} alt="" />
      </div>
      <div
        className="profile-details"
        style={{ paddingBottom: "20px", borderBottom: "1px solid lightgrey" }}
      >
        <div
          className="flex justify-between items-center"
          style={{ padding: " 0 30px " }}
        >
          <div className="personal-detail flex items-center">
            <img
              src={person}
              alt=""
              width="128"
              height="128"
              className="rounded-full"
              style={{
                border: "2px solid white",
                position: "relative",
                bottom: "30px",
              }}
            />
            <div className="name" style={{ marginLeft: "30px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                Sam Lanson
              </h2>
              <h5>250 Connections</h5>
            </div>
          </div>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#FBE9EB",
              color: "darkred",
              fontWeight: "500",
            }}
          >
            Edit Profile
          </button>
        </div>
        <div
          className="location flex justify-start"
          style={{ marginLeft: "30px", color: "grey" }}
        >
          <h4 style={{ marginLeft: "30px" }}>Role</h4>
          <h4 style={{ marginLeft: "30px" }}>Location</h4>
          <h4 style={{ marginLeft: "30px" }}>Joining date</h4>
        </div>
      </div>
      <div className="profile-nav flex" style={{ padding: "20px 10px" }}>
        <h2
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#7B8DA8",
            padding: "0px 20px",
          }}
        >
          <NavLink to="/profile/feed">Feed</NavLink>
        </h2>
        <h2
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#7B8DA8",
            padding: "0px 20px",
          }}
        >
          <NavLink to="/profile/connections">Connections</NavLink>
        </h2>
        <h2
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#7B8DA8",
            padding: "0px 20px",
          }}
        >
          <NavLink to="/profile/media">Media</NavLink>
        </h2>
      </div>
    </div>
  );
};

export default ProfileTop;
