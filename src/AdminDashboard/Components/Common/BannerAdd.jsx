import React, { useState } from "react";

const BannerAdd = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState({ title: "", subtitle: "" });
  const [imagePreview, setImagePreview] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setForm({ ...form, image: file });
    }
  };

  const handleSubmit = () => {
    onSave({
      ...form,
      image: imagePreview || "https://via.placeholder.com/100", // fallback
      createdAt: new Date(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Add New Banner</h2>

        {/* Title */}
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          placeholder="Title"
        />

        {/* Subtitle */}
        <input
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          placeholder="Subtitle"
        />

        {/* Image Upload */}
        <label className="block mb-2 font-medium text-sm text-gray-700">
          Banner Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 w-full mb-3 rounded"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-32 object-cover rounded mb-3"
          />
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-1 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerAdd;
