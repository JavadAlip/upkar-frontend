// import { useEffect } from 'react';
// import { Download } from 'lucide-react';
// import star from '../../../assets/Icons/star.png';
// import directionsImg from '../../../assets/Directions.png';

// const safeParseArray = (value) => {
//   if (Array.isArray(value)) return value;
//   if (!value) return [];
//   if (typeof value === 'string') {
//     try {
//       const parsed = JSON.parse(value);
//       return Array.isArray(parsed) ? parsed : [];
//     } catch {
//       return [];
//     }
//   }
//   return [];
// };

// export default function ViewProjectModal({ project, onClose }) {
//   if (!project) return null;
//   const latestMasterPlan = safeParseArray(project.masterPlans).slice(-1)[0];
//   const keyFeatures = safeParseArray(project.keyFeatures);
//   const amenities = safeParseArray(project.amenities);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => (document.body.style.overflow = 'auto');
//   }, []);

//   const handleDownloadBrochure = () => {
//     const link = document.createElement('a');
//     link.href = project.brochureImage;
//     link.download = `${project.projectName}-brochure`;
//     link.target = '_blank';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-3 sm:p-4">
//       <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-xl shadow-2xl flex flex-col overflow-hidden">
//         {/* HEADER */}
//         <div className="px-4 sm:px-6 py-4 border-b flex justify-between items-center">
//           <p className="text-[22px] sm:text-[26px] md:text-[32px] font-medium font-figtree">
//             {project.projectName}
//           </p>
//           <button
//             onClick={onClose}
//             className="w-10 h-10 flex items-center justify-center text-2xl text-gray-400 hover:text-gray-600"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto">
//           {/* TOP IMAGES */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 sm:p-6">
//             {/* <img
//               src={project.propertyImages?.[0]}
//               alt="Main"
//               className="col-span-1 md:col-span-2 h-[220px] md:h-[320px] w-full object-cover rounded-lg"
//             /> */}
//             <div className="relative col-span-1 md:col-span-2 overflow-visible">
//               <img
//                 src={project.propertyImages?.[0]}
//                 alt="Main"
//                 className="h-[220px] md:h-[320px] w-full object-cover rounded-lg"
//               />

//               <div
//                 className="
//       absolute -bottom-2 font-figtree bg-white text-[#209F39]
//       text-sm sm:text-base md:text-[20px]
//       px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4
//       rounded-xl font-semibold
//     "
//               >
//                 RERA Certified
//               </div>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
//               {project.propertyImages?.slice(1, 3).map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   alt={`Property ${i + 2}`}
//                   className="h-[120px] md:h-[155px] w-full object-cover rounded-lg"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* CONTENT */}
//           <div className="px-4 sm:px-6 pb-6">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* LEFT SECTION */}
//               <div className="lg:col-span-2 space-y-6">
//                 {/* TITLE & PRICE */}
//                 <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
//                   <div>
//                     <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-medium">
//                       {project.projectName}
//                     </h1>
//                     <p className="text-sm sm:text-base text-gray-600">
//                       {project.location}
//                     </p>
//                   </div>

//                   <div className="border rounded-lg p-4">
//                     <p className="text-sm text-gray-600 mb-1">
//                       Price Starts From
//                     </p>
//                     <p className="text-lg sm:text-2xl">
//                       ₹{' '}
//                       {project.priceStartsFrom?.toLocaleString('en-IN') || '-'}
//                     </p>
//                   </div>
//                 </div>

//                 {/* INFO BOXES */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <InfoBox
//                     label="Unit Configuration"
//                     value={project.unitConfiguration || '—'}
//                   />
//                   <InfoBox
//                     label="Water Supply"
//                     value={project.waterSupply || '—'}
//                   />
//                   <InfoBox
//                     label="Project Area"
//                     value={project.projectArea || '—'}
//                   />
//                   <InfoBox label="Units" value={project.totalUnits || '—'} />
//                 </div>

//                 {/* KEY FEATURES */}
//                 {keyFeatures.length > 0 && (
//                   <Section title="Key Features">
//                     <ul className="space-y-3">
//                       {keyFeatures.map((feature, i) => (
//                         <li
//                           key={i}
//                           className="flex gap-3 border rounded-md px-3 py-2 text-sm sm:text-base"
//                         >
//                           <span className="text-gray-300 text-2xl">•</span>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </Section>
//                 )}

