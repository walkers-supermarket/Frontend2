import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const DashboardLayout = () => {
    return (
        <div>
            <Navbar2/>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4"></div>
            <div>
              <Outlet />
            </div>
          </div>
            </div>
            <Footer/>
      </div>
    );
};

export default DashboardLayout;
