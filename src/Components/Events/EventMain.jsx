import React, { useEffect, useState } from 'react';
import { getEventTop } from '../../Api';

const EventMain = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const res = await getEventTop();
        if (res.success) {
          setData(res.eventPage);
        }
      } catch (error) {
        console.error('Error fetching event page:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="w-full bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-[36px] font-[Figtree] md:text-[48px] font-medium text-black mb-4">
            {data.mainTitle}
          </h1>

          <p className="text-black font-[Figtree] font-normal text-[18px] md:text-[24px] max-w-3xl mx-auto">
            {data.mainDescription}
          </p>
        </div>

        <div className="mb-14">
          <img
            src={data.mainImage}
            alt="Main Event"
            className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* ===== Sub Section ===== */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[24px] md:text-[32px] font-[Figtree] font-medium text-black mb-4">
              {data.subTitle}
            </h2>

            <p className="text-black text-base text-[20px] font-[Figtree] md:text-lg leading-relaxed">
              {data.subDescription}
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <img
              src={data.subImage}
              alt="Sub Event"
              className="w-full h-[250px] md:h-[350px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMain;
