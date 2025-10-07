import React from 'react';
import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a1628] text-white py-12 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left - Description */}
          <div className="md:col-span-1">
            <p className="text-gray-300 text-sm leading-relaxed">
              Stay connected, explore opportunities, and invest with confidence. Your real estate success starts here.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle - About Us Links */}
          <div className="md:col-span-1">
            {/* <h3 className="text-white font-semibold mb-4">About us</h3> */}
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ongoing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Upcoming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Completed</a></li>
            </ul>
          </div>

          {/* Right - Other Links */}
          <div className="md:col-span-1">
            {/* <h3 className="text-white font-semibold mb-4">Commercial</h3> */}
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            All Rights Reserved 2025 | <span className="font-semibold">Upkar groups</span>
          </p>

          {/* Logo/Brand Name - Replace with actual logo later */}
          <div className="text-4xl md:text-5xl font-bold text-gray-700">
            Upkar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;