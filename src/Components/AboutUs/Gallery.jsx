import React from 'react';
import Gallery1 from "../../assets/Gallery1.png";
import Gallery2 from "../../assets/Gallery2.png";
import Gallery3 from "../../assets/Gallery3.png";
import Gallery4 from "../../assets/Gallery4.png";

const Gallery = () => {
  const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Heading */}
        <h2 className="text-5xl font-bold text-gray-900 mb-12">Gallery</h2>

        {/* Gallery Container with Horizontal Scroll */}
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="flex gap-6 min-w-max">
            
            {/* Large Image */}
            <div className="flex-shrink-0 w-[500px] h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group">
              <img 
                src={galleryImages[0]} 
                alt="Gallery 1" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            

            {/* Grid of 3 smaller images */}
            <div className="flex-shrink-0 grid grid-cols-1 gap-4 w-[350px]">
              {galleryImages.slice(1).map((image, index) => (
                <div key={index} className="w-full h-[133px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 2}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            <div className="flex-shrink-0 grid grid-cols-1 gap-4 w-[350px]">
              {galleryImages.slice(1).map((image, index) => (
                <div key={index} className="w-full h-[133px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 2}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .scrollbar-thumb-gray-400::-webkit-scrollbar-thumb {
          background-color: #9ca3af;
          border-radius: 4px;
        }
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background-color: #e5e7eb;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
