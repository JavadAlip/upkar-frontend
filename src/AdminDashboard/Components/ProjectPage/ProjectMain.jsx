import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import ProjectAdd from "../../Components/Common/ProjectMainAdd";
import ProjectEdit from "../../Components/Common/ProjectMainEdit";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "sweetalert2/dist/sweetalert2.min.css";

// Import your backend API functions
import { getAllProjectMain, deleteProjectMain } from "../../../Api";

const ProjectMain = () => {
  const [projects, setProjects] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const token = localStorage.getItem("adminToken");

  // ✅ Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjectMain(token);
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects!");
    }
  };

  // ✅ Delete project with SweetAlert2 confirmation
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteProjectMain(id, token);
        setProjects(projects.filter((proj) => proj._id !== id));
        toast.success("Project deleted successfully!");
      } catch (error) {
        console.error("Error deleting project:", error);
        toast.error("Failed to delete project!");
      }
    }
  };

  // ✅ After add success
  const handleProjectAdded = () => {
    fetchProjects();
    toast.success("Project added successfully!");
  };

  // ✅ After edit success
  const handleProjectUpdated = () => {
    fetchProjects();
    toast.success("Project updated successfully!");
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Project Management</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Heading</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Main Images</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Customer Heading</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Customer Description</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Rating</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Created At</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project._id}>
                <td className="px-4 py-2">{project.heading}</td>
                <td className="px-4 py-2">{project.description}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col gap-2">
                    {project.mainImages?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Project ${index}`}
                        className="w-10 h-10 object-cover rounded"
                      />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">{project.customerHeading}</td>
                <td className="px-4 py-2">{project.customerDescription}</td>
                <td className="px-4 py-2">{project.ratingText}</td>
                <td className="px-4 py-2">
                  {new Date(project.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      setSelectedProject(project);
                      setIsEditOpen(true);
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(project._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}

            {projects.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <ProjectAdd
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onProjectAdded={handleProjectAdded}
      />
      <ProjectEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        project={selectedProject}
        onProjectUpdated={handleProjectUpdated}
      />
    </div>
  );
};

export default ProjectMain;
