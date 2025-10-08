import React from 'react';
import { Award, Settings, Users, Search, Sparkles, Handshake } from 'lucide-react';
import Value1 from "../../assets/UbkarHabit.png"; 

const OurValues = () => {
  const values = [
    { id: 1, icon: <Award size={40} />, title: 'Quality' },
    { id: 2, icon: <Settings size={40} />, title: 'Technology' },
    { id: 3, icon: <Users size={40} />, title: 'Approach' },
    { id: 4, icon: <Search size={40} />, title: 'Transparency' },
    { id: 5, icon: <Sparkles size={40} />, title: 'Expertise' },
    { id: 6, icon: <Handshake size={40} />, title: 'Reliability' }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl mb-16">
          <span className="font-normal">Our </span>
          <span className="font-bold">Values!</span>
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col items-center justify-center space-y-4 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 flex items-center justify-center text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110">
                {value.icon}
              </div>

              {/* Title */}
              <p className="text-base font-medium text-gray-800 text-center">
                {value.title}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={Value1}
            alt="Upkar Habitat"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
