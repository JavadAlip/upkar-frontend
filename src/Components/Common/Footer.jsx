// import React, { forwardRef } from 'react';
// import { Link } from 'react-router-dom';
// import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
// import Footerimg from '../../assets/Icons/FooterLogo.png';
// import Footerimg1 from '../../assets/Footer.png';
// import Footerimg2 from '../../assets/creda.png';

// const Footer = forwardRef((props, ref) => {
//   return (
//     <footer
//       ref={ref}
//       className="w-full bg-[#2D5C3A] text-white py-14 font-[Figtree]"
//     >
//       <div className="max-w-7xl mx-auto px-4 lg:px-10">
//         {/* All 6 sections in one row on md+: Logo+tagline | QL | QL1 | QL2 | Cities | Connect */}
//         <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-y-10 gap-x-3 md:gap-x-4">
//           {/* Col 1: Logo + tagline */}
//           {/* <div className="col-span-2 md:col-span-1">
//             <img
//               src={Footerimg}
//               alt="Upkar Logo"
//               className="mb-4 max-w-[180px] object-contain"
//             />
//             <p className="text-xl md:text-xl lg:text-2xl font-bold leading-snug text-white max-w-[200px]">
//               Shaping a 50+ years legacy of quality & trust
//             </p>
//           </div> */}
//           {/* Col 1: Logo + tagline */}
//           <div className="col-span-2 md:col-span-1">
//             <img
//               src={Footerimg}
//               alt="Upkar Logo"
//               className="mb-4 max-w-[180px] object-contain"
//             />
//             <p className="text-xl md:text-xl lg:text-2xl font-bold leading-snug text-white max-w-[200px]">
//               Shaping a 50+ years legacy of quality & trust
//             </p>
//           </div>

//           {/* Col 2: Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Know Us</h4>
//             <hr className="w-full border-white mb-4" />
//             <ul className="space-y-2 text-white text-sm">
//               <li>
//                 <Link
//                   to="/aboutus"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   About us
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/events"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Events
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/blogs"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Blogs
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/careers"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Col 3: Quick Links1 */}
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Projects</h4>
//             <hr className="w-full border-white mb-4" />
//             <ul className="space-y-2 text-white text-sm">
//               <li>
//                 <Link
//                   to="/upcoming-projects"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Upcoming
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/ongoing-projects"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Ongoing
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/completed-projects"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Completed
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Col 5: Cities */}
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Cities</h4>
//             <hr className="w-full border-white mb-4" />
//             <ul className="space-y-2 text-white text-sm">
//               <li>
//                 <Link
//                   to="/city-projects?city=bengaluru"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Projects in Bengaluru
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/city-projects?city=hosur"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Projects in Hosur
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Col 4: Quick Links2 */}
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Need To know</h4>
//             <hr className="w-full border-white mb-4" />
//             <ul className="space-y-2 text-white text-sm">
//               <li>
//                 <Link
//                   to="/privacy-policy"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/terms-and-conditions"
//                   className="hover:opacity-75 transition-opacity"
//                 >
//                   Terms & Conditions
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Col 6: Connect */}
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Connect</h4>
//             <hr className="w-full border-white mb-4" />
//             <div className="flex gap-3 text-white">
//               <a
//                 href="https://www.facebook.com/Upkarcompany/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:opacity-75 transition-opacity"
//               >
//                 <FaFacebookF size={20} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/upkar-developers/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:opacity-75 transition-opacity"
//               >
//                 <FaLinkedin size={20} />
//               </a>
//               <a
//                 href="https://x.com/upkardevelopers"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:opacity-75 transition-opacity"
//               >
//                 <FaXTwitter size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Creda logo */}
//         <div className="flex justify-end mt-8 mb-6">
//           <img
//             src={Footerimg2}
//             alt="Creda Logo"
//             className="w-[100px] sm:w-[130px] md:w-[140px] xl:w-[150px] object-contain"
//           />
//         </div>

//         <div className="border-t border-gray-700 my-10"></div>

