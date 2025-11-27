import React, { useState } from "react";
import GetInTocuh1 from "../../assets/PrjctGetin.png";
import getinBtn from "../../assets/Icons/getinBtn.png";

const PrjctGetinTouch = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    preferredEstate: "",
    name: "",
    email: "",
    phone: "",
    existingCustomer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 mb-0 lg:mb-2 font-sans">
      <h2 className="mb-12 text-[48px] font-[Figtree]  text-black leading-tight">
        <span className="font-light">Get in</span>{" "}
        <span className="font-semibold">Touch</span>
      </h2>

      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div
          className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[750px] bg-cover bg-center"
          style={{ backgroundImage: `url(${GetInTocuh1})` }}
        >
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-10 gap-10 lg:gap-0">
            <div className="text-white max-w-md text-center lg:text-left px-2 sm:px-4 mb-8 lg:mb-0">
              <h3 className="leading-tight text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-[Figtree] text-white text-center lg:text-left">
                <span className="font-light block">Ready to take the</span>
                <span className="font-light block text-center lg:text-left">
                  next step?
                </span>
                <span className="font-semibold block text-center lg:text-left mt-0">
                  Let's Connect!
                </span>
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-10 w-full max-w-md sm:max-w-lg md:max-w-xl shadow-xl mx-auto lg:mx-0">
              <div className="space-y-5">
                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    <option value="">Select a Project Type</option>
                    <option value="ongoing">Ongoing Project</option>
                    <option value="upcoming">Upcoming Project</option>
                    <option value="completed">Completed Project</option>
                  </select>
                </div>

                <div>
                  <select
                    name="preferredEstate"
                    value={formData.preferredEstate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    <option value="">Preferred Estate</option>
                    <option value="villa">Villa</option>
                    <option value="apartment">Apartment</option>
                    <option value="plot">Plot</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 300,
                    }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email id"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 300,
                    }}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 300,
                    }}
                  />
                </div>

                <div>
                  <select
                    name="existingCustomer"
                    value={formData.existingCustomer}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    <option value="">Are you an Existing customer ?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="mt-6 w-max mx-auto">
                  <img
                    src={getinBtn}
                    className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrjctGetinTouch;
