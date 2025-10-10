import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Vision1 from "../../assets/vision1.png";
import Vision3 from "../../assets/Vision3.png";
import aboutArrow from "../../assets/Icons/aboutArrow.png";
import ProjectBtn from "../../assets/Icons/ProjectBtn.png";
import Map from "../../assets/map.png";


const VisionMission = () => {

  const [missionOpen, setMissionOpen] = useState(false);
  const [visionOpen, setVisionOpen] = useState(false);

  const stats = [
    { number: "50+", label: "Years\nExperience", paddingLeft: "90px" },
    { number: "1500+", label: "Acres in\nLand Bank", paddingLeft: "65px" },
    { number: "20K+", label: "Happy\nCustomers", paddingLeft: "70px" },
    { number: "30K+", label: "Plots\nUpcoming", paddingLeft: "70px" }
  ];

  return (
    <div className="w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div className="space-y-8">
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[48px]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              <span className="font-bold">Vision </span>
              <span className="font-light">& Mission</span>
            </h2>

            {/* Description */}
            <p className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
              Our core values are centered on integrity and trust, upholding transparency and ethical practices in every interaction. We are driven by a commitment to quality and craftsmanship.
            </p>

            {/* Our Mission Accordion */}
            <div className="border-t border-gray-300 pt-6">
              <button
                onClick={() => setMissionOpen(!missionOpen)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-[#050F27] text-lg sm:text-xl md:text-2xl lg:text-[24px] font-[Figtree] font-bold">
                  Our Mission
                </h3>
                {missionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {missionOpen && (
                <p className="mt-4 text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
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
                <h3 className="text-[#050F27] text-lg sm:text-xl md:text-2xl lg:text-[24px] font-[Figtree] font-bold">Our Vision</h3>
                {visionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {visionOpen && (
                <p className="mt-4 text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
                  To be the most trusted and innovative real estate developer, creating sustainable communities that enhance the quality of life for generations to come.
                </p>
              )}
            </div>

            {/* Know More Button */}
            <div className="mt-8">
              <img
                src={aboutArrow}
                alt="Know more about us"
                className="w-40 sm:w-45 md:w-50 lg:w-56 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={Vision1}
                alt="Upkar Development"
                className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px] object-cover"
              />
              <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-4 md:-bottom-8 md:-right-6">
                <img
                  src={Vision3}
                  alt="Years of Experience"
                  className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 pt-8 sm:pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative text-center">
              <div className="text-[#1A2235] font-[Noto Serif JP] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px]">
                {stat.number}
              </div>
              <div className="text-[#1A2235] text-center sm:text-start font-[Figtree] font-normal text-xs sm:text-sm md:text-base lg:text-[16px] leading-tight sm:leading-snug">
                {stat.label.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 lg:mt-16 items-center">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={Map}
              alt="Location Map"
              className="w-full h-60 sm:h-72 md:h-80 lg:h-[400px] object-cover"
            />
          </div>

          {/* CTA */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-snug sm:leading-relaxed font-[Figtree] font-light text-[#000000]">
              Explore our portfolio of exceptional properties and take the first step toward a new life.
            </p>

            <div className="mt-4">
              <img
                src={ProjectBtn}
                alt="Explore Projects"
                className="w-36 sm:w-40 md:w-48 lg:w-56 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;