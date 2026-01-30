// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Download, ArrowLeft } from 'lucide-react';
// import { getSingleProject } from '../Api';
// import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
// import PrjctGetinTouch from '../Components/AboutUs/AboutGetInTouch';
// import star from '../assets/Icons/star.png';
// import directionsImg from '../assets/Directions.png';

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

// const ProjectDetail = () => {
//   const { projectId } = useParams();
//   const navigate = useNavigate();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const res = await getSingleProject(projectId);
//         if (res.success) {
//           setProject(res.project);
//         }
//       } catch (error) {
//         console.error('Error fetching project:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (projectId) {
//       fetchProject();
//     }
//   }, [projectId]);

//   const handleDownloadBrochure = () => {
//     if (!project?.brochureImage) return;
//     const link = document.createElement('a');
//     link.href = project.brochureImage;
//     link.download = `${project.projectName}-brochure`;
//     link.target = '_blank';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   if (loading) {
//     return (
//       <>
//         <CmpltNavbar />
//         <div className="min-h-screen flex items-center justify-center">
//           <div className="text-xl text-gray-600">
//             Loading project details...
//           </div>
//         </div>
//       </>
//     );
//   }

//   if (!project) {
//     return (
//       <>
//         <CmpltNavbar />
//         <div className="min-h-screen flex flex-col items-center justify-center">
//           <div className="text-xl text-gray-600 mb-4">Project not found</div>
//           <button
//             onClick={() => navigate(-1)}
//             className="px-6 py-2 bg-[#2D5C3A] text-white rounded-md hover:bg-green-900 transition"
//           >
//             Go Back
//           </button>
//         </div>
//       </>
//     );
//   }

//   const latestMasterPlan = safeParseArray(project.masterPlans).slice(-1)[0];
//   const keyFeatures = safeParseArray(project.keyFeatures);
//   const amenities = safeParseArray(project.amenities);

//   return (
//     <>
//       <CmpltNavbar />

//       <div className="bg-white w-full">
//         {/* HEADER */}
//         <div className="px-4 sm:px-6 py-4 border-b flex justify-between items-center max-w-6xl mx-auto">
//           <p className="text-[22px] sm:text-[26px] md:text-[32px] font-medium font-figtree">
//             {project.projectName}
//           </p>
//           {/* <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span className="hidden sm:inline">Back</span>
//           </button> */}
//         </div>

//         <div className="max-w-6xl mx-auto">
//           {/* TOP IMAGES */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 sm:p-6">
//             <div className="relative col-span-1 md:col-span-2 overflow-visible">
//               <img
//                 src={project.propertyImages?.[0]}
//                 alt="Main"
//                 className="h-[220px] md:h-[320px] w-full object-cover rounded-lg"
//               />

//               <div
//                 className="
//                   absolute -bottom-2 font-figtree bg-white text-[#209F39]
//                   text-sm sm:text-base md:text-[20px]
//                   px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4
//                   rounded-xl font-semibold
//                 "
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

//                   {/* <div className="border rounded-lg p-4">
//                     <p className="text-sm text-gray-600 mb-1">
//                       Price Starts From
//                     </p>
//                     <p className="text-lg sm:text-2xl">
//                       ₹{' '}
//                       {project.priceStartsFrom?.toLocaleString('en-IN') || '-'}
//                     </p>
//                   </div> */}
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
//                 {/* {keyFeatures.length > 0 && (
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
//                 )} */}
//                 {keyFeatures.length > 0 && (
//                   <div>
//                     {/* H1 Title */}
//                     <h1 className="font-figtree text-[40px] mb-4">
//                       <span className="font-medium">Key</span>{' '}
//                       <span className="font-normal">Features</span>
//                     </h1>

//                     <ul className="space-y-3">
//                       {keyFeatures.map((feature, i) => (
//                         <li
//                           key={i}
//                           className="flex items-start gap-3 border rounded-md px-3 py-2 text-sm sm:text-base font-normal"
//                         >
//                           {/* Bullet */}
//                           <span className="text-gray-300 text-[48px] font-bold leading-none">
//                             •
//                           </span>

//                           {/* Feature Text */}
//                           <span className="font-normal">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* FLOOR PLAN */}
//                 {/* {latestMasterPlan && (
//                   <Section title="Master Plan">
//                     <div className="border rounded-lg p-4 bg-gray-50">
//                       <img
//                         src={latestMasterPlan}
//                         alt="Master Plan"
//                         className="w-full object-contain rounded"
//                       />
//                     </div>
//                   </Section>
//                 )} */}
//                 {/* FLOOR PLAN */}
//                 {latestMasterPlan && (
//                   <div>
//                     {/* H1 Title */}
//                     <h1 className="font-figtree text-[40px] mb-4">
//                       <span className="font-medium">Master</span>{' '}
//                       <span className="font-normal">Plan</span>
//                     </h1>

