import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';


const QnsAns = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Are your projects legally approved?',
      answer:
        'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.'
    },
    {
      question: 'What types of properties do you develop?',
      answer:
        'We develop a wide range of properties including residential apartments, villas, commercial spaces, and mixed-use developments across prime locations.'
    },
    {
      question: 'How long have you been in the real estate business?',
      answer:
        'We have been serving the real estate industry for over a decade, bringing experience, trust, and quality to every project we undertake.'
    },
    {
      question: 'What is the process for buying a property with you?',
      answer:
        'Our streamlined process includes property selection, documentation verification, payment plans, legal clearance, and finally, possession with complete support at every step.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full mb-12 bg-white font-[Figtree]">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-left p-4 font-[Figtree] flex flex-col justify-between h-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-14">
              Invest smarter with <br />
              <span className="font-bold">Right Answers !</span>
            </h2>

            <div>
              <p className="text-gray-600 mb-6 text-base sm:text-lg">
                Still any doubts in your mind ?
              </p>

              <button
                aria-label="Explore Projects"
                className="inline-flex items-center bg-[#050F27] rounded-full shadow-md mb-10 transition-colors hover:bg-[#0b2444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#071334]"
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

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl transition-all ${openIndex === index
                  ? 'bg-gray-100 border-gray-200'
                  : 'bg-white border-gray-200'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className="pr-4"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 500, // medium
                      fontSize: "24px",
                      color: "#050F27",
                    }}
                  >
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
                    <p
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontWeight: 300, // light
                        fontSize: "24px",
                        color: "#050F27",
                        lineHeight: "1.2",
                      }}
                    >
                      {faq.answer}
                    </p>
                    <div className="flex justify-end mt-2">
                      <span
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontWeight: 400, // regular
                          fontSize: "20px",
                          color: "#050F27",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
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
    </div>
  );
};

export default QnsAns;
