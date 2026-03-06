// import React, { useEffect, useState } from 'react';
// import { getAllBlogMain } from '../../Api';

// const BlogMain = () => {
//   const [blogData, setBlogData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // show content after delay
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await getAllBlogMain();
//         if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
//           setBlogData(res.data[0]);
//         }
//       } catch (error) {
//         console.log('Error fetching blog main data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🔥 Show everything after 1 second
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <div className="text-center py-16">Loading...</div>;
//   }

//   if (!blogData) {
//     return <div className="text-center py-16">No Blog Data Found</div>;
//   }

//   return (
//     <div className="w-full py-16 px-4 font-figtree">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT CONTENT */}
//           <div
//             className={`transition-all duration-1000 ease-out
//             ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black mb-8 sm:mb-12 md:mb-16 lg:mb-[60px] text-left">
//               {blogData.heading?.split(' ')[0]}{' '}
//               <span className="font-semibold">
//                 {blogData.heading?.split(' ').slice(1).join(' ')}
//               </span>
//             </h2>

//             <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-[24px] text-primaryText leading-[1.3] mb-6 sm:mb-8 lg:mb-[30px]">
//               {blogData.heading1}
//             </p>

//             <p className="font-extralight text-sm sm:text-lg md:text-xl lg:text-[20px] text-primaryText text-justify leading-[1.4]">
//               {blogData.description}
//             </p>
//           </div>

//           {/* IMAGE */}
//           <div
//             className={`bg-white rounded-3xl overflow-hidden cursor-pointer
//             transition-all duration-1000 ease-out
//             hover:scale-[1.03]
//             border-2 border-gray-300 hover:border-[#2D5C3A]
//             ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//           >
//             <img
//               src={blogData.mainImage}
//               alt="Blog Main"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogMain;

import React, { useEffect, useState } from 'react';
import { getAllBlogMain } from '../../Api';

const BlogMainSection = () => {
  const [blogData, setBlogData] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await getAllBlogMain();

        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setBlogData(res.data[0]);
        }
      } catch (error) {
        console.error('Failed to fetch blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

  // show animation after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToContact = () => {
    const section = document.getElementById('job-openings');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!blogData) return null;

  return (
    <div className="w-full bg-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <div
          className={`text-center space-y-6 md:space-y-8
          transition-all duration-1000 ease-out
          ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl font-figtree md:text-4xl lg:text-[48px] font-light leading-tight text-black mb-8 sm:mb-12 md:mb-16 lg:mb-[60px] text-center">
            {blogData.heading?.split(' ')[0]}{' '}
            <span className="font-semibold">
              {blogData.heading?.split(' ').slice(1).join(' ')}
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="font-figtree font-light 
            text-sm sm:text-base md:text-lg lg:text-[20px] 
            text-black 
            leading-relaxed 
            max-w-full sm:max-w-[90%] md:max-w-4xl 
            mx-auto 
            px-2 sm:px-0 
            text-justify sm:text-center 
            whitespace-pre-line"
          >
            {blogData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogMainSection;
