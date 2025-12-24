import { useEffect, useState } from 'react';
import AddProject from '../Projects/addProject';
import { getAllProjects } from '../../../Api';
import { Search } from 'lucide-react';
import ViewProjectModal from '../../../AdminDashboard/Components/Projects/ViewProjectDetails';
import { toast } from 'react-toastify';

const Project = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [status, setStatus] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, type, status, projects]);

  const fetchProjects = async () => {
    try {
      const res = await getAllProjects();
      setProjects(res.projects || []);
      setFilteredProjects(res.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let data = [...projects];

    if (search.trim()) {
      data = data.filter((p) =>
        p.projectName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type !== 'all') {
      data = data.filter(
        (p) => p.projectType.toLowerCase() === type.toLowerCase()
      );
    }

    if (status !== 'all') {
      data = data.filter(
        (p) => p.projectStatus.toLowerCase() === status.toLowerCase()
      );
    }

    setFilteredProjects(data);
  };

  // Same pattern as Certification
  const handleAddSuccess = () => {
    fetchProjects();
    toast.success('Project added successfully!');
  };

  return (
    <>
      <div className="relative p-6 bg-gray-50 min-h-screen">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Project Management</h1>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#2D5C3A] hover:bg-green-900 text-white px-4 py-2 rounded-md text-sm font-medium transition"
          >
            + Add Project
          </button>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search Projects"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
                />
              </div>
            </div>

            <div>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
              >
                <option value="all">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-900"
              >
                <option value="all">All Status</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-gray-500">Loading projects...</p>
          ) : filteredProjects.length === 0 ? (
            <p className="text-gray-500">No projects found</p>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project._id}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={
                      project.propertyImages?.length
                        ? project.propertyImages[
                            project.propertyImages.length - 1
                          ]
                        : 'https://via.placeholder.com/400x300'
                    }
                    alt={project.projectName}
                    className="w-full h-48 object-cover"
                  />

                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-md text-white bg-green-800">
                    {project.projectStatus}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.projectName}
                  </h3>

                  <p className="text-sm text-gray-600">{project.projectType}</p>

                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {project.location}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90vw] max-w-4xl max-h-[90vh] rounded-xl shadow-2xl relative flex flex-col">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>

            <div className="overflow-y-auto flex-1">
              <AddProject
                onClose={() => setShowAddModal(false)}
                onAdded={handleAddSuccess}
              />
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <ViewProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Project;
