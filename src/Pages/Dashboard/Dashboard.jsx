import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div style={{ overflow: "hidden" }} className="d-flex ">
        <Sidebar />

        <div
          style={{ overflowX: "hidden", overflowY: "scroll" }}
          className="w-100 p-2 vh-100"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
