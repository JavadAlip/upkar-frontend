// import React, { useEffect, useState } from "react";
// import { Search } from "lucide-react";
// import { FiChevronDown } from "react-icons/fi";
// import { getAllProjectsList } from "../../Api";

// const ProjectsList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedStatus, setSelectedStatus] = useState("All");
//   const [currentPage, setCurrentPage] = useState(0);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await getAllProjectsList();
//         if (res.success) {
//           setProjects(res.data);
//         }
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const filteredProjects = projects.filter((project) => {
//     const matchesSearch =
//       project.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.location.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || project.type === selectedCategory;
//     const matchesStatus =
//       selectedStatus === "All" || project.type === selectedStatus;
//     return matchesSearch && matchesCategory && matchesStatus;
//   });

//   const projectsPerPage = 9;
//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
//   const startIndex = currentPage * projectsPerPage;
//   const endIndex = startIndex + projectsPerPage;
//   const currentProjects = filteredProjects.slice(startIndex, endIndex);

//   return (
//     <div className="w-full py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="relative">
//               <Search
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search Projects"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white font-inter font-normal text-[13px] text-[#1E1E1E] placeholder:text-[#1E1E1E]"
//               />
//             </div>

//             <div className="relative w-full">
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white font-inter font-normal text-[13px] text-[#1E1E1E] appearance-none pr-10"
//               >
//                 <option value="All">All</option>
//                 <option value="Completed">Completed</option>
//                 <option value="Ongoing">Ongoing</option>
//                 <option value="Upcoming">Upcoming</option>
//               </select>
//               <FiChevronDown
//                 size={20}
//                 className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
//               />
//             </div>

//             <div className="relative w-full">
//               <select
//                 value={selectedStatus}
//                 onChange={(e) => setSelectedStatus(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white font-inter font-normal text-[13px] text-[#1E1E1E] appearance-none pr-10"
//               >
//                 <option value="All">All Status</option>
//                 <option value="Upcoming">Upcoming</option>
//                 <option value="Ongoing">Ongoing</option>
//                 <option value="Completed">Completed</option>
//               </select>
//               <FiChevronDown
//                 size={20}
//                 className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {currentProjects.map((project) => (
//             <div
//               key={project._id}
//               className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
//             >
//               <div className="relative overflow-hidden rounded-t-xl">
//                 <img
//                   src={project.projectImage}
//                   alt={project.heading}
//                   className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>

//               <div className="p-5">
//                 <h3
//                   className="text-[20px] font-medium text-black"
//                   style={{ fontFamily: "'Figtree', sans-serif" }}
//                 >
//                   {project.heading}
//                 </h3>

//                 <p
//                   className="text-[13px] font-light text-black mt-1"
//                   style={{ fontFamily: "'Figtree', sans-serif" }}
//                 >
//                   {project.type}
//                 </p>

//                 <div className="flex items-center gap-2 mt-2 text-[#6B6B6B]">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-4 h-4 text-[#6B6B6B]"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={1.5}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z"
//                     />
//                   </svg>
//                   <p
//                     className="text-[13px] font-light text-black"
//                     style={{ fontFamily: "'Figtree', sans-serif" }}
//                   >
//                     {project.location}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {totalPages > 1 && (
//           <div className="flex justify-center items-center gap-2 pb-8">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index)}
//                 className={`transition-all duration-300 rounded-full ${
//                   currentPage === index
//                     ? "bg-black h-3 w-8"
//                     : "bg-gray-300 h-3 w-3 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to page ${index + 1}`}
//                 aria-current={currentPage === index ? "page" : undefined}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectsList;

// import React, { useEffect, useState } from 'react';
// import { Search } from 'lucide-react';
// import { FiChevronDown } from 'react-icons/fi';
// import { getAllProjects, getAllCategories } from '../../Api';

// const ProjectsList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [currentPage, setCurrentPage] = useState(0);

//   const [projects, setProjects] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await getAllProjects();
//         if (res.success) {
//           const completedProjects = res.projects.filter(
//             (p) => p.projectStatus === 'completed'
//           );
//           setProjects(completedProjects);
//         }
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await getAllCategories();
//         if (res.success) {
//           setCategories(res.categories);
//         }
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const filteredProjects = projects.filter((project) => {
//     const matchesSearch =
//       project.projectName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.location?.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesCategory =
//       selectedCategory === 'All' || project.projectType === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   const projectsPerPage = 9;
//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
//   const startIndex = currentPage * projectsPerPage;
//   const currentProjects = filteredProjects.slice(
//     startIndex,
//     startIndex + projectsPerPage
//   );

//   return (
//     <div className="w-full py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Search */}
//             <div className="relative">
//               <Search
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search Projects"
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setCurrentPage(0);
//                 }}
//                 className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 text-[13px]"
//               />
//             </div>

//             <div className="relative w-full">
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => {
//                   setSelectedCategory(e.target.value);
//                   setCurrentPage(0);
//                 }}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none pr-10 text-[13px]"
//               >
//                 <option value="All">All Categories</option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat.categoryName}>
//                     {cat.categoryName}
//                   </option>
//                 ))}
//               </select>
//               <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>
//         </div>

//         <div className="mb-16">
//           {currentProjects.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//               <p className="text-[14px] font-medium text-gray-500">
//                 No completed projects found
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {currentProjects.map((project) => (
//                 <div
//                   key={project._id}
//                   className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
//                 >
//                   <img
//                     src={project.propertyImages?.[0]}
//                     alt={project.projectName}
//                     className="w-full h-64 object-cover"
//                   />

//                   <div className="p-5">
//                     <h3 className="text-[20px] font-medium">
//                       {project.projectName}
//                     </h3>

//                     <p className="text-[13px] mt-1">{project.projectType}</p>

//                     <div className="flex items-center gap-2 mt-2 text-gray-600">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-4 h-4 text-[#6B6B6B]"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={1.5}
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z"
//                         />
//                       </svg>
//                       <span className="text-[13px]">{project.location}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2 pb-8">
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index)}
//                 className={`rounded-full transition ${
//                   currentPage === index
//                     ? 'bg-black h-3 w-8'
//                     : 'bg-gray-300 h-3 w-3'
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectsList;

import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { getAllProjects, getAllCategories } from '../../Api';

const CompletedProjectsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getAllProjects();

        const projectList = Array.isArray(res) ? res : res.projects;

        if (projectList && projectList.length > 0) {
          const completedProjects = projectList.filter(
            (p) => p.projectStatus === 'completed'
          );
          setProjects(completedProjects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();
        if (res.success) {
          setCategories(res.categories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || project.projectType === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const projectsPerPage = 9;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search Projects"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(0);
                }}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 text-[13px]"
              />
            </div>

            <div className="relative w-full">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(0);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none pr-10 text-[13px]"
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.categoryName}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="mb-16">
          {currentProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <p className="text-[14px] font-medium text-gray-500">
                No completed projects found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((project) => (
                <div
                  key={project._id}
                  onClick={() => handleProjectClick(project._id)}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <img
                    src={project.propertyImages?.[0]}
                    alt={project.projectName}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-[20px] font-medium">
                      {project.projectName}
                    </h3>

                    <p className="text-[13px] mt-1">{project.projectType}</p>

                    <div className="flex items-center gap-2 mt-2 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#6B6B6B]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="text-[13px]">{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 pb-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`rounded-full transition ${
                  currentPage === index
                    ? 'bg-black h-3 w-8'
                    : 'bg-gray-300 h-3 w-3'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompletedProjectsList;
