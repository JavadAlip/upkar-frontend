// import React, { useEffect, useState } from 'react';
// import { getContactMain } from '../../Api';

// const ContactMain = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchContactMain();
//   }, []);

//   const fetchContactMain = async () => {
//     try {
//       const res = await getContactMain();
//       if (res.success) {
//         setData(res.data);
//       }
//     } catch (error) {
//       console.error('Failed to fetch Contact Main', error);
//     }
//   };

//   if (!data) return null;

//   return (
//     <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-center text-white">
//       {/* Background Image */}
//       <img
//         src={data.mainImage}
//         alt="Contact Banner"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Gradient Overlay (Bottom to Top) */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent"></div>

//       {/* Content */}
//       <div className="relative z-10 font-figtree text-center max-w-3xl px-4">
//         <h1 className="text-4xl md:text-5xl font-semibold mb-6">
//           {data.heading}
//         </h1>

//         <p className="text-lg md:text-xl font-figtree leading-relaxed">
//           {data.description}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ContactMain;

import React, { useEffect, useState } from 'react';
import { getContactMain } from '../../Api';

const ContactMain = () => {
  const [data, setData] = useState(null);
  const [scale, setScale] = useState(1.6);

  useEffect(() => {
    fetchContactMain();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const progress = Math.min(scrollY / sectionHeight, 1);
      const newScale = 1.4 - progress * 0.4;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchContactMain = async () => {
    try {
      const res = await getContactMain();
      if (res.success) {
        setData(res.data);
      }
    } catch (error) {
      console.error('Failed to fetch Contact Main', error);
    }
  };

  if (!data) return null;

  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={data.mainImage}
        alt="Contact Banner"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.4s ease-out',
        }}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 font-figtree text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          {data.heading}
        </h1>

        <p className="text-lg md:text-xl">{data.description}</p>
      </div>
    </section>
  );
};

export default ContactMain;
