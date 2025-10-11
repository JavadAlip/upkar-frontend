import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { RiHome2Line } from "react-icons/ri";
import Plot1 from "../../assets/Plot1.png";
import Plot2 from "../../assets/Plot2.png";
import home from "../../assets/Icons/units.png";
import units from "../../assets/Icons/units.png";
import water from "../../assets/Icons/water.png";
import box from "../../assets/Icons/box.png";
import brousche from "../../assets/Icons/brousche.png";
import plotEnq from "../../assets/Icons/plotEnq.png";


const PlotLayout = () => {

    const plotDetails = [
        {
            icon: <RiHome2Line className="w-9 h-9 text-gray-300  -mb-7" />,
            label: 'Unit Configuration',
            value: '1,2,2.5,3 BHK'
        },
        {
            icon: units,
            label: 'Units',
            value: '430'
        },
        {
            icon: water,
            label: 'Water Supply',
            value: 'Corporation and Borewell'
        },
        {
            icon: box,
            label: 'Project Area',
            value: '8.42 Acres'
        }
    ];
    return (
        <div className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <h2 className="mb-10 sm:mb-12 text-3xl sm:text-4xl md:text-[48px] font-[Figtree] text-[#050F27]">
                    <span className="font-semibold">Plot</span>{' '}
                    <span className="font-light">layout</span>
                </h2>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* Left Side - Plot Details */}
                    <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                        {plotDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 border border-gray-300 hover:border-gray-400 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-1">
                                    {typeof detail.icon === 'string' ? (
                                        <img
                                            src={detail.icon}
                                            alt={detail.label}
                                            className="w-6 h-6 -mb-7 object-contain flex-shrink-0"
                                        />
                                    ) : (
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            {detail.icon}
                                        </div>
                                    )}
                                    <p className="font-[Figtree] font-light text-[18px] sm:text-[20px] text-black">
                                        {detail.label}
                                    </p>
                                </div>
                                <p className="font-[Figtree] font-semibold text-[18px] sm:text-[20px] text-black ml-9 sm:ml-9">
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Plot Map Image */}
                    <div className="relative bg-white rounded-2xl p-4 ">
                        <img
                            src={Plot1}
                            alt="Plot Layout"
                            className="w-full h-64 sm:h-72 md:h-80 object-contain rounded-xl"
                        />

                        {/* Download Brochure Button - Center Bottom */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <img
                                src={brousche}
                                alt="Download Brochure"
                                className="w-72 sm:w-40 md:w-72 cursor-pointer"
                            />
                        </div>

                    </div>
                </div>

                {/* Bottom Image Section with CTA */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl mt-8 sm:mt-12 h-96 sm:h-[500px] md:h-[600px]">
                    <img
                        src={Plot2}
                        alt="Project View"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

                    {/* Text Overlay - Left Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 pb-6 sm:pb-12 pl-4 sm:pl-12 text-white space-y-2 sm:space-y-4">
                        <h3 className="font-[Figtree] ml-4 sm:ml-16 font-normal text-[32px] sm:text-[64px] md:text-[80px] lg:text-[96px] text-white leading-tight sm:leading-tight lg:mb-[-25px] md:mb-[-25px]">
                            Start Low
                        </h3>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 ">
                            <img
                                src={plotEnq}
                                alt="Enquire Now"
                                className="w-24 sm:w-32 md:w-40 lg:w-48 cursor-pointer hover:opacity-90 transition-opacity"
                            />

                            <h3 className="font-[Figtree] font-semibold text-[32px] sm:text-[64px] md:text-[80px] lg:text-[96px] text-white leading-tight sm:leading-tight ">
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