//                     <div className="border rounded-lg p-4 bg-gray-50">
//                       <img
//                         src={latestMasterPlan}
//                         alt="Master Plan"
//                         className="w-full object-contain rounded"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* AMENITIES */}
//                 {/* {amenities.length > 0 && (
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
//                 )} */}
//                 {amenities.length > 0 && (
//                   <div>
//                     {/* H1 Title */}
//                     <h1 className="font-figtree text-[40px] mb-4">
//                       <span className="font-medium">Amenities</span>
//                     </h1>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {amenities.map((amenity, i) => (
//                         <div
//                           key={i}
//                           className="flex items-start gap-3 border rounded-md px-3 py-2 text-sm sm:text-base font-normal"
//                         >
//                           {/* Bullet */}
//                           {/* <span className="text-gray-300 text-[48px] font-bold leading-none">
//                             •
//                           </span> */}

//                           {/* Amenity Text */}
//                           <span className="font-normal">{amenity}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* ABOUT PROJECT */}
//                 {/* {project.aboutProject && (
//                   <Section title="About Project">
//                     <p className="text-sm sm:text-base leading-relaxed">
//                       {project.aboutProject}
//                     </p>
//                   </Section>
//                 )} */}
//                 {project.aboutProject && (
//                   <div>
//                     {/* H1 Title */}
//                     <h1 className="font-figtree text-[40px] mb-3">
//                       <span className="font-medium">About</span>{' '}
//                       <span className="font-normal">Project</span>
//                     </h1>

//                     {/* Description */}
//                     <p className="text-sm sm:text-base leading-relaxed">
//                       {project.aboutProject}
//                     </p>
//                   </div>
//                 )}

//                 {/* RERA */}
//                 {/* {(project.reraDescription ||
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
//                 )} */}

//                 {(project.reraDescription ||
//                   project.noBrokerReraId ||
//                   project.builderProjectReraId) && (
//                   <div>
//                     {/* H1 Title */}
//                     <h1 className="font-figtree text-[30px] mb-4">
//                       <span className="font-medium">
//                         A Upkar Spring woods -
//                       </span>{' '}
//                       <span className="font-normal">
//                         RERA & Legal Certificates
//                       </span>
//                     </h1>

//                     <div className="space-y-2 text-sm sm:text-base font-normal">
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
//                   </div>
//                 )}

//                 {/* PROJECT IMAGES */}
//                 {/* {project.propertyImages?.length > 0 && (
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
//                 )} */}
//                 {project.propertyImages?.length > 0 && (
//                   <div>
//                     {/* H1 Title */}
//                     <h1 className="font-figtree text-[40px] mb-4">
//                       <span className="font-medium">Project</span>{' '}
//                       <span className="font-normal">Images</span>
//                     </h1>

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
//                   </div>
//                 )}

//                 {/* DIRECTIONS */}
//                 {/* {project.locationUrl && (
//                   <Section title="Directions">
//                     <div>
//                       <a href={project.locationUrl}></a>

//                       <img
//                         src={directionsImg}
//                         alt="Directions"
//                         className="w-full rounded-lg max-h-[220px] object-cover"
//                       />
//                     </div>
//                   </Section>
//                 )} */}
//                 {project.locationUrl && (
//                   <div>
//                     {/* H1 Title */}
//                     <h1 className="font-figtree text-[40px] mb-4">
//                       <span className="font-medium">Directions</span>
//                     </h1>

//                     <div>
//                       {/* Make image clickable */}
//                       <a
//                         href={project.locationUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block"
//                       >
//                         <img
//                           src={directionsImg}
//                           alt="Directions"
//                           className="w-full rounded-lg max-h-[220px] object-cover cursor-pointer"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* RIGHT SECTION */}
//               <div className="space-y-4 lg:sticky lg:top-4">
//                 <div className="border rounded-lg p-4">
//                   <p className="text-sm text-gray-600 mb-1">
//                     Price Starts From
//                   </p>
//                   <p className="text-lg sm:text-2xl">
//                     ₹ {project.priceStartsFrom?.toLocaleString('en-IN') || '-'}
//                   </p>
//                 </div>
//                 <div className="border bg-black  rounded-lg p-4">
//                   <p className="font-medium mb-1 text-white capitalize">
//                     {project.projectStatus || 'Ongoing'} Project
//                   </p>
//                   <p className="text-white">
//                     Possession in{' '}
//                     <span className="font-semibold text-white">
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

