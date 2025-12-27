// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Info,
//   Folder,
//   Calendar,
//   Briefcase,
//   CheckCircle,
//   Activity,
//   FileText,
//   ChevronDown,
//   Menu,
//   Settings,
//   X,
//   LogOut,
//   ClipboardList,
//   LayoutDashboard,
//   LayoutGrid,
//   Building2,
//   BarChart3,
// } from 'lucide-react';
// import logo from '../../assets/Icons/adminLogo.png';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { toast } from 'react-toastify';

// const Sidebar1 = ({ setActiveSection }) => {
//   const [openHome, setOpenHome] = useState(false);
//   const [openProject, setOpenProject] = useState(false);
//   const [openAbout, setOpenAbout] = useState(false);
//   const [openEvent, setOpenEvent] = useState(false);
//   const [openCareer, setOpenCareer] = useState(false);
//   const [openCompleted, setOpenCompleted] = useState(false);
//   const [openUpcoming, setOpenUpcoming] = useState(false);
//   const [openOngoing, setOpenOngoing] = useState(false);
//   const [openBlog, setOpenBlog] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will be logged out of the admin dashboard!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#2D5C3A',
//       confirmButtonText: 'Yes, Logout!',
//       cancelButtonText: 'Cancel',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem('adminToken');
//         navigate('/admin-login', { replace: true });
//         toast.success('Logged out successfully!');
//       }
//     });
//   };

//   return (
//     <>
//       <div className="md:hidden fixed top-4 left-4 z-[9999]">
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="text-[#2D5C3A] bg-white p-2 rounded shadow-lg"
//         >
//           {mobileOpen ? (
//             <X className="w-6 h-6" />
//           ) : (
//             <Menu className="w-6 h-6" />
//           )}
//         </button>
//       </div>

//       <div
//         className={`
//           fixed top-0 left-0 h-screen bg-white text-black flex flex-col w-64
//           transform transition-transform duration-300 z-[9000]
//           ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
//           md:translate-x-0 md:w-64
//         `}
//       >
//         <div className="flex items-center gap-3 p-4 border-b border-white h-[72px]">
//           <img
//             src={logo}
//             alt="Upkar Admin"
//             className="h-full max-h-[40px] w-auto object-contain"
//           />
//           <h2 className="hidden text-black sm:block text-2xl font-bold font-figtree leading-none">
//             Upkar Admin
//           </h2>
//         </div>

//         <div className="flex-1 flex flex-col p-4 gap-2 overflow-y-auto">
//           <div
//             onClick={() => setActiveSection('dashboard')}
//             className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#2D5C3A] hover:text-white"
//           >
//             <BarChart3 size={18} />
//             <span>Dashboard</span>
//           </div>

//           {/* <div
//             onClick={() => setActiveSection('category')}
//             className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#2D5C3A] hover:text-white"
//           >
//             <LayoutGrid size={18} />
//             <span>Categories</span>
//           </div> */}

//           <div
//             onClick={() => navigate('/categories')}
//             className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#2D5C3A] hover:text-white"
//           >
//             <LayoutGrid size={18} />
//             <span>Categories</span>
//           </div>

//           {/*  Projects figma  */}
//           <div
//             onClick={() => setActiveSection('projectslist')}
//             className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#2D5C3A] hover:text-white"
//           >
//             <Building2 size={18} />
//             <span>Projects</span>
//           </div>

//           <div
//             onClick={() => setActiveSection('enquiry')}
//             className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#2D5C3A] hover:text-white"
//           >
//             <ClipboardList size={18} />
//             <span>Enquiries</span>
//           </div>

