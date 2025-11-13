import React, { useState, useEffect } from "react";

const FeatureEdit = ({ isOpen, onClose, feature, onUpdate }) => {
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [icons, setIcons] = useState([{ icon: "", iconTitle: "" }]);

  useEffect(() => {
    if (feature) {
      setDescription(feature.description || "");
      setMainImage(feature.mainImage || "");
      setIcons(feature.icons && feature.icons.length ? feature.icons : [{ icon: "", iconTitle: "" }]);
    }
  }, [feature]);

  if (!isOpen) return null;

  const handleIconChange = (index, field, value) => {
    const newIcons = [...icons];
    newIcons[index][field] = value;
    setIcons(newIcons);
  };

  const addIcon = () => {
    if (icons.length < 3) setIcons([...icons, { icon: "", iconTitle: "" }]);
  };

  const removeIcon = (index) => {
    setIcons(icons.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const updatedFeature = { description, mainImage, icons };
    console.log("Update Feature:", updatedFeature);
    if (onUpdate) onUpdate(updatedFeature);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg my-6">
        <h2 className="text-xl font-semibold mb-4">Edit Feature</h2>
        <div className="flex flex-col gap-3">
          <textarea
            placeholder="Description"
            className="border p-2 w-full rounded"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Main Image URL"
            className="border p-2 w-full rounded"
            value={mainImage}
            onChange={(e) => setMainImage(e.target.value)}
          />

          <div>
            <label className="font-medium">Icons (max 3)</label>
            {icons.map((icon, idx) => (
              <div key={idx} className="flex gap-2 mt-1 items-center">
                <input
                  type="text"
                  placeholder="Icon"
                  className="border p-2 w-16 rounded"
                  value={icon.icon}
                  onChange={(e) => handleIconChange(idx, "icon", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Icon Title"
                  className="border p-2 flex-1 rounded"
                  value={icon.iconTitle}
                  onChange={(e) => handleIconChange(idx, "iconTitle", e.target.value)}
                />
                {icons.length > 1 && (
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => removeIcon(idx)}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            {icons.length < 3 && (
              <button
                type="button"
                className="mt-2 px-3 py-1 bg-gray-200 rounded"
                onClick={addIcon}
              >
                Add Icon
              </button>
            )}
          </div>

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
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
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

export default FeatureEdit;
