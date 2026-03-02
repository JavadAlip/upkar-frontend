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
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-6">
        <div>
          <img
            src={Footerimg}
            alt="Upkar Logo"
            className="mb-4 max-w-[180px] object-contain"
          />

          <p className="text-1xl sm:text-1xl md:text-2xl lg:text-2xl font-bold leading-snug font-figtree text-white max-w-sm">
            Shaping a 50+ years legacy of quality & trust !
          </p>
        </div>

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

        <div>
          <h4 className="text-lg font-semibold mb-2">Cities</h4>
          <hr className="w-40  border-white mb-4" />
          <ul className="space-y-2 text-white text-base">
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

      <div className="flex justify-end mb-6">
        <img
          src={Footerimg2}
          alt="Upkar Logo"
          className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[140px] xl:w-[150px] object-contain"
        />
      </div>
      <div className="border-t border-gray-700 my-10"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src={Footerimg1}
          alt="Upkar Logo"
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] object-contain"
        />
        <p className="text-center text-sm sm:text-base md:text-lg font-light">
          Copyright © 2026, All rights reserved with{' '}
          <span className="font-bold">Upkar Group</span>
        </p>
      </div>
    </footer>
  );
});

export default Footer;
