import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

// Import your modal components
import AboutProjectAdd from "../../Components/Common/AboutProjectAdd";
import AboutProjectEdit from "../../Components/Common/AboutProjectEdit";

const AboutProjectManagement = () => {
  // Dummy data
  const [projects, setProjects] = useState([
    {
      _id: "1",
      aboutHeading: "About Luxury Villas",
      aboutDescription: "We provide luxury villas in prime locations.",
      reRaising: "10%",
      reRadescription: "Return on investment is excellent.",
      noBrokerHeading: "Direct Builder Contact",
      builderHeading: "Trusted Builders",
    },
    {
      _id: "2",
      aboutHeading: "Modern Apartments",
      aboutDescription: "Comfortable apartments with modern amenities.",
      reRaising: "8%",
      reRadescription: "Good returns for tenants and owners.",
      noBrokerHeading: "No Middlemen",
      builderHeading: "Reliable Developers",
    },
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Add project handler
  const handleAddProject = (newProject) => {
    setProjects([...projects, { _id: Date.now().toString(), ...newProject }]);
    setIsAddOpen(false);
    Swal.fire("Success", "Project added successfully!", "success");
  };

  // Update project handler
  const handleUpdateProject = (updatedProject) => {
    setProjects(
      projects.map((p) =>
        p._id === selectedProject._id ? { ...p, ...updatedProject } : p
      )
    );
    setIsEditOpen(false);
    Swal.fire("Success", "Project updated successfully!", "success");
  };

  // Delete project handler
  const handleDeleteProject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the About Project entry!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setProjects(projects.filter((p) => p._id !== id));
        Swal.fire("Deleted!", "Project has been deleted.", "success");
      }
    });
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">About Project Management</h1>
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => setIsAddOpen(true)}
        >
          <Plus className="w-4 h-4" /> Add About Project
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">About Heading</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">About Description</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">RE Raising</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">RE Description</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">No Broker Heading</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Builder Heading</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((p) => (
              <tr key={p._id}>
                <td className="px-4 py-2">{p.aboutHeading}</td>
                <td className="px-4 py-2">{p.aboutDescription}</td>
                <td className="px-4 py-2">{p.reRaising}</td>
                <td className="px-4 py-2">{p.reRadescription}</td>
                <td className="px-4 py-2">{p.noBrokerHeading}</td>
                <td className="px-4 py-2">{p.builderHeading}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      setSelectedProject(p);
                      setIsEditOpen(true);
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteProject(p._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <AboutProjectAdd
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAddProject}
      />
      <AboutProjectEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        project={selectedProject}
        onUpdate={handleUpdateProject}
      />
    </div>
  );
};

export default AboutProjectManagement;
