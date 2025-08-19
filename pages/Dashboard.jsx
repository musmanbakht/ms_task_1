import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import AdminNavbar from '../components/Navbars/AdminNavbar'
import HeaderStats from '../components/Headers/HeaderStats'
import MapDashbaord from '../components/Maps/MapDashbaord'
const Dashboard = () => {
  return (
    <>
    <Sidebar/>

    <div className="relative md:ml-64 bg-blueGray-100">
    <AdminNavbar/>
    <HeaderStats />
    <MapDashbaord/>

    </div>
    </>
  )
}

export default Dashboard