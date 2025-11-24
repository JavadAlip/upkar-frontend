import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import navbarLast from "../../assets/navbarLast.png";

const CmpltNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4 flex items-center justify-between relative font-figtree">
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
            <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center">
                <li>
                    <Link
                        to="/aboutus"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
                    >
                        About us
                    </Link>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                        Ongoing
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                        Upcoming
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                        Completed
                    </a>
                </li>

                {/* Static Links */}
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

                {/* Contact Button */}
                <li>
                    <Link
                        to="/contact"
                        className="bg-black text-white px-5 py-2 rounded-2xl hover:bg-gray-900 transition-all duration-300 whitespace-nowrap"
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* NavbarLast Image - Desktop Only */}
            <div className="hidden md:block">
                <img
                    src={navbarLast}
                    alt="Credai Logo"
                    className="h-8 w-auto object-contain cursor-pointer"
                />
            </div>

            {/* Hamburger Icon */}
            <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* Mobile Menu */}
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
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                Upcoming
                            </a>
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

export default CmpltNavbar;
