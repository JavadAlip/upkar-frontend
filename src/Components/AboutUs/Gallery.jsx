import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";


const importAllImages = () => {
  const images = import.meta.glob("../../assets/*.{jpg,jpeg,png,avif,webp}", { eager: true });
  return Object.values(images).map((img) => img.default || img);
};

const Gallery = () => {

  const images = importAllImages();

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-10 leading-tight">Gallery</h2>

        <div className="relative hidden sm:block">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6" style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>

            {Array.from({ length: Math.ceil(images.length / 8) }, (_, i) => {
              const chunk = images.slice(i * 8, i * 8 + 8);
              const [img0, img1, img2, img3, img4, img5, img6, img7] = chunk;

              return (
                <div key={i} className="flex-shrink-0 w-full snap-center">
                  <div className="grid grid-cols-[2fr_1fr_2fr] gap-4">
                    {/* Top-left large */}
                    <div className="rounded-lg overflow-hidden">
                      {img0 && (
                        <img src={img0} alt={`slide-${i}-0`} className="w-full h-[340px] object-cover" />
                      )}
                    </div>

                    {/* Top-middle stacked (two small images) */}
                    <div className="flex flex-col gap-4">
                      <div className="rounded-lg overflow-hidden">
                        {img1 && (
                          <img src={img1} alt={`slide-${i}-1`} className="w-full h-[160px] object-cover" />
                        )}
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        {img2 && (
                          <img src={img2} alt={`slide-${i}-2`} className="w-full h-[160px] object-cover" />
                        )}
                      </div>
                    </div>

                    {/* Top-right large */}
                    <div className="rounded-lg overflow-hidden">
                      {img3 && (
                        <img src={img3} alt={`slide-${i}-3`} className="w-full h-[340px] object-cover" />
                      )}
                    </div>

                    {/* Bottom-left large */}
                    <div className="rounded-lg overflow-hidden">
                      {img4 && (
                        <img src={img4} alt={`slide-${i}-4`} className="w-full h-[340px] object-cover" />
                      )}
                    </div>

                    {/* Bottom-middle stacked (two small images) */}
                    <div className="flex flex-col gap-4">
                      <div className="rounded-lg overflow-hidden">
                        {img5 && (
                          <img src={img5} alt={`slide-${i}-5`} className="w-full h-[160px] object-cover" />
                        )}
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        {img6 && (
                          <img src={img6} alt={`slide-${i}-6`} className="w-full h-[160px] object-cover" />
                        )}
                      </div>
                    </div>

                    {/* Bottom-right large */}
                    <div className="rounded-lg overflow-hidden">
                      {img7 && (
                        <img src={img7} alt={`slide-${i}-7`} className="w-full h-[340px] object-cover" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="absolute left-0 top-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              container.scrollBy({ left: -400, behavior: 'smooth' });
            }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            className="absolute right-0 top-1/2 bg-[#050F27] text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative block sm:hidden mt-2 mx-2">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6 movile" style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-[400px] rounded-lg overflow-hidden snap-center"
              >
                <img
                  src={src}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            className="absolute left-0 top-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => {
              const container = document.querySelector('.movile');
              container.scrollBy({ left: -400, behavior: 'smooth' });
            }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            className="absolute right-0 top-1/2 bg-[#050F27] text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => {
              const container = document.querySelector('.movile');
              container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
