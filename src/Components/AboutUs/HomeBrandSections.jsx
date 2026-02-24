import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import AboutCertification from '../AboutUs/AboutCertification';
import BrandEthosSection from '../AboutUs/BrandEthosSection';
import BrandMotiveSection from '../AboutUs/BrandMotiveSection';

const HomeBrandSections = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    <AboutCertification key="core" />,
    <BrandEthosSection key="ethos" />,
    <BrandMotiveSection key="motive" />,
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full">
      {/* LEFT Arrow */}
      {currentSection > 0 && (
        <button
          onClick={prevSection}
          className="absolute left-6 top-1/2 -translate-y-1/2
                     backdrop-blur-md bg-white/30
                     text-black p-3 rounded-full
                     shadow-lg z-10
                     hover:bg-white/40 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* RIGHT Arrow */}
      {currentSection < sections.length - 1 && (
        <button
          onClick={nextSection}
          className="absolute right-6 top-1/2 -translate-y-1/2
                     backdrop-blur-md bg-white/30
                     text-black p-3 rounded-full
                     shadow-lg z-10
                     hover:bg-white/40 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Section Content */}
      <div className="transition-all duration-500">
        {sections[currentSection]}
      </div>
    </div>
  );
};

export default HomeBrandSections;
