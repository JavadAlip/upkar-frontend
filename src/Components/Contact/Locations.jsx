// import React, { useEffect, useState } from 'react';
// import {
//   getAllLocations,
//   createContactEnquiry,
//   getAllProjects,
// } from '../../Api';
// import { toast } from 'react-toastify';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import getinBtn from '../../assets/Icons/submitBtn.png';

// const Locations = () => {
//   const [locations, setLocations] = useState([]);
//   const [activeLocation, setActiveLocation] = useState(null);

//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState([]);

//   const [formData, setFormData] = useState({
//     projectStatus: '',
//     projectId: '',
//     projectName: '',
//     location: '',
//     name: '',
//     email: '',
//     phone: '',
//     query: '',
//     consent: false,
//   });

//   useEffect(() => {
//     fetchLocations();
//     fetchProjects();
//   }, []);

//   const fetchLocations = async () => {
//     try {
//       const res = await getAllLocations();
//       if (res.success && res.data.length > 0) {
//         setLocations(res.data);
//         setActiveLocation(res.data[0]);
//       }
//     } catch (error) {
//       console.error('Failed to fetch locations', error);
//     }
//   };

//   const fetchProjects = async () => {
//     try {
//       const allProjects = await getAllProjects();
//       if (Array.isArray(allProjects)) setProjects(allProjects);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//       toast.error('Failed to fetch projects!');
//     }
//   };

//   // Filter projects by status
//   useEffect(() => {
//     if (Array.isArray(projects)) {
//       const filtered = formData.projectStatus
//         ? projects.filter((p) => p.projectStatus === formData.projectStatus)
//         : [];

//       setFilteredProjects(filtered);

//       setFormData((prev) => ({
//         ...prev,
//         projectId: '',
//         projectName: '',
//       }));
//     }
//   }, [formData.projectStatus, projects]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (name === 'projectId') {
//       const selectedProject = filteredProjects.find((p) => p._id === value);

//       setFormData({
//         ...formData,
//         projectId: value,
//         projectName: selectedProject?.projectName || '',
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: type === 'checkbox' ? checked : value,
//       });
//     }
//   };

//   const validateForm = () => {
//     const {
//       projectStatus,
//       projectId,
//       location,
//       name,
//       email,
//       phone,
//       query,
//       consent,
//     } = formData;

//     if (!projectStatus) return 'Please select project status.';
//     if (!projectId) return 'Please select project.';
//     if (!location.trim()) return 'Location is required.';
//     if (!name.trim()) return 'Full name is required.';

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) return 'Please enter a valid email address.';

//     // Phone validation (10 digits)
//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(phone)) return 'Phone number must be 10 digits.';

//     if (!query.trim()) return 'Query field cannot be empty.';
//     if (!consent) return 'Please authorize before submitting the enquiry.';

//     return null; // No errors
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const errorMessage = validateForm();

//     if (errorMessage) {
//       toast.error(errorMessage);
//       return;
//     }

//     try {
//       await createContactEnquiry(formData);
//       toast.success('Enquiry submitted successfully!');

//       setFormData({
//         projectStatus: '',
//         projectId: '',
//         projectName: '',
//         location: '',
//         name: '',
//         email: '',
//         phone: '',
//         query: '',
//         consent: false,
//       });
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message || 'Something went wrong. Try again.',
//       );
//     }
//   };
//   const extractIframeSrc = (raw) => {
//     if (!raw) return null;
//     const srcMatch = raw.match(/src=["']([^"']+)["']/);
//     if (srcMatch) return srcMatch[1];
//     return raw;
//   };

//   const getEmbedUrl = (locationUrl) => {
//     const src = extractIframeSrc(locationUrl);
//     if (!src) return '';
//     if (src.includes('google.com/maps/embed')) return src;

//     return `https://maps.google.com/maps?q=${encodeURIComponent(
//       src,
//     )}&output=embed&hl=en`;
//   };

