// import { useState, useEffect } from 'react';
// import { X, Plus, Trash2 } from 'lucide-react';
// import { updateProjects, getAllCategories } from '../../../Api';
// import { toast } from 'react-toastify';

// const EditProjectModal1 = ({ project, onClose, onUpdated }) => {
//   const safeParseArray = (value) => {
//     if (Array.isArray(value)) return value;
//     if (!value) return [];
//     if (typeof value === 'string') {
//       try {
//         const parsed = JSON.parse(value);
//         return Array.isArray(parsed) ? parsed : [];
//       } catch {
//         return [];
//       }
//     }
//     return [];
//   };

//   const [form, setForm] = useState({
//     projectName: project.projectName || '',
//     projectType: project.projectType || '',
//     projectStatus: project.projectStatus || 'ongoing',
//     location: project.location || '',
//     projectAddress: project.projectAddress || '',
//     priceStartsFrom: project.priceStartsFrom || '',
//     unitConfiguration: project.unitConfiguration || '',
//     waterSupply: project.waterSupply || '',
//     projectArea: project.projectArea || '',
//     totalUnits: project.totalUnits || '',
//     possessionDate: project.possessionDate
//       ? project.possessionDate.split('T')[0]
//       : '',
//     aboutProject: project.aboutProject || '',
//     reraDescription: project.reraDescription || '',
//     noBrokerReraId: project.noBrokerReraId || '',
//     builderProjectReraId: project.builderProjectReraId || '',
//     locationUrl: project.locationUrl || '',
//   });

//   const [keyFeatures, setKeyFeatures] = useState(() => {
//     const features = safeParseArray(project.keyFeatures);
//     return features.length > 0 ? features : [''];
//   });

//   const [amenities, setAmenities] = useState(() => {
//     const amen = safeParseArray(project.amenities);
//     return amen.length > 0 ? amen : [''];
//   });

//   // Categories and available amenities
//   const [categories, setCategories] = useState([]);
//   const [availableAmenities] = useState([
//     'Swimming Pool',
//     'Gym',
//     "Children's Play Area",
//     'Club House',
//     'Landscaped Garden',
//     'Jogging Track',
//     'Indoor Games',
//     'Outdoor Sports',
//     'Party Hall',
//     'Multipurpose Hall',
//     'Yoga/Meditation Room',
//     'Library',
//     'Amphitheatre',
//     'Power Backup',
//     'Security',
//     'CCTV Surveillance',
//     'Intercom',
//     'Visitor Parking',
//     'Rain Water Harvesting',
//     'Sewage Treatment Plant',
//     'Vastu Compliant',
//     'Earthquake Resistant',
//     'Car Parking',
//     'Elevator/Lift',
//   ]);
//   const [selectedAmenities, setSelectedAmenities] = useState(() => {
//     return safeParseArray(project.amenities);
//   });

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await getAllCategories();
//       setCategories(res.categories || []);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       toast.error('Failed to load categories');
//     }
//   };

//   // Files state
//   const [propertyImages, setPropertyImages] = useState([]);
//   const [masterPlans, setMasterPlans] = useState(null);
//   const [brochureImage, setBrochureImage] = useState(null);

//   // Existing files preview
//   const existingPropertyImages = safeParseArray(project.propertyImages);
//   const existingMasterPlans = safeParseArray(project.masterPlans).slice(-1);
//   const existingBrochure = project.brochureImage || null;

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Key Features handlers
//   const addKeyFeature = () => {
//     setKeyFeatures([...keyFeatures, '']);
//   };

//   const updateKeyFeature = (index, value) => {
//     const updated = [...keyFeatures];
//     updated[index] = value;
//     setKeyFeatures(updated);
//   };

//   const removeKeyFeature = (index) => {
//     if (keyFeatures.length > 1) {
//       setKeyFeatures(keyFeatures.filter((_, i) => i !== index));
//     }
//   };

