import React, { useState, useEffect } from "react";

const CertificationEdit = ({ isOpen, onClose, certification, onUpdated }) => {
  const [heading, setHeading] = useState("");
  const [iconPreview, setIconPreview] = useState("");
  const [iconFile, setIconFile] = useState(null);

  useEffect(() => {
    if (certification) {
      setHeading(certification.heading || "");
      setIconPreview(certification.icon || "");
      setIconFile(null);
    }
  }, [certification]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    // You can implement future API call here
    console.log("Update certification:", { heading, iconFile });
    onUpdated();
    onClose();
  };

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIconPreview(URL.createObjectURL(file));
      setIconFile(file);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Edit Certification</h2>
        <input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Heading"
          className="border p-2 w-full mb-3 rounded"
        />
        <input type="file" accept="image/*" onChange={handleIconChange} className="mb-3" />
        {iconPreview && <img src={iconPreview} alt="Preview" className="w-full h-24 object-cover rounded mb-3" />}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">Update</button>
        </div>
      </div>
    </div>
  );
};

export default CertificationEdit;
