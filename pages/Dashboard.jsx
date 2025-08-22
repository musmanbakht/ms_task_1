import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";
import MapDashbaord from "../components/Maps/MapDashbaord";
import CardLineChart from "../components/Cards/CardLineChart";
import CardBarChart from "../components/Cards/CardBarChart";
import PublicationsChart from "../components/Cards/PublicationsChart";
import { dashboardStats, fetchDepartments } from "../API";
import PublicationsBarChart from "../components/Cards/PublicationsBarChart";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departmentData, setDepartmentData] = useState([]);
  // API CALL FOR DHASHBOARD
  useEffect(() => {
    const getDashboardData = async () => {
      try {
        setLoading(true);
        // const response = await dashboardStats();
        const [res1, res2] = await Promise.all([
          dashboardStats(),
          fetchDepartments(),
        ]);
        console.log(">>>>>>>>>>>>>>>>>", res1.data);
        setDashboardData(res1.data || null);
        setDepartmentData(res2.allDepartments || []);
      } catch (err) {
        console.log("Failed to fetch Data:", err);
      } finally {
        setLoading(false);
      }
    };
    getDashboardData();
  }, []);
  // console.log("dashboard chart data", dashboardData.publicationCountPerMonth);
  console.log("dashboard chart data", departmentData);

  // const dashboardData = await dashboardStats()

  return (
    <>
      <Sidebar />

      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats
          facultyCount={dashboardData.facultyCount}
          departmentCount={dashboardData.departmentCount}
          publicationCount={dashboardData.publicationCount}
        />
        <div className="mx-8 my-4">
          <MapDashbaord />
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              {!loading && (
                <PublicationsChart
                  publicationCountPerMonth={
                    dashboardData ? dashboardData?.publicationCountPerMonth : []
                  }
                />
              )}
            </div>
            <div className="w-full xl:w-4/12 px-4">
              {!loading && departmentData && (
                <PublicationsBarChart
                  allDepartments={departmentData}
                  highlightDepartment="School of Mining Engineering"
                />
              )}
            </div>
          </div>
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
