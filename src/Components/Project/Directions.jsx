import React from 'react';

const Directions = () => {
  return (
    <div className="w-full bg-white py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-[48px] font-[Figtree] font-semibold text-black">
          Directions
        </h2>

        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            title="Upkar Towers Direction Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.11610951081!2d77.56036951969323!3d12.939408280942776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159423739445%3A0x4197a95cbd5e5aaa!2sUPKAR%20TOWERS!5e0!3m2!1sen!2som!4v1733050000000!5m2!1sen!2som"
            className="w-full h-[450px] md:h-[550px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Directions;
