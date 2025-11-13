import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import PlotLayoutAdd from "./../Common/PlotLayoutAdd";
import PlotLayoutEdit from "./../Common/PlotLayoutEdit";
import Swal from "sweetalert2";

const PlotLayoutManagement = () => {
  const [layouts, setLayouts] = useState([
    {
      _id: "1",
      mainImage: "https://via.placeholder.com/150",
      icons: [
        { icon: "https://via.placeholder.com/40", heading: "Park", subheading: "Near Entrance" },
      ],
    },
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(null);

  const handleAddLayout = (newLayout) => {
    setLayouts([...layouts, { _id: Date.now().toString(), ...newLayout }]);
  };

  const handleUpdateLayout = (updatedLayout) => {
    setLayouts(
      layouts.map((l) =>
        l._id === selectedLayout._id ? { ...l, ...updatedLayout } : l
      )
    );
  };

  const handleDeleteLayout = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the layout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLayouts(layouts.filter((l) => l._id !== id));
      }
    });
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Plot Layout Management</h1>
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => setIsAddOpen(true)}
        >
          <Plus className="w-4 h-4" /> Add Layout
        </button>
      </div>

      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Main Image</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Icons</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-32">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {layouts.map((l) => (
              <tr key={l._id}>
                <td className="px-4 py-2">
                  <img src={l.mainImage} alt="Main" className="w-20 h-12 object-cover rounded" />
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-col gap-1">
                    {l.icons.map((ic, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <img src={ic.icon} alt={ic.heading} className="w-8 h-8 object-cover rounded" />
                        <div>
                          <div className="font-semibold">{ic.heading}</div>
                          <div className="text-sm text-gray-500">{ic.subheading}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => {
                        setSelectedLayout(l);
                        setIsEditOpen(true);
                      }}
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteLayout(l._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PlotLayoutAdd isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onAdd={handleAddLayout} />
      <PlotLayoutEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        layout={selectedLayout}
        onUpdate={handleUpdateLayout}
      />
    </div>
  );
};

export default PlotLayoutManagement;