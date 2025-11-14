import React, { useState, useEffect } from 'react';
import { getAmenitiesAPI } from '../../Api'; 

const Amenities = () => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const data = await getAmenitiesAPI();
        setAmenities(data);
      } catch (error) {
        console.error('Error fetching amenities:', error);
      }
    };

    fetchAmenities();
  }, []);

  if (!amenities.length) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[48px] font-[Figtree] font-semibold text-black mb-12">
          Amenities
        </h2>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-white"
            >
              {/* Icon and Heading */}
              <div className="flex items-center gap-4">
                <img
                  src={amenity.icon}
                  alt={amenity.heading}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                />
                <p className="text-base font-medium text-gray-800 group-hover:text-black transition-colors duration-300">
                  {amenity.heading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
