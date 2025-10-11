import React from 'react';
import CertificationImage from "../../assets/Certification.png";
import sustainability from "../../assets/Icons/sustainability.png";
import integrity from "../../assets/Icons/integrity.png";
import community from "../../assets/Icons/community.png";
import safety from "../../assets/Icons/safety.png";
import QuoteUp from "../../assets/Icons/VectorUp.png";
import QuoteDown from "../../assets/Icons/VectorDown.png";


const Certification = () => {

  const certifications = [
    {
      icon: sustainability,
      title: 'Sustainability'
    },
    {
      icon: integrity,
      title: 'Integrity'
    },
    {
      icon: community,
      title: 'Community'
    },
    {
      icon: safety,
      title: 'Safety'
    }
  ];

  return (
    <div className="w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 font-[Figtree]">

      <div className="bg-gray-100 py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">

            {/* Certifications Title */}
            <div className="lg:flex-shrink-0 text-center lg:text-left w-full lg:w-auto">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                Certifications
              </h2>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full lg:flex-1">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                  {/* Icon */}
                  <div className="mb-3">
                    <img
                      src={cert.icon}
                      alt={cert.title}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <p
                    className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-tight"
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 100,
                    }}
                  >
                    {cert.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-20 py-6 sm:py-8 md:py-10 lg:py-12">

        <div className="px-4 lg:px-10 py-10 sm:py-12 md:py-20 lg:py-24 flex items-center justify-center align-center relative rounded-[23px] overflow-hidden" style={{ backgroundImage: `url(${CertificationImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="relative w-[90%] bg-gradient-to-b from-white/50 via-white/30 via-white/20 to-white/0 backdrop-blur-lg border border-white/20 rounded-[23px] px-4 lg:px-10 py-10 sm:py-12 md:py-20 lg:py-24 text-center shadow-lg flex align-center justify-center gap-2 border border-[#3a4200]">

            <div className="h-full flex flex-row align-start gap-[0px] opacity-90">
              <img
                src={QuoteUp}
                alt="quote up"
                className="w-6 lg:w-8 aspect-square object-contain"
              />
              <img
                src={QuoteUp}
                alt="quote up"
                className="w-6 lg:w-8 aspect-square object-contain"
              />
            </div>

            <p className="text-center mt-2 text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-snug sm:leading-tight md:leading-tight lg:leading-[1.2] max-w-[60%] font-[Figtree]">
              One of the reputed developers in Bangalore with timely delivery. They have amazing
              properties in Bangalore with reasonable pricing, moreover, these people maintain
              good relationship management with clients.
            </p>

            <div className="h-full flex flex-row align-start gap-[0px] opacity-90">
              <img
                src={QuoteDown}
                alt="quote down"
                className="w-6 lg:w-8 aspect-square object-contain"
              />
              <img
                src={QuoteDown}
                alt="quote down"
                className="w-6 lg:w-8 aspect-square object-contain"
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Certification;