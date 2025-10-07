import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="w-full bg-white py-16 px-4 font-[Figtree]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">
          Ready to Find Your<br />
          Dream Property?
        </h2>

        <div className="flex justify-center">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg">
            Contact us
            <div className="bg-white text-black rounded-full p-2 flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
