// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import navbarLast from "../../assets/navbarLast.png";

// const CmpltNavbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const staticLinks = [
//     { name: "Commercial", path: "/" },
//     { name: "Events", path: "/events" },
//     { name: "Blogs", path: "/blogs" },
//     { name: "Careers", path: "/careers" },
//   ];

//   return (
//     <nav className="bg-white shadow-md p-4 flex items-center justify-between relative font-figtree">
//       <div className="flex items-center">
//         <Link to="/">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-16 w-auto object-contain cursor-pointer"
//           />
//         </Link>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center">
//         <li>
//           <Link
//             to="/aboutus"
//             className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
//           >
//             About us
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/ongoing-projects"
//             className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
//           >
//             Ongoing
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/upcoming-projects"
//             className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
//           >
//             Upcoming
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/completed-projects"
//             className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
//           >
//             Completed
//           </Link>
//         </li>

//         {staticLinks.map((item) => (
//           <li key={item.name}>
//             <Link
//               to={item.path}
//               className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}

//         <li>
//           <Link
//             to="/"
//             className="bg-black text-white px-5 py-2 rounded-2xl hover:bg-gray-900 transition-all duration-300 whitespace-nowrap"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>

//       <div className="hidden md:block">
//         <img
//           src={navbarLast}
//           alt="Credai Logo"
//           className="h-8 w-auto object-contain cursor-pointer"
//         />
//       </div>

//       <button
//         className="md:hidden text-gray-700 focus:outline-none"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//       </button>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 z-50 md:hidden">
//           <ul className="flex flex-col space-y-2 p-4">
//             <li>
//               <Link
//                 to="/aboutus"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/ongoing-projects"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Ongoing
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/upcoming-projects"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Upcoming
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/completed-projects"
//                 className="block text-gray-700 hover:text-blue-600 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Completed
//               </Link>
//             </li>

//             {/* Static Links */}
//             {staticLinks.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.path}
//                   className="block text-gray-700 hover:text-blue-600 transition-colors"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}

//             <li>
//               <Link
//                 to="/"
//                 className="block text-white bg-black text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-300"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default CmpltNavbar;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
// import navbarLast from '../../assets/navbarLast.png';

const CmpltNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const staticLinks = [
    // { name: 'Commercial', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    // <nav className="bg-white shadow-md p-4 flex items-center justify-between relative font-figtree">
    <nav className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-md shadow-md p-4 flex items-center justify-between z-50 font-figtree">
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
            className={`transition-colors duration-300 whitespace-nowrap ${
              isActive('/aboutus')
                ? 'text-[#2D5C3A] font-medium'
                : 'hover:text-[#2D5C3A] text-black '
            }`}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/ongoing-projects"
            className={`transition-colors duration-300 whitespace-nowrap ${
              isActive('/ongoing-projects')
                ? 'text-[#2D5C3A] font-medium'
                : 'hover:text-[#2D5C3A] text-black '
            }`}
          >
            Ongoing
          </Link>
        </li>
        <li>
          <Link
            to="/upcoming-projects"
            className={`transition-colors duration-300 whitespace-nowrap ${
              isActive('/upcoming-projects')
                ? 'text-[#2D5C3A] font-medium'
                : 'hover:text-[#2D5C3A] text-black '
            }`}
          >
            Upcoming
          </Link>
        </li>
        <li>
          <Link
            to="/completed-projects"
            className={`transition-colors duration-300 whitespace-nowrap ${
              isActive('/completed-projects')
                ? 'text-[#2D5C3A] font-medium'
                : 'hover:text-[#2D5C3A] text-black '
            }`}
          >
            Completed
          </Link>
        </li>

        {/* {staticLinks.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </Link>
          </li>
        ))} */}
        {staticLinks.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`transition-colors duration-300 whitespace-nowrap ${
                isActive(item.path)
                  ? 'text-[#2D5C3A] font-medium'
                  : 'hover:text-[#2D5C3A] text-black'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}

        <li>
          <Link
            to="/"
            className={`transition-colors duration-300 whitespace-nowrap ${
              isActive('/')
                ? 'text-[#2D5C3A] font-medium'
                : 'hover:text-[#2D5C3A] text-black '
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* <div className="hidden md:block">
        <img
          src={navbarLast}
          alt="Credai Logo"
          className="h-8 w-auto object-contain cursor-pointer"
        />
      </div> */}

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
                className="block text-black hover:text-[#2D5C3A] transition-colors"
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
              <Link
                to="/completed-projects"
                className="block text-black hover:text-[#2D5C3A] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Completed
              </Link>
            </li>

            {/* Static Links */}
            {/* {staticLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))} */}
            {staticLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`block transition-colors ${
                    isActive(item.path)
                      ? 'text-[#2D5C3A] font-medium'
                      : 'hover:text-[#2D5C3A] text-black'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/"
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
