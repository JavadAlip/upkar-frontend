import React, { useState } from "react";
import { Home, Info, Folder, Calendar, Briefcase,CheckCircle,Activity,FileText, ChevronDown, Menu, X, Grid } from "lucide-react";

const Sidebar = ({ setActiveSection }) => {
  const [openHome, setOpenHome] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [openCareer, setOpenCareer] = useState(false);
  const [openCompleted, setOpenCompleted] = useState(false);
  const [openUpcoming, setOpenUpcoming] = useState(false);
  const [openOngoing, setOpenOngoing] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
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
        <h2 className="text-2xl font-bold p-4 border-b border-gray-700 flex-shrink-0">
          Admin
        </h2>

        {/* Scrollable Menu Items */}
        <div className="flex-1 flex flex-col p-4 gap-2 overflow-y-auto">
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
              <Folder className="w-5 h-5" />
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
              <Info className="w-5 h-5" />
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
              <Calendar className="w-5 h-5" />
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
              <Briefcase className="w-5 h-5" />
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

          {/* Completed Projects Dropdown */}
          <button
            onClick={() => setOpenCompleted(!openCompleted)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Completed Projects
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openCompleted ? "rotate-180" : ""
              }`}
            />
          </button>
          {openCompleted && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("completedmain")}
              >
                Completed Main
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("ourvalues")}
              >
                Our Values
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("projectlists")}
              >
                Project Lists
              </button>
            </div>
          )}

          {/* Upcoming Projects Dropdown */}
          <button
            onClick={() => setOpenUpcoming(!openUpcoming)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Projects
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openUpcoming ? "rotate-180" : ""
              }`}
            />
          </button>
          {openUpcoming && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("upcomingmain")}
              >
                Upcoming Main
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("upcomingourvalues")}
              >
                Our Values
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("upcomingprojectlists")}
              >
                Project Lists
              </button>
            </div>
          )}

          {/* Ongoing Projects Dropdown */}
          <button
            onClick={() => setOpenOngoing(!openOngoing)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Ongoing Projects
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openOngoing ? "rotate-180" : ""
              }`}
            />
          </button>
          {openOngoing && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("ongoingmain")}
              >
                Ongoing Main
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("ongoingourvalues")}
              >
                Our Values
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("ongoingprojectlists")}
              >
                Project Lists
              </button>
            </div>
          )}

          {/* Blog Page Dropdown */}
          <button
            onClick={() => setOpenBlog(!openBlog)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Blogs
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                openBlog ? "rotate-180" : ""
              }`}
            />
          </button>
          {openBlog && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("blogsmain")}
              >
                Blogs Main
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("populararticles")}
              >
                Popular Articles
              </button>
              <button
                className="text-white p-2 rounded hover:bg-gray-900 text-left"
                onClick={() => setActiveSection("readmore")}
              >
                Read More
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
