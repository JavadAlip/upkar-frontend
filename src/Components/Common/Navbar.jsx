import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import navbarLast from "../../assets/navbarLast.png";
import navbarLast1 from "../../assets/navbarLast1.png";


const Navbar = () => {

    const location = useLocation();

    const [ongoingOpen, setOngoingOpen] = useState(false);
    const [completedOpen, setCompletedOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="bg-white shadow-md py-4 px-4 lg:px-10 flex items-center justify-between relative font-figtree">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 w-auto object-contain cursor-pointer"
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg-nav:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center">
                <li>
                    <Link
                        to="/aboutus"
                        className="text-black hover:text-gray-600 transition-colors duration-300 whitespace-nowrap"
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
                        <span className="text-black hover:text-gray-600 transition-colors duration-300 flex items-center">
                            Ongoing
                            <ChevronDown
                                className={`ml-1 w-4 h-4 transition-transform duration-300 ${ongoingOpen ? "rotate-180 text-gray-600" : "text-gray-500"
                                    }`}
                            />
                        </span>

                        {ongoingOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-black hover:bg-gray-50  transition-colors"
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
                        className="text-black hover:text-gray-600 transition-colors duration-300"
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
                            className="text-black hover:text-gray-600 transition-colors duration-300 flex items-center"
                        >
                            Completed
                            <ChevronDown
                                className={`ml-1 w-4 h-4 transition-transform duration-300 ${completedOpen ? "rotate-180 text-gray-600" : "text-gray-500"
                                    }`}
                            />
                        </Link>

                        {completedOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                                <Link
                                    to="/project"
                                    className="block px-4 py-2 text-black hover:bg-gray-50  transition-colors"
                                >
                                    Project
                                </Link>
                            </div>
                        )}
                    </div>
                </li>

                {/* Static Links */}
                {["Commercial", "Events", "Blogs", "Careers"].map((item) => (
                    <li key={item}>
                        <a
                            href="#"
                            className="text-black hover:text-gray-600 transition-colors duration-300"
                        >
                            {item}
                        </a>
                    </li>
                ))}

                {location.pathname === "/aboutus" && (
                    <li>
                        <Link
                            to="/contact"
                            className="bg-black text-white px-5 py-2 rounded-2xl hover:bg-gray-900 transition-all duration-300 whitespace-nowrap"
                        >
                            Contact
                        </Link>
                    </li>
                )}
            </ul>

            <div className="hidden lg-nav:flex flex-row items-center gap-3">
                {location.pathname === "/aboutus" && (
                    <img
                        src={navbarLast}
                        alt="About Logo"
                        className="h-10 w-auto object-contain cursor-pointer"
                    />
                )}
                {location.pathname === "/" && (
                    <img
                        src={navbarLast1}
                        alt="Home Logo"
                        className="h-16 w-auto object-contain cursor-pointer"
                    />
                )}
            </div>

            {/* Hamburger Icon */}
            <button
                className="lg-nav:hidden text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 z-50 lg-nav:hidden">
                    <ul className="flex flex-col space-y-2 p-4">
                        <li>
                            <Link
                                to="/aboutus"
                                className="block text-black hover:text-gray-600 transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                About us
                            </Link>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block text-black hover:text-gray-600 transition-colors"
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
                            className="text-black hover:text-gray-600 transition-colors duration-300 flex items-center"
                        >
                            Completed
                            <ChevronDown
                                className={`ml-1 w-4 h-4 transition-transform duration-300 ${completedOpen ? "rotate-180 text-gray-600" : "text-gray-500"
                                    }`}
                            />
                        </Link>

                        {completedOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                                <Link
                                    to="/project"
                                    className="block px-4 py-2 text-black hover:bg-gray-50  transition-colors"
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
                                    className="block text-black hover:text-gray-600 transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}

                        {/* Contact Button - Mobile */}
                        <li>
                            <Link
                                to="/contact"
                                className="block text-white bg-black text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
