import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins max-w-6xl ms-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
