import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Vision3 from "../../assets/Vision3.png";
import visionExp from "../../assets/visionExp1.png";
import aboutArrow from "../../assets/Icons/aboutArrow.png";
import ProjectBtn from "../../assets/Icons/ProjectBtn.png";
import Map from "../../assets/map.png";
import { getVisionMission } from "../../Api";
import axios from "axios";

const VisionMission = () => {
  const [visionMission, setVisionMission] = useState(null);
  const [missionOpen, setMissionOpen] = useState(false);
  const [visionOpen, setVisionOpen] = useState(false);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVisionMission(token);
        setVisionMission(data);
      } catch (error) {
        console.error("Error fetching Vision & Mission:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="w-full px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left Section */}
        <div className="space-y-8">
          <h2
            className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[48px]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            <span className="font-bold">Vision </span>
            <span className="font-light">& Mission</span>
          </h2>

          {/* Dynamic Description */}
          <p className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
            {visionMission?.description ||
              "Our core values are centered on integrity and trust, upholding transparency and ethical practices in every interaction. We are driven by a commitment to quality and craftsmanship."}
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
                {visionMission?.missionText ||
                  "It is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction."}
              </p>
            )}
          </div>

          {/* Our Vision Accordion */}
          <div className="border-t border-gray-300 pt-6">
            <button
              onClick={() => setVisionOpen(!visionOpen)}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="text-[#050F27] text-lg sm:text-xl md:text-2xl lg:text-[24px] font-[Figtree] font-bold">
                Our Vision
              </h3>
              {visionOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {visionOpen && (
              <p className="mt-4 text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
                {visionMission?.visionText ||
                  "To be the most trusted and innovative real estate developer, creating sustainable communities that enhance the quality of life for generations to come."}
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

        {/* Right Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={visionMission?.image || Vision3}
              alt="Upkar Development"
              className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px] object-cover"
            />
            <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-4 md:-bottom-8 md:-right-6">
              <div className="relative w-32 sm:w-40 md:w-48 lg:w-56">
                <img
                  src={visionExp}
                  alt="Years of Experience"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute font-[Figtree] inset-0 flex flex-col justify-center items-center text-start px-2">
                  <h3 className="text-3xl sm:text-3xl md:text-6xl font-bold text-white">
                    {visionMission?.totalExperience?.split(" ")[0] ||
                      visionMission?.stats?.[0]?.number ||
                      "10+"}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-[Figtree] text-white font-medium leading-snug whitespace-pre-line">
                    {visionMission?.totalExperience
                      ?.replace(
                        visionMission?.totalExperience?.split(" ")[0],
                        ""
                      )
                      .trim() ||
                      visionMission?.stats?.[0]?.label ||
                      "Years of experience"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 mt-20 lg:mt-28 border-t border-[#1A2235]/10">
        {visionMission?.stats?.map((stat, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center px-4 sm:px-8 py-8"
          >
            <div
              className="text-[#1A2235] font-[Noto Serif JP] font-bold text-3xl sm:text-4xl md:text-[48px]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              {stat.number}
            </div>
            <div
              className="text-[#1A2235] font-[Figtree] text-sm sm:text-base md:text-[16px] leading-snug mt-1 whitespace-pre-line"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              {stat.label}
            </div>

            {index % 2 === 0 && index !== visionMission.stats.length - 1 && (
              <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 h-24 border-r border-[#1A2235]" />
            )}
          </div>
        ))}
      </div>

      {/* Map & CTA Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 lg:mt-16 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={Map}
            alt="Location Map"
            className="w-full h-60 sm:h-72 md:h-80 lg:h-[400px] object-cover"
          />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <p className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
            Explore our portfolio of exceptional properties and take the first
            step toward a new life.
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
  );
};

export default VisionMission;
