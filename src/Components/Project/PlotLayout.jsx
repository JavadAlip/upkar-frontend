
import React, { useEffect, useState } from "react";
import { getPlotLayout } from "../../Api"; 
import brousche from "../../assets/Icons/brousche.png";
import plotEnq from "../../assets/Icons/plotEnq.png";
import Plot2 from "../../assets/Plot2.png";

const PlotLayout = () => {
  const [plotData, setPlotData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPlotLayout();
        setPlotData(res); // because you return res.data
      } catch (err) {
        console.error("Error loading plot layout:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading plot layout...</p>;
  if (!plotData) return <p>No Plot Layout Found</p>;

  return (
    <div className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="mb-10 sm:mb-12 text-3xl sm:text-4xl md:text-[48px] font-[Figtree] text-[#050F27]">
          <span className="font-semibold">Plot</span>{" "}
          <span className="font-light">layout</span>
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Left Side - Dynamic Icons */}
          <div className="space-y-4 max-w-md mx-auto lg:mx-0">
            {plotData?.icons?.map((detail, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-gray-300 hover:border-gray-400 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-1">

                  {/* ICON IMAGE */}
                  <img
                    src={detail.icon}
                    alt={detail.heading}
                    className="w-9 h-9 object-contain flex-shrink-0"
                  />

                  {/* HEADING */}
                  <p className="font-[Figtree] font-light text-[18px] sm:text-[20px] text-black">
                    {detail.heading}
                  </p>
                </div>

                {/* SUBHEADING */}
                <p className="font-[Figtree] font-semibold text-[18px] sm:text-[20px] text-black ml-12">
                  {detail.subheading}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - PLOT MAIN IMAGE */}
          <div className="relative bg-white rounded-2xl p-4">
            <img
              src={plotData.mainImage}
              alt="Plot Layout"
              className="w-full h-64 sm:h-72 md:h-80 object-contain rounded-xl"
            />

            {/* Brochure Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <img
                src={brousche}
                alt="Download Brochure"
                className="w-72 sm:w-40 md:w-72 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mt-8 sm:mt-12 h-96 sm:h-[500px] md:h-[600px]">
          <img
            src={Plot2} 
            alt="Project View"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 pb-6 sm:pb-12 pl-4 sm:pl-12 text-white space-y-2 sm:space-y-4">
            <h3 className="font-[Figtree] ml-4 sm:ml-16 font-normal text-[32px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
              Start Low
            </h3>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 ">
              <img
                src={plotEnq}
                alt="Enquire Now"
                className="w-24 sm:w-32 md:w-40 lg:w-48 cursor-pointer hover:opacity-90 transition-opacity"
              />

              <h3 className="font-[Figtree] font-semibold text-[32px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
                Save More
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlotLayout;
