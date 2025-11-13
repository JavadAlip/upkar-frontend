import React, { useState, useEffect } from "react";

const AboutProjectEdit = ({ isOpen, onClose, project, onUpdate }) => {
  const [formData, setFormData] = useState({
    aboutHeading: "",
    aboutDescription: "",
    reRaising: "",
    reRadescription: "",
    noBrokerHeading: "",
    builderHeading: "",
  });

  useEffect(() => {
    if (project) setFormData(project);
  }, [project]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (onUpdate) onUpdate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 overflow-auto pt-10">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg my-6">
        <h2 className="text-xl font-semibold mb-4">Edit About Project</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="About Heading"
            name="aboutHeading"
            value={formData.aboutHeading}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <textarea
            placeholder="About Description"
            name="aboutDescription"
            value={formData.aboutDescription}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            rows={3}
          />
          <input
            type="text"
            placeholder="RE Raising"
            name="reRaising"
            value={formData.reRaising}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <textarea
            placeholder="RE Description"
            name="reRadescription"
            value={formData.reRadescription}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            rows={2}
          />
          <input
            type="text"
            placeholder="No Broker Heading"
            name="noBrokerHeading"
            value={formData.noBrokerHeading}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            placeholder="Builder Heading"
            name="builderHeading"
            value={formData.builderHeading}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          <div className="flex justify-end gap-2 mt-3">
            <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
              Cancel
            </button>
            <button
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

export default AboutProjectEdit;
