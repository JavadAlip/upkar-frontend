import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import navbarLast from "../../assets/navbarLast1.png";

const NavbarHome = () => {
  
  const [ongoingOpen, setOngoingOpen] = useState(false);
  const [completedOpen, setCompletedOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between relative">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center">
        <li>
          <Link
            to="/aboutus"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
          >
            About us
          </Link>
        </li>

        <li className="relative flex items-center space-x-1 cursor-pointer">
          <div
            onMouseEnter={() => {
              setOngoingOpen(true);
              if (window.ongoingTimeout) {
                clearTimeout(window.ongoingTimeout);
                window.ongoingTimeout = null;
              }
            }}
            onMouseLeave={() => {
              window.ongoingTimeout = setTimeout(() => {
                setOngoingOpen(false);
              }, 2000);
            }}
            className="relative"
          >
            <span className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center">
              Ongoing
              <ChevronDown
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${ongoingOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
              />
            </span>

            {ongoingOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Project
                </Link>
              </div>
            )}
          </div>
        </li>

        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Upcoming
          </a>
        </li>

        <li className="relative flex items-center space-x-1 cursor-pointer group">
          <div
            onMouseEnter={() => {
              setCompletedOpen(true);
              if (window.completedTimeout) {
                clearTimeout(window.completedTimeout);
                window.completedTimeout = null;
              }
            }}
            onMouseLeave={() => {
              window.completedTimeout = setTimeout(() => {
                setCompletedOpen(false);
              }, 2000);
            }}
            className="relative"
          >
            <Link
              to="/completed-projects"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
            >
              Completed
              <ChevronDown
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${completedOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
              />
            </Link>

            {completedOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  to="/project"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Project
                </Link>
              </div>
            )}
          </div>
        </li>

        {["Commercial", "Events", "Blogs", "Careers"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <img
          src={navbarLast}
          alt="Credai Logo"
          className="h-24 w-auto object-contain cursor-pointer"
        />
      </div>

      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 z-50 md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/aboutus"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About us
              </Link>
            </li>

            <li>
              <button
                className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600"
                onClick={() => setOngoingOpen(!ongoingOpen)}
              >
                <span>Ongoing</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${ongoingOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                    }`}
                />
              </button>
              {ongoingOpen && (
                <div className="ml-4 mt-2">
                  <Link
                    to="/project"
                    className="block text-gray-600 hover:text-blue-600 py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Project
                  </Link>
                </div>
              )}
            </li>

            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Upcoming
              </a>
            </li>
            
            <li>
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/completed-projects"
                    className="flex-1 text-gray-700 hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Completed
                  </Link>
                  <button
                    className="p-2 text-gray-700 hover:text-blue-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCompletedOpen(!completedOpen);
                    }}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${completedOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                        }`}
                    />
                  </button>
                </div>
                {completedOpen && (
                  <div className="ml-4 mt-2">
                    <Link
                      to="/project"
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      Project
                    </Link>
                  </div>
                )}
              </div>
            </li>

            {["Commercial", "Events", "Blogs", "Careers"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarHome;