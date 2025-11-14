import React, { useState, useEffect } from 'react';
import { getAllFeatures } from '../../Api'; 

const Features = () => {
  const [featuresData, setFeaturesData] = useState(null);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await getAllFeatures(token);
        if (data && data.length > 0) setFeaturesData(data[0]);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };
    fetchFeatures();
  }, [token]);

  if (!featuresData) return <p className="text-center py-20">Loading...</p>;

  const { description, mainImage, icons } = featuresData;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-12 text-[48px] font-[Figtree] font-semibold text-black">
        Features
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="bg-[#000814] rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* LEFT SIDE — Text and Image */}
            <div className="lg:w-5/12 flex flex-col justify-center">
              <p className="text-white text-[20px] sm:text-[24px] font-light font-[Figtree] text-center mb-6">
                {description}
              </p>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={mainImage}
                  alt="Upkar Habitat"
                  className="w-full h-60 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* RIGHT SIDE — Feature Cards */}
            <div className="lg:w-7/12 grid grid-cols-3 gap-3 sm:gap-2">
              {icons.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg justify-center text-center p-2 sm:p-4"
                >
                  <img
                    src={feature.icon}
                    alt={feature.iconTitle}
                    className="w-48 h-52 sm:w-32 sm:h-40 md:w-40 md:h-48 lg:w-48 lg:h-52 -mb-5 object-contain rounded-2xl"
                  />
                  <h3
                    className="text-white font-light font-[Figtree] text-base sm:text-lg md:text-xl lg:text-[24px]"
                  >
                    {feature.iconTitle}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
