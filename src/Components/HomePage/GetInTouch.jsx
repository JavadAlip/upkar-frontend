import React, { useState } from 'react';
import GetInTocuh1 from "../../assets/GetInTouch1.png";
import getinBtn from "../../assets/Icons/getinBtn.png";


const GetInTouch = () => {

  const [formData, setFormData] = useState({
    projectType: '',
    preferredEstate: '',
    name: '',
    email: '',
    phone: '',
    existingCustomer: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 mb-0 lg:mb-2 font-sans">
        <h2 className="mb-4 lg:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight" style={{ fontFamily: "'Noto Serif JP', serif"}}>
          <span style={{ fontWeight: 500 }}>Get in </span>
          <span style={{ fontWeight: 700 }}>Touch</span>
        </h2>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[750px] bg-cover bg-center" style={{ backgroundImage: `url(${GetInTocuh1})` }}>
            <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-10 gap-10 lg:gap-0">

              <div className="text-white max-w-md text-center lg:text-left px-2 sm:px-4 mb-8 lg:mb-0">
                <h3
                  className="leading-tight block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >

                  <span style={{ fontWeight: 300 }}>Ready to take the</span>
                  <br />
                  <span
                    className="block text-center"
                    style={{ fontWeight: 300, marginBottom: "0" }}
                  >
                    next step?
                  </span>
                  <span className='block text-center' style={{ fontWeight: 500, display: "block", marginTop: "0" }}>
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
                      style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}
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
                      style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

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
                      style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

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
                      style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

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
                      style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

                    />
                  </div>

                  <div>
                    <select
                      name="existingCustomer"
                      value={formData.existingCustomer}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base md:text-lg text-black bg-white placeholder-black"
                      style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300 }}

                    >
                      <option value="">Are you an Existing customer ?</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div className="mt-6 w-max mx-auto">
                    <img src={getinBtn} className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto mx-auto" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
};

export default GetInTouch;