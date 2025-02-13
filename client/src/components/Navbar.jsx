// import React from "react";
// import "./Navbar.css";
// import { CiSearch } from "react-icons/ci";
// import { MdMessage } from "react-icons/md";
// import { IoIosSettings } from "react-icons/io";
// import { IoNotifications } from "react-icons/io5";
// import logo from "../assets/logo.svg";
// import person from "../assets/person.jpg";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo-section">
//         <div className="logo">
//           <Link to="/home">
//             <img src={logo} alt="logo" className="cursor-pointer" />
//           </Link>
//         </div>
//         <div className="input-box flex">
//           <span>
//             <CiSearch
//               className="search-icon"
//               color="grey"
//               style={{
//                 position: "relative",
//                 zIndex: "100",
//               }}
//             />
//           </span>
//           <input
//             type="text"
//             className="bg-[#EEF0F2]"
//             placeholder="Search..."
//             style={{ paddingLeft: "50px" }}
//           />
//         </div>
//       </div>
//       <div className="profile">
//         <div className="text-section">
//           <div className="profile-item text-item cursor-pointer">Profile</div>
//           <div className="my-netword text-item cursor-pointer">My Network</div>
//         </div>
//         <div className="icons-section">
//           <div className="chat icondiv">
//             <MdMessage className="icons" />
//           </div>
//           <div className="settings icondiv">
//             <IoIosSettings className="icons" />
//           </div>
//           <div className="notifications icondiv">
//             <IoNotifications className="icons" />
//             <div> </div>
//           </div>
//           <div className="profileicon">
//             <img
//               src={person}
//               alt="avatar"
//               width="38.5"
//               height="38.5"
//               className="avatar-img cursor-pointer"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import logo from "../assets/logo.svg";
import person from "../assets/person.jpg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Add/remove event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo-section">
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo" className="cursor-pointer" />
          </Link>
        </div>
        <div className="input-box flex">
          <span>
            <CiSearch
              className="search-icon"
              color="grey"
              style={{
                position: "relative",
                zIndex: "100",
              }}
            />
          </span>
          <input
            type="text"
            className="bg-[#EEF0F2]"
            placeholder="Search..."
            style={{ paddingLeft: "50px" }}
          />
        </div>
      </div>
      <div className="profile">
        <div className="text-section">
          <div className="profile-item text-item cursor-pointer">
            <NavLink to="/profile">Profile</NavLink>
          </div>
          <div className="my-netword text-item cursor-pointer">
            <NavLink to="/profile/connections">My Network</NavLink>
          </div>
        </div>
        <div className="icons-section">
          <div className="chat icondiv">
            <MdMessage className="icons" />
          </div>
          <div className="settings icondiv">
            <NavLink to="/settings">
              <IoIosSettings className="icons" />
            </NavLink>
          </div>
          <div className="notifications icondiv">
            <IoNotifications className="icons" />
          </div>
          <div
            className="profileicon relative cursor-pointer"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <img
              src={person}
              alt="avatar"
              width="38.5"
              height="38.5"
              className="avatar-img"
            />
            {isDropdownOpen && (
              <div className="dropdown absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-48">
                <div className="dropdown-item px-4 py-2 hover:bg-gray-100">
                  <Link to="/profile">View Profile</Link>
                </div>
                <div className="dropdown-item px-4 py-2 hover:bg-gray-100">
                  <Link to="/settings">Settings & Privacy</Link>
                </div>
                <div className="dropdown-item px-4 py-2 hover:bg-gray-100">
                  <Link to="/support">Support</Link>
                </div>
                <div className="dropdown-item px-4 py-2 hover:bg-gray-100">
                  <Link to="/signin">Sign Out</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
