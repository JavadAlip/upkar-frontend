import React from 'react';

const ValueImageView = ({ isOpen, onClose, valueImage }) => {
  if (!isOpen || !valueImage) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-[400px]">
        <h2 className="text-xl font-bold mb-3">View Value Image</h2>

        <img
          src={valueImage.image}
          alt=""
          className="w-full h-40 object-cover rounded"
        />

        <p className="mt-3 text-gray-600">
          Created At: {new Date(valueImage.createdAt).toLocaleString()}
        </p>

        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValueImageView;
