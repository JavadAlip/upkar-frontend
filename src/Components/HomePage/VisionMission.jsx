import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Vision1 from "../../assets/vision1.png";
import Vision3 from "../../assets/Vision3.png";
import Map from "../../assets/map.png";

const VisionMission = () => {
  const [missionOpen, setMissionOpen] = useState(false);
  const [visionOpen, setVisionOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Section - Vision & Mission */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="mb-8 text-[48px]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              <span className="font-bold">Vision </span>
              <span className="font-light">& Mission</span>
            </h2>


            {/* Description */}
            <p className="text-[#050F27] text-[24px] font-[Figtree] font-light leading-relaxed">
              Our core values are centered on integrity and trust, upholding transparency and ethical practices in every interaction. We are driven by a commitment to quality and craftsmanship.
            </p>


            {/* Our Mission Accordion */}
            <div className="border-t border-gray-300 pt-6">
              <button
                onClick={() => setMissionOpen(!missionOpen)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-[#050F27] text-[24px] font-[Figtree] font-bold">Our Mission</h3>
                {missionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {missionOpen && (
                <p className="mt-4 text-[#050F27] text-[24px] font-[Figtree] font-light leading-relaxed">
                  It is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              )}
            </div>

            {/* Our Vision Accordion */}
            <div className="border-t border-gray-300 pt-6">
              <button
                onClick={() => setVisionOpen(!visionOpen)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-[#050F27] text-[24px] font-[Figtree] font-bold">Our Vision</h3>
                {visionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {visionOpen && (
                <p className="mt-4 text-[#050F27] text-[24px] font-[Figtree] font-light leading-relaxed">
                  To be the most trusted and innovative real estate developer, creating sustainable communities that enhance the quality of life for generations to come.
                </p>
              )}
            </div>

            {/* Know More Button */}
            <button
              className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 mt-8"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '20px' }}
            >
              Know more about us
              <div className="bg-white text-black rounded-full p-1">
                <ArrowRight size={18} />
              </div>
            </button>

          </div>


          {/* Right Section - Image with Stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={Vision1}
                alt="Upkar Development"
                className="w-full h-96 object-cover"
              />
              {/* Stats Overlay Image */}
              <div className="absolute -bottom-0 -right-0">
                <img
                  src={Vision3}
                  alt="Years of Experience"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-300">
          <div className="text-center">
            <div
              className="text-[#1A2235] mb-2"
              style={{ fontFamily: "'Noto Serif JP', sans-serif", fontWeight: 700, fontSize: '48px' }}
            >
              50+
            </div>
            <div
              className="text-[#1A2235]"
              style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400, fontSize: '16px' }}
            >
              Years Experience
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-[#1A2235] mb-2"
              style={{ fontFamily: "'Noto Serif JP', sans-serif", fontWeight: 700, fontSize: '48px' }}
            >
              1500+
            </div>
            <div
              className="text-[#1A2235]"
              style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400, fontSize: '16px' }}
            >
              Happy Families
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-[#1A2235] mb-2"
              style={{ fontFamily: "'Noto Serif JP', sans-serif", fontWeight: 700, fontSize: '48px' }}
            >
              20K+
            </div>
            <div
              className="text-[#1A2235]"
              style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400, fontSize: '16px' }}
            >
              Satisfied Customers
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-[#1A2235] mb-2"
              style={{ fontFamily: "'Noto Serif JP', sans-serif", fontWeight: 700, fontSize: '48px' }}
            >
              30K+
            </div>
            <div
              className="text-[#1A2235]"
              style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400, fontSize: '16px' }}
            >
              Homes Delivered
            </div>
          </div>
        </div>

        {/* Bottom Section - Map and CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
          {/* Map Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={Map}
              alt="Location Map"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <p
              className="leading-relaxed"
              style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '23px', color: '#000000' }}
            >
              Explore our portfolio of exceptional properties and take the first step toward a new life
            </p>

            <button
              className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all duration-300"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '20px' }}
            >
              Explore Projects
              <div className="bg-white text-black rounded-full p-1">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