//   const toggleAmenity = (amenity) => {
//     setSelectedAmenities((prev) => {
//       if (prev.includes(amenity)) {
//         return prev.filter((a) => a !== amenity);
//       } else {
//         return [...prev, amenity];
//       }
//     });
//   };

//   const handlePropertyImagesChange = (e) => {
//     setPropertyImages([...e.target.files]);
//   };

//   const handleMasterPlansChange = (e) => {
//     setMasterPlans(e.target.files[0]);
//   };

//   const handleBrochureChange = (e) => {
//     setBrochureImage(e.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem('adminToken');

//       if (!token) {
//         toast.error('Authentication token not found. Please login again.');
//         return;
//       }

//       const formData = new FormData();

//       Object.keys(form).forEach((key) => {
//         formData.append(key, form[key]);
//       });

//       const validKeyFeatures = keyFeatures.filter((f) => f && f.trim() !== '');
//       if (validKeyFeatures.length > 0) {
//         formData.append('keyFeatures', JSON.stringify(validKeyFeatures));
//       }

//       const validAmenities = selectedAmenities.filter(
//         (a) => a && a.trim() !== '',
//       );
//       if (validAmenities.length > 0) {
//         formData.append('amenities', JSON.stringify(validAmenities));
//       }

//       if (propertyImages.length > 0) {
//         propertyImages.forEach((file) => {
//           formData.append('propertyImages', file);
//         });
//       }

//       if (masterPlans) {
//         formData.append('masterPlans', masterPlans);
//       }

//       if (brochureImage) {
//         formData.append('brochureImage', brochureImage);
//       }

//       await updateProjects(project._id, formData, token);

//       toast.success('Project updated successfully');
//       onUpdated();
//       onClose();
//     } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.message || 'Failed to update project');
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center  font-figtree justify-center bg-black/50 p-4">
//       <div className="bg-white w-[90vw] max-w-5xl max-h-[90vh] rounded-xl shadow-xl flex flex-col">
//         <div className="px-6 py-4 border-b flex justify-between items-center shrink-0">
//           <h2 className="text-2xl font-semibold">Edit Project</h2>
//           <button
//             onClick={onClose}
//             className="text-2xl text-gray-400 hover:text-gray-600"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto p-6">
//           <div className="space-y-6">
//             {/* Basic Information */}
//             <div>
//               <h3 className="text-lg font-medium mb-3">Basic Information</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project Name *
//                   </label>
//                   <input
//                     name="projectName"
//                     value={form.projectName}
//                     onChange={handleChange}
//                     placeholder="Enter project name"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project Type / Category
//                   </label>
//                   <select
//                     name="projectType"
//                     value={form.projectType}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   >
//                     <option value="">Select Category</option>
//                     {categories.map((cat) => (
//                       <option key={cat._id} value={cat.categoryName}>
//                         {cat.categoryName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project Status *
//                   </label>
//                   <select
//                     name="projectStatus"
//                     value={form.projectStatus}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   >
//                     <option value="ongoing">Ongoing</option>
//                     <option value="upcoming">Upcoming</option>
//                     <option value="completed">Completed</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Possession Date
//                   </label>
//                   <input
//                     type="date"
//                     name="possessionDate"
//                     value={form.possessionDate}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Location *
//                   </label>
//                   <input
//                     name="location"
//                     value={form.location}
//                     onChange={handleChange}
//                     placeholder="e.g., Bangalore, Karnataka"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Price Starts From (₹)
//                   </label>
//                   <input
//                     type="number"
//                     name="priceStartsFrom"
//                     value={form.priceStartsFrom}
//                     onChange={handleChange}
//                     placeholder="e.g., 5000000"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project Address
//                   </label>
//                   <textarea
//                     name="projectAddress"
//                     value={form.projectAddress}
//                     onChange={handleChange}
//                     placeholder="Enter full project address"
//                     rows="2"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Location URL (Google Maps)
//                   </label>
//                   <input
//                     name="locationUrl"
//                     value={form.locationUrl}
//                     onChange={handleChange}
//                     placeholder="https://maps.google.com/..."
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Project Details */}
//             <div>
//               <h3 className="text-lg font-medium mb-3">Project Details</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Unit Configuration
//                   </label>
//                   <input
//                     name="unitConfiguration"
//                     value={form.unitConfiguration}
//                     onChange={handleChange}
//                     placeholder="e.g., 1,2,2.5,3 BHK"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Water Supply
//                   </label>
//                   <input
//                     name="waterSupply"
//                     value={form.waterSupply}
//                     onChange={handleChange}
//                     placeholder="e.g., Corporation and Borewell"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Project Area
//                   </label>
//                   <input
//                     name="projectArea"
//                     value={form.projectArea}
//                     onChange={handleChange}
//                     placeholder="e.g., 6.42 Acres"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Total Units
//                   </label>
//                   <input
//                     type="number"
//                     name="totalUnits"
//                     value={form.totalUnits}
//                     onChange={handleChange}
//                     placeholder="e.g., 430"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     About Project
//                   </label>
//                   <textarea
//                     name="aboutProject"
//                     value={form.aboutProject}
//                     onChange={handleChange}
//                     placeholder="Write a detailed description about the project"
//                     rows="4"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Key Features */}
//             <div>
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-lg font-medium">Key Features</h3>
//                 <button
//                   type="button"
//                   onClick={addKeyFeature}
//                   className="flex items-center gap-2 px-3 py-1 text-sm bg-[#2D5C3A] text-white rounded "
//                 >
//                   <Plus size={16} />
//                   Add Feature
//                 </button>
//               </div>
//               <div className="space-y-2">
//                 {keyFeatures.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-2">
//                     <span className="text-gray-400">•</span>
//                     <input
//                       value={feature}
//                       onChange={(e) => updateKeyFeature(index, e.target.value)}
//                       placeholder="Enter key feature"
//                       className="flex-1 border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     />
//                     {keyFeatures.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeKeyFeature(index)}
//                         className="p-2 text-red-500 hover:bg-red-50 rounded"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Amenities */}
//             <div>
//               <h3 className="text-lg font-medium mb-3">Amenities</h3>

