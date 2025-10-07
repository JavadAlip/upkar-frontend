import React from 'react';
import { ArrowRight, TreeDeciduous } from 'lucide-react';
import Home1 from "../../assets/homeMain.png";
import UbkarHabit from "../../assets/UbkarHabit.png";

const HomeMain = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-8 space-y-16">
      {/* Hero Section */}
      <div className="relative w-full max-w-6xl group cursor-pointer">
        {/* Image with hover effect */}
        <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-2xl">
          <img 
            src={Home1} 
            alt="Home Main" 
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105" 
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            {/* Main Heading */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Experience Life<br />Elevated
            </h1>
            
            {/* Subheading */}
            <p className="text-white text-lg md:text-xl mb-8 max-w-xl">
              Upkar Developers is a leading real estate company in Bangalore since 1974.
            </p>
            
            {/* Connect Us Button */}
            <div className="flex items-start">
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Connect us !
                <div className="bg-black text-white rounded-full p-2">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
          
          {/* RERA Badge - Bottom Right */}
          <div className="absolute bottom-8 right-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="text-black text-sm font-semibold">
                RERA & BMRDA Approved Projects
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Shadow Effect on Hover */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 h-8 bg-black/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Legacy Section */}
      <div className="w-full max-w-6xl">
        {/* Heading with Tree Icon */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Shaping a 50 years legacy of
            <br />
            quality{" "}
            <span className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full mx-2">
              <TreeDeciduous className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
            </span>{" "}
            trust.
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-700">
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