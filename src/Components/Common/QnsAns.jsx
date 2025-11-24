import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { getQuestionsAPI } from '../../Api';
import { toast } from 'react-toastify';

const QnsAns = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [faqs, setFaqs] = useState([]);
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchFAQs();
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
    <div className="w-full bg-white px-4 lg:px-24 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
        {/* Left Section */}
        <div className="text-left p-4 flex flex-col justify-between h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight">
            Invest smarter with <br />
            <span className="font-bold">Right Answers !</span>
          </h2>

          <div>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Still any doubts in your mind?
            </p>

            <button
              aria-label="Explore Projects"
              className="inline-flex items-center bg-[#050F27] rounded-full shadow-md transition-colors hover:bg-[#0b2444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#071334]"
            >
              <span className="px-6 py-3 text-white text-sm sm:text-base font-medium">
                Connect us !
              </span>
              <span className="relative -mr-1 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#071334]">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#071334]" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Section - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.length === 0 && (
            <p className="text-gray-500 text-center py-6">No Q&As found.</p>
          )}
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all ${
                openIndex === index ? 'bg-gray-100 border-gray-200' : 'bg-white border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="pr-4 text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[22px] font-[Figtree] font-medium leading-snug sm:leading-relaxed">
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[20px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="flex justify-end mt-2">
                    <span className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[20px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
                      Learn more
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnsAns;
