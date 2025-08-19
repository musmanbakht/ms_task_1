import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Sidebar from "../components/Sidebar/Sidebar";
import "./index.css"; // Ensure Tailwind CSS is imported
import "./tailwind.css"; // Import Tailwind CSS styles
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        {/* Main content */}
        <div >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
