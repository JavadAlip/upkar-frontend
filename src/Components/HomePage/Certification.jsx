import React from 'react';
import CertificationImage from "../../assets/Certification.png";
import sustainability from "../../assets/Icons/sustainability.png";
import integrity from "../../assets/Icons/integrity.png";
import community from "../../assets/Icons/community.png";
import safety from "../../assets/Icons/safety.png";
import Certification1 from "../../assets/Certification1.png";

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
    <div className="w-full font-[Figtree]">
      {/* Certifications Section - Title Left, Grid Right */}
      <div className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
            {/* Certifications Title */}
            <div className="lg:flex-shrink-0">
              <h2
                className="text-black text-[48px] font-light"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                Certifications
              </h2>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full lg:flex-1">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="mb-3">
                    <img
                      src={cert.icon}
                      alt={cert.title}
                      className="w-16 h-16  object-contain"
                    />
                  </div>
                  <p
                    className="text-center text-black"
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 100, 
                      fontSize: "32px",
                      lineHeight: '36px'
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

      {/* Testimonial Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div
          className="relative rounded-3xl overflow-hidden "
          style={{
            backgroundImage: `url(${CertificationImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '350px'
          }}
        >
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/40"></div> */}

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-[350px] px-8 py-12">
            <img
              src={Certification1}
              alt="Certification"
              className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;