import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col bg-[white] rounded-md"
      style={{ padding: "30px 20px", gap: "10px" }}
    >
      <h1 style={{ fontSize: "16px", fontWeight: "bold" }}>About</h1>
      <h2 style={{ fontSize: "13px", color: "gray" }}>
        He moonlights difficult engrossed it, sportsmen. Interested has all
        Devonshire difficulty gay assistance joy.
      </h2>
      <h3 style={{ fontSize: "14px" }}>
        Born: <span style={{ fontWeight: "bold", color: "gray" }}>Aug 15</span>
      </h3>
      <h3 style={{ fontSize: "14px" }}>
        Status:{" "}
        <span style={{ fontWeight: "bold", color: "gray" }}>Single</span>
      </h3>
      <h3 style={{ fontSize: "14px" }}>
        Email:{" "}
        <span style={{ fontWeight: "bold", color: "gray" }}>abc@frg.com</span>
      </h3>
    </div>
  );
};

export default About;
