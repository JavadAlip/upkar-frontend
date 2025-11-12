import React, { useState } from "react";
import { createBanner } from "../../../Api";

const BannerAdd = ({ isOpen, onClose, onBannerAdded }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("adminToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image) return alert("Title and image are required!");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("image", image);

    try {
      setLoading(true);
      await createBanner(formData, token);
      onBannerAdded(); // refresh banners list
      onClose();
    } catch (error) {
      console.error("Error creating banner:", error);
      alert("Failed to create banner.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Banner</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="border p-2 w-full mb-3 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subtitle"
            className="border p-2 w-full mb-3 rounded"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="mb-3"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              {loading ? "Uploading..." : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerAdd;
