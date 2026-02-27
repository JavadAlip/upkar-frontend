// import React, { useEffect, useState } from 'react';
// import { getAllArticles } from '../../Api';

// const PopularArticles = () => {
//   const [articleData, setArticleData] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const res = await getAllArticles();
//         if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
//           setArticleData(res.data[0]);
//         }
//       } catch (error) {
//         console.log('Error fetching articles:', error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (!articleData) {
//     return <p className="text-center py-10">Loading...</p>;
//   }

//   return (
//     <div id="top-articles" className="max-w-6xl mx-auto px-6 py-12">
//       <h2 className="text-[48px] font-semibold font-figtree mb-8">
//         Popular <span className="font-light">Articles</span>
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="space-y-4">
//           <div className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
//             <img
//               src={articleData.mainImage}
//               alt="Featured Article"
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//           </div>
//           <h3 className="text-[20px] font-figtree font-medium text-center px-4">
//             {articleData.mainDescription}
//           </h3>
//         </div>

//         <div className="space-y-6">
//           {articleData.subItems?.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col sm:flex-row gap-4 group cursor-pointer"
//             >
//               <div className="w-full sm:w-32 h-64 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
//                 <img
//                   src={item.subImage}
//                   alt={item.subHeading}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>

//               <div className="flex-1 flex flex-col justify-center">
//                 <h4 className="text-[20px] font-figtree font-semibold mb-2 transition-colors">
//                   {item.subHeading}
//                 </h4>

//                 <p className="text-[20px] font-figtree font-normal text-[#000000] leading-normal">
//                   {item.subDescription}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularArticles;

import React, { useEffect, useState } from 'react';
import { getAllArticles } from '../../Api';

const PopularArticles = () => {
  const [articleData, setArticleData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await getAllArticles();
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setArticleData(res.data[0]);
        }
      } catch (error) {
        console.log('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);
  // Disable background scroll when modal opens
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup (important)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

  if (!articleData) {
    return <p className="text-center py-10">Loading...</p>;
  }

  // Function to limit to 5 words
  const getLimitedText = (text) => {
    const words = text.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return text;
  };

  const isMoreThanTwentyWords = (text) => text.trim().split(/\s+/).length > 20;

  return (
    <div id="top-articles" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-[48px] font-semibold font-figtree mb-8">
        Popular <span className="font-light">Articles</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Article */}
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
            <img
              src={articleData.mainImage}
              alt="Featured Article"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <h3 className="text-[20px] font-figtree font-medium text-center px-4">
            {articleData.mainDescription}
          </h3>
        </div>

        {/* Sub Articles */}
        <div className="space-y-6">
          {articleData.subItems?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 group cursor-pointer"
            >
              <div className="w-full sm:w-32 h-64 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                <img
                  src={item.subImage}
                  alt={item.subHeading}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h4 className="text-[20px] font-figtree font-semibold mb-2">
                  {item.subHeading}
                </h4>

                <p className="text-[18px] font-figtree text-black leading-normal">
                  {getLimitedText(item.subDescription)}

                  {isMoreThanTwentyWords(item.subDescription) && (
                    <span
                      onClick={() => setSelectedItem(item)}
                      className="text-[#2D5C3A] font-medium ml-2 cursor-pointer hover:underline"
                    >
                      Read More
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden relative max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-black text-xl font-bold z-10"
            >
              ✕
            </button>

            {/* Image */}
            <div className="h-64 w-full flex-shrink-0">
              <img
                src={selectedItem.subImage}
                alt={selectedItem.subHeading}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-figtree font-semibold mb-4">
                {selectedItem.subHeading}
              </h3>

              <p className="text-gray-700 text-justify font-figtree ">
                {selectedItem.subDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularArticles;