//                 {/* FLOOR PLAN */}

//                 {latestMasterPlan && (
//                   <Section title="Master Plan">
//                     <div className="border rounded-lg p-4 bg-gray-50">
//                       <img
//                         src={latestMasterPlan}
//                         alt="Master Plan"
//                         className="w-full object-contain rounded"
//                       />
//                     </div>
//                   </Section>
//                 )}

//                 {/* AMENITIES */}
//                 {amenities.length > 0 && (
//                   <Section title="Amenities">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {amenities.map((amenity, i) => (
//                         <div
//                           key={i}
//                           className="flex gap-3 border rounded-md px-3 py-2 text-sm sm:text-base"
//                         >
//                           <span className="text-gray-300 text-2xl">•</span>
//                           {amenity}
//                         </div>
//                       ))}
//                     </div>
//                   </Section>
//                 )}

//                 {/* ABOUT PROJECT */}
//                 {project.aboutProject && (
//                   <Section title="About Project">
//                     <p className="text-sm sm:text-base leading-relaxed">
//                       {project.aboutProject}
//                     </p>
//                   </Section>
//                 )}

//                 {/* RERA */}
//                 {(project.reraDescription ||
//                   project.noBrokerReraId ||
//                   project.builderProjectReraId) && (
//                   <Section title="RERA & Legal Information">
//                     <div className="space-y-2 text-sm sm:text-base">
//                       {project.reraDescription && (
//                         <p>{project.reraDescription}</p>
//                       )}
//                       {project.noBrokerReraId && (
//                         <p>
//                           <span className="font-medium">NoBroker RERA ID:</span>{' '}
//                           {project.noBrokerReraId}
//                         </p>
//                       )}
//                       {project.builderProjectReraId && (
//                         <p>
//                           <span className="font-medium">Builder RERA ID:</span>{' '}
//                           {project.builderProjectReraId}
//                         </p>
//                       )}
//                     </div>
//                   </Section>
//                 )}

//                 {/* PROJECT IMAGES */}
//                 {project.propertyImages?.length > 0 && (
//                   <Section title="Project Images">
//                     <div className="flex gap-3 overflow-x-auto py-2">
//                       {project.propertyImages.map((img, i) => (
//                         <img
//                           key={i}
//                           src={img}
//                           alt={`Gallery ${i + 1}`}
//                           className="h-44 sm:h-52 md:h-60 w-64 sm:w-72 md:w-80 object-cover rounded-lg flex-shrink-0"
//                         />
//                       ))}
//                     </div>
//                   </Section>
//                 )}

//                 {/* DIRECTIONS */}
//                 {project.locationUrl && (
//                   <Section title="Directions">
//                     <a
//                       href={project.locationUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <img
//                         src={directionsImg}
//                         alt="Directions"
//                         className="w-full rounded-lg max-h-[220px] object-cover"
//                       />
//                     </a>
//                   </Section>
//                 )}
//               </div>

//               {/* RIGHT SECTION */}
//               <div className="space-y-4 lg:sticky lg:top-4">
//                 <div className="border rounded-lg p-4">
//                   <p className="font-medium mb-1 capitalize">
//                     {project.projectStatus || 'Ongoing'} Project
//                   </p>
//                   <p>
//                     Possession in{' '}
//                     <span className="font-semibold">
//                       {project.possessionDate
//                         ? new Date(project.possessionDate).toLocaleDateString(
//                             'en-US',
//                             { month: 'long', year: 'numeric' },
//                           )
//                         : '—'}
//                     </span>
//                   </p>
//                 </div>

//                 {project.brochureImage && (
//                   <div
//                     onClick={handleDownloadBrochure}
//                     className="border rounded-lg p-4 flex justify-between items-center cursor-pointer bg-gray-200"
//                   >
//                     <p className="font-medium">View Brochure</p>
//                     <Download size={16} />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* REUSABLE COMPONENTS */

// function Section({ title, children }) {
//   return (
//     <div>
//       <h4 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl mb-3">
//         <img src={star} alt="star" className="w-5 h-5" />
//         {title}
//       </h4>
//       {children}
//     </div>
//   );
// }

