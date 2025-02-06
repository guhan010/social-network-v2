import React from "react";
import person2 from "../assets/person2.jpg";
import { MdPhotoCamera } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { BsEmojiLaughingFill } from "react-icons/bs";
import "./AddPost.css";

const AddPost = () => {
  return (
    <div className="add-post rounded-lg bg-[#fff]">
      <div className="thoughts flex ">
        <img
          src={person2}
          alt=""
          width="35px"
          className="rounded-full"
          height="35px"
        />
        <input
          type="text"
          className="border-transparent thoughts-inp"
          placeholder="Share your thoughts..."
        />
      </div>
      <div className="media flex">
        <div className="photos flex items-center media-items">
          <MdPhotoCamera />
          <h3>Photo</h3>
        </div>
        <div className="videos flex items-center media-items">
          <FaVideo />
          <h3>Video</h3>
        </div>
        <div className="events flex items-center media-items">
          <MdEventNote /> <h3>Events</h3>
        </div>
        <div className="feelings flex items-center media-items">
          <BsEmojiLaughingFill />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
