import React, { useEffect, useState } from "react";
import Value1 from "../../assets/UbkarHabit.png";
import { getAllOurValues } from "../../Api";

const OurValues = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const res = await getAllOurValues();
        setValues(res.data);
      } catch (error) {
        console.error("Failed to fetch values:", error);
      }
    };

    fetchValues();
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 text-black font-figtree">
          <span className="font-light">Our </span>
          <span className="font-semibold">Values!</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {values.map((value) => (
            <div
              key={value._id}
              className="flex flex-col items-center justify-center space-y-4 group cursor-pointer"
            >
              <div
                className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={value.iconImage}
                  alt={value.title}
                  style={{
                    maxWidth: "64px",
                    maxHeight: "64px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

              <p className="font-satoshi font-medium text-[20px] text-black text-center">
                {value.title}
              </p>
            </div>
          ))}
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={Value1}
            alt="Upkar Habitat"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
