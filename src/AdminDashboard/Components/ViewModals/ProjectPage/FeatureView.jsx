import React from "react";
import { X } from "lucide-react";

const FeatureViewModal = ({ isOpen, onClose, feature }) => {
  if (!isOpen || !feature) return null;

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

        <h2 className="text-xl font-bold mb-4">Feature Details</h2>

        <div className="space-y-4">

          {/* Description */}
          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Description:</strong>
            <p className="text-gray-900">{feature.description}</p>
          </div>

          {/* Main Image */}
          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Main Image:</strong>
            <img
              src={feature.mainImage}
              alt="Feature"
              className="w-full max-h-60 object-cover rounded border mt-2"
            />
          </div>

          {/* Icons */}
          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Icons:</strong>
            <div className="flex flex-wrap gap-4 mt-2">
              {feature.icons?.map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {icon.icon && (
                    <img
                      src={icon.icon}
                      alt={icon.iconTitle || "Icon"}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <small>{icon.iconTitle}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Created At */}
          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Created At:</strong>
            <p className="text-gray-900">{new Date(feature.createdAt).toLocaleString()}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureViewModal;
