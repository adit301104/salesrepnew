import React from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mr-4 mb-6 gap-4 py-3">
      <div className="pt-2">
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-700 bg-gray-100 rounded-full px-3 py-1">
          <span className="font-medium">CANADA</span>
          <span className="text-gray-400">|</span>
          <span className="font-medium">USA</span>
        </div>
        <div className="flex items-center space-x-2 bg-gray-200 rounded-full pl-3 pr-2 py-1">
          <FaUserCircle className="text-gray-600 text-xl" />
          <span className="font-medium">Carry John</span>
          <button className="text-gray-500 hover:text-gray-700">
            <FaChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;