// function InfoBox({ label, value }) {
//   return (
//     <div className="border rounded-lg p-3">
//       <p className="text-sm text-gray-600 mb-1">{label}</p>
//       <p className="font-medium">{value}</p>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import star from '../../../assets/Icons/star.png';
import directionsImg from '../../../assets/Directions.png';

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

export default function ViewProjectModal({ project, onClose }) {
  if (!project) return null;
  const latestMasterPlan = safeParseArray(project.masterPlans).slice(-1)[0];
  const keyFeatures = safeParseArray(project.keyFeatures);
  const amenities = safeParseArray(project.amenities);
  const sections = safeParseArray(project.sections);
  const masterPlans = safeParseArray(project.masterPlans);
  const [selectedPlan, setSelectedPlan] = useState(masterPlans[0] || null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = project.brochureImage;
    link.download = `${project.projectName}-brochure`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="px-4 sm:px-6 py-4 border-b flex justify-between items-center">
          <p className="text-[22px] sm:text-[26px] md:text-[32px] font-medium font-figtree">
            {project.projectName}
          </p>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-2xl text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* TOP IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 sm:p-6">
            {/* <img
              src={project.propertyImages?.[0]}
              alt="Main"
              className="col-span-1 md:col-span-2 h-[220px] md:h-[320px] w-full object-cover rounded-lg"
            /> */}
            <div className="relative col-span-1 md:col-span-2 overflow-visible">
              <img
                src={project.propertyImages?.[0]}
                alt="Main"
                className="h-[220px] md:h-[320px] w-full object-cover rounded-lg"
              />

              <div
                className="
      absolute -bottom-2 font-figtree bg-white text-[#209F39]
      text-sm sm:text-base md:text-[20px]
      px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4
      rounded-xl font-semibold
    "
              >
                RERA Certified
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {project.propertyImages?.slice(1, 3).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Property ${i + 2}`}
                  className="h-[120px] md:h-[155px] w-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-4 sm:px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* LEFT SECTION */}
              <div className="lg:col-span-2 space-y-6">
                {/* TITLE & PRICE */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <div>
                    <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-medium">
                      {project.projectName}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">
                      {project.location}
                    </p>
                  </div>

                  {/* <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">
                      Price Starts From
                    </p>
                    <p className="text-lg sm:text-2xl">
                      ₹{' '}
                      {project.priceStartsFrom?.toLocaleString('en-IN') || '-'}
                    </p>
                  </div> */}
                </div>

                {/* INFO BOXES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InfoBox
                    label="Unit Configuration"
                    value={project.unitConfiguration || '—'}
                  />
                  <InfoBox
                    label="Water Supply"
                    value={project.waterSupply || '—'}
                  />
                  <InfoBox
                    label="Project Area"
                    value={project.projectArea || '—'}
                  />
                  <InfoBox label="Units" value={project.totalUnits || '—'} />
                </div>

                {/* KEY FEATURES */}
                {/* {keyFeatures.length > 0 && (
                  <Section title="Key Features">
                    <ul className="space-y-3">
                      {keyFeatures.map((feature, i) => (
                        <li
                          key={i}
                          className="flex gap-3 border rounded-md px-3 py-2 text-sm sm:text-base"
                        >
                          <span className="text-gray-300 text-2xl">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Section>
                )} */}
                {keyFeatures.length > 0 && (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                      Key Features
                    </h1>

                    <ul className="space-y-3">
                      {keyFeatures.map((feature, i) => (
                        <li
                          key={i}
                          className="flex gap-3 border rounded-md px-3 py-2 text-sm sm:text-base"
                        >
                          {/* <span className="text-gray-300 text-2xl">•</span> */}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FLOOR PLAN */}
                {/* 
                {latestMasterPlan && (
                  <Section title="Master Plan">
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <img
                        src={latestMasterPlan}
                        alt="Master Plan"
                        className="w-full object-contain rounded"
                      />
                    </div>
                  </Section>
                )} */}

                {/* FLOOR PLAN SECTION */}
                {/* {masterPlans.length > 0 && (
                  <Section title="Floor Plan">
                    <div className="space-y-3">
                      
                      <div className="flex gap-3 flex-wrap">
                        {masterPlans.map((plan) => (
                          <button
                            key={plan._id}
                            onClick={() => setSelectedPlan(plan)}
                            className={`px-4 py-2 rounded-lg font-medium border ${
                              selectedPlan?._id === plan._id
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-gray-700 border-gray-300'
                            }`}
                          >
                            {plan.planName}
                          </button>
                        ))}
                      </div>

                  
                      {selectedPlan && (
                        <div className="border rounded-lg p-4 bg-gray-50 mt-3">
                          <img
                            src={selectedPlan.planPhoto}
                            alt={selectedPlan.planName}
                            className="w-full object-contain rounded mb-2"
                          />
                          <p className="text-sm sm:text-base">
                            <span className="font-medium">Carpet Area:</span>{' '}
                            {selectedPlan.carpetArea || '—'}
                          </p>
                        </div>
                      )}
                    </div>
                  </Section>
                )} */}
                {masterPlans.length > 0 && (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                      Floor Plan
                    </h1>

                    <div className="space-y-3">
                      {/* Plan Names Row */}
                      <div className="flex gap-3 flex-wrap">
                        {masterPlans.map((plan) => (
                          <button
                            key={plan._id}
                            onClick={() => setSelectedPlan(plan)}
                            className={`px-4 py-2 rounded-lg font-medium border ${
                              selectedPlan?._id === plan._id
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-gray-700 border-gray-300'
                            }`}
                          >
                            {plan.planName}
                          </button>
                        ))}
                      </div>

                      {/* Selected Plan Image & Carpet Area */}
                      {selectedPlan && (
                        <div className="border rounded-lg p-4 bg-gray-50 mt-3">
                          <img
                            src={selectedPlan.planPhoto}
                            alt={selectedPlan.planName}
                            className="w-full object-contain rounded mb-2"
                          />
                          <p className="text-sm sm:text-base">
                            <span className="font-medium">Carpet Area:</span>{' '}
                            {selectedPlan.carpetArea || '—'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* AMENITIES */}
                {/* {amenities.length > 0 && (
                  <Section title="Amenities">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex gap-3 border rounded-md px-3 py-2 text-sm sm:text-base"
                        >
                          <span className="text-gray-300 text-2xl">•</span>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </Section>
                )} */}
                {amenities.length > 0 && (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                      Amenities
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex gap-3 border rounded-md px-3 py-2 text-sm sm:text-base"
                        >
                          {/* <span className="text-gray-300 text-2xl">•</span> */}
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ABOUT PROJECT */}
                {/* {project.aboutProject && (
                  <Section title="About Project">
                    <p className="text-sm sm:text-base leading-relaxed">
                      {project.aboutProject}
                    </p>
                  </Section>
                )} */}
                {project.aboutProject && (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                      About Project
                    </h1>

                    <p className="text-sm sm:text-base leading-relaxed">
                      {project.aboutProject}
                    </p>
                  </div>
                )}

                {/* RERA */}
                {/* {(project.reraDescription ||
                  project.noBrokerReraId ||
                  project.builderProjectReraId) && (
                  <Section title="RERA & Legal Information">
                    <div className="space-y-2 text-sm sm:text-base">
                      {project.reraDescription && (
                        <p>{project.reraDescription}</p>
                      )}
                      {project.noBrokerReraId && (
                        <p>
                          <span className="font-medium">NoBroker RERA ID:</span>{' '}
                          {project.noBrokerReraId}
                        </p>
                      )}
                      {project.builderProjectReraId && (
                        <p>
                          <span className="font-medium">Builder RERA ID:</span>{' '}
                          {project.builderProjectReraId}
                        </p>
                      )}
                    </div>
                  </Section>
                )} */}

                {(project.reraDescription ||
                  project.noBrokerReraId ||
                  project.builderProjectReraId) && (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                      RERA & Legal Information
                    </h1>

                    <div className="space-y-2 text-sm sm:text-base">
                      {project.reraDescription && (
                        <p>{project.reraDescription}</p>
                      )}

                      {project.noBrokerReraId && (
                        <p>
                          <span className="font-medium">NoBroker RERA ID:</span>{' '}
                          {project.noBrokerReraId}
                        </p>
                      )}

                      {project.builderProjectReraId && (
                        <p>
                          <span className="font-medium">Builder RERA ID:</span>{' '}
                          {project.builderProjectReraId}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* PROJECT IMAGES */}
                {/* {project.propertyImages?.length > 0 && (
                  <Section title="Project Images">
                    <div className="flex gap-3 overflow-x-auto py-2">
                      {project.propertyImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Gallery ${i + 1}`}
                          className="h-44 sm:h-52 md:h-60 w-64 sm:w-72 md:w-80 object-cover rounded-lg flex-shrink-0"
                        />
                      ))}
                    </div>
                  </Section>
                )} */}
                {project.propertyImages?.length > 0 && (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                      Project Images
                    </h1>

                    <div className="flex gap-3 overflow-x-auto py-2">
                      {project.propertyImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Gallery ${i + 1}`}
                          className="h-44 sm:h-52 md:h-60 w-64 sm:w-72 md:w-80 object-cover rounded-lg flex-shrink-0"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* DIRECTIONS */}
                {/* {project.locationUrl && (
                  <Section title="Directions">
                    <a
                      href={project.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={directionsImg}
                        alt="Directions"
                        className="w-full rounded-lg max-h-[220px] object-cover"
                      />
                    </a>
                  </Section>
                )} */}
                {project.locationUrl && (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                      Directions
                    </h1>

                    <a
                      href={project.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={directionsImg}
                        alt="Directions"
                        className="w-full rounded-lg max-h-[220px] object-cover"
                      />
                    </a>
                  </div>
                )}

                {/* SECTIONS */}
                {/* {sections.length > 0 && (
                  <Section title="Project Sections">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {sections.map((sec) => (
                        <div
                          key={sec._id}
                          className="border rounded-lg overflow-hidden bg-gray-50"
                        >
                          {sec.sectionImage && (
                            <img
                              src={sec.sectionImage}
                              alt={sec.sectionName}
                              className="w-full h-40 object-cover"
                            />
                          )}
                          <div className="p-3">
                            <h5 className="font-medium text-base sm:text-lg mb-1">
                              {sec.sectionName}
                            </h5>
                            <p className="text-sm sm:text-base text-gray-600">
                              {sec.sectionDescription}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Section>
                )} */}
                {sections.length > 0 && (
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                      Project Sections
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {sections.map((sec) => (
                        <div
                          key={sec._id}
                          className="border rounded-lg overflow-hidden bg-gray-50"
                        >
                          {sec.sectionImage && (
                            <img
                              src={sec.sectionImage}
                              alt={sec.sectionName}
                              className="w-full h-40 object-cover"
                            />
                          )}

                          <div className="p-3">
                            <h5 className="font-medium text-base sm:text-lg mb-1">
                              {sec.sectionName}
                            </h5>
                            <p className="text-sm sm:text-base text-gray-600">
                              {sec.sectionDescription}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT SECTION */}
              <div className="space-y-4 lg:sticky lg:top-4">
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">
                    Price Starts From
                  </p>
                  <p className="text-lg sm:text-2xl">
                    ₹ {project.priceStartsFrom?.toLocaleString('en-IN') || '-'}
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="font-medium mb-1 capitalize">
                    {project.projectStatus || 'Ongoing'} Project
                  </p>
                  <p>
                    Possession in{' '}
                    <span className="font-semibold">
                      {project.possessionDate
                        ? new Date(project.possessionDate).toLocaleDateString(
                            'en-US',
                            { month: 'long', year: 'numeric' },
                          )
                        : '—'}
                    </span>
                  </p>
                </div>

                {project.brochureImage && (
                  <div
                    onClick={handleDownloadBrochure}
                    className="border rounded-lg p-4 flex justify-between items-center cursor-pointer bg-gray-200"
                  >
                    <p className="font-medium">View Brochure</p>
                    <Download size={16} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* REUSABLE COMPONENTS */

function Section({ title, children }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl mb-3">
        <img src={star} alt="star" className="w-5 h-5" />
        {title}
      </h4>
      {children}
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="border rounded-lg p-3">
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
