// import React, { useEffect, useState, useRef } from 'react';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// import { getAllReadMore } from '../../Api';
// import { useNavigate } from 'react-router-dom';

// const ReadMore = () => {
//   const [articles, setArticles] = useState([]);
//   const [selectedArticle, setSelectedArticle] = useState(null);
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchReadMore();
//   }, []);

//   const fetchReadMore = async () => {
//     try {
//       const res = await getAllReadMore();
//       setArticles(res.data);
//     } catch (error) {
//       console.error('Error fetching readmore:', error);
//     }
//   };

//   useEffect(() => {
//     if (selectedArticle) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [selectedArticle]);

//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({
//       left: -window.innerWidth,
//       behavior: 'smooth',
//     });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({
//       left: window.innerWidth,
//       behavior: 'smooth',
//     });
//   };

//   const getLimitedText = (text) => {
//     const words = text.trim().split(/\s+/);
//     if (words.length > 10) {
//       return words.slice(0, 10).join(' ') + '...';
//     }
//     return text;
//   };

//   const isMoreThanTenWords = (text) => text.trim().split(/\s+/).length > 10;

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12 relative">
//       <h2 className="text-[48px] font-figtree font-semibold mb-10">
//         Read <span className="font-normal">more</span>
//       </h2>

//       <div className="relative">
//         <div
//           ref={scrollRef}
//           className="flex overflow-hidden snap-x snap-mandatory scroll-smooth"
//         >
//           {Array.from({ length: Math.ceil(articles.length / 3) }).map(
//             (_, i) => {
//               const chunk = articles.slice(i * 3, i * 3 + 3);

//               return (
//                 <div key={i} className="flex-shrink-0 w-full snap-center">
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {chunk.map((article) => (
//                       <div key={article._id} className="group cursor-pointer">
//                         <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
//                           <img
//                             src={article.mainImage}
//                             alt={article.description}
//                             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                           />
//                         </div>

//                         <h3 className="text-[20px] font-medium leading-snug font-figtree">
//                           <h3 className="text-[22px] font-semibold font-figtree leading-snug">
//                             {article.heading}
//                           </h3>

//                           <p className="text-gray-600 mt-2 text-sm leading-relaxed">
//                             {getLimitedText(article.description)}
//                           </p>

//                           {isMoreThanTenWords(article.description) && (
//                             <span
//                               onClick={() =>
//                                 navigate(`/read-more/${article._id}`)
//                               }
//                               className="text-[#2D5C3A] font-medium mt-2 inline-block hover:underline cursor-pointer"
//                             >
//                               Read More
//                             </span>
//                           )}

//                           {isMoreThanTenWords(article.description) && (
//                             <span
//                               onClick={() => setSelectedArticle(article)}
//                               className="text-[#2D5C3A] font-medium ml-2 cursor-pointer hover:underline"
//                             >
//                               Read More
//                             </span>
//                           )}
//                         </h3>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             },
//           )}
//         </div>

//         <button
//           onClick={scrollLeft}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-3 rounded-full shadow-md hover:scale-110 transition"
//         >
//           <ChevronLeft className="w-4 h-4" />
//         </button>

//         <button
//           onClick={scrollRight}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-3 rounded-full shadow-md hover:scale-110 transition"
//         >
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>

//       {selectedArticle && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
//           <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden relative max-h-[90vh] flex flex-col">
//             <button
//               onClick={() => setSelectedArticle(null)}
//               className="absolute top-4 right-4
//              bg-white/30 backdrop-blur-md
//              border border-white/40
//              text-gray-800
//              p-3 rounded-full
//              shadow-md
//              hover:scale-110
//              transition-all duration-300
//              z-10"
//             >
//               <X className="w-4 h-4" />
//             </button>

//             <div className="h-64 w-full flex-shrink-0">
//               <img
//                 src={selectedArticle.mainImage}
//                 alt={selectedArticle.description}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="p-6 overflow-y-auto">
//               <h3 className="text-2xl font-semibold font-figtree mb-4">
//                 Article Preview
//               </h3>

//               <p className="text-gray-700 font-figtree text-justify leading-relaxed">
//                 {selectedArticle.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReadMore;

// import React, { useEffect, useState } from 'react';
// import { getAllReadMore } from '../../Api';
// import { useNavigate } from 'react-router-dom';

// const ReadMore = () => {
//   const [articles, setArticles] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchReadMore();
//   }, []);

//   const fetchReadMore = async () => {
//     try {
//       const res = await getAllReadMore();
//       setArticles(res.data || []);
//     } catch (error) {
//       console.error('Error fetching readmore:', error);
//     }
//   };

//   const getLimitedText = (text) => {
//     const words = text.trim().split(/\s+/);
//     if (words.length > 40) {
//       return words.slice(0, 40).join(' ') + '...';
//     }
//     return text;
//   };

//   const isMoreThanTenWords = (text) => text.trim().split(/\s+/).length > 10;

//   return (
//     <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl md:text-4xl lg:text-5xl font-figtree mb-8 md:mb-12">
//           <span className="font-semibold">Blogs </span>
//           {/* <span className="font-light">More</span> */}
//         </h2>

//         <div className="space-y-8 md:space-y-12">
//           {articles.map((article) => (
//             <div
//               key={article._id}
//               className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start"
//             >
//               {/* Image Section (Same size as Events) */}
//               <div className="w-full lg:w-1/3 flex-shrink-0">
//                 <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
//                   <img
//                     src={article.mainImage}
//                     alt={article.heading}
//                     className="w-full h-40 md:h-48 lg:h-56 object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Content Section (Same structure as Events right side) */}
//               <div className="w-full lg:w-2/3 space-y-2 md:space-y-4 border border-[#DADADA] lg:border-l-0 p-3 md:p-4 lg:pl-12 rounded lg:rounded-none bg-white">
//                 {/* Heading */}
//                 <h3 className="font-semibold font-figtree text-[26px] md:text-[32px] lg:text-[32px]">
//                   {article.heading}
//                 </h3>

//                 {/* Description */}
//                 <p className="leading-normal font-figtree text-[18px] md:text-[20px] lg:text-[20px] text-[#333]">
//                   {getLimitedText(article.description)}
//                 </p>

//                 {/* Read More */}
//                 {isMoreThanTenWords(article.description) && (
//                   <span
//                     onClick={() => navigate(`/read-more/${article._id}`)}
//                     className="inline-block pt-2 text-[#2D5C3A] font-medium cursor-pointer hover:underline"
//                   >
//                     Show Full Article
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))}

