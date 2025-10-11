import React from 'react';
import cctv from '../../assets/Icons/cctv.png';
import swim from '../../assets/Icons/swim.png';
import gym from '../../assets/Icons/gym.png';
import party from '../../assets/Icons/party.png';

const Amenities = () => {
  const amenities = [
    {
      name: 'CCTV Cameras',
      icon: cctv,
      rows: 3
    },
    {
      name: 'Gym',
      icon: gym,
      rows: 3
    },
    {
      name: 'Swimming Pool',
      icon: swim,
      rows: 3
    },
    {
      name: 'Party Area',
      icon: party,
      rows: 3
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-[48px] font-[Figtree] font-semibold text-black mb-12">
          Amenities
        </h2>


        {/* Amenities Grid - Each row has all 4 amenities */}
        <div className="space-y-8">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Repeat each amenity 3 times per row */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-white"
                >
                  {/* Icon and Name in single row */}
                  <div className="flex items-center gap-4">
                    <img
                      src={amenity.icon}
                      alt={amenity.name}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    />
                    <p className="text-base font-medium text-gray-800 group-hover:text-black transition-colors duration-300">
                      {amenity.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;