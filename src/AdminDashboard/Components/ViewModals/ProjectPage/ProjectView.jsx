import React from "react";
import { X } from "lucide-react";

const ProjectViewModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded shadow-lg relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Project Details</h2>

        <div className="space-y-4">

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Heading:</strong>
            <p>{project.heading}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Description:</strong>
            <p>{project.description}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Main Images:</strong>
            <div className="flex gap-2 mt-2 overflow-x-auto">
              {project.mainImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Project ${index}`}
                  className="w-32 h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Customer Heading:</strong>
            <p>{project.customerHeading}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Customer Description:</strong>
            <p>{project.customerDescription}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Rating:</strong>
            <p>{project.ratingText}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Created At:</strong>
            <p>{new Date(project.createdAt).toLocaleString()}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectViewModal;
