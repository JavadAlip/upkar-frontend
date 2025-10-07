import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // ⬅️ Import dropdown icon
import logo from "../assets/logo.png";

const Navbar = () => {
  const [ongoingOpen, setOngoingOpen] = useState(false);
  const [completedOpen, setCompletedOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-6 flex items-center justify-between relative">
      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto object-contain cursor-pointer"
        />
      </div>

      {/* Menu Links */}
      <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 items-center">
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
          >
            About us
          </a>
        </li>

        {/* Ongoing Dropdown */}
        <li
          className="relative flex items-center space-x-1 cursor-pointer"
          onMouseEnter={() => setOngoingOpen(true)}
          onMouseLeave={() => setOngoingOpen(false)}
        >
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
          >
            Ongoing
            <ChevronDown
              className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                ongoingOpen ? "rotate-180 text-blue-600" : "text-gray-500"
              }`}
            />
          </a>

          {ongoingOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Project Alpha
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Project Beta
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Project Gamma
              </a>
            </div>
          )}
        </li>

        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Upcoming
          </a>
        </li>

        {/* Completed Dropdown */}
        <li
          className="relative flex items-center space-x-1 cursor-pointer"
          onMouseEnter={() => setCompletedOpen(true)}
          onMouseLeave={() => setCompletedOpen(false)}
        >
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
          >
            Completed
            <ChevronDown
              className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                completedOpen ? "rotate-180 text-blue-600" : "text-gray-500"
              }`}
            />
          </a>

          {completedOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Legacy Project
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Archive A
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Archive B
              </a>
            </div>
          )}
        </li>

        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Commercial
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Blogs
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Careers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
