// import React, { useState } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { createCareerEnquiry } from '../../Api';
// import { toast } from 'react-toastify';

// const JoinTeam = () => {
//   const [formData, setFormData] = useState({
//     serviceInterestedIn: '',
//     name: '',
//     email: '',
//     phone: '',
//     location: '',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async () => {
//     const { serviceInterestedIn, name, email, phone, location } = formData;

//     if (!serviceInterestedIn || !name || !email || !phone || !location) {
//       toast.error('Please fill all fields');
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await createCareerEnquiry(formData);
//       toast.success(res?.message || 'Career enquiry submitted successfully');

//       setFormData({
//         serviceInterestedIn: '',
//         name: '',
//         email: '',
//         phone: '',
//         location: '',
//       });
//     } catch (error) {
//       console.error(error);
//       toast.error('Failed to submit career enquiry');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">
//       {/* Heading */}
//       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight mb-8">
//         Want to join team
//         <span className="block font-semibold">Upkar Developers</span>
//       </h2>

//       {/* Form Container */}
//       <div className="flex flex-col items-center">
//         <div className="w-full p-6 sm:p-8 md:p-10 space-y-6">
//           {/* Service Interested */}
//           <input
//             type="text"
//             name="serviceInterestedIn"
//             placeholder="Service interested in"
//             value={formData.serviceInterestedIn}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />

//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email id"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />

//           {/* Phone */}
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />

//           {/* Location */}
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={formData.location}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="mt-6 flex items-center bg-[#050F27] rounded-full shadow-md
//             transition-colors hover:bg-[#0b2444]
//             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#071334]
//             disabled:opacity-60"
//         >
//           <span className="px-6 py-3 text-white text-sm sm:text-base font-medium">
//             {loading ? 'Submitting...' : 'Submit Enquiry'}
//           </span>

//           <span
//             className="relative -mr-1 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full
//             flex items-center justify-center border-2 border-[#071334]"
//           >
//             <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#071334]" />
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JoinTeam;

import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { createCareerEnquiry } from '../../Api';
import { toast } from 'react-toastify';

const JoinTeamModal = ({ role, onClose }) => {
  const [formData, setFormData] = useState({
    serviceInterestedIn: '',
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // AUTO FILL ROLE
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      serviceInterestedIn: role,
    }));
  }, [role]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const { serviceInterestedIn, name, email, phone, location } = formData;

    if (!serviceInterestedIn || !name || !email || !phone || !location) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      setLoading(true);
      await createCareerEnquiry(formData);
      toast.success('Enquiry submitted! We’ll reach out soon.');
      onClose();
    } catch (error) {
      toast.error('Failed to submit');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* MODAL */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl p-6 z-10">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-2xl font-semibold mb-6">
          Apply for <span className="text-[#2D5C3A]">{role}</span> role.
        </h2>

        <div className="space-y-4">
          <input
            disabled
            value={formData.serviceInterestedIn}
            className="w-full px-4 py-3 border rounded-lg bg-gray-100"
          />

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 flex items-center bg-[#2D5C3A] rounded-full"
        >
          <span className="px-6 py-3 text-white">
            {loading ? 'Submitting...' : 'Submit'}
          </span>
          <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#2D5C3A]">
            <ArrowRight className="text-[#2D5C3A]" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default JoinTeamModal;
