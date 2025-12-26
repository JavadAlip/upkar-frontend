// import { useEffect } from 'react';
// import { MapPin, Download } from 'lucide-react';
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

//   const keyFeatures = safeParseArray(project.keyFeatures);
//   const amenities = safeParseArray(project.amenities);

//   console.log('Project data:', project);
//   console.log('Key Features:', keyFeatures);
//   console.log('Amenities:', amenities);

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
//     <div className="fixed inset-0 z-[9999] bg-black/60 flex justify-center items-center p-4">
//       <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col">
//         <div className="px-6 py-4 border-b flex justify-between items-center shrink-0 bg-white">
//           <div>
//             {/* <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded mb-2">
//               RERA Certified
//             </span> */}
//             <p className="text-[32px] font-medium font-figtree text-black">
//               {project.projectName}
//             </p>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-2xl text-gray-400 hover:text-gray-600 w-8 h-8"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto">
//           {/* <div className="grid grid-cols-3 gap-3 p-6">
//             <img
//               src={project.propertyImages?.[0]}
//               alt="Main"
//               className="col-span-2 h-[280px] w-full object-cover rounded-lg"
//             />
//             <div className="grid grid-rows-2 gap-3">
//               <img
//                 src={project.propertyImages?.[1]}
//                 alt="Property 2"
//                 className="h-full w-full object-cover rounded-lg"
//               />
//               <img
//                 src={project.propertyImages?.[2]}
//                 alt="Property 3"
//                 className="h-full w-full object-cover rounded-lg"
//               />
//             </div>
//           </div> */}

//           <div className="grid grid-cols-3 gap-3 p-6">
//             <img
//               src={project.propertyImages?.[0]}
//               alt="Main"
//               className="col-span-2 w-full object-cover rounded-lg"
//               style={{ height: '320px' }}
//             />

//             <div className="grid grid-rows-2 gap-3">
//               <img
//                 src={project.propertyImages?.[1]}
//                 alt="Property 2"
//                 className="w-full object-cover rounded-lg"
//                 style={{ height: '155px' }}
//               />
//               <img
//                 src={project.propertyImages?.[2]}
//                 alt="Property 3"
//                 className="w-full object-cover rounded-lg"
//                 style={{ height: '155px' }}
//               />
//             </div>
//           </div>

//           <div className="px-6 pb-6">
//             <div className="grid grid-cols-3 gap-6">
//               <div className="col-span-2 space-y-6">
//                 <div className="flex flex-col md:flex-row md:items-start md:gap-12">
//                   <div>
//                     <h1 className="text-[32px] font-figtree font-medium text-black">
//                       {project.projectName}
//                     </h1>
//                     <p className="text-[16px] text-gray-600 mt-1">
//                       {project.location}
//                     </p>
//                   </div>

//                   <div className="border rounded-lg p-4 mt-4 md:mt-0 w-full md:w-auto">
//                     <p className="text-[16px] text-gray-600  tracking-wide mb-1">
//                       Price Starts From
//                     </p>
//                     <p className="text-[24px] font-normal text-black">
//                       ₹{' '}
//                       {project.priceStartsFrom?.toLocaleString('en-IN') || '-'}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <InfoBox
//                     label="Unit Configuration"
//                     value={project.unitConfiguration || '1,2,2.5,3 BHK'}
//                   />
//                   <InfoBox
//                     label="Water Supply"
//                     value={project.waterSupply || 'Corporation and Borewell'}
//                   />
//                   <InfoBox
//                     label="Project Area"
//                     value={project.projectArea || '6.42 Acres'}
//                   />
//                   <InfoBox label="Units" value={project.totalUnits || '430'} />
//                 </div>

//                 {keyFeatures.length > 0 && (
//                   <div>
//                     <h4 className="flex items-center gap-2 text-[24px] font-normal font-figtree text-black mb-3">
//                       <img
//                         src={star}
//                         alt="Star"
//                         className="w-5 h-5 object-contain"
//                       />
//                       Key Features
//                     </h4>

