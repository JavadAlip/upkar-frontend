import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import CmpltMain from "../../assets/CompletedPro1.png";

const CompletedMain = () => {
  return (
    <div className="w-full py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Completed Projects
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              The development of our ongoing gated community plots projects is happening at a very fast pace. We are happy to announce that two latest projects are under development. This section contains our latest ongoing projects in south Bangalore which are updated on a timely basis.
            </p>

            {/* Ask Enquiry Button */}
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-800 transition-all duration-300">
              Ask Enquiry
              <div className="bg-white text-black rounded-full p-2">
                <ArrowRight size={18} />
              </div>
            </button>
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
            </div>

            {/* Floating Contact Icons */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
              {/* Phone Icon */}
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Phone size={24} className="text-gray-800" />
              </button>

              {/* Email Icon */}
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Mail size={24} className="text-gray-800" />
              </button>

              {/* WhatsApp Icon */}
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <svg 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  fill="currentColor"
                  className="text-green-600"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedMain;
