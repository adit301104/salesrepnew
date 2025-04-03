import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { FaFileAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ activeButton, setActiveButton }) => {
  return (
    <div className="w-full md:w-64 lg:w-72 bg-[#0e172b] p-4 md:p-6 shadow-md flex-shrink-0">
      <div className="flex flex-col h-full">
        {/* Logo with responsive sizing */}
        <div className="mb-6 md:mb-8 flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="Autowiz Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
        
        {/* Sidebar buttons with consistent sizing */}
        <div className="space-y-2">
         <Link
         to="/home">
          <button
            onClick={() => setActiveButton("Sales Forms")}
            className={`flex items-center w-full text-base md:text-lg font-medium py-2 md:py-3 px-3 md:px-4 rounded transition-colors ${
              activeButton === "Sales Forms"
                ? "bg-[#90EE90] text-black"
                : "text-gray-200 hover:bg-gray-700"
            }`}
          >
            <FaFileAlt className="mr-3 flex-shrink-0" size={18} />
            <span className="truncate">Sales Forms</span>
          </button> </Link>
          <Link to="/data">
            <button
              onClick={() => setActiveButton("My Data")}
              className={`flex items-center w-full text-base md:text-lg font-medium py-2 md:py-3 px-3 md:px-4 rounded transition-colors ${
                activeButton === "My Data"
                  ? "bg-[#90EE90] text-black"
                  : "text-gray-200 hover:bg-gray-700"
              }`}
            >
              <FaUser className="mr-3 flex-shrink-0" size={18} />
              <span className="truncate">My Data</span>
            </button>
          </Link>
          <Link to="/login" className="block w-full">
            <button
              onClick={() => setActiveButton("Logout")}
              className={`flex items-center w-full text-base md:text-lg font-medium py-2 md:py-3 px-3 md:px-4 rounded transition-colors ${
                activeButton === "Logout"
                  ? "bg-[#90EE90] text-black"
                  : "text-gray-200 hover:bg-gray-700"
              }`}
            >
              <FaSignOutAlt className="mr-3 flex-shrink-0" size={18} />
              <span className="truncate">Logout</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;