//                     <ul className="space-y-3">
//                       {keyFeatures.map((feature, i) => (
//                         <li
//                           key={i}
//                           className="flex items-center gap-3 border border-gray-200 rounded-md px-4 py-2 font-figtree text-[16px] text-black"
//                         >
//                           <span className="text-[#D9D9D9] text-3xl leading-none">
//                             •
//                           </span>
//                           <span className="leading-relaxed">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {project.masterPlans?.[0] && (
//                   <div>
//                     <h4 className="flex items-center font-figtree gap-2 text-[24px] font-normal text-black mb-3">
//                       <img
//                         src={star}
//                         alt="Star"
//                         className="w-5 h-5 object-contain"
//                       />
//                       Floor Plan
//                     </h4>
//                     <div className="border rounded-lg p-4 bg-gray-50">
//                       <img
//                         src={project.masterPlans[0]}
//                         alt="Floor Plan"
//                         className="w-full object-contain rounded"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {amenities.length > 0 && (
//                   <div>
//                     <h4 className="flex items-center font-figtree gap-2 text-[24px] font-normal text-black mb-3">
//                       <img
//                         src={star}
//                         alt="Star"
//                         className="w-5 h-5 object-contain"
//                       />
//                       Amenities
//                     </h4>

//                     <div className="grid grid-cols-2 gap-3">
//                       {amenities.map((amenity, i) => (
//                         <div
//                           key={i}
//                           className="flex items-center gap-2 border border-gray-200 rounded-md px-4 py-2 text-[16px] font-figtree text-black"
//                         >
//                           <span className="text-[#D9D9D9] text-3xl leading-none">
//                             •
//                           </span>
//                           {amenity}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {project.aboutProject && (
//                   <div>
//                     <h4 className="flex items-center font-figtree gap-2 text-[24px] font-normal text-black mb-3">
//                       <img
//                         src={star}
//                         alt="Star"
//                         className="w-5 h-5 object-contain"
//                       />
//                       About Project
//                     </h4>
//                     <p className="text-[16px] font-figtree text-black leading-relaxed">
//                       {project.aboutProject}
//                     </p>
//                   </div>
//                 )}

//                 {(project.reraDescription ||
//                   project.noBrokerReraId ||
//                   project.builderProjectReraId) && (
//                   <div className="border-t pt-6">
//                     <h4 className="flex items-center font-figtree gap-2 text-[24px] font-normal text-black mb-3">
//                       <img
//                         src={star}
//                         alt="Star"
//                         className="w-5 h-5 object-contain"
//                       />
//                       RERA & Legal Information
//                     </h4>
//                     <div className="space-y-2 text-[16px] text-black">
//                       {project.reraDescription && (
//                         <p>{project.reraDescription}</p>
//                       )}
//                       {project.noBrokerReraId && (
//                         <p>
//                           <span className="font-normal">NoBroker RERA ID:</span>{' '}
//                           <span className="font-semibold">
//                             {project.noBrokerReraId}
//                           </span>
//                         </p>
//                       )}
//                       {project.builderProjectReraId && (
//                         <p>
//                           <span className="font-normal">Builder RERA ID:</span>{' '}
//                           <span className="font-semibold">
//                             {project.builderProjectReraId}
//                           </span>
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {/* {project.propertyImages?.length > 0 && (
//                   <div>
//                     <h4 className="flex items-center font-figtree gap-2 text-[24px] font-normal text-black mb-3">
//                       <img src={star} alt="Star" className="w-5 h-5" />
//                       Project Images
//                     </h4>

//                     <div className="grid grid-cols-3 gap-3">
//                       <img
//                         src={project.propertyImages[0]}
//                         className="col-span-2 h-[260px] w-full object-cover rounded-lg"
//                       />

//                       <div className="grid grid-rows-2 gap-3">
//                         {project.propertyImages.slice(1, 3).map((img, i) => (
//                           <img
//                             key={i}
//                             src={img}
//                             className="h-full w-full object-cover rounded-lg"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )} */}

//                 {project.propertyImages?.length > 0 && (
//                   <div>
//                     <h4 className="flex items-center font-figtree gap-2 text-[24px] font-normal text-black mb-3">
//                       <img src={star} alt="Star" className="w-5 h-5" />
//                       Project Images
//                     </h4>

