import React from "react";
import { ArrowRight } from "lucide-react";
import BlogMain1 from "../../assets/CompletedPro1.png";
import addEnq from "../../assets/Icons/fullArticle.png";
import Phone from "../../assets/Icons/Phone.png";
import Mail from "../../assets/Icons/mail.png";
import Whatsapp from "../../assets/Icons/whatsapp.png";

const BlogMain = () => {
  return (
    <div className="w-full py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <div className="">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black text-center font-figtree mb-8 sm:mb-12 md:mb-16 lg:mb-[100px] text-left">
              <span className="font-semibold">Blogs</span> to read!
            </h2>

            <p className="font-figtree font-medium text-base sm:text-lg md:text-xl lg:text-[24px] text-primaryText text-center leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-6 sm:mb-8 lg:mb-[40px]">
              From Plots to Palaces: Your Complete Construction Journey with
              Upkar Developers
            </p>

            {/* Description */}
            <p className="font-figtree font-extralight text-base sm:text-lg md:text-xl lg:text-[24px] text-primaryText text-center leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-6 sm:mb-8 lg:mb-[40px]">
              Choosing the right partner for your construction project is the
              most critical decision you'll make. At Upkar Developers, we don't
              just sell plots; we build dreams. Our integrated approach ensures
              a seamless journey from the moment you select your land to the day
              you receive the keys to your new home. This is the Upkar promise:
              a commitment to quality, transparency, and timely delivery
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
                src={BlogMain1}
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

export default BlogMain;
