import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

// Dummy data (replace with API call later)
const dummyBanners = [
  {
    _id: "1",
    title: "Welcome Banner",
    subtitle: "Our latest updates",
    image: "https://via.placeholder.com/100",
    createdAt: "2025-11-11",
  },
  {
    _id: "2",
    title: "Event Banner",
    subtitle: "Upcoming Event",
    image: "https://via.placeholder.com/100",
    createdAt: "2025-11-10",
  },
];

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // Fetch banners from backend API here
    setBanners(dummyBanners); // Using dummy data for now
  }, []);

  const handleEdit = (id) => console.log("Edit banner", id);
  const handleDelete = (id) => console.log("Delete banner", id);
  const handleAdd = () => console.log("Add new banner");

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Banner Management</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <Plus className="w-4 h-4" /> Add Banner
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Title</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Subtitle</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Image</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Created At</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {banners.map((banner) => (
              <tr key={banner._id}>
                <td className="px-4 py-2 whitespace-nowrap">{banner.title}</td>
                <td className="px-4 py-2 whitespace-nowrap">{banner.subtitle}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-20 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {new Date(banner.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 whitespace-nowrap flex gap-2">
                  <button
                    onClick={() => handleEdit(banner._id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(banner._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {banners.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No banners found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Banner;
