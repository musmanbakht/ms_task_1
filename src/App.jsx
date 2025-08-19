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

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="flex">
        {/* Sidebar always visible */}

        {/* Main content */}
        <div className="flex-1 md:ml-64 p-6">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
