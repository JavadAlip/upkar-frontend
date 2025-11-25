import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

import PopularArticleAdd from "../../Components/Common/PopularArticleAdd";
import PopularArticleEdit from "../../Components/Common/PopularArticleEdit";
import PopularArticleViewModal from "../../Components/ViewModals/BlogPage/PopularArticleView"; 

import { getAllArticles, deleteArticle } from "../../../Api";

const PopularArticlesMain = () => {
  const [articles, setArticles] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false); 
  const [selectedArticle, setSelectedArticle] = useState(null);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await getAllArticles();
      const list = Array.isArray(response.data) ? response.data : [];
      setArticles(list);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch articles!");
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await deleteArticle(id, token);
        setArticles(articles.filter((a) => a._id !== id));
        toast.success("Article deleted successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete article!");
      }
    }
  };

  const handleAdded = () => {
    fetchArticles();
    toast.success("Article added successfully!");
  };

  const handleUpdated = () => {
    fetchArticles();
    toast.success("Article updated successfully!");
  };

  // Function to truncate text
  const truncateText = (text, limit = 20) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={1500} />

      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Popular Articles</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <Plus className="w-4 h-4" /> Add Article
        </button>
      </div>

      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Main Description</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Main Image</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Sub Items</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article._id}>
                <td className="px-4 py-2">{truncateText(article.mainDescription)}</td>
                <td className="px-4 py-2">
                  <img src={article.mainImage} alt="" className="w-20 h-12 object-cover rounded" />
                </td>
                <td className="px-4 py-2">
                  {article.subItems.map((sub, idx) => (
                    <div key={idx} className="mb-2 border p-1 rounded">
                      <p className="font-semibold text-sm">{truncateText(sub.subHeading)}</p>
                      <p className="text-xs">{truncateText(sub.subDescription)}</p>
                    </div>
                  ))}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => { setSelectedArticle(article); setIsViewOpen(true); }}
                    className="text-green-500 hover:text-green-700"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => { setSelectedArticle(article); setIsEditOpen(true); }}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(article._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {articles.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No Articles Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <PopularArticleAdd
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdded={handleAdded}
      />

      <PopularArticleEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        article={selectedArticle}
        onUpdated={handleUpdated}
      />

      {/* View Modal */}
      <PopularArticleViewModal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        article={selectedArticle}
      />
    </div>
  );
};

export default PopularArticlesMain;

