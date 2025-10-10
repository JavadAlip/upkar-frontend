import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';


const AboutGetInTouch = () => {

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
    <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight">
        Get in <span className="font-bold">Touch</span>
      </h2>

      <div className="flex flex-col items-center">
        <div className="p-8 md:p-12 space-y-6 w-full">

          <div>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
            >
              <option value="">Select Site</option>
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
            >
              <option value="">Preferred site visit date</option>
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email id"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
            />
          </div>
        </div>

        <button
          aria-label="Explore Projects"
          className="flex items-center justify-center items-center bg-[#050F27] rounded-full shadow-md transition-colors hover:bg-[#0b2444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#071334]"
        >
          <span className="px-6 py-3 text-white text-sm sm:text-base font-medium">
            Search Properties
          </span>
          <span className="relative -mr-1 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#071334]">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#071334]" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutGetInTouch;
