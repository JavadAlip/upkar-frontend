import React from 'react';
import { ArrowRight } from 'lucide-react';
import contactBtn from "../../assets/Icons/contactBtn.png";

const ContactUs = () => {
  return (
    <div className="w-full bg-white py-16 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-8">
          <span
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: 300, // light
              fontSize: '48px',
              color: '#000000',
              display: 'block',
              lineHeight: '56px', 
            }}
          >
            Ready to Find Your
          </span>
          <span
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: 700, 
              fontSize: '48px',
              color: '#000000',
              display: 'block',
              lineHeight: '56px',
            }}
          >
            Dream Property?
          </span>
        </h2>


        <div className="flex justify-center">
          {/* <button className="bg-black text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg">
            Contact us
            <div className="bg-white text-black rounded-full p-2 flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </button> */}
          <div className="mt-4 inline-block">
            <img
              src={contactBtn}
              alt="Contact Us"
              className="w-44 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
