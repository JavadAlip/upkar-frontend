import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import PlotLayoutAdd from "./../Common/PlotLayoutAdd";
import PlotLayoutEdit from "./../Common/PlotLayoutEdit";
import { getPlotLayout, deletePlotLayout } from "../../../Api";

const PlotLayout = () => {
  const [layouts, setLayouts] = useState([]); 
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editLayout, setEditLayout] = useState(null); 
  // Fetch all layouts on mount
  useEffect(() => {
    fetchLayouts();
  }, []);

  const fetchLayouts = async () => {
    try {
      const data = await getPlotLayout(); 
      setLayouts(data || []);
    } catch (error) {
      console.error("Error fetching plot layouts:", error);
      toast.error("Failed to fetch plot layouts!");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will delete the layout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("adminToken");
        await deletePlotLayout(id, token); 
        toast.success("Plot layout deleted successfully!");
        fetchLayouts();
      } catch (error) {
        console.error("Error deleting plot layout:", error);
        toast.error("Failed to delete plot layout!");
      }
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Plot Layout Management</h1>

        {/* Add button always visible */}
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => setIsAddOpen(true)}
        >
          <Plus className="w-4 h-4" /> Add Layout
        </button>
      </div>

      {layouts.length > 0 ? (
        <div className="overflow-x-auto w-full bg-white rounded shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Main Image
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                  Icons
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-32">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {layouts.map((layout) => (
                <tr key={layout._id}>
                  <td className="px-4 py-2">
                    <img
                      src={layout.mainImage}
                      alt="Main"
                      className="w-20 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-col gap-1">
                      {layout.icons.map((ic) => (
                        <div key={ic._id} className="flex items-center gap-2">
                          <img
                            src={ic.icon}
                            alt={ic.heading}
                            className="w-8 h-8 object-cover rounded"
                          />
                          <div>
                            <div className="font-semibold">{ic.heading}</div>
                            <div className="text-sm text-gray-500">
                              {ic.subheading}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex gap-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => setEditLayout(layout)}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(layout._id)}
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
      ) : (
        <div className="text-center py-6 text-gray-500">
          No plot layouts found. You can add one.
        </div>
      )}

      {/* Modals */}
      <PlotLayoutAdd
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={fetchLayouts}
      />
      {editLayout && (
        <PlotLayoutEdit
          isOpen={!!editLayout}
          onClose={() => setEditLayout(null)}
          layout={editLayout}
          onUpdate={fetchLayouts}
        />
      )}
    </div>
  );
};

export default PlotLayout;
