import React from 'react';
import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import Footerimg from "../../assets/Footer.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050F27] text-white py-10 lg:py-12 px-4 lg:px-10 font-[Figtree]">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

        {/* Left - Description */}
        <div className="md:col-span-1 flex flex-col">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white">
            Stay connected, explore opportunities, and invest with confidence.
            Your real estate success starts here.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Middle - About Us Links */}
        <div className="md:col-span-1">
          <ul className="space-y-2">
            {["About us", "Ongoing", "Upcoming", "Completed"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-gray-300 transition-colors text-sm sm:text-base md:text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Other Links */}
        <div className="md:col-span-1">
          <ul className="space-y-2">
            {["Commercial", "Events", "Blogs", "Careers"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-gray-300 transition-colors text-sm sm:text-base md:text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="pt-8 flex flex-col items-center gap-8 lg:gap-12 w-full">
        <p className="text-center text-sm sm:text-base md:text-lg font-light">
          All Rights Reserved 2025 | <span className="font-bold">Upkar Groups</span>
        </p>

        <img src={Footerimg} alt="Upkar Logo"  className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] object-contain" />
      </div>

    </footer>
  );
};

export default Footer;
