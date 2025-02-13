import React, { useEffect, useState } from "react";
import FriendSuggestion from "./FriendSuggestion";
import axios from "axios";

const Suggestions = () => {
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(true);
  const apiURL = import.meta.env.VITE_API_URL;
  const fetchUsers = async () => {
    const response = await axios.get(`${apiURL}/users/allusers`);
    const usersData = response.data;
    if (limit) {
      setUsers(usersData.slice(0, 4));
    } else {
      setUsers(usersData);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="suggestion-container bg-[#fff] rounded-md">
      <h1
        style={{
          marginLeft: "20px",
          paddingTop: "20px",
          fontWeight: "bold",
          fontSize: "17px",
          marginBottom: "5px",
        }}
      >
        Who to follow
      </h1>
      {users.map((ele, index) => {
        return <FriendSuggestion user={ele} />;
      })}
    </div>
  );
};

export default Suggestions;
