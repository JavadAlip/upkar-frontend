// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import Career1 from "../../assets/career1.png";
// import Career2 from "../../assets/CompletedPro3.png";
// import Career3 from "../../assets/PrjctGetin.png";
// import Career4 from "../../assets/PrjctMain6.png";
// import JoinUs from "../../assets/Icons/joinUs.png";


// const CareerMain = () => {
//   return (
//     <div className="w-full bg-white py-16 px-4">
//       <div className="max-w-6xl mx-auto space-y-16">

//         {/* Top Section - Heading and CTA */}
//         <div className="text-center space-y-8">
//           {/* Title */}
//           <h2 className="text-[48px]">
//             <span className="font-[Figtree] font-light text-black">
//               Careers at{" "}
//             </span>
//             <span className="font-[Figtree] font-semibold text-black">
//               Upkar Developers
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="font-[Figtree] font-light text-[20px] text-[#050F27] leading-[1.2] max-w-4xl mx-auto">
//             Join a legacy of excellence that spans over 50 years. At Upkar Developers, we don't just build structures; we shape communities and create spaces that stand the test of time. We are a team of visionaries, engineers, and builders dedicated to uncompromising quality, timeless values, and a customer-centric approach.
//           </p>


//           {/* Join Us Button */}
//           <a href="/your-link" className="inline-block">
//             <img
//               src={JoinUs}
//               alt="Join Us"
//               className="cursor-pointer hover:opacity-80 transition-all duration-300"
//             />
//           </a>

//         </div>

//         {/* Image Gallery Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-96">
//           {/* Left - Large Image (2 rows) */}
//           <div className="h-full">
//             <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src={Career1}
//                 alt="Upkar Development"
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           {/* Middle - Two Stacked Images */}
//           <div className="flex flex-col gap-4 h-full">
//             <div className="flex-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src={Career2}
//                 alt="Upkar Project"
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <div className="flex-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src={Career2}
//                 alt="Upkar Community"
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           {/* Right - Two Images */}
//           <div className="flex flex-col gap-4 h-full">
//             <div className="flex-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src={Career3}
//                 alt="Upkar Aerial"
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <div className="flex-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src={Career4}
//                 alt="Upkar Habitat"
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Why Join Us Section */}
//         <div>
//           <h3 className="text-3xl md:text-4xl font-bold">
//             Why <span className="font-normal">Join us?</span>
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerMain;


// for testing
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Career1 from "../../assets/career1.png";
import Career2 from "../../assets/CompletedPro3.png";
import Career3 from "../../assets/PrjctGetin.png";
import Career4 from "../../assets/PrjctMain6.png";
import JoinUs from "../../assets/Icons/joinUs.png";


const CareerMain = () => {
  return (
    <div className="w-full bg-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">

        {/* Top Section - Heading and CTA */}
        <div className="text-center space-y-6 md:space-y-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-[48px]">
            <span className="font-[Figtree] font-light text-black">
              Careers at{" "}
            </span>
            <span className="font-[Figtree] font-semibold text-black">
              Upkar Developers
            </span>
          </h2>

          {/* Description */}
          <p className="font-[Figtree] font-light text-base md:text-lg lg:text-[20px] text-[#050F27] leading-[1.4] max-w-4xl mx-auto px-2">
            Join a legacy of excellence that spans over 50 years. At Upkar Developers, we don't just build structures; we shape communities and create spaces that stand the test of time. We are a team of visionaries, engineers, and builders dedicated to uncompromising quality, timeless values, and a customer-centric approach.
          </p>

          {/* Join Us Button */}
          <div className="flex justify-center pt-2">
            <a href="/your-link" className="inline-block">
              <img
                src={JoinUs}
                alt="Join Us"
                className="w-32 md:w-40 lg:w-auto cursor-pointer hover:opacity-80 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 min-h-80 md:h-96">
            {/* Left - Large Image */}
            <div className="h-64 md:h-full">
              <div className="relative h-full rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={Career1}
                  alt="Upkar Development"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Middle - Two Stacked Images */}
            <div className="flex flex-col gap-3 md:gap-4 h-64 md:h-full">
              <div className="flex-1 rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={Career2}
                  alt="Upkar Project"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={Career2}
                  alt="Upkar Community"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right - Two Images */}
            <div className="flex flex-col gap-3 md:gap-4 h-64 md:h-full">
              <div className="flex-1 rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={Career3}
                  alt="Upkar Aerial"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={Career4}
                  alt="Upkar Habitat"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" md:pt-12">
        
        </div>
      </div>
    </div>
  );
};

export default CareerMain;