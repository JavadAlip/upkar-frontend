import React from 'react';
import Direction from "../../assets/Directions.png"; 

const Directions = () => {
  return (
    <div className="w-full bg-white py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl mb-16 font-bold">
          Directions
        </h2>

        {/* Image Section - updated max width */}
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={Direction}
            alt="Directions Map"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Directions;