//         {/* Contact Section */}
//         <PrjctGetinTouch />
//       </div>
//     </>
//   );
// };

// /* REUSABLE COMPONENTS */

// function Section({ title, children }) {
//   return (
//     <div>
//       <h4 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl mb-3">
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

// export default ProjectDetail;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Expand, X } from 'lucide-react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { getSingleProject } from '../Api';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
import PrjctGetinTouch from '../Components/AboutUs/AboutGetInTouch';
import directionsImg from '../assets/Directions.png';
import { AMENITY_ICONS } from '../assets/Amenities';
import areaIcon from '../assets/Icons/area1.png';
import waterIcon from '../assets/Icons/water1.png';
import unitIcon from '../assets/Icons/unit1.png';

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

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [showPlanPreview, setShowPlanPreview] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getSingleProject(projectId);
        if (res.success) setProject(res.project);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) fetchProject();
  }, [projectId]);

  // const handleDownloadBrochure = () => {
  //   if (!project?.brochureImage) return;
  //   const link = document.createElement('a');
  //   link.href = project.brochureImage;
  //   link.download = `${project.projectName}-brochure`;
  //   link.target = '_blank';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const handleDownloadBrochure = async () => {
    try {
      const response = await fetch(project.brochureImage);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      //  Use real filename from backend
      let fileName = project.brochureFileName || 'brochure';

      //  Fallback: derive extension from mimetype
      if (!fileName.includes('.')) {
        const mime = project.brochureMimeType || blob.type;

        if (mime === 'application/pdf') fileName += '.pdf';
        else if (mime === 'image/png') fileName += '.png';
        else if (mime === 'image/jpeg') fileName += '.jpg';
      }

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };
  if (loading) {
    return (
      <>
        <CmpltNavbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-gray-600">
            Loading project details...
          </div>
        </div>
      </>
    );
  }

  if (!project) {
    return (
      <>
        <CmpltNavbar />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-xl text-gray-600 mb-4">Project not found</div>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#2D5C3A] text-white rounded-md"
          >
            Go Back
          </button>
        </div>
      </>
    );
  }

  const masterPlans = safeParseArray(project.masterPlans);
  const keyFeatures = safeParseArray(project.keyFeatures);
  const amenities = safeParseArray(project.amenities);
  const sections = safeParseArray(project.sections);

  return (
    <>
      <CmpltNavbar />

      <div className="bg-white w-full">
        {/* TOP IMAGES */}
        <div className="max-w-6xl mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* <div className="md:col-span-2">
            <img
              src={project.propertyImages?.[0]}
              alt="Main"
              className="h-[220px] md:h-[320px] w-full object-cover rounded-lg"
            />
          </div> */}
          <div className="relative col-span-1 md:col-span-2 overflow-visible">
            <img
              src={project.propertyImages?.[0]}
              alt="Main"
              className="h-[220px] md:h-[320px] w-full object-cover rounded-lg"
            />

            <div className=" absolute -bottom-2 font-figtree bg-white text-[#209F39] text-sm sm:text-base md:text-[20px] px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 rounded-xl font-semibold">
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

        {/* BASIC INFO GRID */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-[40px] font-figtree font-semibold">
              {project.projectName}
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] text-black">
              {project.location}
            </p>

            {/* <div className="grid grid-cols-1 font-figtree sm:grid-cols-2 gap-4">
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
            </div> */}
            <div className="grid grid-cols-1 font-figtree sm:grid-cols-2 gap-4">
              <InfoBox
                label="Unit Configuration"
                value={project.unitConfiguration || '—'}
                icon={<Home size={28} strokeWidth={1.6} />}
              />

              <InfoBox
                label="Water Supply"
                value={project.waterSupply || '—'}
                icon={waterIcon}
              />

              <InfoBox
                label="Units"
                value={project.totalUnits || '—'}
                icon={unitIcon}
              />
              <InfoBox
                label="Project Area"
                value={project.projectArea || '—'}
                icon={areaIcon}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 lg:sticky lg:top-4">
            <div className="border rounded-lg p-4">
              {/* <p className="text-sm sm:text-base text-gray-600 mb-1">
                Price Starts From
              </p> */}
              <p className="text-lg font-bold font-figtree sm:text-xl md:text-2xl">
                ₹ {project.priceStartsFrom?.toLocaleString('en-IN') || '-'}
              </p>
            </div>
            <div className="border bg-black rounded-lg p-4">
              <p className="font-medium mb-1 text-white capitalize">
                {project.projectStatus || 'Ongoing'} Project
              </p>
              <p className="text-white">
                Possession in{' '}
                <span className="font-semibold text-white">
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
                <p className="font-medium font-figtree text-base sm:text-lg md:text-xl">
                  View Brochure
                </p>
                <Download size={16} />
              </div>
            )}
          </div>
        </div>

        {/* ================= FULL WIDTH SECTIONS ================= */}
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
            {/* KEY FEATURES */}
            {keyFeatures.length > 0 && (
              <div>
                <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl mb-4">
                  <span className="font-semibold">Key</span>{' '}
                  <span className="font-light">Features</span>
                </h1>

                <ul className="grid grid-cols-1 font-figtree sm:grid-cols-2 gap-3">
                  {keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 border rounded-md px-3 py-2"
                    >
                      <span className="text-base sm:text-lg md:text-xl">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* MASTER PLAN WITH TABS - EXACT FIGMA STRUCTURE */}
            {/* {masterPlans.length > 0 && (
              <div>
                <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl mb-6">
                  <span className="font-semibold">Floor</span>{' '}
                  <span className="font-light">Plan</span>
                </h1>

           
                {masterPlans.length > 1 && (
                  <div className="flex justify-center gap-3 mb-8">
                    {masterPlans.map((plan, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPlanIndex(index)}
                        className={`px-6 py-2 rounded-full whitespace-nowrap transition-all text-sm sm:text-base ${
                          selectedPlanIndex === index
                            ? 'bg-[#0A1F44] text-white'
                            : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                      >
                        {plan.planName || `${index + 1} BHK`}
                      </button>
                    ))}
                  </div>
                )}

            
                <div className="flex justify-center">
                  <div className="inline-block">
                    <div className="relative">
                      <img
                        src={masterPlans[selectedPlanIndex]?.planPhoto}
                        alt={
                          masterPlans[selectedPlanIndex]?.planName ||
                          'Floor Plan'
                        }
                        className="w-[550px] h-[450px] object-contain rounded-lg"
                      />
                    </div>

                    <div className="w-[550px] mt-4 bg-[#000000] text-white rounded-xl p-6 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-medium mb-1">
                          {masterPlans[selectedPlanIndex]?.planName ||
                            'Floor Plan'}
                        </h3>
                        {masterPlans[selectedPlanIndex]?.carpetArea && (
                          <p className="text-sm text-gray-300">
                            Carpet Area -{' '}
                            {masterPlans[selectedPlanIndex].carpetArea}
                          </p>
                        )}
                      </div>
                      <button className="bg-white text-[#0A1F44] px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition whitespace-nowrap">
                        View Details !
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )} */}

            {masterPlans.length > 0 && (
              <div>
                <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl mb-6">
                  <span className="font-semibold">Floor</span>{' '}
                  <span className="font-light">Plan</span>
                </h1>

                {/* Plan Tabs - Scrollable on Mobile */}
                {masterPlans.length > 1 && (
                  <div className="flex gap-3 mb-6 overflow-x-auto pb-2 sm:justify-center">
                    {masterPlans.map((plan, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPlanIndex(index)}
                        className={`px-4 sm:px-6 py-2 rounded-full whitespace-nowrap transition-all text-sm sm:text-base flex-shrink-0 ${
                          selectedPlanIndex === index
                            ? 'bg-[#000000] text-white'
                            : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                      >
                        {plan.planName || `${index + 1} BHK`}
                      </button>
                    ))}
                  </div>
                )}

                {/* Floor Plan Container */}
                <div className="flex justify-center">
                  <div className="w-full max-w-[550px]">
                    {/* Image */}
                    {/* <div className="relative w-full">
                      <img
                        src={masterPlans[selectedPlanIndex]?.planPhoto}
                        alt={
                          masterPlans[selectedPlanIndex]?.planName ||
                          'Floor Plan'
                        }
                        className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-contain rounded-lg"
                      />
                    </div> */}
                    <div className="relative w-full">
                      <img
                        src={masterPlans[selectedPlanIndex]?.planPhoto}
                        alt={
                          masterPlans[selectedPlanIndex]?.planName ||
                          'Floor Plan'
                        }
                        className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-contain rounded-lg"
                      />

                      <button
                        onClick={() => setShowPlanPreview(true)}
                        // className="absolute top-9 right-2 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
                        className="absolute top-2 right-2  lg:top-9 lg:right-2 sm:top-3 sm:right-3 bg-black/60 hover:bg-black text-white p-2 sm:p-2.5 rounded-full transition"
                        title="View Full Image"
                      >
                        <Expand size={18} />
                      </button>
                    </div>

                    {/* Info Card */}
                    <div className="w-full mt-4 bg-[#000000] text-white rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold font-figtree text-white leading-tight mb-1">
                          {masterPlans[selectedPlanIndex]?.planName || 'BHK'}{' '}
                          Floor plan
                        </h3>

                        {masterPlans[selectedPlanIndex]?.carpetArea && (
                          <p className="text-sm sm:text-base font-figtree text-gray-300">
                            Carpet Area -{' '}
                            {masterPlans[selectedPlanIndex].carpetArea} sq ft
                          </p>
                        )}
                      </div>

                      {/* <button className="bg-white font-figtree text-[#0A1F44] px-4 sm:px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition whitespace-nowrap self-start sm:self-auto">
                        View Details !
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AMENITIES */}
            {amenities.length > 0 && (
              <div>
                <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl mb-4 font-semibold">
                  Amenities
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 border rounded-md px-3 py-3"
                    >
                      {AMENITY_ICONS[amenity] && (
                        <img
                          src={AMENITY_ICONS[amenity]}
                          alt={amenity}
                          className="w-8 h-8 object-contain"
                        />
                      )}
                      <span className="text-base sm:text-lg md:text-xl">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ABOUT PROJECT */}
            {project.aboutProject && (
              <div>
                <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl mb-3">
                  <span className="font-semibold">About</span>{' '}
                  <span className="font-light">Project</span>
                </h1>
                <p className="leading-relaxed font-figtree text-base sm:text-lg md:text-xl">
                  {project.aboutProject}
                </p>
              </div>
            )}

            {/* RERA */}
            {(project.reraDescription ||
              project.noBrokerReraId ||
              project.builderProjectReraId) && (
              <div>
                <h1 className="font-figtree text-xl sm:text-2xl md:text-3xl mb-4">
                  <span className="font-semibold">{project.projectName} -</span>{' '}
                  <span className="font-light">RERA & Legal Certificates</span>
                </h1>

                <div className="space-y-2 text-base font-figtree sm:text-lg md:text-xl">
                  {project.reraDescription && <p>{project.reraDescription}</p>}
                  {project.noBrokerReraId && (
                    <p className="font-figtree">
                      <b>NoBroker RERA ID:</b> {project.noBrokerReraId}
                    </p>
                  )}
                  {project.builderProjectReraId && (
                    <p>
                      <b>Builder RERA ID:</b> {project.builderProjectReraId}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* PROJECT IMAGES */}
            {/* {project.propertyImages?.length > 0 && (
              <div>
                <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl mb-4">
                  <span className="font-semibold">Project</span>{' '}
                  <span className="font-light">Images</span>
                </h1>

                <div className="w-full overflow-x-auto">
                  <div className="flex gap-3 py-2">
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
              </div>
            )} */}

            {project.propertyImages?.length > 0 && (
              <div>
                <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl mb-4">
                  <span className="font-semibold">Project</span>{' '}
                  <span className="font-light">Images</span>
                </h1>

                {/* ===== Desktop / Tablet ===== */}
                <div className="relative hidden sm:block">
                  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6 project-gallery-container">
                    {Array.from({
                      length: Math.ceil(project.propertyImages.length / 4),
                    }).map((_, i) => {
                      const chunk = project.propertyImages.slice(
                        i * 4,
                        i * 4 + 4,
                      );
                      const [img0, img1, img2, img3] = chunk;

                      return (
                        <div
                          key={i}
                          className="flex-shrink-0 w-full snap-center"
                        >
                          <div className="grid grid-cols-[2fr_1fr_2fr] gap-4">
                            {/* Left Big */}
                            {img0 && (
                              <div className="rounded-lg overflow-hidden">
                                <img
                                  src={img0}
                                  alt={`project-${i}-0`}
                                  className="w-full h-[340px] object-cover"
                                />
                              </div>
                            )}

                            {/* Middle 2 small */}
                            <div className="flex flex-col gap-4">
                              {img1 && (
                                <div className="rounded-lg overflow-hidden">
                                  <img
                                    src={img1}
                                    alt={`project-${i}-1`}
                                    className="w-full h-[160px] object-cover"
                                  />
                                </div>
                              )}
                              {img2 && (
                                <div className="rounded-lg overflow-hidden">
                                  <img
                                    src={img2}
                                    alt={`project-${i}-2`}
                                    className="w-full h-[160px] object-cover"
                                  />
                                </div>
                              )}
                            </div>

                            {/* Right Big */}
                            {img3 && (
                              <div className="rounded-lg overflow-hidden">
                                <img
                                  src={img3}
                                  alt={`project-${i}-3`}
                                  className="w-full h-[340px] object-cover"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Left Arrow */}
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                    onClick={() =>
                      document
                        .querySelector('.project-gallery-container')
                        ?.scrollBy({ left: -400, behavior: 'smooth' })
                    }
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#050F27]/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                    onClick={() =>
                      document
                        .querySelector('.project-gallery-container')
                        ?.scrollBy({ left: 400, behavior: 'smooth' })
                    }
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* ===== Mobile ===== */}
                <div className="relative block sm:hidden mt-2 mx-2">
                  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6 project-mobile-gallery">
                    {project.propertyImages.map((src, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-full h-[400px] rounded-lg overflow-hidden snap-center"
                      >
                        <img
                          src={src}
                          alt={`project-mobile-${index}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                    onClick={() =>
                      document
                        .querySelector('.project-mobile-gallery')
                        ?.scrollBy({ left: -400, behavior: 'smooth' })
                    }
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#050F27]/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                    onClick={() =>
                      document
                        .querySelector('.project-mobile-gallery')
                        ?.scrollBy({ left: 400, behavior: 'smooth' })
                    }
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* DIRECTIONS */}
            {project.locationUrl && (
              <div>
                <h1 className="font-figtree text-2xl sm:text-3xl md:text-4xl mb-4 font-semibold">
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
                    className="w-full rounded-lg max-h-[340px] object-cover cursor-pointer"
                  />
                </a>
              </div>
            )}

            {/* SECTIONS - Display after Directions */}
            {sections.length > 0 && (
              <div className="space-y-8">
                {sections.map((section, index) => {
                  // Only show sections that have at least name or description or image
                  if (
                    !section.sectionName &&
                    !section.sectionDescription &&
                    !section.sectionImage
                  ) {
                    return null;
                  }

                  return (
                    <div key={index} className="space-y-4">
                      {/* Section Name */}
                      {section.sectionName && (
                        <h2 className="font-figtree text-2xl sm:text-3xl md:text-4xl font-semibold">
                          {section.sectionName}
                        </h2>
                      )}

                      {/* Section Description */}
                      {section.sectionDescription && (
                        <p className="text-base font-figtree sm:text-lg md:text-xl text-black leading-relaxed">
                          {section.sectionDescription}
                        </p>
                      )}

                      {/* Section Image */}
                      {section.sectionImage && (
                        <img
                          src={section.sectionImage}
                          alt={section.sectionName || `Section ${index + 1}`}
                          className="w-full rounded-lg max-h-[500px] object-cover"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* CONTACT */}
        <PrjctGetinTouch />
      </div>
      {/* FLOOR PLAN FULL PREVIEW MODAL */}
      {showPlanPreview && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setShowPlanPreview(false)}
              className="absolute -top-10 right-2    lg:top-4 lg:right-32 sm:-top-12 sm:right-0 bg-black/60 hover:bg-black p-2 rounded-full  text-white  transition "
            >
              <X size={24} />
            </button>

            {/* Full Image */}
            <img
              src={masterPlans[selectedPlanIndex]?.planPhoto}
              alt="Full Floor Plan"
              className="w-full max-h-[90vh] object-contain rounded-lg  p-2"
            />
          </div>
        </div>
      )}
    </>
  );
};

// function InfoBox({ label, value }) {
//   return (
//     <div className="border rounded-lg p-3">
//       <p className="text-sm sm:text-base">{label}</p>
//       <p className="font-medium text-base sm:text-lg md:text-xl">{value}</p>
//     </div>
//   );
// }
const InfoBox = ({ label, value, icon }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-xl">
      <div className="text-gray-500 flex items-center justify-center w-10 h-10">
        {typeof icon === 'string' ? (
          <img src={icon} alt={label} className="w-7 h-7 object-contain" />
        ) : (
          icon
        )}
      </div>

      <div>
        <p className="text-[20px] font-figtree text-black">{label}</p>
        <p className="text-[20px] font-figtree font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
