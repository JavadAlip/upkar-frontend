import React, { useEffect, useState } from 'react';
import { getBrandMotive } from '../../Api';

const BrandMotiveSection = () => {
  const [motive, setMotive] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBrandMotive();
        setMotive(data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-20 px-6 lg:px-20 text-center">
      <h2 className="text-3xl font-figtree sm:text-4xl md:text-5xl lg:text-[48px] font-light">
        Brand <span className="font-semibold">Motive</span>
      </h2>

      {motive.map((item) => (
        <div key={item._id} className="mt-10">
          <h1 className="text-5xl md:text-6xl font-bold text-black italic">
            {item.highlightText}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default BrandMotiveSection;
