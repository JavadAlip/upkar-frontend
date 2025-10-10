import React from 'react';
import { ArrowRight } from 'lucide-react';
import CmpltMain from "../../assets/CompletedPro1.png";
import addEnq from "../../assets/Icons/addEnq.png";
import Phone from "../../assets/Icons/Phone.png";
import Mail from "../../assets/Icons/mail.png";
import Whatsapp from "../../assets/Icons/whatsapp.png";

const CompletedMain = () => {
  return (
    <div className="w-full py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Section - Content */}
          <div className="">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black font-figtree mb-[100px] text-left">
              Completed <span className="font-semibold">Projects</span>
            </h2>

            {/* Description */}
            <p className="font-figtree font-extralight text-[24px] text-primaryText text-center leading-[1.2] mb-[40px]" >
              The development of our ongoing gated community plots projects is happening at a very fast pace. We are happy to announce that two latest projects are under development. This section contains our latest ongoing projects in south Bangalore which are updated on a timely basis.
            </p>

            {/* Ask Enquiry Button */}
            <div className="flex justify-center lg:justify-center">
              <img
                src={addEnq}
                alt="Ask Enquiry"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>

          </div>

          {/* Right Section - Image with Contact Icons */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={CmpltMain}
                alt="Completed Projects"
                className="w-full h-auto object-cover"
              />

              {/* Contact Icons - Top Right */}
              <div className="absolute top-24 -right-4 bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-6">
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Phone} alt="Phone" className="w-6 h-6" />
                </button>
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Mail} alt="Mail" className="w-6 h-6" />
                </button>
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Floating Contact Icons - Right Side (kept for reference, can be removed) */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 hidden">
              {/* Phone Icon */}
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <img src={Phone} alt="Phone" className="w-6 h-6" />
              </button>

              {/* Email Icon */}
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <img src={Mail} alt="Email" className="w-6 h-6" />
              </button>

              {/* WhatsApp Icon */}
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedMain;