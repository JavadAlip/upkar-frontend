import React, { useState } from "react";

const PlotLayoutAdd = ({ isOpen, onClose, onAdd }) => {
  const [mainImage, setMainImage] = useState("");
  const [icons, setIcons] = useState([{ icon: "", heading: "", subheading: "" }]);

  if (!isOpen) return null;

  const handleIconChange = (index, field, value) => {
    const updatedIcons = [...icons];
    updatedIcons[index][field] = value;
    setIcons(updatedIcons);
  };

  const addIconField = () => {
    if (icons.length < 10) setIcons([...icons, { icon: "", heading: "", subheading: "" }]);
  };

  const handleSubmit = () => {
    if (onAdd) onAdd({ mainImage, icons });
    onClose();
    setMainImage("");
    setIcons([{ icon: "", heading: "", subheading: "" }]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 overflow-auto pt-10">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg my-6">
        <h2 className="text-xl font-semibold mb-4">Add Plot Layout</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Main Image URL"
            className="border p-2 w-full rounded"
            value={mainImage}
            onChange={(e) => setMainImage(e.target.value)}
          />

          <label className="font-medium">Icons</label>
          {icons.map((ic, index) => (
            <div key={index} className="flex flex-col gap-2 border p-2 rounded mb-2">
              <input
                type="text"
                placeholder="Icon URL"
                className="border p-1 w-full rounded"
                value={ic.icon}
                onChange={(e) => handleIconChange(index, "icon", e.target.value)}
              />
              <input
                type="text"
                placeholder="Heading"
                className="border p-1 w-full rounded"
                value={ic.heading}
                onChange={(e) => handleIconChange(index, "heading", e.target.value)}
              />
              <input
                type="text"
                placeholder="Subheading"
                className="border p-1 w-full rounded"
                value={ic.subheading}
                onChange={(e) => handleIconChange(index, "subheading", e.target.value)}
              />
            </div>
          ))}
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 w-max mb-3"
            onClick={addIconField}
            type="button"
          >
            + Add Icon
          </button>

          <div className="flex justify-end gap-2 mt-3">
            <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotLayoutAdd;
