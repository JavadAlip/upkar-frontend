import React, { useState, useEffect } from "react";

const AmenityEdit = ({ isOpen, onClose, amenity, onUpdate }) => {
  const [icon, setIcon] = useState("");
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (amenity) {
      setIcon(amenity.icon || "");
      setHeading(amenity.heading || "");
    }
  }, [amenity]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    const updatedAmenity = { icon, heading };
    console.log("Update Amenity:", updatedAmenity);
    if (onUpdate) onUpdate(updatedAmenity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md my-6">
        <h2 className="text-xl font-semibold mb-4">Edit Amenity</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Icon URL"
            className="border p-2 w-full rounded"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
          <input
            type="text"
            placeholder="Heading"
            className="border p-2 w-full rounded"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenityEdit;
