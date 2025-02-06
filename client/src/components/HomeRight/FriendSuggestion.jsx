import React from "react";
import person3 from "../../assets/person3.jpg";
import { IoMdAdd } from "react-icons/io";
import "./HomeRight.css";

const FriendSuggestion = () => {
  return (
    <div className="friend-container flex justify-between items-center">
      <div className="profile-img flex items-center">
        <img src={person3} alt="" className="w-12 h-12 rounded-full" />
        <div className="profile-details" style={{ maxWidth: "115px" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "15px" }}>
            Guhan Eswaran
          </h2>
          <h3 style={{ fontSize: "11px", color: "#756F8F" }}>
            Software Developer
          </h3>
        </div>
      </div>

      <div className="add-friend">
        <IoMdAdd color="blue" className="add-icon" size={20} />
      </div>
    </div>
  );
};

export default FriendSuggestion;
