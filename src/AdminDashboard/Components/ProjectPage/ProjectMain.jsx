import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import ProjectAdd from "../../Components/Common/ProjectMainAdd"; 
import ProjectEdit from "../../Components/Common/ProjectMainEdit"; 
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "sweetalert2/dist/sweetalert2.min.css";

const ProjectMainStatic = () => {   
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Static projects data
  const [projects, setProjects] = useState([
    {
      _id: "1",
      heading: "Luxury Villa",
      description: "A beautiful villa in the city center",
      mainImages: [
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
      ],
      customerHeading: "Happy Clients",
      customerDescription: "Our clients love our villas",
      ratingText: "5/5 Excellent",
      createdAt: "2025-11-01T12:00:00Z",
    },
    {
      _id: "2",
      heading: "Modern Apartment",
      description: "Comfortable apartment with modern amenities",
      mainImages: [
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
      ],
      customerHeading: "Satisfied Tenants",
      customerDescription: "Tenants enjoy our apartments",
      ratingText: "4.8/5 Very Good",
      createdAt: "2025-11-05T12:00:00Z",
    },
  ]);

  // Delete project with SweetAlert2
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
      const updatedProjects = projects.filter((proj) => proj._id !== id);
      setProjects(updatedProjects);
      toast.success("Project deleted successfully!");
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header with Add Project button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Project Management</h1>
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => setIsAddOpen(true)}
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
                <td className="px-4 py-2 flex gap-2">
                  {project.mainImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Project ${index}`}
                      className="w-16 h-12 object-cover rounded"
                    />
                  ))}
                </td>
                <td className="px-4 py-2">{project.customerHeading}</td>
                <td className="px-4 py-2">{project.customerDescription}</td>
                <td className="px-4 py-2">{project.ratingText}</td>
                <td className="px-4 py-2">{new Date(project.createdAt).toLocaleDateString()}</td>
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
          </tbody>
        </table>
      </div>

      {/* Add Project Modal */}
      <ProjectAdd isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />

      {/* Edit Project Modal */}
      <ProjectEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectMainStatic;
    