import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";
import MapDashbaord from "../components/Maps/MapDashbaord";
import CardLineChart from "../components/Cards/CardLineChart";
import CardBarChart from "../components/Cards/CardBarChart";
import PublicationsChart from "../components/Cards/PublicationsChart";
import { dashboardStats } from "../API";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dashboardData = async () => {
      try {
        const response = await dashboardStats();
        setDashboardData(response.data || null);
        console.log(">>>>>>>>>>>>>>>>>", response)
      } catch (err) {
        console.error("Failed to fetch Data:", err);
      } finally {
        setLoading(false);
      }
    };
    dashboardData();
  }, [])
  // const dashboardData = await dashboardStats()
  return (
    <>
      <Sidebar />

      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats facultyCount={dashboardData.facultyCount} departmentCount={dashboardData.departmentCount} publicationCount={dashboardData.departmentCount} />
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
