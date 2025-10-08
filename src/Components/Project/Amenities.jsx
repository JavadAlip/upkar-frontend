import React from 'react';
import { Camera, Dumbbell, Waves, Users } from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    {
      id: 1,
      icon: <Camera size={24} />,
      name: 'CCTV Cameras'
    },
    {
      id: 2,
      icon: <Dumbbell size={24} />,
      name: 'Gym'
    },
    {
      id: 3,
      icon: <Waves size={24} />,
      name: 'Swimming Pool'
    },
    {
      id: 4,
      icon: <Users size={24} />,
      name: 'Party Area'
    },
    {
      id: 5,
      icon: <Camera size={24} />,
      name: 'CCTV Cameras'
    },
    {
      id: 6,
      icon: <Dumbbell size={24} />,
      name: 'Gym'
    },
    {
      id: 7,
      icon: <Waves size={24} />,
      name: 'Swimming Pool'
    },
    {
      id: 8,
      icon: <Users size={24} />,
      name: 'Party Area'
    },
    {
      id: 9,
      icon: <Camera size={24} />,
      name: 'CCTV Cameras'
    },
    {
      id: 10,
      icon: <Dumbbell size={24} />,
      name: 'Gym'
    },
    {
      id: 11,
      icon: <Waves size={24} />,
      name: 'Swimming Pool'
    },
    {
      id: 12,
      icon: <Users size={24} />,
      name: 'Party Area'
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Amenities
        </h2>

        {/* Amenities Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">
          {amenitiesList.map((amenity) => (
            <div
              key={amenity.id}
              className="flex items-center gap-4 group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-gray-800 group-hover:text-black transition-colors duration-300">
                {amenity.icon}
              </div>
              
              {/* Name */}
              <p className="text-base text-gray-800 group-hover:text-black transition-colors duration-300">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;