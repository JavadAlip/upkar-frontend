import { X } from 'lucide-react';

const EventViewModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Event Details</h2>

        <div className="space-y-4">
          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Event Title:</strong>
            <p>{event.eventTitle}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">
              Event Description:
            </strong>
            <p>{event.eventDescription}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Location:</strong>
            <p>{event.eventLocation}</p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Date:</strong>
            <p>
              {new Date(event.eventDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className="p-3 border rounded">
            <strong className="block mb-1 text-gray-700">Event Image:</strong>
            <img
              src={event.eventImage}
              alt={event.eventTitle}
              className="w-48 h-32 object-cover rounded mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventViewModal;
