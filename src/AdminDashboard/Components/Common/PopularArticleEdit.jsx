import React, { useState, useEffect } from "react";
import { updateArticle } from "../../../Api";

const PopularArticleEdit = ({ isOpen, onClose, article, onUpdated }) => {
  const [form, setForm] = useState({ mainDescription: "", mainImage: null, subItems: [] });
  const [subPreviews, setSubPreviews] = useState([]);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (article) {
      setForm({ mainDescription: article.mainDescription, mainImage: null, subItems: article.subItems.map(sub => ({ ...sub, subImage: null })) });
      setPreview(article.mainImage);
      setSubPreviews(article.subItems.map(sub => sub.subImage));
    }
  }, [article]);

  if (!isOpen) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setForm({ ...form, mainImage: file });
    }
  };

  const handleSubItemChange = (index, key, value) => {
    const newSubItems = [...form.subItems];
    newSubItems[index][key] = value;
    setForm({ ...form, subItems: newSubItems });
  };

  const handleSubImageChange = (index, file) => {
    const newSubPreviews = [...subPreviews];
    newSubPreviews[index] = URL.createObjectURL(file);
    setSubPreviews(newSubPreviews);
    handleSubItemChange(index, "subImage", file);
  };

  const addSubItem = () => {
    setForm({ ...form, subItems: [...form.subItems, { subHeading: "", subDescription: "", subImage: null }] });
    setSubPreviews([...subPreviews, null]);
  };

  const removeSubItem = (index) => {
    const newSubItems = form.subItems.filter((_, i) => i !== index);
    const newSubPreviews = subPreviews.filter((_, i) => i !== index);
    setForm({ ...form, subItems: newSubItems });
    setSubPreviews(newSubPreviews);
  };

  const handleSubmit = async () => {
    const fd = new FormData();
    fd.append("mainDescription", form.mainDescription);
    if (form.mainImage) fd.append("mainImage", form.mainImage);

    form.subItems.forEach(sub => {
      fd.append("subHeading[]", sub.subHeading);
      fd.append("subDescription[]", sub.subDescription);
      if (sub.subImage) fd.append("subImages", sub.subImage);
    });

    try {
      setLoading(true);
      const res = await updateArticle(article._id, fd, token);
      if (res.success) {
        onUpdated();
        onClose();
      } else alert(res.message || "Failed to update article");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Edit Popular Article</h2>

        <textarea
          name="mainDescription"
          placeholder="Main Description"
          className="border p-2 rounded mb-2"
          value={form.mainDescription}
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleMainImageChange} />
        {preview && <img src={preview} alt="" className="w-full h-32 object-cover rounded my-2" />}

        <h3 className="mt-4 font-semibold">Sub Items</h3>
        {form.subItems.map((sub, i) => (
          <div key={i} className="border p-2 rounded flex flex-col gap-2 relative">
            <input
              type="text"
              placeholder="Sub Heading"
              value={sub.subHeading}
              onChange={(e) => handleSubItemChange(i, "subHeading", e.target.value)}
              className="border p-1 rounded"
            />
            <textarea
              placeholder="Sub Description"
              value={sub.subDescription}
              onChange={(e) => handleSubItemChange(i, "subDescription", e.target.value)}
              className="border p-1 rounded"
            />
            <input type="file" accept="image/*" onChange={(e) => handleSubImageChange(i, e.target.files[0])} />
            {subPreviews[i] && <img src={subPreviews[i]} alt="" className="w-full h-24 object-cover rounded" />}
            {form.subItems.length > 1 && (
              <button type="button" onClick={() => removeSubItem(i)} className="absolute top-1 right-1 text-red-500">
                Remove
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addSubItem} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2">
          + Add Sub Item
        </button>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularArticleEdit;
