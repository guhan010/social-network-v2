import React from "react";
import { Outlet } from "react-router-dom";

const ProfileOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProfileOutlet;
