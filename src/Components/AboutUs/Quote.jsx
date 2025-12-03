import React, { useEffect, useState } from 'react';
import QuoteUp from '../../assets/Icons/VectorUp.png';
import QuoteDown from '../../assets/Icons/VectorDown.png';
import { getAllQuotes } from '../../Api';

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await getAllQuotes();
        console.log('QUOTE API RESPONSE ===>', res);

        if (res?.quotes?.length > 0) {
          setQuote(res.quotes[0]);
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  if (!quote)
    return <div className="text-center py-10 text-white">Loading...</div>;

  return (
    <div className="bg-[#050F27] text-white py-14 sm:py-16 md:py-18 lg:py-20 px-6 sm:px-10 md:px-16 font-[Figtree] relative overflow-hidden">
      <div className="absolute top-13 left-5 lg:left-10 flex gap-1 sm:gap-2 opacity-90">
        <img
          src={QuoteUp}
          alt="quote up"
          className="w-4 sm:w-5 md:w-6 lg:w-7"
        />
        <img
          src={QuoteUp}
          alt="quote up"
          className="w-4 sm:w-5 md:w-6 lg:w-7"
        />
      </div>

      <div className="text-center mt-4 text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-light leading-snug sm:leading-relaxed max-w-[75%] lg:max-w-[90%] mx-auto">
        <p>{quote.quoteContent}</p>
      </div>

      <div className="w-full flex justify-end mt-3 pr-4 sm:pr-10">
        <div className="flex gap-1 sm:gap-2 opacity-90">
          <img
            src={QuoteDown}
            alt="quote down"
            className="w-4 sm:w-5 md:w-6 lg:w-7"
          />
          <img
            src={QuoteDown}
            alt="quote down"
            className="w-4 sm:w-5 md:w-6 lg:w-7"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 text-right px-2 relative z-10">
        <h3 className="font-semibold text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-light">
          {quote.name}
        </h3>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-[24px] font-light">
          {quote.position}
        </p>
      </div>
    </div>
  );
};

export default Quote;
