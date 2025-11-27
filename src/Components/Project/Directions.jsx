import React from "react";
import Direction from "../../assets/Directions.png";

const Directions = () => {
  return (
    <div className="w-full bg-white py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-[48px] font-[Figtree] font-semibold text-black">
          Directions
        </h2>

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
