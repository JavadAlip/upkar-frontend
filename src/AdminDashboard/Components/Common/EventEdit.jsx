import React, { useState, useEffect } from 'react';
import { updateEvent } from '../../../Api';

const EventEdit = ({ isOpen, onClose, event, onUpdate }) => {
  const [form, setForm] = useState({
    eventTitle: '',
    eventDescription: '',
    eventLocation: '',
    eventDate: '',
    eventImage: null,
  });
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (event) {
      setForm({ ...event, eventImage: null });
      setImagePreview(event.eventImage);
    }
  }, [event]);

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setForm({ ...form, eventImage: file });
    }
  };

  const handleSubmit = async () => {
    if (!form.eventTitle || !form.eventDescription)
      return alert('Title and Description are required!');

    const formData = new FormData();
    Object.keys(form).forEach(
      (key) => form[key] && formData.append(key, form[key])
    );

    try {
      setLoading(true);
      await updateEvent(event._id, formData, token);
      onUpdate();
      onClose();
    } catch (error) {
      console.error(error);
      alert('Failed to update event.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Event</h2>
        <input
          name="eventTitle"
          value={form.eventTitle}
          placeholder="Event Title"
          className="border p-2 w-full mb-2 rounded"
          onChange={handleChange}
        />
        <textarea
          name="eventDescription"
          value={form.eventDescription}
          placeholder="Description"
          className="border p-2 w-full mb-2 rounded"
          onChange={handleChange}
        />
        <input
          name="eventLocation"
          value={form.eventLocation}
          placeholder="Location"
          className="border p-2 w-full mb-2 rounded"
          onChange={handleChange}
        />
        <input
          type="date"
          name="eventDate"
          value={form.eventDate.split('T')[0] || ''}
          className="border p-2 w-full mb-2 rounded"
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-32 object-cover rounded my-2"
          />
        )}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {loading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventEdit;
