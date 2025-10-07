import React from 'react';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import About1 from "../../assets/AboutMain1.png";
import About2 from "../../assets/AboutMain2.png";
import About3 from "../../assets/AboutMain3.png";

const MainSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6 leading-tight">
              Shaping a 50+ years legacy of<br />
              <span className="font-bold">quality & trust !</span>
            </h2>
            
            <button className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors mb-8">
              Explore Projects
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="rounded-2xl overflow-hidden relative h-48"
                style={{
                  backgroundImage: `url(${About2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 text-white">
                  <div className="text-3xl font-bold mb-1">30,000</div>
                  <div className="text-sm">Upcoming plots</div>
                </div>
              </div>

              <div 
                className="rounded-2xl overflow-hidden relative h-48"
                style={{
                  backgroundImage: `url(${About3})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-6 text-white">
                  <div className="text-3xl font-bold mb-1">1100+</div>
                  <div className="text-sm">Acres of Land Bank</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image with Contact Icons */}
          <div className="relative">
            <img 
              src={About1}
              alt="Property"
              className="w-full rounded-3xl shadow-lg"
            />
            
            {/* Floating Contact Icons */}
            <div className="absolute top-8 right-8 flex flex-col gap-3">
              <button className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Phone className="w-5 h-5 text-gray-800" />
              </button>
              <button className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Mail className="w-5 h-5 text-gray-800" />
              </button>
              <button className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <MessageCircle className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-4">
              Upkar Developers, a leading real estate company in Bangalore, has an extraordinary legacy spanning over 50 years since its foundation in 1974. Started by <span className="font-semibold">Mr. K.H. Khan</span>, the company has been a pioneering force behind the city's rapidly changing skyline.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our clear vision is to offer innovative real estate services and create an environment of peace, tranquility, and comfort. We have successfully completed <span className="font-semibold">34 projects</span>, bringing the joy of housing to over <span className="font-semibold">36,000 families</span> across Bangalore.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upkar's portfolio includes gated communities, urban townships, villas, apartments, and residential plots. Our projects are conceptualized by leading architects and engineers. We are recognized for our uncompromising business ethics, timeless values, and customer-centric approach, which ensure timely delivery and state-of-art infrastructure. We look forward to establishing our presence in cities across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
