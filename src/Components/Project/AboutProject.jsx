import React from 'react';
import Prjct1 from "../../assets/Gallery1.png"; 
import Prjct2 from "../../assets/PrjctMain3.png"; 
import Prjct3 from "../../assets/PrjctMain4.png"; 
import Prjct4 from "../../assets/PrjctMain5.png"; 

const AboutProject = () => {
  const projectImages = [
    {
      id: 1,
      url: Prjct1,
      alt: 'Project View 1'
    },
    {
      id: 2,
      url: Prjct2,
      alt: 'Project View 2'
    },
    {
      id: 3,
      url: Prjct3,
      alt: 'Project View 3'
    },
    {
      id: 4,
      url: Prjct4,
      alt: 'Project View 4'
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* About Project Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="font-normal">Project</span>
          </h2>
          
          <p className="text-gray-700 text-base leading-relaxed max-w-4xl">
            Choosing the right partner for your dream project is the most critical decision you'll make. At Upkar Developers, we don't just sell plots; we build dreams. Our integrated approach ensures a seamless journey from the moment you select your land to the day you receive the keys to your new home. This is the Upkar promise: a commitment to quality, transparency, and timely delivery.
          </p>
        </div>

        {/* RERA & Legal Certificates Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            A Upkar Spring woods - RERA & Legal Certificates
          </h3>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-base leading-relaxed">
              The Real Estate (Regulation and Development) Act, 2016 is Act of the Parliament of India which seeks to protect buyers as well as help boost investments in the real estate industry. The Act came into force from 1 May 2016.
            </p>
            
            <div className="space-y-2">
              <p className="text-base">
                <span className="font-semibold">NoBroker RERA Id -</span> <span className="font-bold">A51800026821</span>
              </p>
              
              <p className="text-base">
                <span className="font-semibold">Builder Project RERA Id -</span> <span className="font-bold">PRM/KA/RERA/1251/309/PR/210319/004033</span>
              </p>
            </div>
          </div>
        </div>

        {/* Project Images Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Project <span className="font-normal">Images</span>
          </h3>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* First large image spans 2 columns */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={projectImages[0].url}
                  alt={projectImages[0].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Three smaller images */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={projectImages[1].url}
                alt={projectImages[1].alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={projectImages[2].url}
                alt={projectImages[2].alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={projectImages[3].url}
                alt={projectImages[3].alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
