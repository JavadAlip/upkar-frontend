// import React, { useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { getAboutImages } from '../../Api';

// const AboutImages = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const data = await getAboutImages(token);
//         const allImages = data.flatMap((item) => item.images || []);
//         setImages(allImages);
//       } catch (error) {
//         console.error('Error fetching about images:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchImages();
//   }, [token]);

//   if (loading) return <p className="text-center py-20">Loading gallery...</p>;
//   if (!images.length)
//     return <p className="text-center py-20">No images found</p>;

//   return (
//     <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
//       <h2 className="text-[48px] font-[Figtree] font-semibold text-black leading-tight mb-12">
//         Gallery
//       </h2>

//       <div className="relative hidden sm:block">
//         <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6 gallery-container">
//           {Array.from({ length: Math.ceil(images.length / 4) }).map((_, i) => {
//             const chunk = images.slice(i * 4, i * 4 + 4);
//             const [img0, img1, img2, img3, img4, img5, img6, img7] = chunk;

//             return (
//               <div key={i} className="flex-shrink-0 w-full snap-center">
//                 <div className="grid grid-cols-[2fr_1fr_2fr] gap-4">
//                   {img0 && (
//                     <div className="rounded-lg overflow-hidden">
//                       <img
//                         src={img0}
//                         alt={`slide-${i}-0`}
//                         className="w-full h-[340px] object-cover"
//                       />
//                     </div>
//                   )}

//                   <div className="flex flex-col gap-4">
//                     {img1 && (
//                       <div className="rounded-lg overflow-hidden">
//                         <img
//                           src={img1}
//                           alt={`slide-${i}-1`}
//                           className="w-full h-[160px] object-cover"
//                         />
//                       </div>
//                     )}
//                     {img2 && (
//                       <div className="rounded-lg overflow-hidden">
//                         <img
//                           src={img2}
//                           alt={`slide-${i}-2`}
//                           className="w-full h-[160px] object-cover"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   {img3 && (
//                     <div className="rounded-lg overflow-hidden">
//                       <img
//                         src={img3}
//                         alt={`slide-${i}-3`}
//                         className="w-full h-[340px] object-cover"
//                       />
//                     </div>
//                   )}

//                   {img4 && (
//                     <div className="rounded-lg overflow-hidden">
//                       <img
//                         src={img4}
//                         alt={`slide-${i}-4`}
//                         className="w-full h-[340px] object-cover"
//                       />
//                     </div>
//                   )}

//                   <div className="flex flex-col gap-4">
//                     {img5 && (
//                       <div className="rounded-lg overflow-hidden">
//                         <img
//                           src={img5}
//                           alt={`slide-${i}-5`}
//                           className="w-full h-[160px] object-cover"
//                         />
//                       </div>
//                     )}
//                     {img6 && (
//                       <div className="rounded-lg overflow-hidden">
//                         <img
//                           src={img6}
//                           alt={`slide-${i}-6`}
//                           className="w-full h-[160px] object-cover"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   {img7 && (
//                     <div className="rounded-lg overflow-hidden">
//                       <img
//                         src={img7}
//                         alt={`slide-${i}-7`}
//                         className="w-full h-[340px] object-cover"
//                       />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <button
//           // className="absolute left-0 top-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           onClick={() =>
//             document
//               .querySelector('.gallery-container')
//               ?.scrollBy({ left: -400, behavior: 'smooth' })
//           }
//         >
//           <ChevronLeft className="w-4 h-4" />
//         </button>
//         <button
//           // className="absolute right-0 top-1/2 bg-[#050F27] text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#000000]/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           onClick={() =>
//             document
//               .querySelector('.gallery-container')
//               ?.scrollBy({ left: 400, behavior: 'smooth' })
//           }
//         >
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>

//       <div className="relative block sm:hidden mt-2 mx-2">
//         <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6 mobile-gallery">
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full h-[400px] rounded-lg overflow-hidden snap-center"
//             >
//               <img
//                 src={src}
//                 alt={`gallery-${index}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           // className="absolute left-0 top-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           onClick={() =>
//             document
//               .querySelector('.mobile-gallery')
//               ?.scrollBy({ left: -400, behavior: 'smooth' })
//           }
//         >
//           <ChevronLeft className="w-4 h-4" />
//         </button>
//         <button
//           // className="absolute right-0 top-1/2 bg-[#050F27] text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#000000]/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           onClick={() =>
//             document
//               .querySelector('.mobile-gallery')
//               ?.scrollBy({ left: 400, behavior: 'smooth' })
//           }
//         >
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AboutImages;

// import React, { useEffect, useState, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { getAboutImages } from '../../Api';

// const AboutImages = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem('adminToken');

//   const galleryRef = useRef(null);
//   const mobileGalleryRef = useRef(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const data = await getAboutImages(token);
//         const allImages = data.flatMap((item) => item.images || []);
//         setImages(allImages);
//       } catch (error) {
//         console.error('Error fetching about images:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchImages();
//   }, [token]);

//   const scrollLeft = (ref) => {
//     ref.current?.scrollBy({
//       left: -window.innerWidth,
//       behavior: 'smooth',
//     });
//   };

