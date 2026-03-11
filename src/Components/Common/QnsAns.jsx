// import React, { useState, useEffect } from 'react';
// import { ChevronDown, ArrowRight } from 'lucide-react';
// import { getQuestionsAPI } from '../../Api';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const QnsAns = () => {
//   const [openIndex, setOpenIndex] = useState(-1);
//   const [faqs, setFaqs] = useState([]);
//   const [isVisible, setIsVisible] = useState(false);
//   const token = localStorage.getItem('adminToken');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchFAQs();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 200);
//     return () => clearTimeout(timer);
//   }, []);

//   const fetchFAQs = async () => {
//     try {
//       const data = await getQuestionsAPI(token);
//       setFaqs(data);
//     } catch (error) {
//       console.error('Error fetching FAQs:', error);
//       toast.error('Failed to fetch Q&As!');
//     }
//   };

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div
//       className="w-full bg-white px-4 lg:px-24 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0px)' : 'translateY(40px)',
//         transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
//       }}
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
//         {/* LEFT SIDE */}
//         <div className="text-left p-4 flex flex-col justify-between h-full">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px]  leading-tight">
//             Invest smarter with <br />
//             <span className="font-semibold text-[#2D5C3A] ">
//               Right Answers !
//             </span>
//           </h2>

//           <div className="hidden lg:block">
//             <p className="text-gray-600 mb-6 text-base sm:text-lg">
//               Still any doubts in your mind?
//             </p>

//             <button
//               onClick={() => navigate('/contact')}
//               className="inline-flex items-center bg-[#2D5C3A] rounded-full shadow-md hover:scale-105 transition-transform duration-300"
//             >
//               <span className="px-6 py-3 text-white text-sm sm:text-base font-medium">
//                 Connect us
//               </span>
//               <span className="relative -mr-1 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#2D5C3A]">
//                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D5C3A]" />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* FAQ SECTION */}
//         <div className="space-y-4">
//           {faqs.length === 0 && (
//             <p className="text-gray-500 text-center py-6">No Q&As found.</p>
//           )}

//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className={`group border rounded-2xl overflow-hidden cursor-pointer
//                 transition-all duration-300 transform border-gray-200
//                 ${
//                   isOpen
//                     ? 'bg-[#2D5C3A] scale-[1.02]'
//                     : 'bg-white hover:bg-[#2D5C3A] hover:scale-[1.02]'
//                 }`}
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex items-center justify-between p-5 text-left"
//                 >
//                   <span
//                     className={`pr-4 text-base sm:text-lg md:text-xl lg:text-xl
//                     font-medium
//                     transition-colors duration-300
//                     ${
//                       isOpen
//                         ? 'text-white'
//                         : 'text-black group-hover:text-white'
//                     }`}
//                   >
//                     {index + 1}. {faq.question}
//                   </span>

//                   <ChevronDown
//                     className={`w-5 h-5 flex-shrink-0 transition-all duration-300
//                     ${
//                       isOpen
//                         ? 'text-white rotate-180'
//                         : 'text-gray-600 group-hover:text-white'
//                     }`}
//                   />
//                 </button>

//                 {/* ANSWER */}
//                 <div
//                   className="overflow-hidden transition-all duration-500"
//                   style={{
//                     maxHeight: isOpen ? '300px' : '0px',
//                     opacity: isOpen ? 1 : 0,
//                   }}
//                 >
//                   <div className="px-5 pb-5 bg-white">
//                     <p className="text-black text-base sm:text-lg md:text-xl lg:text-xl font-normal ">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QnsAns;

import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { getQuestionsAPI } from '../../Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const QnsAns = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [faqs, setFaqs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  useEffect(() => {
    fetchFAQs();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const fetchFAQs = async () => {
    try {
      const data = await getQuestionsAPI(token);
      setFaqs(data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      toast.error('Failed to fetch Q&As!');
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="w-full bg-white py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(40px)',
        transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* SAME CONTAINER WIDTH AS MAP */}
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16">
          {/* LEFT SIDE */}
          <div className="text-left p-4 flex flex-col justify-between h-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
              Invest smarter with <br />
              <span className="font-semibold text-[#2D5C3A]">
                Right Answers !
              </span>
            </h2>

            <div className="hidden lg:block">
              <p className="text-gray-600 mb-6 text-base sm:text-lg">
                Still any doubts in your mind?
              </p>

              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center bg-[#2D5C3A] rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              >
                <span className="px-6 py-3 text-white text-sm sm:text-base font-medium">
                  Connect us
                </span>

                <span className="relative -mr-1 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#2D5C3A]">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D5C3A]" />
                </span>
              </button>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="space-y-4">
            {faqs.length === 0 && (
              <p className="text-gray-500 text-center py-6">No Q&As found.</p>
            )}

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`group border rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-300 transform border-gray-200
                  ${
                    isOpen
                      ? 'bg-[#2D5C3A] scale-[1.02]'
                      : 'bg-white hover:bg-[#2D5C3A] hover:scale-[1.02]'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span
                      className={`pr-4 text-base sm:text-lg md:text-xl lg:text-xl
                      font-medium transition-colors duration-300
                      ${
                        isOpen
                          ? 'text-white'
                          : 'text-black group-hover:text-white'
                      }`}
                    >
                      {index + 1}. {faq.question}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300
                      ${
                        isOpen
                          ? 'text-white rotate-180'
                          : 'text-gray-600 group-hover:text-white'
                      }`}
                    />
                  </button>

                  {/* ANSWER */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-5 pb-5 bg-white">
                      <p className="text-black text-base sm:text-lg md:text-xl lg:text-xl font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnsAns;
