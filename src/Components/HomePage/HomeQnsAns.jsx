



import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import contactBtn from "../../assets/Icons/contactBtn.png";

const HomeQnsAns = () => {
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
    <div className="w-full bg-white py-16 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div>
            <h2 className="mb-6 text-black">
              <span
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: 500,
                  fontSize: "48px",
                  lineHeight: "1.2"
                }}
              >
                Invest smarter with
                <br />
              </span>
              <span
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "1.2"
                }}
              >
                Right Answers !
              </span>
            </h2>

            <div className="mt-48">
              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  color: "#050F27",
                }}
              >
                Still any doubts in your mind?
              </p>

              {/* <div className="flex mt-6 ml-8">
                <button className="bg-black text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg">
                  Contact us
                  <div className="bg-white text-black rounded-full p-2 flex items-center justify-center">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </div> */}
              <div className="flex mt-6 ml-8">
                <img
                  src={contactBtn}
                  alt="Contact Us"
                  className="w-44 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>

          </div>

          {/* Right Section - FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl transition-all ${openIndex === index
                  ? 'bg-[#E5E5E5] border-gray-200'
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

export default HomeQnsAns;
