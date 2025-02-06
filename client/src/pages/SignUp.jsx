import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      className="signing-page flex justify-center items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className="signing-container flex flex-col gap-y-5 w-130 items-center bg-[#fff] rounded-md"
        style={{ padding: "50px 30px" }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#14191E" }}>
          Sign up
        </h1>
        <h4 style={{ fontSize: "15px", color: "gray", paddingBottom: "10px" }}>
          Already have an account?{" "}
          <Link to="/signin">
            <span style={{ cursor: "pointer", color: "#0F6FEC" }}>
              Click here to login
            </span>
          </Link>
        </h4>
        <input
          type="email"
          placeholder="Enter email"
          className="rounded-sm"
          style={{
            width: "90%",
            padding: "10px 20px",
            fontSize: "15px",
            border: "1px solid lightgrey",
          }}
        />
        <input
          type="password"
          placeholder="Enter new password"
          className="rounded-sm"
          style={{
            width: "90%",
            padding: "10px 20px",
            fontSize: "15px",
            border: "1px solid lightgrey",
          }}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="rounded-sm"
          style={{
            width: "90%",
            padding: "10px 20px",
            fontSize: "15px",
            border: "1px solid lightgrey",
          }}
        />
        <input
          type="submit"
          value="Sign me up"
          className="rounded-sm"
          style={{
            marginTop: "15px",
            width: "90%",
            backgroundColor: "#0F6FEC",
            padding: "10px 0",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        />
        <h4 style={{ color: "gray" }}>&copy;2025. All rights reserved </h4>
      </div>
    </div>
  );
};

export default SignUp;