//   const scrollRight = (ref) => {
//     ref.current?.scrollBy({
//       left: window.innerWidth,
//       behavior: 'smooth',
//     });
//   };

//   if (loading) return <p className="text-center py-20">Loading gallery...</p>;
//   if (!images.length)
//     return <p className="text-center py-20">No images found</p>;

//   return (
//     <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
//       <h2 className="text-[48px] font-[Figtree] font-semibold text-black leading-tight mb-12">
//         Gallery
//       </h2>

//       {/* ================= DESKTOP ================= */}
//       <div className="relative hidden sm:block">
//         <div
//           ref={galleryRef}
//           className="flex overflow-hidden snap-x snap-mandatory scroll-smooth pb-6"
//         >
//           {Array.from({ length: Math.ceil(images.length / 4) }).map((_, i) => {
//             const chunk = images.slice(i * 4, i * 4 + 4);

//             return (
//               <div key={i} className="flex-shrink-0 w-full snap-center">
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {chunk.map((img, index) => (
//                     <div
//                       key={index}
//                       className="rounded-lg overflow-hidden h-[300px]"
//                     >
//                       <img
//                         src={img}
//                         alt={`slide-${i}-${index}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* Left Arrow */}
//         <button
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg hover:scale-110 duration-200 transition-all"
//           onClick={() => scrollLeft(galleryRef)}
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         {/* Right Arrow */}
//         <button
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:shadow-lg hover:scale-110 duration-200 transition-all"
//           onClick={() => scrollRight(galleryRef)}
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>

//       {/* ================= MOBILE ================= */}
//       <div className="relative block sm:hidden mt-2 mx-2">
//         <div
//           ref={mobileGalleryRef}
//           className="flex overflow-hidden snap-x snap-mandatory scroll-smooth pb-6"
//         >
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full h-[400px] rounded-lg overflow-hidden snap-center"
//             >
//               <img
//                 src={src}
//                 alt={`gallery-${index}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Left Arrow */}
//         <button
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg hover:scale-110 duration-200 transition-all"
//           onClick={() => scrollLeft(mobileGalleryRef)}
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         {/* Right Arrow */}
//         <button
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:shadow-lg hover:scale-110 duration-200 transition-all"
//           onClick={() => scrollRight(mobileGalleryRef)}
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AboutImages;

import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getAboutImages } from '../../Api';

const AboutImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState(null);

  const token = localStorage.getItem('adminToken');

  const galleryRef = useRef(null);
  const mobileGalleryRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getAboutImages(token);
        const allImages = data.flatMap((item) => item.images || []);
        setImages(allImages);
      } catch (error) {
        console.error('Error fetching about images:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [token]);

  // Disable scroll when modal open
  useEffect(() => {
    if (modalData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalData]);

  const openModal = (index) => {
    setModalData({ index });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const changeModalImage = (direction) => {
    setModalData((prev) => {
      const newIndex =
        direction === 'next'
          ? (prev.index + 1) % images.length
          : (prev.index - 1 + images.length) % images.length;

      return { index: newIndex };
    });
  };

  const scrollLeft = (ref) => {
    ref.current?.scrollBy({
      left: -window.innerWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = (ref) => {
    ref.current?.scrollBy({
      left: window.innerWidth,
      behavior: 'smooth',
    });
  };

  if (loading) return <p className="text-center py-20">Loading gallery...</p>;
  if (!images.length)
    return <p className="text-center py-20">No images found</p>;

  return (
    <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
      <h2 className="text-[48px] font-[Figtree] font-semibold text-black leading-tight mb-12">
        Gallery
      </h2>

      {/* ================= DESKTOP ================= */}
      <div className="relative hidden sm:block">
        <div
          ref={galleryRef}
          className="flex overflow-hidden snap-x snap-mandatory scroll-smooth pb-6"
        >
          {Array.from({ length: Math.ceil(images.length / 3) }).map((_, i) => {
            const chunk = images.slice(i * 3, i * 3 + 3);

            return (
              <div key={i} className="flex-shrink-0 w-full snap-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {chunk.map((img, index) => {
                    const globalIndex = i * 3 + index;
                    return (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden h-[300px] cursor-pointer"
                        onClick={() => openModal(globalIndex)}
                      >
                        <img
                          src={img}
                          alt={`slide-${i}-${index}`}
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition"
          onClick={() => scrollLeft(galleryRef)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:scale-110 transition"
          onClick={() => scrollRight(galleryRef)}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="relative block sm:hidden mt-2 mx-2">
        <div
          ref={mobileGalleryRef}
          className="flex overflow-hidden snap-x snap-mandatory scroll-smooth pb-6"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-[400px] rounded-lg overflow-hidden snap-center cursor-pointer"
              onClick={() => openModal(index)}
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
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md"
          onClick={() => scrollLeft(mobileGalleryRef)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-2 rounded-full shadow-md"
          onClick={() => scrollRight(mobileGalleryRef)}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ================= MODAL ================= */}
      {modalData && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={images[modalData.index]}
              alt="Preview"
              className="max-h-[80vh] w-auto max-w-[90vw] object-contain rounded-lg"
            />

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left */}
            <button
              onClick={() => changeModalImage('prev')}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right */}
            <button
              onClick={() => changeModalImage('next')}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutImages;
