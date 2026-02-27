// import React, { useEffect, useState } from "react";
// import { getAllReadMore } from "../../Api";

// const ReadMore = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetchReadMore();
//   }, []);

//   const fetchReadMore = async () => {
//     try {
//       const res = await getAllReadMore();
//       setArticles(res.data);
//     } catch (error) {
//       console.error("Error fetching readmore:", error);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h2 className="text-[48px] font-figtree font-semibold mb-10">
//         Read <span className="font-normal">more</span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <div key={article._id} className="group cursor-pointer">
//             <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
//               <img
//                 src={article.mainImage}
//                 alt={article.description}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>

//             <h3 className="text-[20px] font-medium leading-snug font-figtree transition-colors">
//               {article.description}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReadMore;

import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getAllReadMore } from '../../Api';

const ReadMore = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchReadMore();
  }, []);

  const fetchReadMore = async () => {
    try {
      const res = await getAllReadMore();
      setArticles(res.data);
    } catch (error) {
      console.error('Error fetching readmore:', error);
    }
  };

  // Disable background scroll when modal opens
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedArticle]);

  // Scroll Functions
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -window.innerWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: window.innerWidth,
      behavior: 'smooth',
    });
  };

  // Limit to 10 words
  const getLimitedText = (text) => {
    const words = text.trim().split(/\s+/);
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return text;
  };

  const isMoreThanTenWords = (text) => text.trim().split(/\s+/).length > 10;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 relative">
      <h2 className="text-[48px] font-figtree font-semibold mb-10">
        Read <span className="font-normal">more</span>
      </h2>

      {/* ================= SCROLL SECTION ================= */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-hidden snap-x snap-mandatory scroll-smooth"
        >
          {Array.from({ length: Math.ceil(articles.length / 3) }).map(
            (_, i) => {
              const chunk = articles.slice(i * 3, i * 3 + 3);

              return (
                <div key={i} className="flex-shrink-0 w-full snap-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chunk.map((article) => (
                      <div key={article._id} className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                          <img
                            src={article.mainImage}
                            alt={article.description}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        <h3 className="text-[20px] font-medium leading-snug font-figtree">
                          {getLimitedText(article.description)}

                          {isMoreThanTenWords(article.description) && (
                            <span
                              onClick={() => setSelectedArticle(article)}
                              className="text-[#2D5C3A] font-medium ml-2 cursor-pointer hover:underline"
                            >
                              Read More
                            </span>
                          )}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ================= MODAL ================= */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden relative max-h-[90vh] flex flex-col">
            {/* Close */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 
             bg-white/30 backdrop-blur-md 
             border border-white/40
             text-gray-800 
             p-3 rounded-full 
             shadow-md 
             hover:scale-110 
             transition-all duration-300 
             z-10"
            >
              <X className="w-4 h-4" />
            </button>
            {/* Image */}
            <div className="h-64 w-full flex-shrink-0">
              <img
                src={selectedArticle.mainImage}
                alt={selectedArticle.description}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-semibold font-figtree mb-4">
                Article Preview
              </h3>

              <p className="text-gray-700 font-figtree text-justify leading-relaxed">
                {selectedArticle.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
