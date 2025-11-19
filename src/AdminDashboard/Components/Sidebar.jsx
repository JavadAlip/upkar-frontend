import React, { useState } from "react";
import { Home, ChevronDown, Menu, X, Grid } from "lucide-react";

const Sidebar = ({ setActiveSection }) => {
  const [openHome, setOpenHome] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [openCareer, setOpenCareer] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Hamburger button for small screens */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white bg-black p-2 rounded"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
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
        <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
          Admin
        </h2>

        {/* Menu Items */}
        <div className="flex flex-col p-4 gap-2 overflow-hidden">
          {/* Home Page Dropdown */}
          <button
            onClick={() => setOpenHome(!openHome)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Home Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openHome ? "rotate-180" : ""
              }`}
            />
          </button>
          {openHome && (
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

          {/* Project Page Dropdown */}
          <button
            onClick={() => setOpenProject(!openProject)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Grid className="w-5 h-5" />
              Project Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openProject ? "rotate-180" : ""
              }`}
            />
          </button>
          {openProject && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("projectmain")}
              >
                Project Main
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("feature")}
              >
                Feature
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("plotlayout")}
              >
                Plot Layout
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("amenity")}
              >
                Amenities
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("aboutproject")}
              >
                About Project
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("projectimages")}
              >
                Project Image
              </button>
            </div>
          )}

          {/* About Page Dropdown */}
          <button
            onClick={() => setOpenAbout(!openAbout)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Grid className="w-5 h-5" />
              About Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openAbout ? "rotate-180" : ""
              }`}
            />
          </button>
          {openAbout && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("aboutmain")}
              >
                About Main
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("quote")}
              >
                Quote
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("team")}
              >
                Team
              </button>
            </div>
          )}

          {/* Event Page Dropdown */}
          <button
            onClick={() => setOpenEvent(!openEvent)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Grid className="w-5 h-5" />
              Event Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openEvent ? "rotate-180" : ""
              }`}
            />
          </button>
          {openEvent && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("eventmain")}
              >
                Event Main
              </button>
            </div>
          )}

          {/* Career Page Dropdown */}
          <button
            onClick={() => setOpenCareer(!openCareer)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Grid className="w-5 h-5" />
              Career Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openCareer ? "rotate-180" : ""
              }`}
            />
          </button>
          {openCareer && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("careermain")}
              >
                Career Main
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("whyjoin")}
              >
                Why join
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("careerimages")}
              >
                Career Images
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
