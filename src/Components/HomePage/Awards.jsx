import React from 'react';
import Award1 from "../../assets/Award1.png";


const Awards = () => {
  
  const awards = [
    { year: "2025", title: "Best Property Expo" },
    { year: "2025", title: "Best Property Expo" },
    { year: "2025", title: "Best Property Expo" },
    { year: "2025", title: "Best Property Expo" },
  ];

  return (
    <section className="bg-black py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-[Figtree]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">

          {/* Title */}
          <div className="lg:flex-shrink-0 text-center lg:text-left">
            <h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              Awards
            </h2>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full lg:flex-1">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Image */}
                <img
                  src={Award1}
                  alt={`Award ${award.year}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain mb-3 sm:mb-4"
                />

                {/* Title */}
                <div>
                  <p
                    className="text-white text-base sm:text-lg md:text-xl font-light leading-tight"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    Best Property
                  </p>
                  <p
                    className="text-white text-base sm:text-lg md:text-xl font-bold leading-tight"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    Expo
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Awards;
