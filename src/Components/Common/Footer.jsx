// import React, { forwardRef } from 'react';
// import Footerimg from '../../assets/Footer.png';
// import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';

// const Footer = forwardRef((props, ref) => {
//   return (
//     <footer
//       ref={ref}
//       className="w-full bg-[#000000] text-white py-10 lg:py-12 px-4 lg:px-10 font-[Figtree]"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//         <div className="md:col-span-1 flex flex-col">
//           {/* <p className="font-[Figtree] text-[20px] font-light leading-[1] text-white">
//             Stay connected, explore opportunities,
//             <br />
//             and invest with confidence. Your real
//             <br />
//             estate success starts here.
//           </p> */}
//           <div className="flex gap-4 mt-6">
//             <a href="#" className="hover:text-gray-300 transition-colors">
//               <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
//             </a>
//             <a href="#" className="hover:text-gray-300 transition-colors">
//               <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
//             </a>
//             <a href="#" className="hover:text-gray-300 transition-colors">
//               <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
//             </a>
//             <a href="#" className="hover:text-gray-300 transition-colors">
//               <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
//             </a>
//           </div>
//         </div>

//         <div className="md:col-span-1 md:ml-20 lg:ml-52">
//           <ul className="space-y-2 font-[figtree] font-normal text-[17px]">
//             <li>
//               <Link
//                 to="/aboutus"
//                 className="hover:text-gray-300 transition-colors"
//               >
//                 About us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/ongoing-projects"
//                 className="hover:text-gray-300 transition-colors"
//               >
//                 Ongoing
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/upcoming-projects"
//                 className="hover:text-gray-300 transition-colors"
//               >
//                 Upcoming
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/completed-projects"
//                 className="hover:text-gray-300 transition-colors"
//               >
//                 Completed
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="md:col-span-1 lg:ml-11">
//           <ul className="space-y-2 inline-block text-left font-[Figtree] text-[17px] text-white">
//             <li>
//               <Link
//                 to="/"
//                 className="hover:text-gray-300 transition-colors font-normal"
//               >
//                 Commercial
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/events"
//                 className="hover:text-gray-300 transition-colors font-normal"
//               >
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/blogs"
//                 className="hover:text-gray-300 transition-colors font-normal"
//               >
//                 Blogs
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/careers"
//                 className="hover:text-gray-300 transition-colors font-normal"
//               >
//                 Careers
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="pt-8 flex flex-col items-center gap-8 lg:gap-12 w-full">
//         <p className="text-center text-sm sm:text-base md:text-lg font-light">
//           All Rights Reserved 2026 |{' '}
//           <span className="font-bold">Upkar Group</span>
//         </p>
//         <img
//           src={Footerimg}
//           alt="Upkar Logo"
//           className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] object-contain"
//         />
//       </div>
//     </footer>
//   );
// });

// export default Footer;

//new structure
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Footerimg from '../../assets/Icons/FooterLogo.jpeg';
import Footerimg1 from '../../assets/Footer.png';
import Footerimg2 from '../../assets/navbarLast.png';

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="w-full bg-black text-white px-4 sm:px-8 lg:px-20 py-14 font-[Figtree]"
    >
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-6">
        {/* LEFT LOGO + TEXT (MORE SPACE) */}
        <div>
          <img
            src={Footerimg}
            alt="Upkar Logo"
            className="mb-4 max-w-[180px] object-contain"
          />

          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug font-figtree text-white max-w-sm">
            Shaping a 50+ years legacy of quality & trust !
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="lg:ml-12">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <hr className="w-24  border-white mb-4" />
          <ul className="space-y-2 text-white text-base">
            <li>
              <Link to="/aboutus" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/upcoming-projects" className="hover:text-white">
                Upcoming
              </Link>
            </li>
            <li>
              <Link to="/ongoing-projects" className="hover:text-white">
                Ongoing
              </Link>
            </li>

            <li>
              <Link to="/completed-projects" className="hover:text-white">
                Completed
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-white">
                Events
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Cities</h4>
          <hr className="w-40  border-white mb-4" />
          <ul className="space-y-2 text-white text-base">
            {/* <li>
              <Link to="/" className="hover:text-white">
                Commercial
              </Link>
            </li> */}

            <li>
              <Link to="/" className="hover:text-white">
                Projects in Bengaluru
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Projects in Hosur
              </Link>
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <hr className="w-36  border-white mb-4" />
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-white">
              <FaWhatsapp size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="hover:text-white">
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE LOGO ABOVE DIVIDER */}
      <div className="flex justify-end mb-6">
        <img
          src={Footerimg2}
          alt="Upkar Logo"
          className="
      w-[160px]
      sm:w-[220px]
      md:w-[300px]
      lg:w-[220px]
      xl:w-[220px]
      2xl:w-[220px]
      object-contain
    "
        />
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col items-center gap-4">
        {/* TEXT BELOW LOGO */}
        <p className="text-center text-sm sm:text-base md:text-lg font-light">
          Copyright © 2026, All rights reserved with{' '}
          <span className="font-bold">Upkar Group</span>
        </p>
        {/* CENTER LOGO */}
        <img
          src={Footerimg1}
          alt="Upkar Logo"
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] object-contain"
        />
      </div>
    </footer>
  );
});

export default Footer;
