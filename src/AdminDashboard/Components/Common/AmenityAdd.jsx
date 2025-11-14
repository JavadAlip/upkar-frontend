// import React, { useState } from "react";

// const AmenityAdd = ({ isOpen, onClose, onAdd }) => {
//   const [icon, setIcon] = useState("");
//   const [heading, setHeading] = useState("");

//   if (!isOpen) return null;

//   const handleSubmit = () => {
//     const newAmenity = { icon, heading };
//     console.log("Add Amenity:", newAmenity);
//     if (onAdd) onAdd(newAmenity);
//     onClose();
//     setIcon("");
//     setHeading("");
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 overflow-auto">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md my-6">
//         <h2 className="text-xl font-semibold mb-4">Add Amenity</h2>
//         <div className="flex flex-col gap-3">
//           <input
//             type="text"
//             placeholder="Icon URL"
//             className="border p-2 w-full rounded"
//             value={icon}
//             onChange={(e) => setIcon(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Heading"
//             className="border p-2 w-full rounded"
//             value={heading}
//             onChange={(e) => setHeading(e.target.value)}
//           />
//           <div className="flex justify-end gap-2 mt-4">
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-300 rounded"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//               onClick={handleSubmit}
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default AmenityAdd;



import React, { useState } from "react";
import { createAmenityAPI } from "../../../Api";

const AmenityAdd = ({ isOpen, onClose, refresh }) => {
  const [icon, setIcon] = useState(null);
  const [heading, setHeading] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("adminToken");

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!heading || !icon) return alert("Heading and icon are required!");

    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("icon", icon);

    try {
      setLoading(true);
      await createAmenityAPI(formData, token);
      refresh();
      onClose();
    } catch (error) {
      console.error("Error creating amenity:", error);
      alert("Failed to create amenity.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Amenity</h2>
        <div className="flex flex-col gap-3">
          <input
            type="file"
            accept="image/*"
            className="border p-2 rounded"
            onChange={(e) => setIcon(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Heading"
            className="border p-2 rounded"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded"
            onClick={handleSubmit}
          >
            {loading ? "Uploading..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmenityAdd;
