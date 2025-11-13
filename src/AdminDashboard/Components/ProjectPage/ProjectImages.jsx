import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import ProjectImagesAdd from "../../Components/Common/ProjectImagesAdd";
import ProjectImagesEdit from "../../Components/Common/ProjectImagesEdit";

const ProjectImagesManagement = () => {
    const [projects, setProjects] = useState([
        { _id: "1", images: ["https://via.placeholder.com/150", "https://via.placeholder.com/200"] },
    ]);

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleAddProject = (newProject) => {
        setProjects([...projects, { _id: Date.now().toString(), ...newProject }]);
    };

    const handleUpdateProject = (updatedProject) => {
        setProjects(
            projects.map((p) => (p._id === selectedProject._id ? { ...p, ...updatedProject } : p))
        );
    };

    const handleDeleteProject = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will delete the project images!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) setProjects(projects.filter((p) => p._id !== id));
        });
    };

    return (
        <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h1 className="text-2xl font-bold">Project Images Management</h1>
                <button
                    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    onClick={() => setIsAddOpen(true)}
                >
                    <Plus className="w-4 h-4" /> Add Project Images
                </button>
            </div>

            <div className="overflow-x-auto w-full bg-white rounded shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Images</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-32">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {projects.map((p) => (
                            <tr key={p._id}>
                                <td className="px-4 py-2">
                                    <div className="flex flex-wrap gap-2">
                                        {p.images.map((img, idx) => (
                                            <img
                                                key={idx}
                                                src={img}
                                                alt={`Project ${idx}`}
                                                className="w-20 h-12 object-cover rounded"
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            className="p-1 text-blue-500 hover:text-blue-700 rounded border border-gray-200 hover:bg-gray-100 flex-shrink-0"
                                            onClick={() => {
                                                setSelectedProject(p);
                                                setIsEditOpen(true);
                                            }}
                                        >
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1 text-red-500 hover:text-red-700 rounded border border-gray-200 hover:bg-gray-100 flex-shrink-0"
                                            onClick={() => handleDeleteProject(p._id)}
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            <ProjectImagesAdd isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onAdd={handleAddProject} />
            <ProjectImagesEdit
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                project={selectedProject}
                onUpdate={handleUpdateProject}
            />
        </div>
    );
};

export default ProjectImagesManagement;