// import React, { useState, useEffect } from "react";
// import { Plus, Edit, Trash2 } from "lucide-react";
// import BannerAdd from "../Common/BannerAdd";
// import BannerEdit from "../Common/BannerEdit";
// import { getBanners, deleteBanner } from "../../../Api";

// const Banner = () => {
//   const [banners, setBanners] = useState([]);
//   const [isAddOpen, setIsAddOpen] = useState(false);
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [selectedBanner, setSelectedBanner] = useState(null);

//   const token = localStorage.getItem("adminToken"); 

//   // Fetch banners on mount
//   useEffect(() => {
//     fetchBanners();
//   }, []);

//   const fetchBanners = async () => {
//     try {
//       const data = await getBanners(token);
//       setBanners(data);
//     } catch (error) {
//       console.error("Error fetching banners:", error);
//     }
//   };

//   //  Handle delete
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this banner?")) {
//       try {
//         await deleteBanner(id, token);
//         setBanners(banners.filter((banner) => banner._id !== id));
//       } catch (error) {
//         console.error("Error deleting banner:", error);
//       }
//     }
//   };

//   // After add success, refresh
//   const handleBannerAdded = () => {
//     fetchBanners();
//   };

//   return (
//     <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
//         <h1 className="text-2xl font-bold">Banner Management</h1>
//         <button
//           onClick={() => setIsAddOpen(true)}
//           className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//         >
//           <Plus className="w-4 h-4" /> Add Banner
//         </button>
//       </div>

//       <div className="overflow-x-auto w-full bg-white rounded shadow">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Title</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Subtitle</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Image</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Created At</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {banners.map((banner) => (
//               <tr key={banner._id}>
//                 <td className="px-4 py-2">{banner.title}</td>
//                 <td className="px-4 py-2">{banner.subtitle}</td>
//                 <td className="px-4 py-2">
//                   <img src={banner.image} alt={banner.title} className="w-20 h-12 object-cover rounded" />
//                 </td>
//                 <td className="px-4 py-2">{new Date(banner.createdAt).toLocaleDateString()}</td>
//                 <td className="px-4 py-2 flex gap-2">
//                   <button
//                     onClick={() => {
//                       setSelectedBanner(banner);
//                       setIsEditOpen(true);
//                     }}
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     <Edit className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(banner._id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modals */}
//       <BannerAdd
//         isOpen={isAddOpen}
//         onClose={() => setIsAddOpen(false)}
//         onBannerAdded={handleBannerAdded}
//       />
//       <BannerEdit
//         isOpen={isEditOpen}
//         onClose={() => setIsEditOpen(false)}
//         banner={selectedBanner}
//         onUpdate={fetchBanners}
//       />
//     </div>
//   );
// };

// export default Banner;



import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import BannerAdd from "../Common/BannerAdd";
import BannerEdit from "../Common/BannerEdit";
import { getBanners, deleteBanner } from "../../../Api";

// ✅ Toastify & SweetAlert2
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const token = localStorage.getItem("adminToken");

  // Fetch banners on mount
  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const data = await getBanners(token);
      setBanners(data);
    } catch (error) {
      console.error("Error fetching banners:", error);
      toast.error("Failed to fetch banners!");
    }
  };

  // Handle delete with SweetAlert2 + Toastify
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
        await deleteBanner(id, token);
        setBanners(banners.filter((banner) => banner._id !== id));
        toast.success("Banner deleted successfully!");
      } catch (error) {
        console.error("Error deleting banner:", error);
        toast.error("Failed to delete banner!");
      }
    }
  };

  // After add success, refresh
  const handleBannerAdded = () => {
    fetchBanners();
    toast.success("Banner added successfully!");
  };

  // After edit success, refresh
  const handleBannerUpdated = () => {
    fetchBanners();
    toast.success("Banner updated successfully!");
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Banner Management</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <Plus className="w-4 h-4" /> Add Banner
        </button>
      </div>

      <div className="overflow-x-auto w-full bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Title</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Subtitle</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Image</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Created At</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {banners.map((banner) => (
              <tr key={banner._id}>
                <td className="px-4 py-2">{banner.title}</td>
                <td className="px-4 py-2">{banner.subtitle}</td>
                <td className="px-4 py-2">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-20 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{new Date(banner.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedBanner(banner);
                      setIsEditOpen(true);
                    }}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(banner._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <BannerAdd
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onBannerAdded={handleBannerAdded}
      />
      <BannerEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        banner={selectedBanner}
        onUpdate={handleBannerUpdated}
      />
    </div>
  );
};

export default Banner;
