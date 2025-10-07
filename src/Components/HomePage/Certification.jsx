import React from 'react';
import { Globe, Shield, Users, ShieldCheck } from 'lucide-react';
import CertificationImage from "../../assets/Certification.png"; 

const Certification = () => {
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
    <div className="w-full bg-gray-100 py-16 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-12">
            Certifications
          </h2>
          
          {/* Certification Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="text-gray-700 mb-3">
                  {cert.icon}
                </div>
                <p className="text-gray-800 font-medium text-center text-lg">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Card */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${CertificationImage})`, // ✅ Replaced Unsplash with imported image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '350px'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-[350px] px-8 py-12">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-2xl text-white text-center">
              <span className="text-6xl leading-none">"</span>
              <p className="text-lg md:text-xl my-4 leading-relaxed font-light">
                One of the reputed developers in Bangalore with timely delivery. They have amazing properties in Bangalore with reasonable pricing, moreover, these people maintain good relationship management with clients.
              </p>
              <div className="flex justify-end">
                <span className="text-6xl leading-none">"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