//           {articles.length === 0 && (
//             <p className="text-center text-gray-500 py-10">
//               No articles found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReadMore;

import React, { useState, useEffect, useRef } from 'react';
import { getAllReadMore } from '../../Api';
import { useNavigate } from 'react-router-dom';

const ReadMore = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState({});
  const navigate = useNavigate();
  const articleRefs = useRef({});

  // Fetch articles
  useEffect(() => {
    const fetchReadMore = async () => {
      try {
        const res = await getAllReadMore();
        setArticles(res.data || []);
      } catch (error) {
        console.error('Error fetching readmore:', error);
      }
    };
    fetchReadMore();
  }, []);

  // Intersection Observer (fade-in + slide-up)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleArticles((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    Object.values(articleRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [articles]);

  const getLimitedText = (text) => {
    const words = text.trim().split(/\s+/);
    if (words.length > 40) {
      return words.slice(0, 40).join(' ') + '...';
    }
    return text;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      year: date.getFullYear(),
    };
  };

  return (
    <div className="w-full bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}

        <div className="flex items-center justify-center mb-12">
          <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 mr-6"></div>

          <h2 className="text-3xl md:text-4xl font-semibold font-figtree text-center whitespace-nowrap">
            Blogs
          </h2>

          <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 ml-6"></div>
        </div>

        <div className="space-y-12">
          {articles.map((article) => {
            const { day, month, year } = formatDate(article.createdAt);

            return (
              <div
                key={article._id}
                data-id={article._id}
                ref={(el) => (articleRefs.current[article._id] = el)}
                className={`flex flex-col lg:flex-row gap-8 items-start 
                  transition-all duration-1000 ease-out
                  ${visibleArticles[article._id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* IMAGE */}
                <div className="w-full lg:w-1/3">
                  <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={article.mainImage}
                      alt={article.heading}
                      className="w-full h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`w-full lg:w-2/3 space-y-4 border border-[#DADADA] lg:border-l-0 p-4 lg:pl-32 bg-white
                    transition-all duration-1000 ease-out
                    ${visibleArticles[article._id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  {/* Title */}
                  <h3 className="font-semibold font-figtree text-[26px] md:text-[32px]">
                    {article.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-[18px] md:text-[20px]">
                    {getLimitedText(article.description)}
                  </p>

                  {/* Show Full Article */}
                  <span
                    onClick={() => navigate(`/read-more/${article._id}`)}
                    className="inline-block mt-2 text-[#2D5C3A]  rounded-xl font-medium cursor-pointer hover:text-[#244c2f] transition-all duration-300"
                    style={{
                      animation: 'moveUpDown 1.5s ease-in-out infinite',
                    }}
                  >
                    Show Full Article →
                  </span>
                </div>
              </div>
            );
          })}

          {articles.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No articles found.
            </p>
          )}
        </div>
      </div>
      <style>
        {`
@keyframes moveUpDown {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0px); }
}
`}
      </style>
    </div>
  );
};

export default ReadMore;
