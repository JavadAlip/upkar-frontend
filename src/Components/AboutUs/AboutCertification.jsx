import React from 'react';
import { Globe, Shield, Users, ShieldCheck } from 'lucide-react';
import sustainability from "../../assets/Icons/sustainability.png";
import integrity from "../../assets/Icons/integrity.png";
import community from "../../assets/Icons/community.png";
import safety from "../../assets/Icons/safety.png";


const AboutCertification = () => {

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
    <div className="w-full bg-[#050F27] px-4 lg:px-10 py-12 sm:py-14 md:py-16 lg:py-12 font-[Figtree]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight text-white mb-8 lg:mb-12">
            Certifications
          </h2>

          {/* Certification Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="mb-3">
                  <img src={cert.icon} alt={`icon-${index + 1}`} className='w-20 h-20 object-contain filter brightness-0 invert' />
                </div>
                <p className="text-white font-medium text-center text-lg">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCertification;
