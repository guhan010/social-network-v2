import React from "react";
import "./Home.css";
import HomeMiddle from "../components/HomeMiddle";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight/HomeRight";

const Home = () => {
  return (
    <div className="home-container">
      <div className="about">
        <HomeLeft />
      </div>
      <div className="posts ">
        <HomeMiddle />
      </div>
      <div className="suggestion">
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
