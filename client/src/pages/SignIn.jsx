import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_API_URL;
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const user = await axios.post(`${apiURL}/auth/login`, login);
    if (user.data.email === login.email) {
      navigate("/home");
    }
  };

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
          onChange={(e) => {
            setLogin({ ...login, email: e.target.value });
          }}
          value={login.email}
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
          onChange={(e) => {
            setLogin({ ...login, password: e.target.value });
          }}
          value={login.password}
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
          onClick={handleLogin}
        >
          Login
        </button>
        <h4 style={{ color: "gray" }}>&copy;2025. All rights reserved </h4>
      </div>
    </div>
  );
};

export default SignIn;
