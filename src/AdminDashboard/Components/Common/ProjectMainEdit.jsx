import React, { useState, useEffect } from "react";

const ProjectMainEdit = ({ isOpen, onClose, project }) => {
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    mainImages: [null, null, null],
    customerHeading: "",
    customerDescription: "",
    ratingText: "",
  });

  useEffect(() => {
    if (project) {
      setFormData({
        heading: project.heading || "",
        description: project.description || "",
        mainImages: project.mainImages || [null, null, null],
        customerHeading: project.customerHeading || "",
        customerDescription: project.customerDescription || "",
        ratingText: project.ratingText || "",
      });
    }
  }, [project]);

  if (!isOpen) return null;

  const handleChange = (e, index = null) => {
    const { name, value, files } = e.target;
    if (name === "mainImages" && index !== null) {
      const newImages = [...formData.mainImages];
      newImages[index] = files[0];
      setFormData({ ...formData, mainImages: newImages });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
        <form className="space-y-3">
          <input
            type="text"
            name="heading"
            placeholder="Heading"
            value={formData.heading}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            rows={3}
          />
          <div className="flex flex-col gap-2">
            <label className="font-medium">Main Images (3)</label>
            {formData.mainImages.map((img, idx) => (
              <input
                key={idx}
                type="file"
                name="mainImages"
                accept="image/*"
                className="rounded"
                onChange={(e) => handleChange(e, idx)}
              />
            ))}
          </div>
          <input
            type="text"
            name="customerHeading"
            placeholder="Customer Heading"
            value={formData.customerHeading}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <textarea
            name="customerDescription"
            placeholder="Customer Description"
            value={formData.customerDescription}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            rows={2}
          />
          <input
            type="text"
            name="ratingText"
            placeholder="Rating Text"
            value={formData.ratingText}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectMainEdit;
