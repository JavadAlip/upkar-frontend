import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavbarHome = () => {
  const [ongoingOpen, setOngoingOpen] = useState(false);
  const [completedOpen, setCompletedOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const staticLinks = [
    { name: 'Events', path: '/events' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-md shadow-md p-4 flex items-center justify-between z-[1000]">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto object-contain cursor-pointer"
          />
        </Link>
      </div>
      <ul className="hidden md:flex absolute font-figtree left-1/2 transform -translate-x-1/2 space-x-8 items-center">
        <li>
          <Link
            to="/aboutus"
            className="text-black hover:text-[#2D5C3A] transition-colors duration-300 whitespace-nowrap"
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
            <Link
              to="/ongoing-projects"
              className="text-black hover:text-[#2D5C3A] transition-colors duration-300 flex items-center"
            >
              Ongoing
            </Link>
          </div>
        </li>

        <li>
          <Link
            to="/upcoming-projects"
            className="text-black hover:text-[#2D5C3A] transition-colors duration-300"
          >
            Upcoming
          </Link>
        </li>

        <li className="relative flex items-center space-x-1 cursor-pointer">
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
              className="text-black hover:text-[#2D5C3A] transition-colors duration-300 flex items-center"
            >
              Completed
            </Link>
          </div>
        </li>

        {staticLinks.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="text-black hover:text-[#2D5C3A] transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full font-figtree bg-white shadow-md rounded-md mt-2 z-50 md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/aboutus"
                className="block  text-black hover:text-[#2D5C3A] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                to="/ongoing-projects"
                className="block text-black hover:text-[#2D5C3A] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Ongoing
              </Link>
            </li>

            <li>
              <Link
                to="/upcoming-projects"
                className="block text-black hover:text-[#2D5C3A] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Upcoming
              </Link>
            </li>

            <li>
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    to="/completed-projects"
                    className="flex-1 text-black hover:text-[#2D5C3A]"
                    onClick={() => setMenuOpen(false)}
                  >
                    Completed
                  </Link>
                </div>
              </div>
            </li>

            {staticLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block text-black hover:text-[#2D5C3A] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarHome;
