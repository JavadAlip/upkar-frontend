import React from "react";
import { X } from "lucide-react";

const AboutProjectViewModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded shadow-lg relative border-2 border-gray-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">About Project Details</h2>

        <div className="space-y-4">
          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">About Heading:</strong>
            <p>{project.aboutHeading}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">About Description:</strong>
            <p>{project.aboutDescription}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">RE Raising:</strong>
            <p>{project.reRaising}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">RE Description:</strong>
            <p>{project.reRadescription}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">No Broker Heading:</strong>
            <p>{project.noBrokerHeading}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Builder Heading:</strong>
            <p>{project.builderHeading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProjectViewModal;
