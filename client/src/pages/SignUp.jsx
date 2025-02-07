import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    email: "",
    newPassword: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (signup.newPassword === signup.password) {
      const user = await axios.post(`${apiUrl}/auth/signup`, signup);
      // console.log(user.data);
      navigate("/home");
    } else {
      alert("password mismatch");
    }
  };

  // console.log(apiUrl);
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
          onChange={(e) => {
            setSignup({ ...signup, email: e.target.value });
          }}
          value={signup.email}
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
          onChange={(e) => {
            setSignup({ ...signup, newPassword: e.target.value });
          }}
          value={signup.newPassword}
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
          onChange={(e) => {
            setSignup({ ...signup, password: e.target.value });
          }}
          value={signup.password}
        />
        <button
          type="button"
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
          onClick={handleSubmit}
        >
          Sign me up
        </button>
        <h4 style={{ color: "gray" }}>&copy;2025. All rights reserved </h4>
      </div>
    </div>
  );
};

export default SignUp;
