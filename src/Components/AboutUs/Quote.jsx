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
    return (
      <div className="text-center py-10 bg-black text-white">Loading...</div>
    );

  return (
    <div
      className="bg-black text-white 
                    py-12 sm:py-14 md:py-16 lg:py-20 
                    px-4 sm:px-8 md:px-14 
                    font-figtree"
    >
      <div
        className="relative 
                      max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] 
                      mx-auto"
      >
        {/* Top Quote Icon */}
        <div
          className="absolute 
                        -top-6 left-0 
                        lg:-left-10 lg:-top-8 
                        flex gap-1 opacity-80"
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
                      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                      font-light 
                      leading-relaxed 
                      text-justify"
        >
          {quote.quoteContent}
        </p>

        {/* Bottom Quote Icon */}
        <div className="flex justify-end mt-6">
          <div className="flex gap-1 opacity-80">
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

        {/* Author */}
        <div className="mt-8 text-right">
          <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            {quote.name}
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg font-light">
            {quote.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
