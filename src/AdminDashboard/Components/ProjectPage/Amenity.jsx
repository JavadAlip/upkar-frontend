import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import AmenityAdd from "../../Components/Common/AmenityAdd";
import AmenityEdit from "./../Common/AmenityEdit";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const AmenityManagement = () => {
  const [amenities, setAmenities] = useState([
    { _id: "1", icon: "https://via.placeholder.com/40", heading: "Swimming Pool" },
    { _id: "2", icon: "https://via.placeholder.com/40", heading: "Gym" },
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const handleAddAmenity = (newAmenity) => {
    setAmenities([...amenities, { _id: Date.now().toString(), ...newAmenity }]);
  };

  const handleUpdateAmenity = (updatedAmenity) => {
    setAmenities(
      amenities.map((a) =>
        a._id === selectedAmenity._id ? { ...a, ...updatedAmenity } : a
      )
    );
  };

  const handleDeleteAmenity = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the amenity!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setAmenities(amenities.filter((a) => a._id !== id));
      }
    });
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Amenity Management</h1>
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => setIsAddOpen(true)}
        >
          <Plus className="w-4 h-4" /> Add Amenity
        </button>
      </div>

      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Icon</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Heading</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {amenities.map((a) => (
              <tr key={a._id}>
                <td className="px-4 py-2">
                  <img src={a.icon} alt={a.heading} className="w-10 h-10 object-cover rounded" />
                </td>
                <td className="px-4 py-2">{a.heading}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      setSelectedAmenity(a);
                      setIsEditOpen(true);
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteAmenity(a._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AmenityAdd isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onAdd={handleAddAmenity} />
      <AmenityEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        amenity={selectedAmenity}
        onUpdate={handleUpdateAmenity}
      />
    </div>
  );
};

export default AmenityManagement;
