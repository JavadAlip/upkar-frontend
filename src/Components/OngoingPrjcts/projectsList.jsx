import React, { useEffect, useState } from 'react';
import { Search, Hand, BadgePercent, Headset } from 'lucide-react';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { getAllProjects, getAllCategories } from '../../Api';

const OngoingProjectsList = () => {
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
          const ongoingProjects = projectList.filter(
            (p) => p.projectStatus === 'ongoing',
          );
          setProjects(ongoingProjects);
        }
      } catch (error) {
        console.error('Error fetching ongoing projects:', error);
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
    startIndex + projectsPerPage,
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
                No ongoing projects found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((project) => (
                <div
                  key={project._id}
                  onClick={() => handleProjectClick(project._id)}
                  className=" bg-white rounded-xl overflow-hidden font-figtree shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.03]  border-gray-300 hover:border-[#2D5C3A] border-2 "
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.propertyImages?.[0]}
                      alt={project.projectName}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-[22px] font-semibold text-black">
                      {project.projectName}
                    </h3>

                    <div className="flex justify-center items-center gap-2 mt-2 text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-black"
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
                      <span className="text-[16px]">{project.location}</span>
                    </div>

                    <div className="flex justify-center gap-3 mt-6">
                      <div className="relative group">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-md transition hover:scale-110 cursor-pointer">
                          <Hand size={20} />
                        </div>

                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                          I’m Interested
                        </span>
                      </div>

                      <div className="relative group">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-md transition hover:scale-110 cursor-pointer">
                          <Headset size={20} />
                        </div>

                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                          Call
                        </span>
                      </div>
                    </div>

                    <div className="w-72 h-[1px] bg-gray-500 mx-auto my-6"></div>

                    <p className="text-[16px] font-medium text-black">
                      {project.unitConfiguration}
                    </p>
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

export default OngoingProjectsList;
