import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

// Dummy data (replace with API call later)
const dummyVisionMission = [
  {
    _id: "1",
    heading: "Vision & Mission",
    description: "We aim to provide the best services.",
    missionTitle: "Our Mission",
    missionText: "Deliver excellence in every project.",
    visionTitle: "Our Vision",
    visionText: "Become a global leader in our domain.",
    image: "https://via.placeholder.com/100",
    stats: [
      { number: "50+", label: "Years of Experience" },
      { number: "100+", label: "Projects Completed" },
    ],
    createdAt: "2025-11-11",
  },
  {
    _id: "2",
    heading: "Vision & Mission",
    description: "Focused on innovation and quality.",
    missionTitle: "Our Mission",
    missionText: "Innovate continuously.",
    visionTitle: "Our Vision",
    visionText: "Set new industry standards.",
    image: "https://via.placeholder.com/100",
    stats: [{ number: "20+", label: "Global Partners" }],
    createdAt: "2025-11-10",
  },
];

const VisionMission = () => {
  const [visionMission, setVisionMission] = useState([]);

  useEffect(() => {
    // Fetch from API later
    // fetch("/api/vision-mission").then(res => res.json()).then(data => setVisionMission(data));
    setVisionMission(dummyVisionMission);
  }, []);

  const handleAdd = () => {
    console.log("Add new Vision & Mission");
  };

  const handleEdit = (id) => {
    console.log("Edit Vision & Mission", id);
  };

  const handleDelete = (id) => {
    console.log("Delete Vision & Mission", id);
  };

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Vision & Mission Management</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <div className="min-w-[1200px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Heading</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Mission</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Vision</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Image</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Stats</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Created At</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {visionMission.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.heading}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <strong>{item.missionTitle}:</strong> {item.missionText}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <strong>{item.visionTitle}:</strong> {item.visionText}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={item.image} alt={item.heading} className="w-20 h-12 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.stats.map((stat, index) => (
                      <div key={index}>{stat.number} - {stat.label}</div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {visionMission.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No Vision & Mission found.
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

export default VisionMission;
