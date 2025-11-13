import React from "react";

const ProjectMainAdd = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
      <div
        className="bg-white p-6 rounded shadow-md w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-xl font-semibold mb-4">Add Project</h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Heading"
            className="border p-2 w-full rounded"
          />
          <textarea
            placeholder="Description"
            className="border p-2 w-full rounded"
            rows={3}
          />
          <div className="flex flex-col gap-2">
            <label className="font-medium">Main Images (3)</label>
            <input type="file" accept="image/*" className="rounded" />
            <input type="file" accept="image/*" className="rounded" />
            <input type="file" accept="image/*" className="rounded" />
          </div>
          <input
            type="text"
            placeholder="Customer Heading"
            className="border p-2 w-full rounded"
          />
          <textarea
            placeholder="Customer Description"
            className="border p-2 w-full rounded"
            rows={2}
          />
          <input
            type="text"
            placeholder="Rating Text"
            className="border p-2 w-full rounded"
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectMainAdd;
