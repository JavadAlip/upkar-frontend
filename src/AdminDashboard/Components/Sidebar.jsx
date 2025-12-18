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
  Settings,
  X,
  LogOut,
  ClipboardList,
  LayoutDashboard,
} from 'lucide-react';
import logo from '../../assets/Icons/adminLogo.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

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

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the admin dashboard!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#2D5C3A',
      confirmButtonText: 'Yes, Logout!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('adminToken');
        navigate('/admin-login', { replace: true });
        toast.success('Logged out successfully!');
      }
    });
  };

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-[9999]">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#2D5C3A] bg-white p-2 rounded shadow-lg"
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
          fixed top-0 left-0 h-screen bg-white text-black flex flex-col w-64
          transform transition-transform duration-300 z-[9000]
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-64
        `}
      >
        <div className="flex items-center gap-3 p-4 border-b border-white h-[72px]">
          <img
            src={logo}
            alt="Upkar Admin"
            className="h-full max-h-[40px] w-auto object-contain"
          />
          <h2 className="hidden text-black sm:block text-2xl font-bold font-figtree leading-none">
            Upkar Admin
          </h2>
        </div>

        <div className="flex-1 flex flex-col p-4 gap-2 overflow-y-auto">
          <div
            onClick={() => setActiveSection('dashboard')}
            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#2D5C3A] hover:text-white"
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>

          {/*  Home Page  */}
          <button
            onClick={() => setOpenHome(!openHome)}
            className="flex items-center justify-between w-full p-2 border rounded font-figtree  hover:text-white hover:bg-[#2D5C3A]"
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
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
              >
                Banner
              </button>
              <button
                onClick={() => setActiveSection('vision')}
                className="p-2 hover:bg-[#2D5C3A]  hover:text-white font-figtree   rounded text-left"
              >
                Vision Mission
              </button>
              <button
                onClick={() => setActiveSection('projects')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white  font-figtree   rounded text-left"
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection('certification')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree   rounded text-left"
              >
                Certification
              </button>
              <button
                onClick={() => setActiveSection('quotescertificate')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white  font-figtree  rounded text-left"
              >
                Quotes
              </button>
              <button
                onClick={() => setActiveSection('qna')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
              >
                Q&A
              </button>
              <button
                onClick={() => setActiveSection('awards')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
              >
                Awards
              </button>
              <button
                onClick={() => setActiveSection('tree')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white  font-figtree  rounded text-left"
              >
                Tree
              </button>
            </div>
          )}

          {/*  Project Page  */}
          <button
            onClick={() => setOpenProject(!openProject)}
            className="flex items-center justify-between w-full p-2 border rounded font-figtree  hover:text-white hover:bg-[#2D5C3A]"
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
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
              >
                Project Main
              </button>
              <button
                onClick={() => setActiveSection('feature')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
              >
                Feature
              </button>
              <button
                onClick={() => setActiveSection('plotlayout')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree   rounded text-left"
              >
                Plot Layout
              </button>
              <button
                onClick={() => setActiveSection('amenity')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree    rounded text-left"
              >
                Amenities
              </button>
              <button
                onClick={() => setActiveSection('aboutproject')}
                className="p-2 hover:bg-[#2D5C3A] hover:text-white  font-figtree   rounded text-left"
              >
                About Project
              </button>
              <button
                onClick={() => setActiveSection('projectimages')}
                className="p-2 hover:bg-[#2D5C3A]   hover:text-white font-figtree    rounded text-left"
              >
                Project Image
              </button>
            </div>
          )}

          {/*  About Page  */}
          <button
            onClick={() => setOpenAbout(!openAbout)}
            className="flex items-center justify-between w-full p-2 rounded border font-figtree  hover:text-white  hover:bg-[#2D5C3A]"
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
                className="p-2 hover:bg-[#2D5C3A] font-figtree   hover:text-white rounded text-left"
              >
                About Main
              </button>
              <button
                onClick={() => setActiveSection('quote')}
                className="p-2 hover:bg-[#2D5C3A] font-figtree    hover:text-white rounded text-left"
              >
                Quote
              </button>
              <button
                onClick={() => setActiveSection('team')}
                className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white  rounded text-left"
              >
                Team
              </button>
              <button
                onClick={() => setActiveSection('aboutimages')}
                className="p-2 hover:bg-[#2D5C3A]  font-figtree   hover:text-white rounded text-left"
              >
                About images
              </button>
            </div>
          )}

          {/*  Event Page  */}
          <button
            onClick={() => setOpenEvent(!openEvent)}
            className="flex items-center justify-between w-full p-2 border rounded font-figtree   hover:text-white  hover:bg-[#2D5C3A]"
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
                className="p-2 hover:bg-[#2D5C3A]  font-figtree   hover:text-white rounded text-left"
              >
                Event Main
              </button>
            </div>
          )}

          {/*  Career  */}
          <button
            onClick={() => setOpenCareer(!openCareer)}
            className="flex items-center justify-between w-full p-2 border font-figtree  rounded hover:text-white  hover:bg-[#2D5C3A]"
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
                className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white rounded text-left"
              >
                Career Main
              </button>
              <button
                onClick={() => setActiveSection('whyjoin')}
                className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white rounded text-left"
              >
                Why Join
              </button>
              <button
                onClick={() => setActiveSection('careerimages')}
                className="p-2 hover:bg-[#2D5C3A] font-figtree   hover:text-white rounded text-left"
              >
                Career Images
              </button>
            </div>
          )}

          {/* Completed  */}
          <button
            onClick={() => setOpenCompleted(!openCompleted)}
            className="flex items-center justify-between w-full p-2 border rounded font-figtree   hover:text-white  hover:bg-[#2D5C3A]"
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
                className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white rounded text-left"
              >
                Completed Main
              </button>
              <button
                onClick={() => setActiveSection('ourvalues')}
                className="p-2 hover:bg-[#2D5C3A]  hover:text-white font-figtree  rounded text-left"
              >
                Our Values
              </button>
              <button
                onClick={() => setActiveSection('valueimages')}
                className="p-2 hover:bg-[#2D5C3A]   font-figtree  hover:text-white  rounded text-left"
              >
                Value images
              </button>
              <button
                onClick={() => setActiveSection('projectlists')}
                className="p-2 hover:bg-[#2D5C3A]   font-figtree  hover:text-white rounded text-left"
              >
                Project Lists
              </button>
            </div>
          )}

          {/*  Upcoming  */}
          <button
            onClick={() => setOpenUpcoming(!openUpcoming)}
            className="flex items-center justify-between w-full p-2 border rounded font-figtree   hover:text-white hover:bg-[#2D5C3A]"
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
                className="p-2 hover:bg-[#2D5C3A] font-figtree   hover:text-white  rounded text-left"
              >
                Upcoming Main
              </button>
              <button
                onClick={() => setActiveSection('upcomingourvalues')}
                className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white  rounded text-left"
              >
                Our Values
              </button>
              <button
                onClick={() => setActiveSection('valueimages')}
                className="p-2 hover:bg-[#2D5C3A]  font-figtree   hover:text-white rounded text-left"
              >
                Value images
              </button>
              <button
                onClick={() => setActiveSection('upcomingprojectlists')}
                className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white rounded text-left"
              >
                Project Lists
              </button>
            </div>
          )}

          {/*  Ongoing  */}
          <button
            onClick={() => setOpenOngoing(!openOngoing)}
            className="flex items-center justify-between w-full p-2 rounded border  font-figtree hover:text-white  hover:bg-[#2D5C3A]"
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
                className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white  rounded text-left"
              >
                Ongoing Main
              </button>
              <button
                onClick={() => setActiveSection('ongoingourvalues')}
                className="p-2 hover:bg-[#2D5C3A]  font-figtree hover:text-white  rounded text-left"
              >
                Our Values
              </button>
              <button
                onClick={() => setActiveSection('valueimages')}
                className="p-2 hover:bg-[#2D5C3A] font-figtree  hover:text-white rounded text-left"
              >
                Value images
              </button>
              <button
                onClick={() => setActiveSection('ongoingprojectlists')}
                className="p-2 hover:bg-[#2D5C3A] font-figtree  hover:text-white rounded text-left"
              >
                Project Lists
              </button>
            </div>
          )}

          {/*  Blogs  */}
          <button
            onClick={() => setOpenBlog(!openBlog)}
            className="flex items-center justify-between w-full p-2 border rounded font-figtree  hover:text-white hover:bg-[#2D5C3A]"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Blog Page
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
                className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
              >
                Blogs Main
              </button>
              <button
                onClick={() => setActiveSection('populararticles')}
                className="p-2 hover:bg-[#2D5C3A]  font-figtree hover:text-white rounded text-left"
              >
                Popular Articles
              </button>
              <button
                onClick={() => setActiveSection('readmore')}
                className="p-2 hover:bg-[#2D5C3A]  hover:text-white font-figtree rounded text-left"
              >
                Read More
              </button>
            </div>
          )}

          <div
            onClick={() => setActiveSection('enquiry')}
            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#2D5C3A] hover:text-white"
          >
            <ClipboardList size={18} />
            <span>Enquiries</span>
          </div>

          <div
            className="flex items-center gap-3 p-2 rounded
                     text-black border"
          >
            <Settings size={18} />
            <span>Settings</span>
          </div>

          {/* LOGOUT */}
          <div className="mt-auto pt-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-start gap-2 p-2 rounded
                         text-red-600 border
                         hover:bg-red-600 hover:text-white transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
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
