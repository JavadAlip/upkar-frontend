import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, X } from 'lucide-react';
import { getAllCategories, createCategory, getAllProjects } from '../../../Api';

const Categories = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchCategoriesWithCounts();
  }, []);

  const fetchCategoriesWithCounts = async () => {
    try {
      const catRes = await getAllCategories();
      const projects = await getAllProjects();

      const catData = catRes.categories || [];

      const formatted = catData.map((cat) => {
        const catProjects = projects.projects.filter(
          (p) => p.projectType === cat.categoryName
        );

        return {
          name: cat.categoryName,
          ongoing: catProjects.filter((p) => p.projectStatus === 'ongoing')
            .length,
          completed: catProjects.filter((p) => p.projectStatus === 'completed')
            .length,
          upcoming: catProjects.filter((p) => p.projectStatus === 'upcoming')
            .length,
        };
      });

      setCategories(formatted);
    } catch (err) {
      console.error('Error fetching categories or projects', err);
    }
  };

  const handleAddCategory = async () => {
    if (!categoryName.trim()) return;

    try {
      setLoading(true);
      const res = await createCategory({ categoryName }, token);

      await fetchCategoriesWithCounts();

      setCategoryName('');
      setShowModal(false);
    } catch (err) {
      alert(err?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = (categoryName) => {
    navigate(`/admin/category/${categoryName}`);
  };

  return (
    <div
      className="bg-white shadow-sm p-6 overflow-x-auto"
      style={{ fontFamily: 'Figtree, sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-[20px] font-semibold">Categories</h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 text-[16px] font-medium bg-[#2D5C3A] text-white rounded-md hover:bg-[#244A30] transition"
        >
          + Add New Category
        </button>
      </div>

      <p className="text-[16px] text-[#4A5565] mb-4">
        Understand the data categorically
      </p>

      {/* Table with borders */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b text-black text-[16px] bg-gray-50">
              <th className="px-6 py-4 text-left font-semibold border-r border-gray-200"></th>
              <th className="px-6 py-4 text-center font-semibold border-r border-gray-200">
                Ongoing Projects
              </th>
              <th className="px-6 py-4 text-center font-semibold border-r border-gray-200">
                Completed Projects
              </th>
              <th className="px-6 py-4 text-center font-semibold">
                Upcoming Projects
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((row, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(row.name)}
                className="hover:bg-gray-100 border-b border-gray-200 last:border-b-0 cursor-pointer transition-colors"
              >
                <td className="px-6 py-6 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    <Building2 size={18} className="text-[#2D5C3A]" />
                    <span className="font-medium text-[16px]">{row.name}</span>
                  </div>
                </td>
                <td className="px-6 py-6 text-[#2D5C3A] font-bold text-[36px] text-center border-r border-gray-200">
                  {row.ongoing}
                </td>
                <td className="px-6 py-6 text-[#2D5C3A] font-bold text-[36px] text-center border-r border-gray-200">
                  {row.completed}
                </td>
                <td className="px-6 py-6 text-[#2D5C3A] font-bold text-[36px] text-center">
                  {row.upcoming}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[400px] p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} />
            </button>

            <h3 className="text-[18px] font-semibold mb-4">Add Category</h3>

            <input
              type="text"
              placeholder="Category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border rounded-md px-4 py-2 mb-4"
            />

            <button
              onClick={handleAddCategory}
              disabled={loading}
              className="w-full bg-[#2D5C3A] text-white py-2 rounded-md text-[16px]"
            >
              {loading ? 'Adding...' : 'Add'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
