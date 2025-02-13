import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";

const Connections = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    following: [],
    followers: [],
  });
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  const myDataFetch = async () => {
    const response = await axios.get(`${apiURL}/users/myData`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUserData(response.data);
  };

  useEffect(() => {
    myDataFetch();
  }, []);

  useEffect(() => {
    const fetchFollowingUsers = async () => {
      if (userData.following.length > 0) {
        const followingUsers = await Promise.all(
          userData.following.map(async (ele) => {
            const response = await axios.get(
              `${import.meta.env.VITE_API_URL}/users/${ele}`
            );
            return response.data;
          })
        );
        setUsers(followingUsers); // Set all the users at once
      }
    };

    fetchFollowingUsers();
  }, [userData.following]); // This effect depends on `userData.following`

  return (
    <div>
      {users.map((ele, index) => (
        <h1 key={index}>{ele.email}</h1>
      ))}
    </div>
  );
};

export default Connections;
