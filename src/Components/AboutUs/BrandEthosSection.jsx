import React, { useEffect, useState } from 'react';
import { getBrandEthos } from '../../Api';

const BrandEthosSection = () => {
  const [ethos, setEthos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBrandEthos();
        setEthos(data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto font-figtree text-center">
        <h2 className="text-3xl mb-6 sm:text-4xl md:text-5xl lg:text-[48px] font-light">
          Our <span className="font-semibold">Brand Ethos</span>
        </h2>

        <p className="text-black text-[22px] mb-14">
          Our brand ethos is anchored in key pillars that define our identity.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {ethos.map((item) => (
            <div key={item._id} className="text-left border-b pb-8">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-2xl font-semibold text-black">
                  {item.title}
                </h3>
              </div>

              <p className="text-black leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandEthosSection;
