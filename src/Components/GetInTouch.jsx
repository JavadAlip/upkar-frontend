import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif mb-12">
          Get in Touch
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Side - Background Image with Text */}
          <div 
            className="relative bg-cover bg-center min-h-[500px] lg:min-h-[700px] flex items-center justify-center p-8"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80')"
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Text Content */}
            <div className="relative z-10 text-center text-white max-w-md">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
                Ready to take the next step?
                <br />
                Let's Connect !
              </h3>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 md:p-12">
            <div className="space-y-6">
              
              {/* Select a Project Type */}
              <div>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
                >
                  <option value="">Select a Project Type</option>
                  <option value="ongoing">Ongoing Project</option>
                  <option value="upcoming">Upcoming Project</option>
                  <option value="completed">Completed Project</option>
                </select>
              </div>

              {/* Preferred Estate */}
              <div>
                <select
                  name="preferredEstate"
                  value={formData.preferredEstate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
                >
                  <option value="">Preferred Estate</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="plot">Plot</option>
                </select>
              </div>

              {/* Name */}
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

              {/* Email */}
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

              {/* Phone Number */}
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

              {/* Are you an Existing customer? */}
              <div>
                <select
                  name="existingCustomer"
                  value={formData.existingCustomer}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 bg-white"
                >
                  <option value="">Are you an Existing customer ?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all duration-300"
              >
                Send Enquiry
                <div className="bg-white text-black rounded-full p-2">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;