//               {/* Show Already Selected Amenities */}
//               {selectedAmenities.length > 0 && (
//                 <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded">
//                   <p className="text-sm font-medium text-green-800 mb-2">
//                     Selected Amenities ({selectedAmenities.length})
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedAmenities.map((amenity, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-1 bg-white border border-green-300 rounded px-3 py-1 text-sm"
//                       >
//                         <span className="text-gray-700">{amenity}</span>
//                         <button
//                           type="button"
//                           onClick={() => toggleAmenity(amenity)}
//                           className="ml-1 text-red-500 hover:text-red-700"
//                         >
//                           <X size={14} />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <p className="text-sm text-gray-600 mb-3">
//                 Select amenities available in this project
//               </p>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-60 overflow-y-auto border border-gray-200 rounded p-3">
//                 {availableAmenities.map((amenity, index) => (
//                   <label
//                     key={index}
//                     className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedAmenities.includes(amenity)}
//                       onChange={() => toggleAmenity(amenity)}
//                       className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                     />
//                     <span className="text-sm text-gray-700">{amenity}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Media Files */}
//             <div>
//               <h3 className="text-lg font-medium mb-3">Project Media</h3>
//               <div className="space-y-4">
//                 {/* Property Images */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Property Images
//                   </label>
//                   {existingPropertyImages.length > 0 && (
//                     <div className="mb-2">
//                       <p className="text-xs text-gray-500 mb-2">
//                         Current Images ({existingPropertyImages.length})
//                       </p>
//                       <div className="flex gap-2 overflow-x-auto pb-2">
//                         {existingPropertyImages.map((img, i) => (
//                           <img
//                             key={i}
//                             src={img}
//                             alt={`Property ${i + 1}`}
//                             className="h-20 w-28 object-cover rounded border"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                   <input
//                     type="file"
//                     accept="image/*"
//                     multiple
//                     onChange={handlePropertyImagesChange}
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">
//                     Upload new images (will be added to existing images)
//                   </p>
//                 </div>

//                 {/* Master Plans */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Master Plans / Floor Plans
//                   </label>
//                   {existingMasterPlans.length > 0 && (
//                     <div className="mb-2">
//                       <p className="text-xs text-gray-500 mb-2">
//                         Current Master Plan
//                       </p>

//                       <div className="flex gap-2 overflow-x-auto pb-2">
//                         {existingMasterPlans.map((plan, i) => (
//                           <img
//                             key={i}
//                             src={plan}
//                             alt={`Plan ${i + 1}`}
//                             className="h-20 w-28 object-cover rounded border"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleMasterPlansChange}
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">
//                     Upload a new master plan
//                   </p>
//                 </div>

//                 {/* Brochure */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Brochure
//                   </label>
//                   {existingBrochure && (
//                     <div className="mb-2">
//                       <p className="text-xs text-gray-500 mb-2">
//                         Current Brochure
//                       </p>
//                       <img
//                         src={existingBrochure}
//                         alt="Brochure"
//                         className="h-24 w-auto object-contain rounded border"
//                       />
//                     </div>
//                   )}
//                   <input
//                     type="file"
//                     accept="image/*,application/pdf"
//                     onChange={handleBrochureChange}
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">
//                     Upload project brochure (Image or PDF)
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RERA Information */}
//             <div>
//               <h3 className="text-lg font-medium mb-3">
//                 RERA & Legal Information
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     RERA Description
//                   </label>
//                   <textarea
//                     name="reraDescription"
//                     value={form.reraDescription}
//                     onChange={handleChange}
//                     placeholder="Enter RERA related description"
//                     rows="3"
//                     className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       NoBroker RERA ID
//                     </label>
//                     <input
//                       name="noBrokerReraId"
//                       value={form.noBrokerReraId}
//                       onChange={handleChange}
//                       placeholder="Enter NoBroker RERA ID"
//                       className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Builder Project RERA ID
//                     </label>
//                     <input
//                       name="builderProjectReraId"
//                       value={form.builderProjectReraId}
//                       onChange={handleChange}
//                       placeholder="Enter Builder RERA ID"
//                       className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
//             >
//               Cancel
//             </button>

//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="px-6 py-2 bg-[#2D5C3A] text-white rounded hover:bg-green-900 transition"
//             >
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProjectModal1;

import { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { updateProjects, getAllCategories } from '../../../Api';
import { toast } from 'react-toastify';

const EditProjectModal = ({ project, onClose, onUpdated }) => {
  const safeParseArray = (value) => {
    if (Array.isArray(value)) return value;
    if (!value) return [];
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  };

  const [form, setForm] = useState({
    projectName: project.projectName || '',
    projectType: project.projectType || '',
    projectStatus: project.projectStatus || 'ongoing',
    location: project.location || '',
    projectAddress: project.projectAddress || '',
    priceStartsFrom: project.priceStartsFrom || '',
    unitConfiguration: project.unitConfiguration || '',
    waterSupply: project.waterSupply || '',
    projectArea: project.projectArea || '',
    totalUnits: project.totalUnits || '',
    possessionDate: project.possessionDate
      ? project.possessionDate.split('T')[0]
      : '',
    aboutProject: project.aboutProject || '',
    reraDescription: project.reraDescription || '',
    noBrokerReraId: project.noBrokerReraId || '',
    builderProjectReraId: project.builderProjectReraId || '',
    locationUrl: project.locationUrl || '',
  });

  const [keyFeatures, setKeyFeatures] = useState(() => {
    const features = safeParseArray(project.keyFeatures);
    return features.length > 0 ? features : [''];
  });

  // For multiple master plans
  const [masterPlansList, setMasterPlansList] = useState(() => {
    const existing = safeParseArray(project.masterPlans);
    return existing.length > 0
      ? existing.map((plan) => ({
          planName: plan.planName || '',
          carpetArea: plan.carpetArea || '',
          planPhoto: plan.planPhoto || null, // existing URL
          newPlanPhoto: null, // new file if uploaded
        }))
      : [{ planName: '', carpetArea: '', planPhoto: null, newPlanPhoto: null }];
  });

  // For Sections
  const [sectionsList, setSectionsList] = useState(() => {
    const existing = safeParseArray(project.sections);
    return existing.length > 0
      ? existing.map((sec) => ({
          sectionName: sec.sectionName || '',
          sectionDescription: sec.sectionDescription || '',
          sectionImage: sec.sectionImage || null, // existing URL
          newSectionImage: null, // new file if uploaded
        }))
      : [
          {
            sectionName: '',
            sectionDescription: '',
            sectionImage: null,
            newSectionImage: null,
          },
        ];
  });

  // Categories and available amenities
  const [categories, setCategories] = useState([]);
  const [availableAmenities] = useState([
    'Swimming Pool',
    'Gym',
    "Children's Play Area",
    'Club House',
    'Landscaped Garden',
    'Jogging Track',
    'Indoor Games',
    'Outdoor Sports',
    'Party Hall',
    'Multipurpose Hall',
    'Yoga/Meditation Room',
    'Library',
    'Amphitheatre',
    'Power Backup',
    'Security',
    'CCTV Surveillance',
    'Intercom',
    'Visitor Parking',
    'Rain Water Harvesting',
    'Sewage Treatment Plant',
    'Vastu Compliant',
    'Earthquake Resistant',
    'Car Parking',
    'Elevator/Lift',
  ]);

  const [selectedAmenities, setSelectedAmenities] = useState(() => {
    return safeParseArray(project.amenities);
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getAllCategories();
      setCategories(res.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
    }
  };

  // Files state
  const [propertyImages, setPropertyImages] = useState([]);
  const [brochureImage, setBrochureImage] = useState(null);

  // Existing files preview
  const existingPropertyImages = safeParseArray(project.propertyImages);
  const existingBrochure = project.brochureImage || null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Key Features handlers
  const addKeyFeature = () => {
    setKeyFeatures([...keyFeatures, '']);
  };

  const updateKeyFeature = (index, value) => {
    const updated = [...keyFeatures];
    updated[index] = value;
    setKeyFeatures(updated);
  };

  const removeKeyFeature = (index) => {
    if (keyFeatures.length > 1) {
      setKeyFeatures(keyFeatures.filter((_, i) => i !== index));
    }
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) => {
      if (prev.includes(amenity)) {
        return prev.filter((a) => a !== amenity);
      } else {
        return [...prev, amenity];
      }
    });
  };

  const handlePropertyImagesChange = (e) => {
    setPropertyImages([...e.target.files]);
  };

  // Master Plans handlers
  const updateMasterPlan = (index, key, value) => {
    const updated = [...masterPlansList];
    updated[index][key] = value;
    setMasterPlansList(updated);
  };

  const addMasterPlan = () => {
    setMasterPlansList([
      ...masterPlansList,
      { planName: '', carpetArea: '', planPhoto: null, newPlanPhoto: null },
    ]);
  };

  const removeMasterPlan = (index) => {
    if (masterPlansList.length > 1) {
      setMasterPlansList(masterPlansList.filter((_, i) => i !== index));
    }
  };

  const handleMasterPlanFileChange = (index, file) => {
    const updated = [...masterPlansList];
    updated[index].newPlanPhoto = file;
    setMasterPlansList(updated);
  };

  // Sections handlers
  const updateSection = (index, key, value) => {
    const updated = [...sectionsList];
    updated[index][key] = value;
    setSectionsList(updated);
  };

  const addSection = () => {
    setSectionsList([
      ...sectionsList,
      {
        sectionName: '',
        sectionDescription: '',
        sectionImage: null,
        newSectionImage: null,
      },
    ]);
  };

  const removeSection = (index) => {
    if (sectionsList.length > 1) {
      setSectionsList(sectionsList.filter((_, i) => i !== index));
    }
  };

  const handleSectionFileChange = (index, file) => {
    const updated = [...sectionsList];
    updated[index].newSectionImage = file;
    setSectionsList(updated);
  };

  const handleBrochureChange = (e) => {
    setBrochureImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        toast.error('Authentication token not found. Please login again.');
        return;
      }

      const formData = new FormData();

      // Append basic form fields
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      // Append key features
      const validKeyFeatures = keyFeatures.filter((f) => f && f.trim() !== '');
      if (validKeyFeatures.length > 0) {
        formData.append('keyFeatures', JSON.stringify(validKeyFeatures));
      }

      // Append amenities
      const validAmenities = selectedAmenities.filter(
        (a) => a && a.trim() !== '',
      );
      if (validAmenities.length > 0) {
        formData.append('amenities', JSON.stringify(validAmenities));
      }

      // Append property images
      if (propertyImages.length > 0) {
        propertyImages.forEach((file) => {
          formData.append('propertyImages', file);
        });
      }

      // ==================== MASTER PLANS ====================
      // Prepare master plans data (without files)
      const masterPlansData = masterPlansList.map((plan) => ({
        planName: plan.planName,
        carpetArea: plan.carpetArea,
        planPhoto: plan.planPhoto, // existing URL or null
      }));

      formData.append('masterPlansData', JSON.stringify(masterPlansData));

      // Append new master plan files
      masterPlansList.forEach((plan) => {
        if (plan.newPlanPhoto) {
          formData.append('masterPlans', plan.newPlanPhoto);
        } else {
          // If no new file, append null placeholder to maintain order
          formData.append('masterPlans', new Blob(), 'placeholder');
        }
      });

      // ==================== SECTIONS ====================
      // Prepare sections data (without files)
      const sectionsData = sectionsList.map((sec) => ({
        sectionName: sec.sectionName,
        sectionDescription: sec.sectionDescription,
        sectionImage: sec.sectionImage, // existing URL or null
      }));

      formData.append('sectionsData', JSON.stringify(sectionsData));

      // Append new section files
      sectionsList.forEach((sec) => {
        if (sec.newSectionImage) {
          formData.append('sectionImages', sec.newSectionImage);
        } else {
          // If no new file, append null placeholder to maintain order
          formData.append('sectionImages', new Blob(), 'placeholder');
        }
      });

      // Append brochure
      if (brochureImage) {
        formData.append('brochureImage', brochureImage);
      }

      await updateProjects(project._id, formData, token);
      toast.success('Project updated successfully');
      onUpdated();
      onClose();
    } catch (err) {
      console.error(err);

      const msg = err.response?.data?.message || '';

      if (
        msg.includes('No matching document') ||
        msg.includes('modifiedPaths') ||
        msg.includes('version')
      ) {
        return;
      }

      toast.error(msg || 'Failed to update project');
    }

    // catch (err) {
    //   console.error(err);
    //   toast.error(err.response?.data?.message || 'Failed to update project');
    // }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center font-figtree justify-center bg-black/50 p-4">
      <div className="bg-white w-[90vw] max-w-5xl max-h-[90vh] rounded-xl shadow-xl flex flex-col">
        {/* Header - Fixed */}
        <div className="px-6 py-4 border-b flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-semibold">Edit Project</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Basic Information */}
            <div>
              <h3 className="text-lg font-medium mb-3">Basic Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Name *
                  </label>
                  <input
                    name="projectName"
                    value={form.projectName}
                    onChange={handleChange}
                    placeholder="Enter project name"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type / Category
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat.categoryName}>
                        {cat.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Status *
                  </label>
                  <select
                    name="projectStatus"
                    value={form.projectStatus}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="ongoing">Ongoing</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Possession Date
                  </label>
                  <input
                    type="date"
                    name="possessionDate"
                    value={form.possessionDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location *
                  </label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g., Bangalore, Karnataka"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Starts From (₹)
                  </label>
                  <input
                    type="text"
                    name="priceStartsFrom"
                    value={form.priceStartsFrom}
                    onChange={handleChange}
                    placeholder="e.g., 5000000"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Address
                  </label>
                  <textarea
                    name="projectAddress"
                    value={form.projectAddress}
                    onChange={handleChange}
                    placeholder="Enter full project address"
                    rows="2"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location URL (Google Maps)
                  </label>
                  <input
                    name="locationUrl"
                    value={form.locationUrl}
                    onChange={handleChange}
                    placeholder="https://maps.google.com/..."
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-lg font-medium mb-3">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit Configuration
                  </label>
                  <input
                    name="unitConfiguration"
                    value={form.unitConfiguration}
                    onChange={handleChange}
                    placeholder="e.g., 1,2,2.5,3 BHK"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Water Supply
                  </label>
                  <input
                    name="waterSupply"
                    value={form.waterSupply}
                    onChange={handleChange}
                    placeholder="e.g., Corporation and Borewell"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Area
                  </label>
                  <input
                    name="projectArea"
                    value={form.projectArea}
                    onChange={handleChange}
                    placeholder="e.g., 6.42 Acres"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Units
                  </label>
                  <input
                    type="number"
                    name="totalUnits"
                    value={form.totalUnits}
                    onChange={handleChange}
                    placeholder="e.g., 430"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    About Project
                  </label>
                  <textarea
                    name="aboutProject"
                    value={form.aboutProject}
                    onChange={handleChange}
                    placeholder="Write a detailed description about the project"
                    rows="4"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Key Features</h3>
                <button
                  type="button"
                  onClick={addKeyFeature}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-[#2D5C3A] text-white rounded"
                >
                  <Plus size={16} />
                  Add Feature
                </button>
              </div>
              <div className="space-y-2">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <input
                      value={feature}
                      onChange={(e) => updateKeyFeature(index, e.target.value)}
                      placeholder="Enter key feature"
                      className="flex-1 border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    {keyFeatures.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeKeyFeature(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-medium mb-3">Amenities</h3>

              {/* Show Already Selected Amenities */}
              {selectedAmenities.length > 0 && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded">
                  <p className="text-sm font-medium text-green-800 mb-2">
                    Selected Amenities ({selectedAmenities.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedAmenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-white border border-green-300 rounded px-3 py-1 text-sm"
                      >
                        <span className="text-gray-700">{amenity}</span>
                        <button
                          type="button"
                          onClick={() => toggleAmenity(amenity)}
                          className="ml-1 text-red-500 hover:text-red-700"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-600 mb-3">
                Select amenities available in this project
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-60 overflow-y-auto border border-gray-200 rounded p-3">
                {availableAmenities.map((amenity, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => toggleAmenity(amenity)}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Media Files */}
            <div>
              <h3 className="text-lg font-medium mb-3">Project Media</h3>
              <div className="space-y-4">
                {/* Property Images */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Images
                  </label>
                  {existingPropertyImages.length > 0 && (
                    <div className="mb-2">
                      <p className="text-xs text-gray-500 mb-2">
                        Current Images ({existingPropertyImages.length})
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {existingPropertyImages.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Property ${i + 1}`}
                            className="h-20 w-28 object-cover rounded border"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePropertyImagesChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload new images (will be added to existing images)
                  </p>
                </div>

                {/* Master Plans */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">Master Plans</h3>
                    <button
                      type="button"
                      onClick={addMasterPlan}
                      className="flex items-center gap-1 text-sm bg-green-700 text-white px-2 py-1 rounded"
                    >
                      <Plus size={14} />
                      Add Plan
                    </button>
                  </div>
                  {masterPlansList.map((plan, index) => (
                    <div
                      key={index}
                      className="border rounded p-3 mb-2 space-y-2"
                    >
                      <div className="flex gap-2">
                        <input
                          value={plan.planName}
                          onChange={(e) =>
                            updateMasterPlan(index, 'planName', e.target.value)
                          }
                          placeholder="Plan Name (e.g., 2 BHK)"
                          className="flex-1 border p-2 rounded"
                        />
                        <input
                          value={plan.carpetArea}
                          onChange={(e) =>
                            updateMasterPlan(
                              index,
                              'carpetArea',
                              e.target.value,
                            )
                          }
                          placeholder="Carpet Area"
                          className="flex-1 border p-2 rounded"
                        />
                        {masterPlansList.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMasterPlan(index)}
                            className="text-red-500"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>

                      {/* Show existing image if available */}
                      {plan.planPhoto && !plan.newPlanPhoto && (
                        <div>
                          <p className="text-xs text-gray-500 mb-1">
                            Current Image:
                          </p>
                          <img
                            src={plan.planPhoto}
                            alt="plan"
                            className="h-20 w-28 object-cover rounded border"
                          />
                        </div>
                      )}

                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleMasterPlanFileChange(index, e.target.files[0])
                        }
                      />

                      {plan.newPlanPhoto && (
                        <p className="text-xs text-green-600">
                          New image selected: {plan.newPlanPhoto.name}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Brochure */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brochure
                  </label>
                  {existingBrochure && (
                    <div className="mb-2">
                      <p className="text-xs text-gray-500 mb-2">
                        Current Brochure
                      </p>
                      <img
                        src={existingBrochure}
                        alt="Brochure"
                        className="h-24 w-auto object-contain rounded border"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleBrochureChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload project brochure (Image or PDF)
                  </p>
                </div>
              </div>
            </div>

            {/* RERA Information */}
            <div>
              <h3 className="text-lg font-medium mb-3">
                RERA & Legal Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RERA Description
                  </label>
                  <textarea
                    name="reraDescription"
                    value={form.reraDescription}
                    onChange={handleChange}
                    placeholder="Enter RERA related description"
                    rows="3"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      NoBroker RERA ID
                    </label>
                    <input
                      name="noBrokerReraId"
                      value={form.noBrokerReraId}
                      onChange={handleChange}
                      placeholder="Enter NoBroker RERA ID"
                      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Builder Project RERA ID
                    </label>
                    <input
                      name="builderProjectReraId"
                      value={form.builderProjectReraId}
                      onChange={handleChange}
                      placeholder="Enter Builder RERA ID"
                      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">Sections</h3>
                <button
                  type="button"
                  onClick={addSection}
                  className="flex items-center gap-1 text-sm bg-green-700 text-white px-2 py-1 rounded"
                >
                  <Plus size={14} />
                  Add Section
                </button>
              </div>
              {sectionsList.map((sec, index) => (
                <div key={index} className="border rounded p-3 mb-2 space-y-2">
                  <input
                    value={sec.sectionName}
                    onChange={(e) =>
                      updateSection(index, 'sectionName', e.target.value)
                    }
                    placeholder="Section Name"
                    className="w-full border p-2 rounded"
                  />
                  <textarea
                    value={sec.sectionDescription}
                    onChange={(e) =>
                      updateSection(index, 'sectionDescription', e.target.value)
                    }
                    placeholder="Section Description"
                    rows={2}
                    className="w-full border p-2 rounded"
                  />

                  {/* Show existing image if available */}
                  {sec.sectionImage && !sec.newSectionImage && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Current Image:
                      </p>
                      <img
                        src={sec.sectionImage}
                        alt="section"
                        className="h-20 w-28 object-cover rounded border"
                      />
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleSectionFileChange(index, e.target.files[0])
                    }
                  />

                  {sec.newSectionImage && (
                    <p className="text-xs text-green-600">
                      New image selected: {sec.newSectionImage.name}
                    </p>
                  )}

                  {sectionsList.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="text-red-500 mt-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-6 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 bg-[#2D5C3A] text-white rounded hover:bg-green-900 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModal;
