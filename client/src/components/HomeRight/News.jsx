import React from "react";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: "#fff", borderRadius: "5px" }}
    >
      <h1
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          fontWeight: "bold",
          fontSize: "17px",
        }}
      >
        Today's news
      </h1>
      <div
        className="news-items flex flex-col"
        style={{ padding: "10px 20px" }}
      >
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
};

export default News;
