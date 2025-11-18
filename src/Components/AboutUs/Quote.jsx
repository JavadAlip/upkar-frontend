// import React from "react";
// import QuoteUp from "../../assets/Icons/VectorUp.png";
// import QuoteDown from "../../assets/Icons/VectorDown.png";


// const Quote = () => {

//     return (
//         <div className="bg-[#050F27] text-white py-14 sm:py-16 md:py-18 lg:py-20 px-6 sm:px-10 md:px-16 font-[Figtree] relative overflow-hidden">

//             <div className="absolute top-13 left-5 lg:left-10 flex gap-1 sm:gap-2 opacity-90">
//                 <img
//                     src={QuoteUp}
//                     alt="quote up"
//                     className="w-4 sm:w-5 md:w-6 lg:w-7"
//                 />
//                 <img
//                     src={QuoteUp}
//                     alt="quote up"
//                     className="w-4 sm:w-5 md:w-6 lg:w-7"
//                 />
//             </div>

//             <div className="absolute top-13 right-5 lg:right-10 flex gap-1 sm:gap-2 opacity-90">
//                 <img
//                     src={QuoteDown}
//                     alt="quote down"
//                     className="w-4 sm:w-5 md:w-6 lg:w-7"
//                 />
//                 <img
//                     src={QuoteDown}
//                     alt="quote down"
//                     className="w-4 sm:w-5 md:w-6 lg:w-7"
//                 />
//             </div>

//             <div className="text-center mt-4 text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed max-w-[75%] lg:max-w-[90%] mx-auto">
//                 <p>
//                     Since four decades, Upkar Group of Companies is a pioneer in the property and real estate business of Bangalore. Under the able guidance and mentorship of Mr. K.H Khan, Upkar Developers has grown from strength to strength.
//                 </p>
//                 <p>
//                     He started his career as an LIC agent which gave him an opportunity to develop a deep sense of understanding of the industry. With his diligence and determination, he forayed into the real estate segment. He emerged as a qualified member of the chairman’s club for his quality work. He further strengthened his affiliation towards the real estate segment by taking up distribution of all major brands of cement. For five consecutive years, Upkar was conferred with the ‘Best Seller Award’ for the state of Karnataka and Goa.
//                 </p>
//                 <p>
//                     In 1974 when Mr. Khan decided set foot in the real estate segment in Bangalore, it was still at its nascent stage. His main aim was to offering quality housing projects at affordable prices. As he established Upkar, he not just focussed to reengineering housing in India, but also laid a strong emphasis on environment management, in order to offer a project that contributed generously to the welfare of the society. With the ongoing support of a dynamic workforce, Upkar is set to take bigger strides in the near future under the leadership of its visionary and chairman.
//                 </p>
//             </div>

//             <div className="max-w-5xl mx-auto mt-10 text-right px-2 relative z-10">
//                 <h3 className="font-semibold text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
//                     Mr. K.H Khan
//                 </h3>
//                 <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
//                     Chairman & Managing Director
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Quote;


import React, { useEffect, useState } from "react";
import QuoteUp from "../../assets/Icons/VectorUp.png";
import QuoteDown from "../../assets/Icons/VectorDown.png";
import { getAllQuotes } from "../../Api";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await getAllQuotes();
        console.log("QUOTE API RESPONSE ===>", res);

        if (res?.quotes?.length > 0) {
          setQuote(res.quotes[0]); // backend returns array
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  if (!quote) return <div className="text-center py-10 text-white">Loading...</div>;

  return (
    <div className="bg-[#050F27] text-white py-14 sm:py-16 md:py-18 lg:py-20 px-6 sm:px-10 md:px-16 font-[Figtree] relative overflow-hidden">

      {/* QUOTE ICONS TOP LEFT */}
      <div className="absolute top-13 left-5 lg:left-10 flex gap-1 sm:gap-2 opacity-90">
        <img src={QuoteUp} alt="quote up" className="w-4 sm:w-5 md:w-6 lg:w-7" />
        <img src={QuoteUp} alt="quote up" className="w-4 sm:w-5 md:w-6 lg:w-7" />
      </div>

      {/* QUOTE ICONS TOP RIGHT */}
      <div className="absolute top-13 right-5 lg:right-10 flex gap-1 sm:gap-2 opacity-90">
        <img src={QuoteDown} alt="quote down" className="w-4 sm:w-5 md:w-6 lg:w-7" />
        <img src={QuoteDown} alt="quote down" className="w-4 sm:w-5 md:w-6 lg:w-7" />
      </div>

      {/* DYNAMIC QUOTE CONTENT (REPLACES 3 <p> TAGS) */}
      <div className="text-center mt-4 text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed max-w-[75%] lg:max-w-[90%] mx-auto">
        <p>{quote.quoteContent}</p>
      </div>

      {/* NAME & POSITION */}
      <div className="max-w-5xl mx-auto mt-10 text-right px-2 relative z-10">
        <h3 className="font-semibold text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
          {quote.name}
        </h3>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
          {quote.position}
        </p>
      </div>
    </div>
  );
};

export default Quote;
