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
    <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">

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


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${CertificationImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "350px",
          }}
        >

          <div className="relative z-10 flex items-center justify-center min-h-[350px] px-4 sm:px-6 lg:px-12">
            <div className="relative w-[100%] sm:w-3/4 lg:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 sm:px-10 py-8 sm:py-12 text-center shadow-lg">

              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex gap-1 sm:gap-2 opacity-90">
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

              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex gap-1 sm:gap-2 opacity-90">
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

              <p className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed max-w-[80%] mx-auto font-[Figtree]">
                One of the reputed developers in Bangalore with timely delivery. They have amazing
                properties in Bangalore with reasonable pricing, moreover, these people maintain
                good relationship management with clients.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Certification;