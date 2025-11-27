import React, { useState } from 'react';
import { createEvent } from '../../../Api';

const EventAdd = ({ isOpen, onClose, onEventAdded }) => {
  const [form, setForm] = useState({
    eventTitle: '',
    eventDescription: '',
    eventLocation: '',
    eventDate: '',
    eventImage: null,
  });
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('adminToken');

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleImageChange = (e) =>
    setForm({ ...form, eventImage: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.eventTitle || !form.eventDescription || !form.eventImage)
      return alert('Title, Description, and Image are required!');

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    try {
      setLoading(true);
      await createEvent(formData, token);
      onEventAdded();
      onClose();
    } catch (error) {
      console.error(error);
      alert('Failed to add event.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Event</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            name="eventTitle"
            placeholder="Event Title"
            className="border p-2 w-full rounded"
            onChange={handleChange}
          />
          <textarea
            name="eventDescription"
            placeholder="Description"
            className="border p-2 w-full rounded"
            onChange={handleChange}
          />
          <input
            name="eventLocation"
            placeholder="Location"
            className="border p-2 w-full rounded"
            onChange={handleChange}
          />
          <input
            type="date"
            name="eventDate"
            className="border p-2 w-full rounded"
            onChange={handleChange}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              {loading ? 'Adding...' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventAdd;
