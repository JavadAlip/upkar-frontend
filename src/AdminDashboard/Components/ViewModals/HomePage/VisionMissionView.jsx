import React from "react";
import { X } from "lucide-react";

const VisionMissionViewModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">

        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Vision & Mission Details</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-[75vh] space-y-4">

          {/* Image */}
          <div className="border p-3 rounded-lg">
            <h3 className="font-semibold mb-2">Image</h3>
            <img
              src={data.image}
              className="w-full h-56 object-cover rounded-lg"
              alt="Vision Mission"
            />
          </div>

          {/* Description */}
          <div className="border p-3 rounded-lg">
            <h3 className="font-semibold mb-1">Description</h3>
            <p className="text-gray-700 whitespace-pre-line">{data.description}</p>
          </div>

          {/* Mission */}
          <div className="border p-3 rounded-lg">
            <h3 className="font-semibold mb-1">{data.missionTitle || "Mission"}</h3>
            <p className="text-gray-700 whitespace-pre-line">{data.missionText}</p>
          </div>

          {/* Vision */}
          <div className="border p-3 rounded-lg">
            <h3 className="font-semibold mb-1">{data.visionTitle || "Vision"}</h3>
            <p className="text-gray-700 whitespace-pre-line">{data.visionText}</p>
          </div>

          {/* ✅ Total Experience */}
          <div className="border p-3 rounded-lg">
            <h3 className="font-semibold mb-1">Total Experience</h3>
            <p className="text-gray-700">{data.totalExperience}</p>
          </div>

          {/* Stats */}
          <div className="border p-3 rounded-lg">
            <h3 className="font-semibold mb-1">Stats</h3>
            {data.stats?.map((s, index) => (
              <div key={index} className="text-gray-700">
                {s.number} — {s.label}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisionMissionViewModal;
