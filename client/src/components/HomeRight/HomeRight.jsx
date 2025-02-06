import React from "react";
import Suggestions from "./Suggestions";
import News from "./News";

const HomeRight = () => {
  return (
    <div className="home-right-container flex flex-col gap-y-5">
      <div className="followSuggestions">
        <Suggestions />
      </div>
      <div className="news">
        <News />
      </div>
    </div>
  );
};

export default HomeRight;
