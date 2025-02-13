import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import axios from "axios";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Connections from "./pages/Connections";
import Post from "./components/Post/Post";
import HomeMiddle from "./components/HomeMiddle";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState();
  const location = useLocation();
  const excludedPaths = ["/signup", "/signin"];

  const showNavbar = !excludedPaths.includes(location.pathname);

  const apiURL = import.meta.env.VITE_API_URL;

  const myDataFetch = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const userData = await axios.get(`${apiURL}/users/myData`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(userData.data);
    return userData.data;
  };

  return (
    <UserContext.Provider value={myDataFetch}>
      {showNavbar && (
        <div
          className="navbar-component"
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: "1",
          }}
        >
          <Navbar />
        </div>
      )}
      <div
        className="other-components"
        style={{ marginTop: showNavbar ? "70px" : "0px" }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="feed" element={<HomeMiddle />} />
            <Route
              path="connections"
              element={<Connections userData={user} />}
            />
            <Route path="media" element={<Post />} />
          </Route>
        </Routes>
        {/* </div> */}
      </div>
    </UserContext.Provider>
  );
};

export default App;
