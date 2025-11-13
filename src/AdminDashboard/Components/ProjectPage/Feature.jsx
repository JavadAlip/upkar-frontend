import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "sweetalert2/dist/sweetalert2.min.css";

// Assuming you have these modal components ready
import FeatureAdd from "../../Components/Common/FeatureAdd";
import FeatureEdit from "../../Components/Common/FeatureEdit";

const FeatureManagement = () => {
  const [features, setFeatures] = useState([
    {
      _id: "1",
      description: "Feature 1 Description",
      mainImage: "https://via.placeholder.com/100",
      icons: [
        { icon: "🔥", iconTitle: "Hot" },
        { icon: "⭐", iconTitle: "Star" },
      ],
      createdAt: "2025-11-01T12:00:00Z",
    },
    {
      _id: "2",
      description: "Feature 2 Description",
      mainImage: "https://via.placeholder.com/100",
      icons: [
        { icon: "💡", iconTitle: "Idea" },
      ],
      createdAt: "2025-11-05T12:00:00Z",
    },
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Delete feature with SweetAlert2
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      setFeatures(features.filter((feat) => feat._id !== id));
      toast.success("Feature deleted successfully!");
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Feature Management</h1>
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => setIsAddOpen(true)}
        >
          <Plus className="w-4 h-4" /> Add Feature
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Main Image</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Icons</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Created At</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature) => (
              <tr key={feature._id}>
                <td className="px-4 py-2">{feature.description}</td>
                <td className="px-4 py-2">
                  <img src={feature.mainImage} alt="Feature" className="w-20 h-12 object-cover rounded" />
                </td>
                <td className="px-4 py-2 flex gap-2">
                  {feature.icons.map((icon, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-xl">{icon.icon}</span>
                      <small>{icon.iconTitle}</small>
                    </div>
                  ))}
                </td>
                <td className="px-4 py-2">{new Date(feature.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      setSelectedFeature(feature);
                      setIsEditOpen(true);
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(feature._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Feature Modal */}
      <FeatureAdd isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />

      {/* Edit Feature Modal */}
      <FeatureEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        feature={selectedFeature}
      />
    </div>
  );
};

export default FeatureManagement;
