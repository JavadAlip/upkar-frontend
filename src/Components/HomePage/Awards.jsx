import React from 'react';
import Award1 from "../../assets/Award1.png";

const Awards = () => {
  const awards = [
    {
      year: "2025",
      title: "Best Property Expo"
    },
    {
      year: "2025",
      title: "Best Property Expo"
    },
    {
      year: "2025",
      title: "Best Property Expo"
    },
    {
      year: "2025",
      title: "Best Property Expo"
    }
  ];

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-figtree">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
          {/* Awards Title */}
          <div className="lg:flex-shrink-0">
            <h2
              className="text-white text-[48px] font-light"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              Awards
            </h2>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full lg:flex-1">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Award Image */}
                <img
                  src={Award1}
                  alt={`Award ${award.year}`}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain mb-4"
                />

                {/* Award Title Split into Two Lines */}
                <div>
                  <p
                    className="text-white"
                    style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 100, fontSize: '20px', lineHeight: '24px' }}
                  >
                    Best Property
                  </p>
                  <p
                    className="text-white"
                    style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '24px' }}
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
