// import React, { useState, useEffect } from 'react';
// import { getBanners } from '../../Api';
// import Connect from '../../assets/Icons/connect.png';
// import { useNavigate } from 'react-router-dom';
// import AboveIcon from '../../assets/aboveIcon.png';

// const HomeMain = () => {
//   const [banner, setBanner] = useState(null);
//   const token = localStorage.getItem('adminToken');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const data = await getBanners(token);
//         if (data && data.length > 0) setBanner(data[0]);
//       } catch (error) {
//         console.error('Error fetching banners:', error);
//       }
//     };
//     fetchBanner();
//   }, [token]);

//   return (
//     <div className="w-full flex flex-col justify-center items-center px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
//       <div className="relative w-full group cursor-pointer mb-6 lg:mb-12">
//         <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
//           {banner?.image && (
//             <img
//               src={banner.image}
//               alt={banner?.title || 'Home Main'}
//               className="w-full h-full object-cover transition-transform duration-300 rounded-[30px]"
//             />
//           )}

//           <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-[30px]"></div>

//           <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-24">
//             <h1
//               className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 sm:mb-6"
//               style={{ fontFamily: "'Figtree', sans-serif" }}
//             >
//               <span className="font-semibold">
//                 {banner?.title?.split('\n')[0]}
//               </span>
//               <br />
//               <span className="font-bold">{banner?.title?.split('\n')[1]}</span>
//             </h1>

//             <p
//               className=" hidden sm:block  text-white   max-w-md sm:max-w-lg md:max-w-xl  text-sm sm:text-lg md:text-xl lg:text-2xl  mb-6 "
//               style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}
//             >
//               {banner?.subtitle || ''}
//             </p>

//             <div className="hidden sm:flex items-start">
//               <img
//                 src={Connect}
//                 alt="Connect"
//                 onClick={() => navigate('/contact')}
//                 className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           <div className="absolute bottom-3 sm:bottom-10 right-3 sm:right-8">
//             <div className=" bg-white  px-2 py-1  sm:px-6 sm:py-2  rounded-lg sm:rounded-full  shadow-lg  flex items-center gap-1 sm:gap-2 ">
//               <p className=" text-black text-[9px] sm:text-[12px] md:text-[14px] font-normal">
//                 RERA & BMRDA Approved Projects
//               </p>

//               <img
//                 src={AboveIcon}
//                 alt="Above Icon"
//                 className="w-4 sm:w-8 md:w-10 h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeMain;

// import React, { useState, useEffect } from 'react';
// import { getBanners } from '../../Api';
// import Connect from '../../assets/Icons/connect.png';
// import { useNavigate } from 'react-router-dom';
// import AboveIcon from '../../assets/aboveIcon.png';

// const HomeMain = () => {
//   const [banner, setBanner] = useState(null);
//   const token = localStorage.getItem('adminToken');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const data = await getBanners(token);
//         if (data && data.length > 0) setBanner(data[0]);
//       } catch (error) {
//         console.error('Error fetching banners:', error);
//       }
//     };
//     fetchBanner();
//   }, [token]);

//   return (
//     <div className="w-full">
//       <div className="relative w-full group cursor-pointer">
//         <div className="relative w-full aspect-[16/9] overflow-hidden">
//           {banner?.image && (
//             <img
//               src={banner.image}
//               alt={banner?.title || 'Home Main'}
//               className="w-full h-full object-cover"
//             />
//           )}

//           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

//           <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-24">
//             <h1
//               className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 sm:mb-6"
//               style={{ fontFamily: "'Figtree', sans-serif" }}
//             >
//               <span className="font-semibold">
//                 {banner?.title?.split('\n')[0]}
//               </span>
//               <br />
//               <span className="font-bold">{banner?.title?.split('\n')[1]}</span>
//             </h1>

//             <p
//               className="hidden sm:block text-white max-w-md sm:max-w-lg md:max-w-xl text-sm sm:text-lg md:text-xl lg:text-2xl mb-6"
//               style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}
//             >
//               {banner?.subtitle || ''}
//             </p>

//             <div className="hidden sm:flex items-start">
//               <img
//                 src={Connect}
//                 alt="Connect"
//                 onClick={() => navigate('/contact')}
//                 className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           <div className="absolute bottom-3 sm:bottom-10 right-3 sm:right-8">
//             <div className="bg-white px-2 py-1 sm:px-6 sm:py-2 rounded-lg sm:rounded-full shadow-lg flex items-center gap-1 sm:gap-2">
//               <p className="text-black text-[9px] sm:text-[12px] md:text-[14px] font-normal">
//                 RERA & BMRDA Approved Projects
//               </p>

//               <img
//                 src={AboveIcon}
//                 alt="Above Icon"
//                 className="w-4 sm:w-8 md:w-10 h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeMain;
import React, { useState, useEffect } from 'react';
import { getBanners } from '../../Api';
import Connect from '../../assets/Icons/connect.png';
import { useNavigate } from 'react-router-dom';
import AboveIcon from '../../assets/aboveIcon.png';

const HomeMain = () => {
  const [banner, setBanner] = useState(null);
  const [animatedTitle1, setAnimatedTitle1] = useState('');
  const [animatedTitle2, setAnimatedTitle2] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [animatedSubtitle, setAnimatedSubtitle] = useState('');
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBanners(token);
        if (data && data.length > 0) setBanner(data[0]);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanner();
  }, [token]);

  // 🔥 Letter Animation Effect (1 second for title)
  useEffect(() => {
    if (!banner?.title) return;

    const titleLines = banner.title.split('\n');
    const line1 = titleLines[0] || '';
    const line2 = titleLines[1] || '';
    const subtitle = banner.subtitle || '';

    animateText(line1, setAnimatedTitle1, 1000, () => {
      // After line1 animation completes, animate line2
      animateText(line2, setAnimatedTitle2, 1000, () => {
        // After both lines, fade in subtitle
        setAnimatedSubtitle(subtitle);
        setShowSubtitle(true);
      });
    });
  }, [banner]);

  const animateText = (text, setter, duration, callback) => {
    let index = 0;
    setter('');
    const intervalTime = duration / text.length;

    const interval = setInterval(() => {
      index++;
      setter(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, intervalTime);
  };

  return (
    <div className="w-full">
      <div className="relative w-full group cursor-pointer">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {banner?.image && (
            <img
              src={banner.image}
              alt={banner?.title || 'Home Main'}
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-24">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 sm:mb-6 font-figtree">
              <span className="font-semibold">{animatedTitle1}</span>
              <br />
              <span className="font-bold">{animatedTitle2}</span>
            </h1>

            <p
              className={`block text-white max-w-[90%] sm:max-w-lg md:max-w-xl text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6
                font-figtree font-normal
                transition-opacity duration-1000 ease-in-out
                ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}
            >
              {animatedSubtitle}
            </p>

            <div className="hidden sm:flex items-start">
              <img
                src={Connect}
                alt="Connect"
                onClick={() => navigate('/contact')}
                className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="absolute bottom-3 sm:bottom-10 right-3 sm:right-8">
            <div className="bg-white px-2 py-1 sm:px-6 sm:py-2 rounded-lg sm:rounded-full shadow-lg flex items-center gap-1 sm:gap-2">
              <p className="text-black text-[9px] sm:text-[12px] md:text-[14px] font-normal">
                RERA & BMRDA Approved Projects
              </p>
              <img
                src={AboveIcon}
                alt="Above Icon"
                className="w-4 sm:w-8 md:w-10 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
