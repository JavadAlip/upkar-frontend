// import React, { useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import GetInTocuh1 from "../../assets/GetInTouch1.png";
// import getinBtn from "../../assets/Icons/getinBtn.png";

// const GetInTouch = () => {
//   const [formData, setFormData] = useState({
//     projectType: '',
//     preferredEstate: '',
//     name: '',
//     email: '',
//     phone: '',
//     existingCustomer: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="w-full py-16 px-4 font-sans">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         {/* <h2 className="text-4xl md:text-5xl font-serif mb-12">
//           Get in Touch
//         </h2> */}
//         <h2
//           className="mb-16 text-start"
//           style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '48px', color: '#000000' }}
//         >
//           <span style={{ fontWeight: 500 }}>Get in </span>
//           <span style={{ fontWeight: 700 }}>Touch</span>
//         </h2>

//         {/* Main Content - Full Width Image with Overlaying Form */}
//         <div className="relative rounded-3xl overflow-hidden shadow-2xl">

//           {/* Full Width Background Image */}
//           <div
//             className="w-full min-h-[600px] lg:min-h-[700px] bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${GetInTocuh1})`
//             }}
//           >
//             {/* Dark Overlay */}
//             {/* <div className="absolute inset-0 bg-black/40"></div> */}

//             {/* Content Container */}
//             <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-16 py-12">

//               {/* Left Side - Text Content */}
//               <div className="text-white max-w-md">
//                 <h3
//                   className="leading-tight block text-center"
//                   style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "48px" }}
//                 >
//                   <span style={{ fontWeight: 300 }}>Ready to take the</span>
//                   <br />
//                   <span
//                     className="block text-center"
//                     style={{ fontWeight: 300, marginBottom: "0" }}
//                   >
//                     next step?
//                   </span>
//                   <span className='block text-center' style={{ fontWeight: 500, display: "block", marginTop: "0" }}>
//                     Let's Connect!
//                   </span>
//                 </h3>
//               </div>



//               {/* Right Side - Form Card */}
//               <div className="bg-white rounded-3xl p-8 md:p-10 w-full max-w-xl shadow-xl">

//                 <div className="space-y-5">

//                   {/* Select a Project Type */}
//                   <div>
//                     <select
//                       name="projectType"
//                       value={formData.projectType}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-black bg-white"
//                       style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: "20px" }}
//                     >
//                       <option value="">Select a Project Type</option>
//                       <option value="ongoing">Ongoing Project</option>
//                       <option value="upcoming">Upcoming Project</option>
//                       <option value="completed">Completed Project</option>
//                     </select>
//                   </div>

//                   {/* Preferred Estate */}
//                   <div>
//                     <select
//                       name="preferredEstate"
//                       value={formData.preferredEstate}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-black bg-white"
//                       style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: "20px" }}
//                     >
//                       <option value="">Preferred Estate</option>
//                       <option value="villa">Villa</option>
//                       <option value="apartment">Apartment</option>
//                       <option value="plot">Plot</option>
//                     </select>
//                   </div>


//                   {/* Name */}
//                   <div>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white placeholder-black"
//                       style={{
//                         fontFamily: "'Figtree', sans-serif",
//                         fontWeight: 300,
//                         fontSize: "20px",
//                         color: "black",
//                       }}
//                     />
//                   </div>


//                   {/* Email */}
//                   <div>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email id"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white placeholder-black"
//                       style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: "20px", color: "black" }}
//                     />
//                   </div>


//                   {/* Phone Number */}
//                   <div>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white placeholder-black"
//                       style={{
//                         fontFamily: "'Figtree', sans-serif",
//                         fontWeight: 300,
//                         fontSize: "20px",
//                         color: "black",
//                       }}
//                     />
//                   </div>


//                   {/* Are you an Existing customer? */}
//                   <div>
//                     <select
//                       name="existingCustomer"
//                       value={formData.existingCustomer}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-black bg-white"
//                       style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: "20px", color: "black" }}
//                     >
//                       <option value="">Are you an Existing customer ?</option>
//                       <option value="yes">Yes</option>
//                       <option value="no">No</option>
//                     </select>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="mt-6 w-max mx-auto">
//                     <img
//                       src={getinBtn}
//                       alt="Send Enquiry"
//                       className="w-80 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
//                       onClick={handleSubmit}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetInTouch;