//         <div className="flex flex-col items-center gap-4">
//           <img
//             src={Footerimg1}
//             alt="Upkar Footer"
//             className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] object-contain"
//           />
//           <p className="text-center text-sm md:text-base font-normal">
//             © Upkar Group. All Rights Reserved | Design and Developed by{' '}
//             <a
//               href="https://seekneo.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-normal hover:opacity-75"
//             >
//               Seekneo
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// });

// export default Footer;

import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Footerimg from '../../assets/Icons/FooterLogo01.png';
import Footerimg1 from '../../assets/Footer.png';
import Footerimg2 from '../../assets/creda.png';

const HoverLink = ({ to, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none',
        opacity: hover ? 0.75 : 1,
        transition: 'opacity 0.3s ease',
      }}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          bottom: -2,
          height: '2px',
          width: hover ? '100%' : '0%',
          backgroundColor: 'white',
          transition: 'width 0.3s ease',
        }}
      />
    </Link>
  );
};

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="w-full bg-[#2D5C3A] text-white py-14 font-[Figtree]"
    >
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-y-10 gap-x-3 md:gap-x-4">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            {/* <img
              src={Footerimg}
              alt="Upkar Logo"
              className="mb-4 max-w-[180px]"
            /> */}
            <img
              src={Footerimg}
              alt="Upkar Logo"
              className="mb-4 h-32 w-auto object-contain -ml-1"
            />
            <p className="text-xl md:text-xl lg:text-2xl font-bold max-w-[200px]">
              Shaping a 50+ years legacy of quality & trust
            </p>
          </div>

          {/* Know Us */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Know Us</h4>
            <hr className="w-full border-white mb-4" />
            <ul className="space-y-2 text-sm">
              <li>
                <HoverLink to="/aboutus">About us</HoverLink>
              </li>
              <li>
                <HoverLink to="/events">Events</HoverLink>
              </li>
              <li>
                <HoverLink to="/blogs">Blogs</HoverLink>
              </li>
              <li>
                <HoverLink to="/careers">Careers</HoverLink>
              </li>
              <li>
                <HoverLink to="/contact">Contact Us</HoverLink>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Projects</h4>
            <hr className="w-full border-white mb-4" />
            <ul className="space-y-2 text-sm">
              <li>
                <HoverLink to="/upcoming-projects">Upcoming</HoverLink>
              </li>
              <li>
                <HoverLink to="/ongoing-projects">Ongoing</HoverLink>
              </li>
              <li>
                <HoverLink to="/completed-projects">Completed</HoverLink>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Cities</h4>
            <hr className="w-full border-white mb-4" />
            <ul className="space-y-2 text-sm">
              <li>
                <HoverLink to="/city-projects?city=bengaluru">
                  Projects in Bengaluru
                </HoverLink>
              </li>
              <li>
                <HoverLink to="/city-projects?city=hosur">
                  Projects in Hosur
                </HoverLink>
              </li>
            </ul>
          </div>

          {/* Need to Know */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Need To Know</h4>
            <hr className="w-full border-white mb-4" />
            <ul className="space-y-2 text-sm">
              <li>
                <HoverLink to="/privacy-policy">Privacy Policy</HoverLink>
              </li>
              <li>
                <HoverLink to="/terms-and-conditions">
                  Terms & Conditions
                </HoverLink>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <hr className="w-full border-white mb-4" />
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Upkarcompany/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/upkar-developers/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://x.com/upkardevelopers"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Creda */}
        <div className="flex justify-end mt-8 mb-6">
          <img src={Footerimg2} alt="Creda Logo" className="w-[120px]" />
        </div>

        <div className="border-t border-gray-700 my-10"></div>

        <div className="flex flex-col items-center gap-4">
          <img src={Footerimg1} alt="Footer" className="w-full max-w-[60%]" />
          <p className="text-center text-sm">
            © Upkar Group. All Rights Reserved | Design and Developed by{' '}
            <a href="https://seekneo.com/" target="_blank" rel="noreferrer">
              Seekneo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
