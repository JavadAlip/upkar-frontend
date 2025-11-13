import React, { useState } from "react";

const ProjectImagesAdd = ({ isOpen, onClose, onAdd }) => {
  const [images, setImages] = useState([""]);

  if (!isOpen) return null;

  const handleImageChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const addImageField = () => setImages([...images, ""]);

  const handleSubmit = () => {
    if (onAdd) onAdd({ images: images.filter((img) => img.trim() !== "") });
    onClose();
    setImages([""]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 overflow-auto pt-10">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg my-6">
        <h2 className="text-xl font-semibold mb-4">Add Project Images</h2>
        <div className="flex flex-col gap-3">
          {images.map((img, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Image URL ${index + 1}`}
              className="border p-2 w-full rounded"
              value={img}
              onChange={(e) => handleImageChange(index, e.target.value)}
            />
          ))}
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 w-max"
            type="button"
            onClick={addImageField}
          >
            + Add Image
          </button>

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

export default ProjectImagesAdd;
