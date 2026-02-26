import React, { useState, useEffect } from 'react';
import QuoteUp from '../../assets/Icons/VectorUp.png';
import QuoteDown from '../../assets/Icons/VectorDown.png';
import CertificationImage from '../../assets/Certification.png';
import { getQuotesAPI } from '../../Api';

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
      console.error('Error fetching quotes:', error);
    }
  };

  if (!latestQuote) return null;

  return (
    <div className="px-4 lg:px-20 py-6 sm:py-8 md:py-10 lg:py-12">
      <div
        className="px-4 lg:px-10 py-8 sm:py-10 md:py-16 lg:py-24 
                 relative rounded-[23px] overflow-hidden 
                 flex justify-center items-center"
        style={{
          backgroundImage: `url(${CertificationImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="relative 
                   w-full sm:w-[95%] md:w-[85%] lg:w-[85%]
                   bg-gradient-to-b from-white/50 via-white/30 to-white/0 
                   backdrop-blur-lg border border-white/20 
                   rounded-[23px] 
                   px-4 sm:px-6 md:px-10 lg:px-14 
                   py-8 sm:py-10 md:py-16 lg:py-20 
                   shadow-lg"
        >
          {/* Content Wrapper */}
          <div
            className="relative 
                        max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] 
                        mx-auto"
          >
            {/* Top Quote Icons - Near Text */}
            <div
              className="absolute 
                          -top-6 left-0 
                          lg:-left-10 lg:-top-8 
                          flex gap-1 opacity-90"
            >
              <img
                src={QuoteUp}
                alt="quote up"
                className="w-4 sm:w-5 md:w-6 lg:w-8"
              />
              <img
                src={QuoteUp}
                alt="quote up"
                className="w-4 sm:w-5 md:w-6 lg:w-8"
              />
            </div>

            {/* Paragraph Style Text */}
            <p
              className="mt-6
                       text-white 
                       text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]
                       leading-relaxed
                       text-justify"
            >
              {latestQuote.text}
            </p>

            {/* Bottom Quote Icons */}
            <div className="flex justify-end mt-6">
              <div className="flex gap-1 opacity-90">
                <img
                  src={QuoteDown}
                  alt="quote down"
                  className="w-4 sm:w-5 md:w-6 lg:w-8"
                />
                <img
                  src={QuoteDown}
                  alt="quote down"
                  className="w-4 sm:w-5 md:w-6 lg:w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
