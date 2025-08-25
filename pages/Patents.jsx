import React from 'react'
import PatentsTable from '../components/Tables/PatentsTable'
import AdminNavbar from "../components/Navbars/AdminNavbar"

const Patents = () => {
  return (
    <>
            <AdminNavbar />
            <div className="p-4">

            <PatentsTable/>
            </div>
    
    </>
  )
}

export default Patents