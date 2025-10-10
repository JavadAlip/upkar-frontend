import React from 'react';
import { TreeDeciduous } from 'lucide-react';
import Home1 from "../../assets/homeMain.png";
import UbkarHabit from "../../assets/UbkarHabit.png";
import AboveIcon from "../../assets/aboveIcon.png";
import Phone from "../../assets/Icons/Phone.png";
import Mail from "../../assets/Icons/mail.png";
import Whatsapp from "../../assets/Icons/whatsapp.png";
import Connect from "../../assets/Icons/connect.png";


const HomeMain = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-8 space-y-16">

      <div className="relative w-full max-w-6xl group cursor-pointer mx-auto">
        <div className="relative overflow-hidden rounded-xl transition-all duration-300">
          <img
            src={Home1}
            alt="Home Main"
            className="w-full h-auto transition-transform duration-300"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-24">

            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 sm:mb-6"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              <span className="font-semibold">Experience Life</span>
              <br />
              <span className="font-bold">Elevated</span>
            </h1>

            <p
              className="text-white max-w-md sm:max-w-lg md:max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl mb-6 hidden sm:block"
              style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}
            >
              <span>Upkar Developers is a leading real estate</span>
              <br />
              company in Bangalore since 1974.
            </p>

            <div className="flex items-start">
              <img
                src={Connect}
                alt="Connect"
                className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-8 hidden sm:block">
            <div className="bg-white px-4 sm:px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
              <p className="text-black text-[10px] sm:text-[12px] md:text-[14px] font-normal">
                RERA & BMRDA Approved Projects
              </p>
              <img src={AboveIcon} alt="Above Icon" className="w-6 sm:w-8 md:w-10 h-auto" />
            </div>
          </div>

          <div className="absolute top-6 sm:top-11 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg flex flex-col gap-3 sm:gap-6">
            <button className="hover:scale-110 transition-transform duration-300">
              <img src={Phone} alt="Phone" className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button className="hover:scale-110 transition-transform duration-300">
              <img src={Mail} alt="Mail" className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button className="hover:scale-110 transition-transform duration-300">
              <img src={Whatsapp} alt="WhatsApp" className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-0 mx-auto">
        {/* Heading with Tree Icon */}
        <div className="text-center mb-6 sm:mb-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-snug sm:leading-normal md:leading-relaxed lg:leading-[1.3]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            <span className="font-medium">Shaping a 50 years legacy of</span>
            <br />
            <span className="font-semibold">
              quality{" "}
              <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full mx-2 align-middle">
                <TreeDeciduous className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-green-600" />
              </span>
              trust
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-8 sm:mb-12">
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#050F27] font-[Figtree] leading-snug sm:leading-normal"
          >
            <span className="font-bold">Upkar Developers</span> is a leading real estate company in Bangalore since 1974
            <br className="hidden sm:block" />
            who contributes its precious little to the growth and glory of the city.
          </p>
        </div>

        {/* Upkar Habitat Image */}
        <div className="relative w-full max-w-2xl sm:max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img
            src={UbkarHabit}
            alt="Upkar Habitat"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;