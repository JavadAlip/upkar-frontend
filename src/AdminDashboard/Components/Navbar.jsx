import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      <div>
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
