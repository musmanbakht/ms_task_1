import React from "react";
import { Outlet } from "react-router-dom"; 
import Sidebar from "../components/Sidebar/Sidebar";
export default function LayoutWithSidebar() {
  return (
    <div >
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Outlet /> {/* This will render nested routes */}
      </div>
    </div>
  );
}