//   const getDirectUrl = (locationUrl) => {
//     if (!locationUrl) return '#';
//     const src = extractIframeSrc(locationUrl);
//     if (!src) return '#';
//     if (src.includes('google.com/maps/embed')) {
//       return src.replace('/maps/embed', '/maps');
//     }
//     return src;
//   };

//   const handleMapClick = () => {
//     if (activeLocation?.locationUrl) {
//       window.open(
//         getDirectUrl(activeLocation.locationUrl),
//         '_blank',
//         'noopener,noreferrer',
//       );
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16 font-figtree">
//       <div className="flex items-center justify-center mb-12">
//         {/* Left Line */}
//         <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 mr-6"></div>

//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-center whitespace-nowrap">
//           Project Enquiries
//         </h2>

//         {/* Right Line */}
//         <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 ml-6"></div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
//         {/* ===== LEFT — MAP ===== */}
//         <div>
//           <div className="flex flex-wrap gap-6 mb-6 border-b pb-4">
//             {locations.map((loc) => (
//               <button
//                 key={loc._id}
//                 onClick={() => setActiveLocation(loc)}
//                 className={`uppercase tracking-wide font-medium transition-colors ${
//                   activeLocation?._id === loc._id
//                     ? 'text-black border-b-2 border-black'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {loc.title}
//               </button>
//             ))}
//           </div>

//           {activeLocation && (
//             <div
//               className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
//               onClick={handleMapClick}
//             >
//               <iframe
//                 key={activeLocation._id}
//                 title={activeLocation.title}
//                 src={getEmbedUrl(activeLocation.locationUrl)}
//                 className="w-full h-[400px] border-0 pointer-events-none"
//                 loading="lazy"
//               />
//             </div>
//           )}
//         </div>

//         {/* ===== RIGHT — CONTACT FORM ===== */}
//         <div className="border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
//           {/* Blue Header */}
//           <div className="bg-black text-white text-center py-6 px-6 rounded-t-2xl">
//             <h1 className="text-base md:text-lg font-normal leading-relaxed">
//               We'd be delighted to connect regarding our customized offers
//             </h1>
//           </div>

//           {/* Form Section */}
//           <div className="p-8 bg-white rounded-b-2xl">
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Project Status */}
//               <div className="relative flex flex-col">
//                 <label className="mb-1 text-sm">Project Status*</label>
//                 <select
//                   name="projectStatus"
//                   value={formData.projectStatus}
//                   onChange={handleChange}
//                   className="border border-black rounded-[20px] px-4 py-2 appearance-none pr-10"
//                   required
//                 >
//                   <option value="">Select a Project Status</option>
//                   <option value="ongoing">Ongoing</option>
//                   <option value="upcoming">Upcoming</option>
//                   <option value="completed">Completed</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
//                   <KeyboardArrowDownOutlinedIcon />
//                 </div>
//               </div>

//               {/* Project */}
//               <div className="relative flex flex-col">
//                 <label className="mb-1 text-sm">Project*</label>
//                 <select
//                   name="projectId"
//                   value={formData.projectId}
//                   onChange={handleChange}
//                   className="border border-black rounded-[20px] px-4 py-2 appearance-none pr-10"
//                   required
//                   disabled={
//                     !formData.projectStatus || filteredProjects.length === 0
//                   }
//                 >
//                   <option value="">Select a Project</option>
//                   {filteredProjects.map((p) => (
//                     <option key={p._id} value={p._id}>
//                       {p.projectName}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Other Fields */}

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name*"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="border border-black rounded-[20px] px-4 py-2 w-full"
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email*"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border border-black rounded-[20px] px-4 py-2 w-full"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone*"
//                 value={formData.phone}
//                 onChange={(e) => {
//                   const onlyNumbers = e.target.value.replace(/\D/g, '');
//                   setFormData({ ...formData, phone: onlyNumbers });
//                 }}
//                 maxLength={10}
//                 className="border border-black rounded-[20px] px-4 py-2 w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location*"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="border border-black rounded-[20px] px-4 py-2 w-full"
//                 required
//               />

