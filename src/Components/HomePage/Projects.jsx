import React from 'react';
import { ArrowRight } from 'lucide-react';
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import Project3 from "../../assets/Project3.png";
import ProjectBtn1 from "../../assets/Icons/projectBtn1.png";
import ProjectBtn2 from "../../assets/Icons/projectBtn2.png";
import ProjectBtn3 from "../../assets/Icons/projectBtn3.png";

const Projects = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className="mb-16 text-start"
          style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '48px', color: '#000000' }}
        >
          <span style={{ fontWeight: 700 }}>Our </span>
          <span style={{ fontWeight: 500 }}>Projects</span>
        </h2>

        {/* Projects List */}
        <div className="space-y-20">

          {/* Project 1 - Ongoing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3
                className="leading-tight"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: '48px', color: '#000000' }}
              >
                Looking Ahead to
                <br />
                <span style={{ fontWeight: 700 }}>Your Future</span>?
              </h3>


              <p
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}
              >
                Investing in an <span className="font-semibold">Ongoing project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2">
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> Early bird pricing
                </li>
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              {/* <button
                className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all duration-300"
                style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '16px' }}
              >
                Explore Ongoing Projects
                <div className="bg-white text-black rounded-full p-1">
                  <ArrowRight size={16} />
                </div>
              </button> */}
              <div className="mt-4">
                <img
                  src={ProjectBtn1}
                  alt="Explore Ongoing Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Image with Overlapping Text Box */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project1} alt="Ongoing Project" className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-6 -left-56 right-4 bg-white rounded-lg shadow-lg p-6"
                style={{ maxWidth: '77%' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>


          {/* Project 2 - Upcoming (Reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image on Left */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project2} alt="Upcoming Project" className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-6 left-56 translate-x-1/3 bg-white rounded-lg shadow-lg p-6"
                style={{ width: '430px' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>

            {/* Text Content on Right */}
            <div className="space-y-6">
              <h3
                className="leading-tight"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: '48px', color: '#000000' }}
              >
                Watch Your Future <span style={{ fontWeight: 700 }}>Take Shape.</span>
              </h3>

              <p
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}
              >
                Investing in an <span className="font-semibold">Upcoming project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2 pl-80">
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Early bird pricing
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              <div className="mt-4 pl-64">
                <img
                  src={ProjectBtn2}
                  alt="Explore Upcoming Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Project 3 - Completed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3
                className="leading-tight"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: '48px', color: '#000000' }}
              >
                Discover Your
                <br />
                <span style={{ fontWeight: 700 }}>Ready-to-Build Plot.</span>
              </h3>


              <p
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}
              >
                Investing in a <span className="font-semibold">Completed project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Early-bird pricing
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              {/* <button
                className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all duration-300"
                style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '16px' }}
              >
                Explore Completed Projects
                <div className="bg-white text-black rounded-full p-1">
                  <ArrowRight size={16} />
                </div>
              </button> */}
              <div className="mt-4">
                <img
                  src={ProjectBtn3}
                  alt="Explore Completed Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project3} alt="Completed Project" className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-6 -left-56 right-4 bg-white rounded-lg shadow-lg p-6"
                style={{ maxWidth: '77%' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
