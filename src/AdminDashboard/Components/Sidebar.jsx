import React, { useState } from 'react';
import {
  Home,
  Info,
  Folder,
  Calendar,
  Briefcase,
  CheckCircle,
  Activity,
  FileText,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

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
      <div className="md:hidden fixed top-4 left-4 z-[9999]">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-blue-600 bg-white p-2 rounded shadow-lg"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`
          fixed top-0 left-0 h-screen bg-blue-600 text-white flex flex-col w-64
          transform transition-transform duration-300 z-[9000]
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-64
        `}
      >
        <h2 className="hidden sm:block text-2xl font-bold p-4 border-b border-white">
          UPKAR
        </h2>

        <div className="flex-1 flex flex-col p-4 gap-2 overflow-y-auto">
          {/*  Home Page  */}
          <button
            onClick={() => setOpenHome(!openHome)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Home Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openHome ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openHome && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                onClick={() => setActiveSection('banner')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Banner
              </button>
              <button
                onClick={() => setActiveSection('vision')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Vision Mission
              </button>
              <button
                onClick={() => setActiveSection('projects')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection('certification')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Certification
              </button>
              <button
                onClick={() => setActiveSection('quotescertificate')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Quotes
              </button>
              <button
                onClick={() => setActiveSection('qna')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Q&A
              </button>
              <button
                onClick={() => setActiveSection('awards')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Awards
              </button>
              <button
                onClick={() => setActiveSection('tree')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Tree
              </button>
            </div>
          )}

          {/*  Project Page  */}
          <button
            onClick={() => setOpenProject(!openProject)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <Folder className="w-5 h-5" />
              Project Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openProject ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openProject && (
            <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
              <button
                onClick={() => setActiveSection('projectmain')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Project Main
              </button>
              <button
                onClick={() => setActiveSection('feature')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Feature
              </button>
              <button
                onClick={() => setActiveSection('plotlayout')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Plot Layout
              </button>
              <button
                onClick={() => setActiveSection('amenity')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Amenities
              </button>
              <button
                onClick={() => setActiveSection('aboutproject')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                About Project
              </button>
              <button
                onClick={() => setActiveSection('projectimages')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Project Image
              </button>
            </div>
          )}

          {/*  About Page  */}
          <button
            onClick={() => setOpenAbout(!openAbout)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              About Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openAbout ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openAbout && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <button
                onClick={() => setActiveSection('aboutmain')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                About Main
              </button>
              <button
                onClick={() => setActiveSection('quote')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Quote
              </button>
              <button
                onClick={() => setActiveSection('team')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Team
              </button>
            </div>
          )}

          {/*  Event Page  */}
          <button
            onClick={() => setOpenEvent(!openEvent)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Event Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openEvent ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openEvent && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <button
                onClick={() => setActiveSection('eventmain')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Event Main
              </button>
            </div>
          )}

          {/*  Career  */}
          <button
            onClick={() => setOpenCareer(!openCareer)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Career Page
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openCareer ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openCareer && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <button
                onClick={() => setActiveSection('careermain')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Career Main
              </button>
              <button
                onClick={() => setActiveSection('whyjoin')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Why Join
              </button>
              <button
                onClick={() => setActiveSection('careerimages')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Career Images
              </button>
            </div>
          )}

          {/* Completed  */}
          <button
            onClick={() => setOpenCompleted(!openCompleted)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Completed Projects
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openCompleted ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openCompleted && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <button
                onClick={() => setActiveSection('completedmain')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Completed Main
              </button>
              <button
                onClick={() => setActiveSection('ourvalues')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Our Values
              </button>
              <button
                onClick={() => setActiveSection('valueimages')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Value images
              </button>
              <button
                onClick={() => setActiveSection('projectlists')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Project Lists
              </button>
            </div>
          )}

          {/*  Upcoming  */}
          <button
            onClick={() => setOpenUpcoming(!openUpcoming)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Projects
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openUpcoming ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openUpcoming && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <button
                onClick={() => setActiveSection('upcomingmain')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Upcoming Main
              </button>
              <button
                onClick={() => setActiveSection('upcomingourvalues')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Our Values
              </button>
              <button
                onClick={() => setActiveSection('valueimages')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Value images
              </button>
              <button
                onClick={() => setActiveSection('upcomingprojectlists')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Project Lists
              </button>
            </div>
          )}

          {/*  Ongoing  */}
          <button
            onClick={() => setOpenOngoing(!openOngoing)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Ongoing Projects
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openOngoing ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openOngoing && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <button
                onClick={() => setActiveSection('ongoingmain')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Ongoing Main
              </button>
              <button
                onClick={() => setActiveSection('ongoingourvalues')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Our Values
              </button>
              <button
                onClick={() => setActiveSection('valueimages')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Value images
              </button>
              <button
                onClick={() => setActiveSection('ongoingprojectlists')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Project Lists
              </button>
            </div>
          )}

          {/*  Blogs  */}
          <button
            onClick={() => setOpenBlog(!openBlog)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-blue-800"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Blogs
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openBlog ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openBlog && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <button
                onClick={() => setActiveSection('blogsmain')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Blogs Main
              </button>
              <button
                onClick={() => setActiveSection('populararticles')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Popular Articles
              </button>
              <button
                onClick={() => setActiveSection('readmore')}
                className="p-2 hover:bg-blue-800 rounded text-left"
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[1000] md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
