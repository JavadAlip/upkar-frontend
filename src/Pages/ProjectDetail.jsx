import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Expand, X } from 'lucide-react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { getSingleProject } from '../Api';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
import PrjctGetinTouch from '../Components/Common/PrjctDetailGetinTouch';
import directionsImg from '../assets/Directions.png';
import { AMENITY_ICONS } from '../assets/Amenities';
import areaIcon from '../assets/Icons/area1.png';
import waterIcon from '../assets/Icons/water1.png';
import unitIcon from '../assets/Icons/unit1.png';
import BrochureForm from '../Components/BrochureForm/BrochureForm';
import { GoDotFill } from 'react-icons/go';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import getinBtn from '../../src/assets/Icons/getinBtn8.png';
import { createEnquiry, getAllProjects } from '../Api';
import { toast } from 'react-toastify';

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
  const [formData, setFormData] = useState({
    projectStatus: '',
    projectId: '',
    siteVisitDate: '',
    location: '',
    name: '',
    email: '',
    phone: '',
    isExistingCustomer: '',
  });

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        if (Array.isArray(allProjects)) setProjects(allProjects);
      } catch (err) {
        toast.error('Failed to load projects');
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (!formData.projectStatus) {
      setFilteredProjects([]);
      return;
    }

    const filtered = projects.filter(
      (p) => p.projectStatus === formData.projectStatus,
    );

    setFilteredProjects(filtered);
    setFormData((prev) => ({ ...prev, projectId: '' }));
  }, [formData.projectStatus, projects]);

  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [showPlanPreview, setShowPlanPreview] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

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

  useEffect(() => {
    if (showBrochureModal) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showBrochureModal]);

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
        <div className="pt-24">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-xl text-gray-600">
              Loading project details...
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!project) {
    return (
      <>
        <CmpltNavbar />
        <div className="pt-24">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="text-xl text-gray-600 mb-4">Project not found</div>
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-[#2D5C3A] text-white rounded-md"
            >
              Go Back
            </button>
          </div>
        </div>
      </>
    );
  }

  const masterPlans = safeParseArray(project.masterPlans);
  const keyFeatures = safeParseArray(project.keyFeatures);
  const amenities = safeParseArray(project.amenities);
  const sections = safeParseArray(project.sections);

  // Separate function for downloading brochure
  const downloadBrochure = async () => {
    if (!project?.brochureImage) return;

    try {
      const response = await fetch(project.brochureImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      let fileName = project.brochureFileName || 'brochure';

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

  return (
    <>
      <CmpltNavbar />
      <div className="pt-24">
        <div
          className={`w-full transition-all ${showBrochureModal ? 'blur-sm pointer-events-none' : ''}`}
        >
          <div className="bg-white w-full">
            {/* TOP IMAGES */}
            <div className="max-w-6xl mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-3">
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

                {/* {project.brochureImage && (
              <div
                onClick={handleDownloadBrochure}
                className="border rounded-lg p-4 flex justify-between items-center cursor-pointer bg-gray-200"
              >
                <p className="font-medium font-figtree text-base sm:text-lg md:text-xl">
                  View Brochure
                </p>
                <Download size={16} />
              </div>
            )} */}
                {project.brochureImage && (
                  <div
                    onClick={() => setShowBrochureModal(true)}
                    className="border rounded-lg p-4 flex justify-between items-center cursor-pointer bg-gray-200"
                  >
                    <p className="font-medium font-figtree text-base sm:text-lg md:text-xl">
                      Download Brochure
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
                          className="flex items-start gap-2 border rounded-md px-3 py-2"
                        >
                          {/* Dot Icon */}
                          <GoDotFill className="text-black mt-1" size={20} />

                          <span className="text-base sm:text-lg md:text-xl">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* MASTER PLAN */}

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
                              {masterPlans[selectedPlanIndex]?.planName ||
                                'BHK'}{' '}
                              Floor plan
                            </h3>

                            {masterPlans[selectedPlanIndex]?.carpetArea && (
                              <p className="text-sm sm:text-base font-figtree text-gray-300">
                                Carpet Area -{' '}
                                {masterPlans[selectedPlanIndex].carpetArea} sq
                                ft
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
                      <span className="font-semibold">
                        {project.projectName} -
                      </span>{' '}
                      <span className="font-light">
                        RERA & Legal Certificates
                      </span>
                    </h1>

                    <div className="space-y-2 text-base font-figtree sm:text-lg md:text-xl">
                      {project.reraDescription && (
                        <p>{project.reraDescription}</p>
                      )}
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
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#000000]/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
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
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#000000]/30 backdrop-blur-md text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
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

                {/* DIRECTIONS + CONTACT (50-50 on Large Screens) */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col lg:h-full">
                  <h1 className="block lg:hidden font-figtree text-2xl sm:text-3xl mb-4 font-semibold">
                    Directions
                  </h1>

                  <div className="rounded-2xl overflow-hidden shadow-xl lg:h-full">
                    {(() => {
                      const defaultUrl =
                        'https://www.google.com/maps/place/Upkar+Developers/data=!4m2!3m1!1s0x0:0x4197a95cbd5e5aaa?sa=X&ved=1t:2428&ictx=111';

                      // If locationUrl exists and looks valid (basic check)
                      const finalUrl =
                        project.locationUrl &&
                        project.locationUrl.startsWith('http')
                          ? project.locationUrl
                          : defaultUrl;

                      return (
                        <a
                          href={finalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <iframe
                            title="Project Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.11610951081!2d77.56036951969323!3d12.939408280942776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159423739445%3A0x4197a95cbd5e5aaa!2sUPKAR%20TOWERS!5e0!3m2!1sen!2som!4v1733050000000!5m2!1sen!2som"
                            className="w-full h-[350px] lg:h-full border-0 pointer-events-none"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </a>
                      );
                    })()}
                  </div>
                </div>

                <div className="flex lg:h-full">
                  <div className="flex-1">
                    <PrjctGetinTouch />
                  </div>
                </div>
              </div> */}

                {/* DIRECTIONS + CONTACT (50-50 on Large Screens) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* ================= DIRECTIONS ================= */}
                  {project.locationEmbedUrl && (
                    <div className="flex flex-col">
                      <div
                        className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer flex-1 min-h-[350px]"
                        onClick={() => {
                          if (project.locationUrl) {
                            window.open(
                              project.locationUrl,
                              '_blank',
                              'noopener,noreferrer',
                            );
                          }
                        }}
                      >
                        <iframe
                          title="Project Location"
                          src={project.locationEmbedUrl}
                          className="w-full h-full border-0 pointer-events-none"
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  )}

                  {/* ================= GET IN TOUCH ================= */}
                  <div className="w-full font-figtree flex flex-col border border-gray-400 rounded-lg">
                    <div className="bg-white rounded-3xl p-8 md:p-10 w-full  flex-1">
                      <form
                        className="flex flex-col gap-5"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          try {
                            await createEnquiry(formData);
                            toast.success('Enquiry submitted successfully!');
                            setFormData({
                              projectStatus: '',
                              projectId: '',
                              siteVisitDate: '',
                              location: '',
                              name: '',
                              email: '',
                              phone: '',
                              isExistingCustomer: '',
                            });
                          } catch (err) {
                            toast.error(
                              err?.response?.data?.message ||
                                'Something went wrong. Try again.',
                            );
                          }
                        }}
                      >
                        {/* PROJECT STATUS */}
                        <select
                          name="projectStatus"
                          value={formData.projectStatus}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border border-black rounded-2xl"
                          required
                        >
                          <option value="">Select Project Status</option>
                          <option value="ongoing">Ongoing</option>
                          <option value="upcoming">Upcoming</option>
                          <option value="completed">Completed</option>
                        </select>

                        {/* PROJECT LIST */}
                        <select
                          name="projectId"
                          value={formData.projectId}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border border-black rounded-2xl"
                          required
                          disabled={!filteredProjects.length}
                        >
                          <option value="">Select Project</option>
                          {filteredProjects.map((p) => (
                            <option key={p._id} value={p._id}>
                              {p.projectName}
                            </option>
                          ))}
                        </select>

                        {/* SITE VISIT DATE */}
                        <input
                          type="date"
                          name="siteVisitDate"
                          value={formData.siteVisitDate}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border border-black rounded-2xl"
                          required
                        />

                        {/* LOCATION */}
                        <input
                          type="text"
                          name="location"
                          placeholder="Location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border border-black rounded-2xl"
                          required
                        />

                        {/* NAME */}
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border border-black rounded-2xl"
                          required
                        />

                        {/* EMAIL */}
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border border-black rounded-2xl"
                          required
                        />

                        {/* PHONE */}
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border border-black rounded-2xl"
                          required
                        />

                        {/* EXISTING CUSTOMER */}
                        <select
                          name="isExistingCustomer"
                          value={formData.isExistingCustomer}
                          onChange={handleChange}
                          className="w-full px-5 py-3 border border-black rounded-2xl"
                          required
                        >
                          <option value="">
                            Are you an existing customer?
                          </option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>

                        {/* SUBMIT */}
                        <button
                          type="submit"
                          className="mt-4 flex justify-start"
                        >
                          <img
                            src={getinBtn}
                            alt="Send Enquiry"
                            className="max-w-[200px] sm:max-w-[180px]  xs:max-w-[160px]  w-full hover:opacity-90 "
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* SECTIONS */}
                {sections.length > 0 && (
                  <div className="space-y-8 pb-20">
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
                              alt={
                                section.sectionName || `Section ${index + 1}`
                              }
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
          </div>
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

        {showBrochureModal && (
          <>
            {/* Dark semi-transparent overlay */}
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setShowBrochureModal(false)} // Optional: close modal on overlay click
            ></div>

            {/* Modal container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-3xl p-6 sm:p-10 w-full max-w-lg relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowBrochureModal(false)}
                  className="absolute top-4 right-4 text-gray-700 hover:text-black"
                >
                  <X size={24} />
                </button>

                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Get Brochure
                </h2>

                <BrochureForm
                  projectId={project._id}
                  onSubmitSuccess={() => {
                    downloadBrochure(); // Trigger download after submission
                    setShowBrochureModal(false); // Close modal
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

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
