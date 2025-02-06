import React from "react";
import person3 from "../../assets/person3.jpg";
import "./Post.css";
import post from "../../assets/post.jpg";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa6";
import person4 from "../../assets/person4.jpg";
import { FaTelegramPlane } from "react-icons/fa";

const Post = () => {
  return (
    <div className="post-container bg-[#fff] rounded-md ">
      <div className="post-profile-section">
        <div className="post-profile-img">
          <img
            src={person3}
            alt=""
            width="40px"
            height="40px"
            className="rounded-full"
          />
        </div>
        <div className="post-person-data">
          <h1>Guhan Eswaran</h1>
          <h6>2 hours ago</h6>
        </div>
      </div>
      <div className="post-info">
        <h2>
          I'm thrilled to share that I've completed a graduate certificate
          course in project management with the president's honor roll.
        </h2>
      </div>
      <div
        className="post-img flex flex-wrap justify-center items-center"
        style={{ maxWidth: "750px", maxHeight: "375px", padding: "10px 0px" }}
      >
        <img src={post} alt="" className="rounded-md" />
      </div>
      <div className="likes-section flex gap-x-7">
        <div className="likes flex items-center">
          <span style={{ position: "relative", bottom: "1px" }}>
            <FcLike size={20} />
          </span>
          <h2
            style={{
              fontSize: "14px",
              marginLeft: "5px",
              fontWeight: "500",
              color: "blue",
            }}
          >
            Liked (51)
          </h2>
        </div>
        <div className="comments flex items-center">
          <span style={{ position: "relative", bottom: "1px" }}>
            <FaComment size={17} color="grey" />
          </span>
          <h2
            style={{
              fontSize: "14px",
              marginLeft: "5px",
              fontWeight: "500",
              color: "grey",
            }}
          >
            Comments (15)
          </h2>
        </div>
      </div>
      <div className="addcomment-section flex items-center gap-x-3">
        <div className="comment-icon">
          <img
            src={person4}
            alt=""
            width="35px"
            height="35px"
            className="rounded-full"
          />
        </div>
        <div className="comment-input flex items-center">
          <input
            type="text"
            style={{
              height: "35px",
              borderRadius: "5px",
              fontSize: "13px",
              paddingLeft: "15px",
            }}
            className="bg-[#EEF0F2]"
            placeholder="Add a comment..."
          />
          <span className="sendcomment">
            <FaTelegramPlane
              className="hover:text-blue-900 cursor-pointer"
              size={19}
            />
          </span>
        </div>
      </div>
      <div
        className="comments-data-section flex "
        style={{ padding: "10px 0" }}
      >
        <div className="commented-profile-img">
          <img
            src={person3}
            alt=""
            width="35px"
            height="35px"
            className="rounded-full"
          />
        </div>
        <div
          className="commented-msg bg-[#EEF0F2] rounded-md"
          style={{ marginLeft: "15px", width: "86%", padding: "15px 15px" }}
        >
          <div className="commented-name flex justify-between" style={{marginLeft:"10px",marginBottom:"5px"}}>
            <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
              Leonardo DaVinci
            </h1>
            <h5 style={{ fontSize: "12px", color: "grey" }}>2 hours ago</h5>
          </div>
          <div
            className="comment-message"
            style={{ fontSize: "14px", padding: "3px 15px", color: "gray" }}
          >
            Removed demands expense account in outward tedious do. Particular
            way thoroughly unaffected projection.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
