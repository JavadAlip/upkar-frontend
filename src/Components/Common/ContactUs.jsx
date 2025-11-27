import React from "react";
import contactBtn from "../../assets/Icons/contactBtn.png";

const ContactUs = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-6 sm:mb-8">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight font-light font-['Noto_Serif_JP']">
            Ready to Find Your
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight font-bold font-['Noto_Serif_JP']">
            Dream Property?
          </span>
        </h2>

        <div className="flex justify-center">
          <div className="mt-4 inline-block">
            <img
              src={contactBtn}
              alt="Contact Us"
              className="w-36 sm:w-40 md:w-48 lg:w-56 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
