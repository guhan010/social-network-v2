import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div
      className="signin-page flex justify-center items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className="signing-container flex flex-col gap-y-5 w-130 items-center bg-[#fff] rounded-md"
        style={{ padding: "50px 30px" }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#14191E" }}>
          Sign in
        </h1>
        <h4 style={{ fontSize: "15px", color: "gray", paddingBottom: "10px" }}>
          Don't have an account?{" "}
          <Link to="/signup">
            <span style={{ cursor: "pointer", color: "#0F6FEC" }}>
              Click here to sign up
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
          placeholder="Enter password"
          className="rounded-sm"
          style={{
            width: "90%",
            padding: "10px 20px",
            fontSize: "15px",
            border: "1px solid lightgrey",
          }}
        />

        <button
          type="submit"
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
        >
          <Link to="/home">Login</Link>
        </button>
        <h4 style={{ color: "gray" }}>&copy;2025. All rights reserved </h4>
      </div>
    </div>
  );
};

export default SignIn;
