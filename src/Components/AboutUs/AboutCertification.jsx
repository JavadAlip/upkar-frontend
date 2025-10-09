import React from 'react';
import { Globe, Shield, Users, ShieldCheck } from 'lucide-react';



const AboutCertification = () => {

  const certifications = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Sustainability'
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Integrity'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Community'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Safety'
    }
  ];

  return (
    <div className="w-full bg-[#050F27] py-16 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 leading-tight">
            Certifications
          </h2>
          
          {/* Certification Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="text-white mb-3">
                  {cert.icon}
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
