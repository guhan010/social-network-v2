//Account setting

import axios from "axios";
import { useState } from "react";

const Settings = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [userData, setUserdata] = useState({
    name: "",
    bio: "",
    role: "",
  });
  const handleUpdate = async () => {
    const data = await axios.put(`${apiURL}/users/myData`, userData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              onChange={(e) => {
                setUserdata({ ...userData, name: e.target.value });
              }}
              value={userData.name}
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
              Bio
            </label>
            <input
              type="text"
              id="bio"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              onChange={(e) => {
                setUserdata({ ...userData, bio: e.target.value });
              }}
              value={userData.bio}
            />
          </div>
          {/* Add more form fields as needed */}
        </div>
        <input
          type="text"
          name="role"
          placeholder="Enter your role"
          onChange={(e) => {
            setUserdata({ ...userData, role: e.target.value });
          }}
          value={userData.role}
        />

        <div className="mt-6 text-right">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpdate}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
