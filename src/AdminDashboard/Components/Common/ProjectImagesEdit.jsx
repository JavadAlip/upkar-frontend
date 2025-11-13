import React, { useState, useEffect } from "react";

const ProjectImagesEdit = ({ isOpen, onClose, project, onUpdate }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (project) setImages(project.images || [""]);
  }, [project]);

  if (!isOpen) return null;

  const handleImageChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const addImageField = () => setImages([...images, ""]);

  const handleSubmit = () => {
    if (onUpdate) onUpdate({ images: images.filter((img) => img.trim() !== "") });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 overflow-auto pt-10">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg my-6">
        <h2 className="text-xl font-semibold mb-4">Edit Project Images</h2>
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

export default ProjectImagesEdit;
