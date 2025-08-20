import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";
import MapDashbaord from "../components/Maps/MapDashbaord";
import CardLineChart from "../components/Cards/CardLineChart";
import CardBarChart from "../components/Cards/CardBarChart";
import PublicationsChart from "../components/Cards/PublicationsChart";
const Dashboard = () => {
  return (
    <>
      <Sidebar />

      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <MapDashbaord />
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
  <PublicationsChart />
</div>
        {/* <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
