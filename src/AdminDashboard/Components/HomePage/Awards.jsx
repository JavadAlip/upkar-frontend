import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

// Dummy data (replace with API call later)
const dummyAwards = [
  {
    _id: "1",
    title: "Best Innovation Award",
    image: "https://via.placeholder.com/80",
    createdAt: "2025-11-11",
  },
  {
    _id: "2",
    title: "Top Performer 2025",
    image: "https://via.placeholder.com/80",
    createdAt: "2025-11-10",
  },
];

const Awards = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    // Replace with API fetch later
    setAwards(dummyAwards);
  }, []);

  const handleAdd = () => {
    console.log("Add new Award");
  };

  const handleEdit = (id) => {
    console.log("Edit Award", id);
  };

  const handleDelete = (id) => {
    console.log("Delete Award", id);
  };

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Awards Management</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <div className="min-w-[800px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Image</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Created At</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {awards.map((award) => (
                <tr key={award._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{award.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={award.image} alt={award.title} className="w-20 h-12 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(award.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                    <button
                      onClick={() => handleEdit(award._id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(award._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {awards.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No Awards found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Awards;
