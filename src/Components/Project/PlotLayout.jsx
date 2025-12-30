import React, { useState } from 'react';
import brousche from '../../assets/Icons/brousche.png';
import Plot2 from '../../assets/Plot2.png';
import plotEnq from '../../assets/Icons/plotEnq.png';

const PlotLayout = ({ project }) => {
  const [previewOpen, setPreviewOpen] = useState(false);

  if (!project) return null;

  const plotDetails = [
    { heading: 'Project Area', value: project.projectArea },
    { heading: 'Total Units', value: project.totalUnits },
    { heading: 'Unit Configuration', value: project.unitConfiguration },
    { heading: 'Water Supply', value: project.waterSupply },
  ].filter((item) => item.value);

  return (
    <>
      <div className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="mb-12 text-3xl sm:text-4xl md:text-[48px] font-[Figtree] text-[#050F27]">
            <span className="font-semibold">Plot</span>{' '}
            <span className="font-light">Layout</span>
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div className="flex flex-col gap-4 max-w-md w-full">
              {plotDetails.map((detail, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-5 bg-white"
                >
                  <p className="text-[20px] text-[#000000] font-normal">
                    {detail.heading}
                  </p>
                  <p className="text-[20px] font-semibold text-black mt-1">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div
                className="
                  w-full
                  h-[280px]
                  sm:h-[320px]
                  md:h-[360px]
                  lg:h-[400px]
                  bg-gray-100
                  rounded-2xl
                  flex items-center justify-center
                  cursor-pointer
                "
                onClick={() => setPreviewOpen(true)}
              >
                {project.masterPlans?.[0] && (
                  <img
                    src={project.masterPlans[0]}
                    alt="Master Plan"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                )}
              </div>

              {project.brochureImage && (
                <div className="mt-6 flex justify-center">
                  <a
                    href={project.brochureImage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={brousche}
                      alt="Download Brochure"
                      className="w-64 sm:w-72 cursor-pointer hover:opacity-90 transition"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]">
            <img
              src={Plot2}
              alt="Project View"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="font-[Figtree] ml-4 sm:ml-16 font-normal text-[32px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
                Start Low
              </h3>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <img
                  src={plotEnq}
                  alt="Enquire Now"
                  className="w-24 sm:w-32 md:w-40 lg:w-48 cursor-pointer hover:opacity-90 transition-opacity"
                />
                <h3 className="font-[Figtree] font-semibold text-[32px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
                  Save More{' '}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {previewOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setPreviewOpen(false)}
        >
          <img
            src={project.masterPlans?.[0]}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </>
  );
};

export default PlotLayout;
