import React, { useState } from "react";

const AboutProjectAdd = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    aboutHeading: "",
    aboutDescription: "",
    reRaising: "",
    reRadescription: "",
    noBrokerHeading: "",
    builderHeading: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (onAdd) onAdd(formData);
    onClose();
    setFormData({
      aboutHeading: "",
      aboutDescription: "",
      reRaising: "",
      reRadescription: "",
      noBrokerHeading: "",
      builderHeading: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 overflow-auto pt-10">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg my-6">
        <h2 className="text-xl font-semibold mb-4">Add About Project</h2>
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
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProjectAdd;
