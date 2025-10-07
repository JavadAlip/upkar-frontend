import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Vision1 from "../../assets/vision1.png";
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
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Vision & Mission
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              Our core values are centered on integrity and trust, upholding transparency and ethical practices in every interaction. We are driven by a commitment to quality and craftsmanship.
            </p>

            {/* Our Mission Accordion */}
            <div className="border-t border-gray-300 pt-6">
              <button
                onClick={() => setMissionOpen(!missionOpen)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-xl font-semibold">Our Mission</h3>
                {missionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {missionOpen && (
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
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
                <h3 className="text-xl font-semibold">Our Vision</h3>
                {visionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {visionOpen && (
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  To be the most trusted and innovative real estate developer, creating sustainable communities that enhance the quality of life for generations to come.
                </p>
              )}
            </div>

            {/* Know More Button */}
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 mt-8">
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
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg">
                <div className="text-5xl font-bold text-gray-900 mb-1">44+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-300">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">1500+</div>
            <div className="text-sm text-gray-600">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">20K+</div>
            <div className="text-sm text-gray-600">Satisfied Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">30K+</div>
            <div className="text-sm text-gray-600">Homes Delivered</div>
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
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore our portfolio of exceptional properties and take the first step toward a new life
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium flex items-center gap-3 hover:bg-gray-800 transition-all duration-300">
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
