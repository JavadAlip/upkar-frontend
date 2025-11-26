import React, { useState, useEffect } from "react";
import QuoteUp from "../../assets/Icons/VectorUp.png";
import QuoteDown from "../../assets/Icons/VectorDown.png";
import CertificationImage from "../../assets/Certification.png";
import { getQuotesAPI } from "../../Api";

const Quote = () => {
  const [latestQuote, setLatestQuote] = useState(null);

  useEffect(() => {
    fetchLatestQuote();
  }, []);

  const fetchLatestQuote = async () => {
    try {
      const data = await getQuotesAPI();
      if (data && data.length > 0) {
        setLatestQuote(data[data.length - 1]);
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  if (!latestQuote) return null;

  return (
    <div className="px-4 lg:px-20 py-6 sm:py-8 md:py-10 lg:py-12">
      <div
        className="px-4 lg:px-10 py-10 sm:py-12 md:py-20 lg:py-24 relative rounded-[23px] overflow-hidden flex justify-center items-center"
        style={{
          backgroundImage: `url(${CertificationImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-[90%] bg-gradient-to-b from-white/50 via-white/30 via-white/20 to-white/0 backdrop-blur-lg border border-white/20 rounded-[23px] px-4 lg:px-10 py-10 sm:py-12 md:py-20 lg:py-24 text-center shadow-lg">

          <div className="absolute top-10 left-10 flex gap-2 opacity-90">
            <img src={QuoteUp} alt="quote up" className="w-6 lg:w-8" />
            <img src={QuoteUp} alt="quote up" className="w-6 lg:w-8" />
          </div>

          {/* Quote Text */}
          <p className="text-center mt-8 text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-snug sm:leading-tight md:leading-tight lg:leading-[1.2] max-w-[60%] font-[Figtree] mx-auto">
            {latestQuote.text}
          </p>

          <div className="absolute bottom-10 right-10 flex gap-2 opacity-90">
            <img src={QuoteDown} alt="quote down" className="w-6 lg:w-8" />
            <img src={QuoteDown} alt="quote down" className="w-6 lg:w-8" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Quote;