//                     <div className="flex gap-3 overflow-x-auto py-2">
//                       {project.propertyImages.map((img, i) => (
//                         <img
//                           key={i}
//                           src={img}
//                           alt={`Property ${i + 1}`}
//                           className="flex-shrink-0 h-60 w-80 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {project.locationUrl && (
//                   <div>
//                     <h4 className="flex items-center font-figtree gap-2 text-[24px] font-normal text-black mb-3">
//                       <img src={star} alt="Star" className="w-5 h-5" />
//                       Directions
//                     </h4>

//                     <a
//                       href={project.locationUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block w-full overflow-hidden rounded-lg"
//                     >
//                       <img
//                         src={directionsImg}
//                         alt="Directions"
//                         className="w-full h-auto object-cover hover:scale-105 transition-transform cursor-pointer"
//                       />
//                     </a>
//                   </div>
//                 )}
//               </div>

//               {/* Right section */}
//               <div className="space-y-4">
//                 <div className="border rounded-lg p-4 ">
//                   <p className="text-[16px] font-medium font-figtree text-black capitalize mb-2">
//                     {project.projectStatus || 'Ongoing'} Project
//                   </p>
//                   <p className="text-[16px] text-black">
//                     Possession in{' '}
//                     <span className="font-semibold text-black">
//                       {project.possessionDate
//                         ? new Date(project.possessionDate).toLocaleDateString(
//                             'en-US',
//                             {
//                               month: 'long',
//                               year: 'numeric',
//                             }
//                           )
//                         : 'December 2027'}
//                     </span>
//                   </p>
//                 </div>

//                 {project.brochureImage && (
//                   <div
//                     onClick={handleDownloadBrochure}
//                     className="border rounded-lg p-4 flex items-center justify-between cursor-pointer bg-gray-200 transition"
//                   >
//                     <p className="text-[16px] font-medium font-figtree text-black">
//                       View Brochure
//                     </p>
//                     <Download size={16} className="text-black" />
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* {project.propertyImages?.length > 3 && (
//               <div className="mt-8 pt-6 border-t">
//                 <h4 className="text-base font-semibold text-black mb-4">
//                   Project Gallery
//                 </h4>
//                 <div className="grid grid-cols-4 gap-3">
//                   {project.propertyImages.slice(3).map((img, i) => (
//                     <img
//                       key={i}
//                       src={img}
//                       alt={`Gallery ${i + 4}`}
//                       className="h-32 w-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
//                     />
//                   ))}
//                 </div>
//               </div>
//             )} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function InfoBox({ label, value }) {
//   return (
//     <div className="border rounded-lg p-3 bg-white">
//       <p className="text-[16px] font-figtree font-normal text-gray-600 mb-1">
//         {label}
//       </p>
//       <p className="text-[16px] font-figtree font-medium text-gray-900">
//         {value}
//       </p>
//     </div>
//   );
// }

import { useEffect } from 'react';
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

  const keyFeatures = safeParseArray(project.keyFeatures);
  const amenities = safeParseArray(project.amenities);

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

                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">
                      Price Starts From
                    </p>
                    <p className="text-lg sm:text-2xl">
                      ₹{' '}
                      {project.priceStartsFrom?.toLocaleString('en-IN') || '-'}
                    </p>
                  </div>
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
                {keyFeatures.length > 0 && (
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
                )}

                {/* FLOOR PLAN */}
                {project.masterPlans?.[0] && (
                  <Section title="Floor Plan">
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <img
                        src={project.masterPlans[0]}
                        alt="Floor Plan"
                        className="w-full object-contain rounded"
                      />
                    </div>
                  </Section>
                )}

                {/* AMENITIES */}
                {amenities.length > 0 && (
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
                )}

                {/* ABOUT PROJECT */}
                {project.aboutProject && (
                  <Section title="About Project">
                    <p className="text-sm sm:text-base leading-relaxed">
                      {project.aboutProject}
                    </p>
                  </Section>
                )}

                {/* RERA */}
                {(project.reraDescription ||
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
                )}

                {/* PROJECT IMAGES */}
                {project.propertyImages?.length > 0 && (
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
                )}

                {/* DIRECTIONS */}
                {project.locationUrl && (
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
                )}
              </div>

              {/* RIGHT SECTION */}
              <div className="space-y-4 lg:sticky lg:top-4">
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
                            { month: 'long', year: 'numeric' }
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
