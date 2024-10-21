import React from "react";
import { Outlet } from "react-router-dom";
const DashLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashLayout;
