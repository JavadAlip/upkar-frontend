import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import Plot1 from "../../assets/Plot1.png";
import Plot2 from "../../assets/Plot2.png";

const PlotLayout = () => {
    const plotDetails = [
        {
            label: 'Unit Configuration',
            value: '1,2,2.5,3 BHK'
        },
        {
            label: 'Units',
            value: '430'
        },
        {
            label: 'Water Supply',
            value: 'Corporation and Borewell'
        },
        {
            label: 'Project Area',
            value: '8.42 Acres'
        }
    ];

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                    Plot layout
                </h2>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* Left Side - Plot Details */}
                    <div className="space-y-4 max-w-md">
                        {plotDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 border border-gray-300 hover:border-gray-400 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                                    </div>
                                    <p className="text-sm text-gray-600">{detail.label}</p>
                                </div>
                                <p className="text-lg font-semibold ml-7">{detail.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Plot Map Image */}
                    <div className="relative bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                        <img
                            src={Plot1}
                            alt="Plot Layout"
                            className="w-full h-80 object-contain rounded-xl"
                        />

                        {/* Download Brochure Button - Center Bottom */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <button className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-all duration-300 text-sm border border-gray-300">
                                Download Brochure
                                <Download size={16} />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Bottom Image Section with CTA */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img
                        src={Plot2}
                        alt="Project View"
                        className="w-full h-96 object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

                    {/* Text Overlay - Left Bottom */}
                    <div className="absolute bottom-12 left-12 text-white space-y-4">
                        <h3 className="text-5xl md:text-6xl font-bold leading-tight">
                            Start Low
                        </h3>

                        <div className="flex items-center gap-6">
                            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-100 transition-all duration-300">
                                Enquire now
                                <div className="bg-black text-white rounded-full p-2">
                                    <ArrowRight size={16} />
                                </div>
                            </button>

                            <h3 className="text-5xl md:text-6xl font-bold">
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