import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import GetInTocuh1 from "../../assets/GetInTouch1.png";



const GetInTouch = () => {

  const [formData, setFormData] = useState({
    projectType: '',
    preferredEstate: '',
    name: '',
    email: '',
    phone: '',
    existingCustomer: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 mb-0 lg:mb-2 font-sans">
      <h2 className="mb-4 lg:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight" style={{ fontFamily: "'Noto Serif JP', serif" }}>
        <span style={{ fontWeight: 500 }}>Get in </span>
        <span style={{ fontWeight: 700 }}>Touch</span>
      </h2>

      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${GetInTocuh1})` }}>
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-10 gap-4 sm:gap-6 md:gap-8 lg:gap-0">

            <div className="text-white max-w-md text-center lg:text-left px-2 sm:px-4 mb-8 lg:mb-0">
              <h3
                className="leading-snug sm:leading-snug md:leading-normal lg:leading-relaxed block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                <span>Ready to take the</span>
                <br />
                <span
                  className="block text-center"
                  style={{ fontWeight: 300, marginBottom: "0" }}
                >
                  next step?
                </span>
                <span className='block text-center' style={{ fontWeight: 600, display: "block", marginTop: "0" }}>
                  Let's Connect!
                </span>
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 w-full max-w-md sm:max-w-lg md:max-w-xl shadow-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center gap-5">

                <div className="relative w-full">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-[15px] lg:px-[25px] py-[8px] lg:py-[10px] border border-black rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black appearance-none pr-10"
                    style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}
                  >
                    <option value="">Select a Project Type</option>
                    <option value="ongoing">Ongoing Project</option>
                    <option value="upcoming">Upcoming Project</option>
                    <option value="completed">Completed Project</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <KeyboardArrowDownOutlinedIcon className="w-2 h-2 lg:w-4 lg:h-4 text-black" />
                  </div>
                </div>

                <div className="relative w-full">
                  <select
                    name="preferredEstate"
                    value={formData.preferredEstate}
                    onChange={handleChange}
                    className="w-full px-[15px] lg:px-[25px] py-[8px] lg:py-[10px] border border-black rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black appearance-none pr-10"
                    style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

                  >
                    <option value="">Preferred Estate</option>
                    <option value="villa">Villa</option>
                    <option value="apartment">Apartment</option>
                    <option value="plot">Plot</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <KeyboardArrowDownOutlinedIcon className="w-2 h-2 lg:w-4 lg:h-4 text-black" />
                  </div>
                </div>


                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-[15px] lg:px-[25px] py-[8px] lg:py-[10px] border border-black rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                  style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email id"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-[15px] lg:px-[25px] py-[8px] lg:py-[10px] border border-black rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                  style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-[15px] lg:px-[25px] py-[8px] lg:py-[10px] border border-black rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                  style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}
                />

                <div className="relative w-full">
                  <select
                    name="existingCustomer"
                    value={formData.existingCustomer}
                    onChange={handleChange}
                    className="w-full px-[15px] lg:px-[25px] py-[8px] lg:py-[10px] border border-black rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black appearance-none pr-10"
                    style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

                  >
                    <option value="">Are you an Existing customer ?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <KeyboardArrowDownOutlinedIcon className="w-2 h-2 lg:w-4 lg:h-4 text-black" />
                  </div>
                </div>


                <button
                  aria-label="Send Enquiry"
                  className="inline-flex items-center bg-[#050F27] rounded-full shadow-md mt-4 md:mt-6 lg:mt-10 transition-colors hover:bg-[#0b2444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#071334]"
                >
                  <span className="px-[15px] lg:px-[25px] py-[8px] lg:py-[10px] text-white text-sm sm:text-base md:text-lg font-medium">
                    Send Enquiry
                  </span>
                  <span className="relative -mr-1 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#071334]">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#071334]" />
                  </span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default GetInTouch;
