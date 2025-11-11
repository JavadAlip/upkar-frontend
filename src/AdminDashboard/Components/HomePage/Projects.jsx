import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

// Dummy data (replace with API call later)
const dummyProjects = [
  {
    _id: "1",
    type: "ongoing",
    heading: "Project A",
    description: "This is an ongoing project.",
    bulletPoints: ["Point 1", "Point 2", "Point 3"],
    boxMessage: "Important update for Project A",
    image: "https://via.placeholder.com/100",
    createdAt: "2025-11-11",
  },
  {
    _id: "2",
    type: "completed",
    heading: "Project B",
    description: "This project is completed.",
    bulletPoints: ["Done 1", "Done 2", "Done 3"],
    boxMessage: "Completed successfully",
    image: "https://via.placeholder.com/100",
    createdAt: "2025-11-10",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace with API fetch later
    setProjects(dummyProjects);
  }, []);

  const handleAdd = () => {
    console.log("Add new Project");
  };

  const handleEdit = (id) => {
    console.log("Edit Project", id);
  };

  const handleDelete = (id) => {
    console.log("Delete Project", id);
  };

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects Management</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <div className="min-w-[1200px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Heading</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Bullet Points</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Box Message</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Image</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Created At</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project._id}>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{project.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{project.heading}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{project.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.bulletPoints.map((point, index) => (
                      <div key={index}>• {point}</div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{project.boxMessage}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={project.image} alt={project.heading} className="w-20 h-12 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                    <button
                      onClick={() => handleEdit(project._id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No Projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
