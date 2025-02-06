import React from "react";
import AddPost from "./AddPost";
import Post from "./Post/Post";

const HomeMiddle = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <AddPost />
      <Post />
    </div>
  );
};

export default HomeMiddle;
