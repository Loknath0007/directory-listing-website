import React from "react";

const DashboardNav = ({ title }) => {
  return (
    <div
      className="w-100 text-white py-1 px-2"
      style={{
        background: "#1d1d1d",
        position: "sticky",
        top: "0",
        zIndex: "99",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default DashboardNav;
