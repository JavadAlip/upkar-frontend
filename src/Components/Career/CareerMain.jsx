// import React, { useEffect, useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import JoinUs from '../../assets/Icons/joinUs.png';
// import { getCareerMainAPI } from '../../Api';

// const CareerMain = () => {
//   const [careerDescription, setCareerDescription] = useState('');

//   useEffect(() => {
//     const fetchCareerDescription = async () => {
//       try {
//         const res = await getCareerMainAPI();
//         if (res.success && res.data.length > 0) {
//           setCareerDescription(res.data[0].careerDescription);
//         }
//       } catch (error) {
//         console.error('Failed to fetch career description:', error);
//       }
//     };
//     fetchCareerDescription();
//   }, []);

//   const handleScrollToContact = () => {
//     const section = document.getElementById('job-openings');
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="w-full bg-white py-8 md:py-16 px-4">
//       <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
//         <div className="text-center space-y-6 md:space-y-8">
//           <h2 className="text-3xl md:text-4xl lg:text-[48px]">
//             <span className="font-[Figtree] font-light text-black">
//               Careers at{' '}
//             </span>
//             <span className="font-[Figtree] font-semibold text-black">
//               Upkar Developers
//             </span>
//           </h2>

//           <p
//             className="font-figtree font-light
//              text-sm sm:text-base md:text-lg lg:text-[20px]
//              text-black
//              leading-relaxed
//              max-w-full sm:max-w-[90%] md:max-w-4xl
//              mx-auto
//              px-2 sm:px-0
//              text-justify sm:text-center
//              whitespace-pre-line"
//           >
//             {careerDescription || 'Loading career description...'}
//           </p>

//           <div className="flex justify-center pt-2">
//             <img
//               src={JoinUs}
//               alt="Join Us"
//               onClick={handleScrollToContact}
//               className="w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px] xl:w-[190px] cursor-pointer hover:opacity-80 transition-all duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerMain;
import React, { useEffect, useState } from 'react';
import JoinUs from '../../assets/Icons/joinUs.png';
import { getCareerMainAPI } from '../../Api';

const CareerMain = () => {
  const [careerDescription, setCareerDescription] = useState('');
  const [showContent, setShowContent] = useState(false);

  const fullHeading = 'Careers at Upkar Developers';

  useEffect(() => {
    const fetchCareerDescription = async () => {
      try {
        const res = await getCareerMainAPI();
        if (res.success && res.data.length > 0) {
          setCareerDescription(res.data[0].careerDescription);
        }
      } catch (error) {
        console.error('Failed to fetch career description:', error);
      }
    };

    fetchCareerDescription();
  }, []);

  // 🔥 Show everything after 1 second
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

  return (
    <div className="w-full bg-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <div
          className={`text-center space-y-6 md:space-y-8
          transition-all duration-1000 ease-out
          ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3x font-figtree md:text-4xl lg:text-[48px]">
            <span className="font-light text-black">
              {fullHeading.split('Upkar')[0]}
            </span>
            <span className="font-semibold text-black">
              Upkar{fullHeading.split('Upkar')[1]}
            </span>
          </h2>

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
            {careerDescription || 'Loading career description...'}
          </p>

          <div className="flex justify-center pt-2">
            <img
              src={JoinUs}
              alt="Join Us"
              onClick={handleScrollToContact}
              className="
                w-[110px] sm:w-[130px] md:w-[150px] lg:w-[150px] xl:w-[150px]
                h-auto
                cursor-pointer
                transition-transform duration-300 ease-out
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerMain;
