import React from 'react';
import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import Footerimg from "../../assets/Footer.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left - Description */}
          <div className="md:col-span-1">
            <p
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 300, // light
                fontSize: '24px',
                color: '#FFFFFF',
                lineHeight: '32px',
              }}
            >
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
            <ul className="space-y-2" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '17px', color: '#FFFFFF' }}>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ongoing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Upcoming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Completed
                </a>
              </li>
            </ul>
          </div>


          {/* Right - Other Links */}
          <div className="md:col-span-1">
            <ul
              className="space-y-2"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '17px', color: '#FFFFFF' }}
            >
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section - Centered */}
        <div className="pt-8 flex flex-col items-center gap-4">
          {/* Copyright */}
          <p className="text-center">
            <span
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 300, // light
                fontSize: '17px',
                color: '#FFFFFF',
              }}
            >
              All Rights Reserved 2025 |{' '}
            </span>
            <span
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 700, // bold
                fontSize: '17px',
                color: '#FFFFFF',
              }}
            >
              Upkar groups
            </span>
          </p>


          {/* Logo Image */}
          <img src={Footerimg} alt="Upkar Logo" className="w-auto h-auto  object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
