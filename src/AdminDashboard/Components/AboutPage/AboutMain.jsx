import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import AboutAdd from "../../Components/Common/AboutMainAdd";
import AboutEdit from "../../Components/Common/AboutMainEdit";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { getAllAboutMain, deleteAboutMain } from "../../../Api";

const AboutMain = () => {
    const [aboutData, setAboutData] = useState([]);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedAbout, setSelectedAbout] = useState(null);

    const token = localStorage.getItem("adminToken");

    useEffect(() => {
        fetchAboutData();
    }, []);

    const fetchAboutData = async () => {
        try {
            const res = await getAllAboutMain(token);
            console.log("API Response:", res); 
            setAboutData(res.aboutMainList || []); 
        } catch (error) {
            console.error("Error fetching about data:", error);
            toast.error("Failed to fetch About data!");
        }
    };

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
                await deleteAboutMain(id, token);
                setAboutData(aboutData.filter((item) => item._id !== id));
                toast.success("About content deleted successfully!");
            } catch (error) {
                console.error("Error deleting about content:", error);
                toast.error("Failed to delete About content!");
            }
        }
    };

    const handleAboutAdded = () => {
        fetchAboutData();
        toast.success("About content added successfully!");
    };

    const handleAboutUpdated = () => {
        fetchAboutData();
        toast.success("About content updated successfully!");
    };

    return (
        <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h1 className="text-2xl font-bold">About Main Management</h1>
                <button
                    onClick={() => setIsAddOpen(true)}
                    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                    <Plus className="w-4 h-4" /> Add About Content
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full bg-white rounded shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Heading</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Plot</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Acres</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Main Images</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Paragraphs</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Created At</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {aboutData.map((item) => (
                            <tr key={item._id}>
                                <td className="px-4 py-2">{item.heading}</td>

                                <td className="px-4 py-2">
                                    <p className="font-semibold">{item.plotNumber}</p>
                                    <p className="text-sm">{item.plotTitle}</p>
                                    {item.plotImage && (
                                        <img src={item.plotImage} className="w-14 h-14 mt-2 rounded object-cover" />
                                    )}
                                </td>

                                <td className="px-4 py-2">
                                    <p className="font-semibold">{item.acresNumber}</p>
                                    <p className="text-sm">{item.acresTitle}</p>
                                    {item.acresImage && (
                                        <img src={item.acresImage} className="w-14 h-14 mt-2 rounded object-cover" />
                                    )}
                                </td>

                                <td className="px-4 py-2">
                                    <div className="flex gap-2">
                                        {item.mainImages?.map((img, i) => (
                                            <img key={i} src={img} className="w-10 h-10 rounded object-cover" />
                                        ))}
                                    </div>
                                </td>

                                <td className="px-4 py-2">
                                    <p>{item.paragraph1}</p>
                                    <p className="mt-1">{item.paragraph2}</p>
                                    <p className="mt-1">{item.paragraph3}</p>
                                </td>

                                <td className="px-4 py-2">
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </td>

                                <td className="px-4 py-2 flex gap-2">
                                    <button
                                        className="text-blue-500 hover:text-blue-700"
                                        onClick={() => {
                                            setSelectedAbout(item);
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

                        {aboutData.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center py-4 text-gray-500">
                                    No content available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modals */}
            <AboutAdd
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onAboutAdded={handleAboutAdded}
            />

            <AboutEdit
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                item={selectedAbout}
                onAboutUpdated={handleAboutUpdated}
            />
        </div>
    );
};

export default AboutMain;
