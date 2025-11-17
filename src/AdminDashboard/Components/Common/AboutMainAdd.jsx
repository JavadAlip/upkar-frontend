import React, { useState } from "react";
import { toast } from "react-toastify";
import { createAboutMain } from "../../../Api.js";

const AboutMainAdd = ({ isOpen, onClose, onAboutAdded }) => {
  const [form, setForm] = useState({
    heading: "",
    plotNumber: "",
    plotTitle: "",
    acresNumber: "",
    acresTitle: "",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
  });

  const [plotImage, setPlotImage] = useState(null);
  const [acresImage, setAcresImage] = useState(null);
  const [mainImages, setMainImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("adminToken");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.heading || !form.plotNumber) return toast.error("Heading & Plot Number required");

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    plotImage && formData.append("plotImage", plotImage);
    acresImage && formData.append("acresImage", acresImage);
    mainImages.forEach((img) => formData.append("mainImages", img));

    try {
      setLoading(true);
      await createAboutMain(formData, token);
      onAboutAdded();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add About content!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50 p-4">
      <div className="bg-white p-6 rounded w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Add About Main</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input type="text" placeholder="Heading" className="border p-2 w-full rounded" value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
          <input type="text" placeholder="Plot Number" className="border p-2 w-full rounded" value={form.plotNumber} onChange={(e) => setForm({ ...form, plotNumber: e.target.value })} />
          <input type="text" placeholder="Plot Title" className="border p-2 w-full rounded" value={form.plotTitle} onChange={(e) => setForm({ ...form, plotTitle: e.target.value })} />
          <label className="block font-medium">Plot Image</label>
          <input type="file" onChange={(e) => setPlotImage(e.target.files[0])} />
          <input type="text" placeholder="Acres Number" className="border p-2 w-full rounded" value={form.acresNumber} onChange={(e) => setForm({ ...form, acresNumber: e.target.value })} />
          <input type="text" placeholder="Acres Title" className="border p-2 w-full rounded" value={form.acresTitle} onChange={(e) => setForm({ ...form, acresTitle: e.target.value })} />
          <label className="block font-medium">Acres Image</label>
          <input type="file" onChange={(e) => setAcresImage(e.target.files[0])} />
          <label className="block font-medium">Main Images (Multiple)</label>
          <input type="file" multiple onChange={(e) => setMainImages([...e.target.files])} />
          <textarea placeholder="Paragraph 1" className="border p-2 w-full rounded" value={form.paragraph1} onChange={(e) => setForm({ ...form, paragraph1: e.target.value })} />
          <textarea placeholder="Paragraph 2" className="border p-2 w-full rounded" value={form.paragraph2} onChange={(e) => setForm({ ...form, paragraph2: e.target.value })} />
          <textarea placeholder="Paragraph 3" className="border p-2 w-full rounded" value={form.paragraph3} onChange={(e) => setForm({ ...form, paragraph3: e.target.value })} />
          <div className="flex justify-end gap-2 mt-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">{loading ? "Adding..." : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutMainAdd;
