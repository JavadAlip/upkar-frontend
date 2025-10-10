import React from 'react';
import Value1 from "../../assets/UbkarHabit.png";
import icon1 from "../../assets/Icons/value1.png";
import icon2 from "../../assets/Icons/value2.png";
import icon3 from "../../assets/Icons/value3.png";
import icon4 from "../../assets/Icons/value4.png";
import icon5 from "../../assets/Icons/value5.png";
import icon6 from "../../assets/Icons/value6.png";

const OurValues = () => {
  const values = [
    { id: 1, icon: icon1, title: 'Quality' },
    { id: 2, icon: icon2, title: 'Technology' },
    { id: 3, icon: icon3, title: 'Approach' },
    { id: 4, icon: icon4, title: 'Transparency' },
    { id: 5, icon: icon5, title: 'Expertise' },
    { id: 6, icon: icon6, title: 'Reliability' },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl mb-16 text-black font-figtree">
          <span className="font-light">Our </span>
          <span className="font-semibold">Values!</span>
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col items-center justify-center space-y-4 group cursor-pointer"
            >
              {/* Image Icon */}
              <div
                className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={value.icon}
                  alt={value.title}
                  style={{
                    maxWidth: '64px',
                    maxHeight: '64px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Title */}
              <p className="font-satoshi font-medium text-[20px] text-black text-center">
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