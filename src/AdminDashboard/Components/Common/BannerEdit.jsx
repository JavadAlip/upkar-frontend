import React, { useState, useEffect } from 'react';
import { editBanner } from '../../../Api';

const BannerEdit = ({ isOpen, onClose, banner, onUpdate }) => {
  const [form, setForm] = useState({ title: '', subtitle: '', image: null });
  const [imagePreview, setImagePreview] = useState('');

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (banner) {
      setForm({
        title: banner.title,
        subtitle: banner.subtitle,
        image: null,
      });
      setImagePreview(banner.image);
    }
  }, [banner]);

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

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('subtitle', form.subtitle);
      if (form.image) formData.append('image', form.image);

      await editBanner(banner._id, formData, token);

      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating banner:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Edit Banner</h2>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          placeholder="Title"
        />

        <input
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          placeholder="Subtitle"
        />

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

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-1 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerEdit;