//               <textarea
//                 name="query"
//                 placeholder="Your Query*"
//                 rows="4"
//                 value={formData.query}
//                 onChange={handleChange}
//                 className="border border-black rounded-[20px] px-4 py-2 w-full"
//                 required
//               />
//               {/* Consent Checkbox */}
//               <div className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   name="consent"
//                   checked={formData.consent}
//                   onChange={handleChange}
//                   className="mt-1 w-4 h-4 accent-[#2C86A6] cursor-pointer"
//                   required
//                 />
//                 <p className="text-xs leading-relaxed text-gray-600">
//                   I authorise <span className="font-semibold">Upkar Group</span>{' '}
//                   and its representatives to contact me with updates and
//                   notifications via Email/SMS/WhatsApp/Call. This will override
//                   DND/NDNC.
//                 </p>
//               </div>

//               <button type="submit" className="flex justify-center mt-4">
//                 <img
//                   src={getinBtn}
//                   alt="Send Enquiry"
//                   className="w-full max-w-[200px] cursor-pointer hover:opacity-90"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Locations;

import React, { useEffect, useState } from 'react';
import {
  getAllLocations,
  createContactEnquiry,
  getAllProjects,
} from '../../Api';
import { toast } from 'react-toastify';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import getinBtn from '../../assets/Icons/submitBtn.png';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [activeLocation, setActiveLocation] = useState(null);

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [formData, setFormData] = useState({
    projectStatus: '',
    projectId: '',
    projectName: '',
    location: '',
    name: '',
    email: '',
    phone: '',
    query: '',
    consent: false,
  });

  useEffect(() => {
    fetchLocations();
    fetchProjects();
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await getAllLocations();
      if (res.success && res.data.length > 0) {
        setLocations(res.data);
        setActiveLocation(res.data[0]);
      }
    } catch (error) {
      console.error('Failed to fetch locations', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const allProjects = await getAllProjects();
      if (Array.isArray(allProjects)) setProjects(allProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to fetch projects!');
    }
  };

  // Filter projects by status
  useEffect(() => {
    if (Array.isArray(projects)) {
      const filtered = formData.projectStatus
        ? projects.filter((p) => p.projectStatus === formData.projectStatus)
        : [];

      setFilteredProjects(filtered);

      setFormData((prev) => ({
        ...prev,
        projectId: '',
        projectName: '',
      }));
    }
  }, [formData.projectStatus, projects]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'projectId') {
      const selectedProject = filteredProjects.find((p) => p._id === value);

      setFormData({
        ...formData,
        projectId: value,
        projectName: selectedProject?.projectName || '',
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const validateForm = () => {
    const {
      projectStatus,
      projectId,
      location,
      name,
      email,
      phone,
      query,
      consent,
    } = formData;

    if (!projectStatus) return 'Please select project status.';
    if (!projectId) return 'Please select project.';
    if (!location.trim()) return 'Location is required.';
    if (!name.trim()) return 'Full name is required.';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address.';

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) return 'Phone number must be 10 digits.';

    if (!query.trim()) return 'Query field cannot be empty.';
    if (!consent) return 'Please authorize before submitting the enquiry.';

    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = validateForm();

    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    try {
      await createContactEnquiry(formData);
      toast.success('Enquiry submitted successfully!');

      setFormData({
        projectStatus: '',
        projectId: '',
        projectName: '',
        location: '',
        name: '',
        email: '',
        phone: '',
        query: '',
        consent: false,
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Something went wrong. Try again.',
      );
    }
  };

  // const getEmbedUrl = (locationUrl) => {
  //   const src = extractIframeSrc(locationUrl);
  //   if (!src) return '';
  //   if (src.includes('google.com/maps/embed')) return src;

  //   return `https://maps.google.com/maps?q=${encodeURIComponent(
  //     src,
  //   )}&output=embed&hl=en`;
  // };

  // const handleMapClick = () => {
  //   if (activeLocation?.locationUrl) {
  //     window.open(
  //       getDirectUrl(activeLocation.locationUrl),
  //       '_blank',
  //       'noopener,noreferrer',
  //     );
  //   }
  // };
  const handleMapClick = () => {
    if (activeLocation?.locationUrl) {
      window.open(activeLocation.locationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-figtree">
      <div className="flex items-center justify-center mb-12">
        {/* Left Line */}
        <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 mr-6"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center whitespace-nowrap">
          Project Enquiries
        </h2>

        {/* Right Line */}
        <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 ml-6"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-stretch">
        {/* ===== LEFT — MAP ===== */}
        <div className="flex flex-col h-full">
          <div className="flex flex-wrap gap-6 mb-6 border-b pb-4">
            {locations.map((loc) => (
              <button
                key={loc._id}
                onClick={() => setActiveLocation(loc)}
                className={`uppercase tracking-wide font-medium transition-colors ${
                  activeLocation?._id === loc._id
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {loc.title}
              </button>
            ))}
          </div>

          {activeLocation && (
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer flex-1 min-h-[400px]"
              onClick={handleMapClick}
            >
              <iframe
                key={activeLocation._id}
                title={activeLocation.title}
                src={activeLocation.embedUrl}
                className="w-full h-full border-0 pointer-events-none"
                loading="lazy"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* ===== RIGHT — CONTACT FORM ===== */}
        <div className="border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
          {/* Blue Header */}
          <div className="bg-black text-white text-center py-6 px-6 rounded-t-2xl">
            <h1 className="text-base md:text-lg font-normal leading-relaxed">
              We'd be delighted to connect regarding our customized offers
            </h1>
          </div>

          {/* Form Section */}
          <div className="p-8 bg-white rounded-b-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Project Status */}
              <div className="relative flex flex-col">
                <label className="mb-1 text-sm">Project Status*</label>
                <select
                  name="projectStatus"
                  value={formData.projectStatus}
                  onChange={handleChange}
                  className="border border-black rounded-[20px] px-4 py-2 appearance-none pr-10"
                  required
                >
                  <option value="">Select a Project Status</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>

              {/* Project */}
              <div className="relative flex flex-col">
                <label className="mb-1 text-sm">Project*</label>
                <select
                  name="projectId"
                  value={formData.projectId}
                  onChange={handleChange}
                  className="border border-black rounded-[20px] px-4 py-2 appearance-none pr-10"
                  required
                  disabled={
                    !formData.projectStatus || filteredProjects.length === 0
                  }
                >
                  <option value="">Select a Project</option>
                  {filteredProjects.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.projectName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Other Fields */}

              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleChange}
                className="border border-black rounded-[20px] px-4 py-2 w-full"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="border border-black rounded-[20px] px-4 py-2 w-full"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, '');
                  setFormData({ ...formData, phone: onlyNumbers });
                }}
                maxLength={10}
                className="border border-black rounded-[20px] px-4 py-2 w-full"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location*"
                value={formData.location}
                onChange={handleChange}
                className="border border-black rounded-[20px] px-4 py-2 w-full"
                required
              />

              <textarea
                name="query"
                placeholder="Your Query*"
                rows="4"
                value={formData.query}
                onChange={handleChange}
                className="border border-black rounded-[20px] px-4 py-2 w-full"
                required
              />
              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-[#2C86A6] cursor-pointer"
                  required
                />
                <p className="text-xs leading-relaxed text-gray-600">
                  I authorise <span className="font-semibold">Upkar Group</span>{' '}
                  and its representatives to contact me with updates and
                  notifications via Email/SMS/WhatsApp/Call. This will override
                  DND/NDNC.
                </p>
              </div>

              <button type="submit" className="flex justify-center mt-4">
                <img
                  src={getinBtn}
                  alt="Send Enquiry"
                  className="w-full max-w-[200px] cursor-pointer hover:opacity-90"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
