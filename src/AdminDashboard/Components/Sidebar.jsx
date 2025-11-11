import React, { useState } from "react";
import { Home, ChevronDown, Menu, X } from "lucide-react";

const Sidebar = ({ setActiveSection }) => {
  const [open, setOpen] = useState(false); // dropdown inside sidebar
  const [mobileOpen, setMobileOpen] = useState(false); // mobile sidebar toggle

  return (
    <>
      {/* Hamburger button for small screens */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white bg-black p-2 rounded"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-black text-white flex flex-col w-64
          transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:w-64
          z-10
        `}
      >
        {/* Sidebar Header */}
        <h2 className="text-2xl font-bold p-4 border-b border-gray-700">Admin</h2>

        {/* Menu Items */}
        <div className="flex flex-col p-4 gap-2 overflow-hidden">
          {/* Home Page Dropdown */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Home Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Items */}
          {open && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("banner")}
              >
                Banner
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("vision")}
              >
                Vision Mission
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("projects")}
              >
                Projects
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("certification")}
              >
                Certification
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("qna")}
              >
                Q&A
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("awards")}
              >
                Awards
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile when sidebar open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
