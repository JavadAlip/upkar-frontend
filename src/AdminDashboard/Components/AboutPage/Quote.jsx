import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import QuoteAdd from "../../Components/Common/QuoteAdd";
import QuoteEdit from "../../Components/Common/QuoteEdit";
import { getAllQuotes, deleteQuote } from "../../../Api";
const token = localStorage.getItem("adminToken");

const Quote = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [quoteData, setQuoteData] = useState([]);

  const fetchQuotes = async () => {
    try {
      const res = await getAllQuotes();
      setQuoteData(res.quotes || []);
    } catch (error) {
      console.error("Error fetching quotes:", error);
      toast.error("Failed to fetch quotes.");
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

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
      try {
        await deleteQuote(id, token);
        toast.success("Quote deleted successfully!");
        fetchQuotes();
      } catch (error) {
        console.error("Delete failed:", error);
        toast.error("Failed to delete quote.");
      }
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Quote Management</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <Plus className="w-4 h-4" /> Add Quote
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Quote</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Position</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Created At</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {quoteData.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{item.quoteContent}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.position}</td>
                <td className="px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      setSelectedQuote(item);
                      setIsEditOpen(true);
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}

            {quoteData.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No quotes available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <QuoteAdd
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onQuoteAdded={fetchQuotes}
      />
      <QuoteEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        item={selectedQuote}
        onQuoteUpdated={fetchQuotes}
      />
    </div>
  );
};

export default Quote;
