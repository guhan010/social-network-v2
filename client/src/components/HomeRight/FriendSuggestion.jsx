import React from "react";
import person3 from "../../assets/person3.jpg";
import { IoMdAdd } from "react-icons/io";
import "./HomeRight.css";
import axios from "axios";

const FriendSuggestion = (props) => {
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const follow = async () => {
    await axios.put(
      `${apiURL}/users/${props.user._id}/follow`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  // console.log(props);
  return (
    <div className="friend-container flex justify-between items-center">
      <div className="profile-img flex items-center">
        <img
          src={props.user.profilePicture}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="profile-details" style={{ maxWidth: "115px" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "15px" }}>
            {props.user.name}
          </h2>
          <h3 style={{ fontSize: "11px", color: "#756F8F" }}>
            {props.user.role}
          </h3>
        </div>
      </div>

      <div className="add-friend">
        <IoMdAdd
          color="blue"
          className="add-icon cursor-pointer"
          size={20}
          onClick={follow}
        />
      </div>
    </div>
  );
};

export default FriendSuggestion;
