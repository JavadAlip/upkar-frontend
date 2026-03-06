// import React, { useEffect, useState } from 'react';
// import { getWhyJoinAPI } from '../../Api';
// import { toast } from 'react-toastify';

// const WhyJoinUs = () => {
//   const [reasons, setReasons] = useState([]);

//   useEffect(() => {
//     const fetchReasons = async () => {
//       try {
//         const res = await getWhyJoinAPI();
//         if (res.success) {
//           setReasons(res.data);
//         }
//       } catch (error) {
//         console.error('Failed to fetch Why Join Us data:', error);
//         toast.error('Failed to fetch Why Join Us data');
//       }
//     };
//     fetchReasons();
//   }, []);

//   return (
//     <div className="w-full bg-white py-16 px-4">
//       <div className="max-w-6xl mx-auto space-y-16">
//         <h2 className="mb-10 sm:mb-12 text-center">
//           <span
//             className="font-figtree font-semibold
//                    text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
//                    text-black"
//           >
//             Why{' '}
//           </span>
//           <span
//             className="font-figtree font-light
//                    text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
//                    text-black"
//           >
//             Join us?
//           </span>
//         </h2>

//         <div className="text-center">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {reasons.length > 0 ? (
//               reasons.map((reason) => (
//                 <div
//                   key={reason._id}
//                   className="space-y-3
//                 text-left sm:text-center"
//                 >
//                   <h3
//                     className="font-figtree font-semibold
//                  text-base sm:text-lg md:text-xl
//                  text-black"
//                   >
//                     {reason.title}
//                   </h3>

//                   <p
//                     className="font-figtree font-light
//                 text-sm sm:text-base md:text-lg
//                 text-black
//                 leading-relaxed
//                 text-justify sm:text-center"
//                   >
//                     {reason.description}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500 col-span-full">No data found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyJoinUs;

import React, { useEffect, useState, useRef } from 'react';
import { getWhyJoinAPI } from '../../Api';
import { toast } from 'react-toastify';

const WhyJoinUs = () => {
  const [reasons, setReasons] = useState([]);
  const [visibleReasons, setVisibleReasons] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const res = await getWhyJoinAPI();
        if (res.success) setReasons(res.data);
      } catch (error) {
        console.error('Failed to fetch Why Join Us data:', error);
        toast.error('Failed to fetch Why Join Us data');
      }
    };
    fetchReasons();
  }, []);

  // Intersection Observer for fade-in + slide-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleReasons((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    Object.values(
      sectionRef.current?.querySelectorAll('[data-id]') || [],
    ).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [reasons]);

  return (
    <div ref={sectionRef} className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex items-center justify-center mb-12">
          <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 mr-6"></div>

          <h2 className="text-3xl md:text-4xl font-figtree text-center whitespace-nowrap">
            <span className="font-semibold">Why</span>{' '}
            <span className="font-light">Join us?</span>
          </h2>

          <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 ml-6"></div>
        </div>
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.length > 0 ? (
              reasons.map((reason) => (
                <div
                  key={reason._id}
                  data-id={reason._id}
                  className={`space-y-3 text-left sm:text-center transition-all duration-1000 ease-out
                    ${visibleReasons[reason._id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  {/* Title */}
                  <h3 className="font-figtree font-semibold text-base sm:text-lg md:text-xl text-black">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="font-figtree font-light text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify sm:text-center">
                    {reason.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No data found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