//           {/*  Home Page  */}
//           <button
//             onClick={() => setOpenHome(!openHome)}
//             className="flex items-center justify-between w-full p-2 border rounded font-figtree  hover:text-white hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <Home className="w-5 h-5" />
//               Home Page
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openHome ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openHome && (
//             <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('banner')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
//               >
//                 Banner
//               </button>
//               <button
//                 onClick={() => setActiveSection('vision')}
//                 className="p-2 hover:bg-[#2D5C3A]  hover:text-white font-figtree   rounded text-left"
//               >
//                 Vision Mission
//               </button>
//               <button
//                 onClick={() => setActiveSection('projects')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white  font-figtree   rounded text-left"
//               >
//                 Projects
//               </button>
//               <button
//                 onClick={() => setActiveSection('certification')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree   rounded text-left"
//               >
//                 Certification
//               </button>
//               <button
//                 onClick={() => setActiveSection('quotescertificate')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white  font-figtree  rounded text-left"
//               >
//                 Quotes
//               </button>
//               <button
//                 onClick={() => setActiveSection('qna')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
//               >
//                 Q&A
//               </button>
//               <button
//                 onClick={() => setActiveSection('awards')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
//               >
//                 Awards
//               </button>
//               <button
//                 onClick={() => setActiveSection('tree')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white  font-figtree  rounded text-left"
//               >
//                 Tree
//               </button>
//             </div>
//           )}

//           {/*  Project Page  */}
//           <button
//             onClick={() => setOpenProject(!openProject)}
//             className="flex items-center justify-between w-full p-2 border rounded font-figtree  hover:text-white hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <Folder className="w-5 h-5" />
//               Project Page
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openProject ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openProject && (
//             <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('projectmain')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
//               >
//                 Project Main
//               </button>
//               <button
//                 onClick={() => setActiveSection('feature')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
//               >
//                 Feature
//               </button>
//               <button
//                 onClick={() => setActiveSection('plotlayout')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree   rounded text-left"
//               >
//                 Plot Layout
//               </button>
//               <button
//                 onClick={() => setActiveSection('amenity')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree    rounded text-left"
//               >
//                 Amenities
//               </button>
//               <button
//                 onClick={() => setActiveSection('aboutproject')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white  font-figtree   rounded text-left"
//               >
//                 About Project
//               </button>
//               <button
//                 onClick={() => setActiveSection('projectimages')}
//                 className="p-2 hover:bg-[#2D5C3A]   hover:text-white font-figtree    rounded text-left"
//               >
//                 Project Image
//               </button>
//             </div>
//           )}

//           {/*  About Page  */}
//           <button
//             onClick={() => setOpenAbout(!openAbout)}
//             className="flex items-center justify-between w-full p-2 rounded border font-figtree  hover:text-white  hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <Info className="w-5 h-5" />
//               About Page
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openAbout ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openAbout && (
//             <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('aboutmain')}
//                 className="p-2 hover:bg-[#2D5C3A] font-figtree   hover:text-white rounded text-left"
//               >
//                 About Main
//               </button>
//               <button
//                 onClick={() => setActiveSection('quote')}
//                 className="p-2 hover:bg-[#2D5C3A] font-figtree    hover:text-white rounded text-left"
//               >
//                 Quote
//               </button>
//               <button
//                 onClick={() => setActiveSection('team')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white  rounded text-left"
//               >
//                 Team
//               </button>
//               <button
//                 onClick={() => setActiveSection('aboutimages')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree   hover:text-white rounded text-left"
//               >
//                 About images
//               </button>
//             </div>
//           )}

//           {/*  Event Page  */}
//           <button
//             onClick={() => setOpenEvent(!openEvent)}
//             className="flex items-center justify-between w-full p-2 border rounded font-figtree   hover:text-white  hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <Calendar className="w-5 h-5" />
//               Event Page
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openEvent ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openEvent && (
//             <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('eventmain')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree   hover:text-white rounded text-left"
//               >
//                 Event Main
//               </button>
//             </div>
//           )}

//           {/*  Career  */}
//           <button
//             onClick={() => setOpenCareer(!openCareer)}
//             className="flex items-center justify-between w-full p-2 border font-figtree  rounded hover:text-white  hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <Briefcase className="w-5 h-5" />
//               Career Page
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openCareer ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openCareer && (
//             <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('careermain')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white rounded text-left"
//               >
//                 Career Main
//               </button>
//               <button
//                 onClick={() => setActiveSection('whyjoin')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white rounded text-left"
//               >
//                 Why Join
//               </button>
//               <button
//                 onClick={() => setActiveSection('careerimages')}
//                 className="p-2 hover:bg-[#2D5C3A] font-figtree   hover:text-white rounded text-left"
//               >
//                 Career Images
//               </button>
//             </div>
//           )}

//           {/* Completed  */}
//           <button
//             onClick={() => setOpenCompleted(!openCompleted)}
//             className="flex items-center justify-between w-full p-2 border rounded font-figtree   hover:text-white  hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <CheckCircle className="w-5 h-5" />
//               Completed Projects
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openCompleted ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openCompleted && (
//             <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('completedmain')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white rounded text-left"
//               >
//                 Completed Main
//               </button>
//               <button
//                 onClick={() => setActiveSection('ourvalues')}
//                 className="p-2 hover:bg-[#2D5C3A]  hover:text-white font-figtree  rounded text-left"
//               >
//                 Our Values
//               </button>
//               <button
//                 onClick={() => setActiveSection('valueimages')}
//                 className="p-2 hover:bg-[#2D5C3A]   font-figtree  hover:text-white  rounded text-left"
//               >
//                 Value images
//               </button>
//               <button
//                 onClick={() => setActiveSection('projectlists')}
//                 className="p-2 hover:bg-[#2D5C3A]   font-figtree  hover:text-white rounded text-left"
//               >
//                 Project Lists
//               </button>
//             </div>
//           )}

//           {/*  Upcoming  */}
//           <button
//             onClick={() => setOpenUpcoming(!openUpcoming)}
//             className="flex items-center justify-between w-full p-2 border rounded font-figtree   hover:text-white hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <Calendar className="w-5 h-5" />
//               Upcoming Projects
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openUpcoming ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openUpcoming && (
//             <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('upcomingmain')}
//                 className="p-2 hover:bg-[#2D5C3A] font-figtree   hover:text-white  rounded text-left"
//               >
//                 Upcoming Main
//               </button>
//               <button
//                 onClick={() => setActiveSection('upcomingourvalues')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white  rounded text-left"
//               >
//                 Our Values
//               </button>
//               <button
//                 onClick={() => setActiveSection('valueimages')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree   hover:text-white rounded text-left"
//               >
//                 Value images
//               </button>
//               <button
//                 onClick={() => setActiveSection('upcomingprojectlists')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white rounded text-left"
//               >
//                 Project Lists
//               </button>
//             </div>
//           )}

//           {/*  Ongoing  */}
//           <button
//             onClick={() => setOpenOngoing(!openOngoing)}
//             className="flex items-center justify-between w-full p-2 rounded border  font-figtree hover:text-white  hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <Activity className="w-5 h-5" />
//               Ongoing Projects
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openOngoing ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openOngoing && (
//             <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('ongoingmain')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree  hover:text-white  rounded text-left"
//               >
//                 Ongoing Main
//               </button>
//               <button
//                 onClick={() => setActiveSection('ongoingourvalues')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree hover:text-white  rounded text-left"
//               >
//                 Our Values
//               </button>
//               <button
//                 onClick={() => setActiveSection('valueimages')}
//                 className="p-2 hover:bg-[#2D5C3A] font-figtree  hover:text-white rounded text-left"
//               >
//                 Value images
//               </button>
//               <button
//                 onClick={() => setActiveSection('ongoingprojectlists')}
//                 className="p-2 hover:bg-[#2D5C3A] font-figtree  hover:text-white rounded text-left"
//               >
//                 Project Lists
//               </button>
//             </div>
//           )}

//           {/*  Blogs  */}
//           <button
//             onClick={() => setOpenBlog(!openBlog)}
//             className="flex items-center justify-between w-full p-2 border rounded font-figtree  hover:text-white hover:bg-[#2D5C3A]"
//           >
//             <span className="flex items-center gap-2">
//               <FileText className="w-5 h-5" />
//               Blog Page
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 openBlog ? 'rotate-180' : ''
//               }`}
//             />
//           </button>

//           {openBlog && (
//             <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
//               <button
//                 onClick={() => setActiveSection('blogsmain')}
//                 className="p-2 hover:bg-[#2D5C3A] hover:text-white font-figtree  rounded text-left"
//               >
//                 Blogs Main
//               </button>
//               <button
//                 onClick={() => setActiveSection('populararticles')}
//                 className="p-2 hover:bg-[#2D5C3A]  font-figtree hover:text-white rounded text-left"
//               >
//                 Popular Articles
//               </button>
//               <button
//                 onClick={() => setActiveSection('readmore')}
//                 className="p-2 hover:bg-[#2D5C3A]  hover:text-white font-figtree rounded text-left"
//               >
//                 Read More
//               </button>
//             </div>
//           )}

//           <div
//             className="flex items-center gap-3 p-2 rounded
//                      text-black border"
//           >
//             <Settings size={18} />
//             <span>Settings</span>
//           </div>

//           {/* LOGOUT */}
//           <div className="mt-auto pt-4 border-t">
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center justify-start gap-2 p-2 rounded
//                          text-red-600 border
//                          hover:bg-red-600 hover:text-white transition"
//             >
//               <LogOut className="w-5 h-5" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-[1000] md:hidden"
//           onClick={() => setMobileOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Sidebar1;

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
  LayoutGrid,
  Building2,
  BarChart3,
  ImageIcon,
} from 'lucide-react';
import logo from '../../assets/Icons/adminLogo.png';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const activeClass = 'bg-[#2D5C3A] text-white';
const normalClass =
  'flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-[#2D5C3A] hover:text-white';

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openHome, setOpenHome] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openCareer, setOpenCareer] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const [openCompleted, setOpenCompleted] = useState(false);
  const [openUpcoming, setOpenUpcoming] = useState(false);
  const [openOngoing, setOpenOngoing] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#2D5C3A',
      confirmButtonText: 'Yes, Logout!',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('adminToken');
        navigate('/admin-login', { replace: true });
        toast.success('Logged out successfully!');
      }
    });
  };

  const linkClass = ({ isActive }) =>
    `${normalClass} ${isActive ? activeClass : ''}`;

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-[9999]">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="bg-white p-2 rounded shadow"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-[9000] transform transition-transform duration-300 flex flex-col
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 border-b h-[72px] flex-shrink-0">
          <img src={logo} alt="logo" className="h-10" />
          <h2 className="text-xl font-bold">Upkar Admin</h2>
        </div>

        {/* Menu - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {/* Dashboard */}
          <NavLink to="/admin/dashboard" className={linkClass}>
            <BarChart3 size={18} />
            Dashboard
          </NavLink>

          {/* Categories */}
          <NavLink to="/admin/categories" className={linkClass}>
            <LayoutGrid size={18} />
            Categories
          </NavLink>

          {/* Projects List */}
          <NavLink to="/admin/projects-list" className={linkClass}>
            <Building2 size={18} />
            Projects
          </NavLink>

          {/* Enquiries */}
          <NavLink to="/admin/enquiries" className={linkClass}>
            <ClipboardList size={18} />
            Enquiries
          </NavLink>
          <NavLink to="/admin/media" className={linkClass}>
            <ImageIcon size={18} />
            Media Library
          </NavLink>

          {/* HOME PAGE */}
          <button
            onClick={() => setOpenHome(!openHome)}
            className="w-full p-2 border rounded flex justify-between"
          >
            <span className="flex gap-2">
              <Home size={18} /> Home Page
            </span>
            <ChevronDown className={openHome ? 'rotate-180' : ''} />
          </button>

          {openHome && (
            <div className="ml-4 space-y-1 text-sm">
              <NavLink to="/admin/banner" className={linkClass}>
                Banner
              </NavLink>
              <NavLink to="/admin/vision" className={linkClass}>
                Vision & Mission
              </NavLink>
              <NavLink to="/admin/home-projects" className={linkClass}>
                Projects
              </NavLink>
              <NavLink to="/admin/certification" className={linkClass}>
                Certification
              </NavLink>
              <NavLink to="/admin/quotes" className={linkClass}>
                Quotes
              </NavLink>
              <NavLink to="/admin/qna" className={linkClass}>
                Q & A
              </NavLink>
              <NavLink to="/admin/awards" className={linkClass}>
                Awards
              </NavLink>
              <NavLink to="/admin/tree" className={linkClass}>
                Tree
              </NavLink>
            </div>
          )}

          {/* PROJECT PAGE */}
          <button
            onClick={() => setOpenProject(!openProject)}
            className="w-full p-2 border rounded flex justify-between"
          >
            <span className="flex gap-2">
              <Folder size={18} /> Project Page
            </span>
            <ChevronDown className={openProject ? 'rotate-180' : ''} />
          </button>

          {openProject && (
            <div className="ml-4 space-y-1 text-sm">
              <NavLink to="/admin/project-main" className={linkClass}>
                Project Main
              </NavLink>
              <NavLink to="/admin/feature" className={linkClass}>
                Feature
              </NavLink>
              <NavLink to="/admin/plot-layout" className={linkClass}>
                Plot Layout
              </NavLink>
              <NavLink to="/admin/amenity" className={linkClass}>
                Amenities
              </NavLink>
              <NavLink to="/admin/about-project" className={linkClass}>
                About Project
              </NavLink>
              <NavLink to="/admin/project-images" className={linkClass}>
                Project Images
              </NavLink>
            </div>
          )}

          {/* ABOUT PAGE */}
          <button
            onClick={() => setOpenAbout(!openAbout)}
            className="w-full p-2 border rounded flex justify-between"
          >
            <span className="flex gap-2">
              <Info size={18} /> About Page
            </span>
            <ChevronDown className={openAbout ? 'rotate-180' : ''} />
          </button>

          {openAbout && (
            <div className="ml-4 space-y-1 text-sm">
              <NavLink to="/admin/about-main" className={linkClass}>
                About Main
              </NavLink>
              <NavLink to="/admin/quote" className={linkClass}>
                Quote
              </NavLink>
              <NavLink to="/admin/team" className={linkClass}>
                Team
              </NavLink>
              <NavLink to="/admin/about-images" className={linkClass}>
                About Images
              </NavLink>
            </div>
          )}

          {/* EVENT */}
          <NavLink to="/admin/events" className={linkClass}>
            <Calendar size={18} />
            Events
          </NavLink>

          {/* CAREER */}
          <button
            onClick={() => setOpenCareer(!openCareer)}
            className="w-full p-2 border rounded flex justify-between"
          >
            <span className="flex gap-2">
              <Briefcase size={18} /> Career
            </span>
            <ChevronDown className={openCareer ? 'rotate-180' : ''} />
          </button>

          {openCareer && (
            <div className="ml-4 space-y-1 text-sm">
              <NavLink to="/admin/career-main" className={linkClass}>
                Career Main
              </NavLink>
              <NavLink to="/admin/why-join" className={linkClass}>
                Why Join
              </NavLink>
              <NavLink to="/admin/career-images" className={linkClass}>
                Career Images
              </NavLink>
            </div>
          )}

          {/* COMPLETED */}
          <button
            onClick={() => setOpenCompleted(!openCompleted)}
            className="w-full p-2 border rounded flex justify-between"
          >
            <span className="flex gap-2">
              <CheckCircle size={18} /> Completed
            </span>
            <ChevronDown className={openCompleted ? 'rotate-180' : ''} />
          </button>

          {openCompleted && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <NavLink to="/admin/completed-main" className={linkClass}>
                Completed Main
              </NavLink>
              <NavLink to="/admin/completed-values" className={linkClass}>
                Our Values
              </NavLink>
              <NavLink to="/admin/completed-projects" className={linkClass}>
                Project Lists
              </NavLink>
              <NavLink to="/admin/value-images" className={linkClass}>
                Value images
              </NavLink>
            </div>
          )}

          {/* UPCOMING */}
          <button
            onClick={() => setOpenUpcoming(!openUpcoming)}
            className="w-full p-2 border rounded flex justify-between"
          >
            <span className="flex gap-2">
              <Calendar size={18} /> Upcoming
            </span>
            <ChevronDown className={openUpcoming ? 'rotate-180' : ''} />
          </button>

          {openUpcoming && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <NavLink to="/admin/upcoming-main" className={linkClass}>
                Upcoming Main
              </NavLink>
              <NavLink to="/admin/upcoming-values" className={linkClass}>
                Our Values
              </NavLink>
              <NavLink to="/admin/upcoming-projects" className={linkClass}>
                Project Lists
              </NavLink>
              <NavLink to="/admin/value-images" className={linkClass}>
                Value images
              </NavLink>
            </div>
          )}

          {/* ONGOING */}
          <button
            onClick={() => setOpenOngoing(!openOngoing)}
            className="w-full p-2 border rounded flex justify-between"
          >
            <span className="flex gap-2">
              <Activity size={18} /> Ongoing
            </span>
            <ChevronDown className={openOngoing ? 'rotate-180' : ''} />
          </button>

          {openOngoing && (
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <NavLink to="/admin/ongoing-main" className={linkClass}>
                Ongoing Main
              </NavLink>
              <NavLink to="/admin/ongoing-values" className={linkClass}>
                Our Values
              </NavLink>
              <NavLink to="/admin/ongoing-projects" className={linkClass}>
                Project Lists
              </NavLink>
              <NavLink to="/admin/value-images" className={linkClass}>
                Value images
              </NavLink>
            </div>
          )}

          {/* BLOG */}
          <button
            onClick={() => setOpenBlog(!openBlog)}
            className="w-full p-2 border rounded flex justify-between"
          >
            <span className="flex gap-2">
              <FileText size={18} /> Blogs
            </span>
            <ChevronDown className={openBlog ? 'rotate-180' : ''} />
          </button>

          {openBlog && (
            <div className="ml-4 space-y-1 text-sm">
              <NavLink to="/admin/blogs" className={linkClass}>
                Blogs Main
              </NavLink>
              <NavLink to="/admin/popular-articles" className={linkClass}>
                Popular Articles
              </NavLink>
              <NavLink to="/admin/read-more" className={linkClass}>
                Read More
              </NavLink>
            </div>
          )}

          {/* SETTINGS */}
          <div className="flex items-center gap-3 p-2 border rounded">
            <Settings size={18} />
            Settings
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full mt-4 p-2 border text-red-600 hover:bg-red-600 hover:text-white rounded"
          >
            <LogOut className="inline mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[1000] md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
