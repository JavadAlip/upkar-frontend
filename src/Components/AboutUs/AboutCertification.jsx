import React, { useState, useEffect } from 'react';
import { getCertifications } from '../../Api';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const AboutCertification = () => {
  const [certifications, setCertifications] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  const token = localStorage.getItem('adminToken');

  // Fetch Data
  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const data = await getCertifications(token);
        setCertifications(data || []);
      } catch (error) {
        console.error('Error fetching certifications:', error);
      }
    };

    fetchCerts();
  }, [token]);

  // Responsive Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
        setIsMobile(true);
      } else {
        setItemsPerView(3);
        setIsMobile(false);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex + itemsPerView < certifications.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full bg-white px-4 lg:px-10 py-12 font-[Figtree]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light">
            Core <span className="font-semibold">Values</span>
          </h2>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        {isMobile ? (
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative bg-black text-white rounded-3xl p-8 min-h-[280px] shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[22px] font-semibold mb-4">
                    {cert.heading}
                  </h3>

                  <p className="text-[15px] opacity-95 leading-relaxed">
                    {cert.content}
                  </p>
                </div>

                {/* Bottom Circle Design */}
                {/* <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#136b96] rounded-full translate-x-10 translate-y-10"></div> */}

                {/* Icon */}
                <div className="absolute bottom-6 right-6">
                  <img
                    src={cert.icon}
                    alt={cert.heading}
                    className="w-14 h-14 object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ================= DESKTOP SLIDER ================= */
          <div className="relative">
            {/* LEFT Arrow */}
            {/* {certifications.length > itemsPerView && currentIndex > 0 && (
              <button
                onClick={prevSlide}
                className="absolute -left-10 top-1/2 -translate-y-1/2 bg-[#e5eef3] text-[#0e7490] p-4 rounded-full shadow-md hover:scale-110 transition z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )} */}

            {/* RIGHT Arrow */}
            {/* {certifications.length > itemsPerView &&
              currentIndex + itemsPerView < certifications.length && (
                <button
                  onClick={nextSlide}
                  className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#e5eef3] text-[#0e7490] p-4 rounded-full shadow-md hover:scale-110 transition z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )} */}

            <div className="overflow-hidden">
              <div
                className="flex justify-center gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                }}
              >
                {certifications.map((cert, index) => (
                  <div key={index} className="w-[28%] flex-shrink-0">
                    <div className="relative bg-black text-white rounded-3xl p-8 min-h-[300px] shadow-lg flex flex-col justify-between">
                      <div>
                        <h3 className="text-[22px] font-semibold mb-4">
                          {cert.heading}
                        </h3>

                        <p className="text-[15px] opacity-95 leading-relaxed">
                          {cert.content}
                        </p>
                      </div>

                      {/* Bottom Circle Design */}
                      {/* <div className="absolute overflow-hidden bottom-7 right-7 w-32 h-32 bg-[#136b96] rounded-full translate-x-10 translate-y-10"></div> */}

                      {/* Icon */}
                      <div className="absolute bottom-6 right-6">
                        <img
                          src={cert.icon}
                          alt={cert.heading}
                          className="w-14 h-14 object-contain filter brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCertification;
