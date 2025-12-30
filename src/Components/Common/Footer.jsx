import React, { forwardRef } from 'react';
import Footerimg from '../../assets/Footer.png';
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="w-full bg-[#050F27] text-white py-10 lg:py-12 px-4 lg:px-10 font-[Figtree]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1 flex flex-col">
          <p className="font-[Figtree] text-[20px] font-light leading-[1] text-white">
            Stay connected, explore opportunities,
            <br />
            and invest with confidence. Your real
            <br />
            estate success starts here.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        <div className="md:col-span-1 md:ml-20 lg:ml-52">
          <ul className="space-y-2 font-[figtree] font-normal text-[17px]">
            <li>
              <Link
                to="/aboutus"
                className="hover:text-gray-300 transition-colors"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/ongoing-projects"
                className="hover:text-gray-300 transition-colors"
              >
                Ongoing
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming-projects"
                className="hover:text-gray-300 transition-colors"
              >
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                to="/completed-projects"
                className="hover:text-gray-300 transition-colors"
              >
                Completed
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1 lg:ml-11">
          <ul className="space-y-2 inline-block text-left font-[Figtree] text-[17px] text-white">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                Commercial
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 flex flex-col items-center gap-8 lg:gap-12 w-full">
        <p className="text-center text-sm sm:text-base md:text-lg font-light">
          All Rights Reserved 2025 |{' '}
          <span className="font-bold">Upkar Groups</span>
        </p>
        <img
          src={Footerimg}
          alt="Upkar Logo"
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] object-contain"
        />
      </div>
    </footer>
  );
});

export default Footer;
