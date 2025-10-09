import React from 'react';
import { ArrowRight, TreeDeciduous } from 'lucide-react';
import Home1 from "../../assets/homeMain.png";
import UbkarHabit from "../../assets/UbkarHabit.png";
import AboveIcon from "../../assets/aboveIcon.png";
import Phone from "../../assets/Icons/Phone.png";
import Mail from "../../assets/Icons/mail.png";
import Whatsapp from "../../assets/Icons/whatsapp.png";
import Connect from "../../assets/Icons/connect.png";
import rfra from "../../assets/Icons/rfra.png";
// import Tree from "../../assets/Icons/Tree.png";

const HomeMain = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-8 space-y-16">
      {/* Hero Section */}
      <div className="relative w-full max-w-6xl group cursor-pointer">
        {/* Image with hover effect */}
        <div className="relative overflow-hidden rounded-lg transition-all duration-300 ">
          <img
            src={Home1}
            alt="Home Main"
            className="w-full h-auto transition-transform duration-300 "
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col pt-80 px-8 md:px-16">
            {/* Main Heading */}
            <h1 className="text-white text-5xl lg:text-[64px] mb-6 " style={{ fontFamily: "'Figtree', sans-serif" }}>
              <span className="font-semibold">Experience Life</span>
              <br />
              <span className="font-bold">Elevated</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-white mb-4 max-w-xl"
              style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400, fontSize: '24px' }}
            >
              <span>Upkar Developers is a leading real estate</span>
              <br />
              company in Bangalore since 1974.
            </p>



            {/* Connect Us Button */}
            {/* <div className="flex items-start">
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-[16px] flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Connect us !
                <div className="bg-black text-white rounded-full p-2">
                  <ArrowRight size={26} />
                </div>
              </button>
            </div> */}
            <div className="flex items-start">
              <img
                src={Connect}
                alt="Connect"
                className="w-52 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>

          </div>

          {/* RERA Badge - Bottom Right */}
          <div className="absolute bottom-14 right-8">
            <div className="bg-white px-6 py-2 rounded-full  shadow-lg flex items-center gap-2">
              <p className="text-black text-[13px] font-normal">
                RERA & BMRDA Approved Projects
              </p>
              <img src={AboveIcon} alt="Above Icon" className="w-10 h-6" />
            </div>
          </div>

          {/* Contact Icons - Top Right Corner (Half Outside) */}
          <div className="absolute top-11 -right-4 bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-6">
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

        {/* Bottom Shadow Effect on Hover */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 h-8 bg-black/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Legacy Section */}
      <div className="w-full max-w-6xl">
        {/* Heading with Tree Icon */}
        <div className="text-center mb-8">
          <h2
            className="leading-tight"
            style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "64px" }}
          >
            <span className="font-medium">Shaping a 50 years legacy of</span>
            <br />
            <span className="font-semibold">
              quality{" "}
              <span className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-2 align-middle">
                <TreeDeciduous className="w-10 h-10 text-green-600" />
              </span>
              trust
            </span>
          </h2>
        </div>

        {/* <div className="text-center mb-8">
          <h2
            className="leading-[0.95]"
            style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "64px" }}
          >
            <span className="font-light block">Shaping a 50 years legacy of</span>
            <span className="font-medium inline-flex items-end justify-center gap-4 -mt-4">
              <span>quality</span>
              <img
                src={Tree}
                alt="Tree Icon"
                className="w-[180px] h-[180px] object-contain relative top-6"
              />
              <span>trust.</span>
            </span>
          </h2>
        </div>
 */}


        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-[24px] text-[#050F27] font-[Figtree]" style={{lineHeight: '1.2'}}>
            <span className="font-bold">Upkar Developers</span> is a leading real estate company in Bangalore since 1974
            <br />
            who contributes its precious little to the growth and glory of the city.
          </p>
        </div>


        {/* Upkar Habitat Image */}
        <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img
            src={UbkarHabit}
            alt="Upkar Habitat"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;