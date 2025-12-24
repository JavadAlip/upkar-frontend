import React, { useEffect, useState } from 'react';
import { getAllEnquiries } from '../../../Api';

const ITEMS_PER_PAGE = 2;

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [filteredEnquiries, setFilteredEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, status, date, enquiries]);

  const fetchEnquiries = async () => {
    try {
      const data = await getAllEnquiries();

      if (Array.isArray(data)) {
        setEnquiries(data);
        setFilteredEnquiries(data);
      }
    } catch (error) {
      console.error('Failed to fetch enquiries', error);
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Filters
  const applyFilters = () => {
    let temp = [...enquiries];

    if (search) {
      temp = temp.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.phone.includes(search)
      );
    }

    if (status) {
      temp = temp.filter((item) => item.projectType === status);
    }

    if (date) {
      temp = temp.filter(
        (item) => new Date(item.createdAt).toISOString().split('T')[0] === date
      );
    }

    setFilteredEnquiries(temp);
    setCurrentPage(1);
  };

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }
    return 'just now';
  };

  const totalPages = Math.ceil(filteredEnquiries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEnquiries = filteredEnquiries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading) return <p className="p-6">Loading enquiries...</p>;

  return (
    <div className="p-6 bg-[#F7F8FA] min-h-screen font-figtree">
      <h2 className="text-2xl font-semibold mb-4">Manage Enquiries</h2>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search enquiry..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/3"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/4"
        >
          <option value="">All Status</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/4"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentEnquiries.length === 0 ? (
          <p className="text-center col-span-full">No enquiries found</p>
        ) : (
          currentEnquiries.map((item, index) => (
            <div
              key={item._id}
              className="bg-white rounded-xl border p-5 shadow-sm"
            >
              <p className="text-sm text-gray-500 mb-3">
                Enquiry no - {startIndex + index + 1}
              </p>

              <div className="space-y-2 text-[16px] font-figtree font-normal">
                <p>
                  <span className="font-medium">Name:</span> {item.name}
                </p>
                <p>
                  <span className="font-medium">Project:</span>{' '}
                  {item.projectType}
                </p>
                <p>
                  <span className="font-medium">Site Visit:</span>{' '}
                  {new Date(item.siteVisitDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {item.location}
                </p>
                <p>
                  <span className="font-medium">Contact:</span> {item.phone}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {item.email}
                </p>
                <p>
                  <span className="font-medium">Existing Customer:</span>{' '}
                  {item.isExistingCustomer}
                </p>
              </div>

              <button className="mt-4 w-full bg-[#050F27] text-white py-2 rounded-full">
                View Enquiry
              </button>

              <p className="text-sm text-green-600 mt-2">
                Received {timeAgo(item.createdAt)}
              </p>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className={`text-xl font-semibold ${
              currentPage === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-[#050F27]'
            }`}
          >
            ‹
          </button>

          <span className="px-4 py-2 border rounded-lg bg-white text-sm">
            {currentPage}
          </span>

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className={`text-xl font-semibold ${
              currentPage === totalPages
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-[#050F27]'
            }`}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default EnquiryList;
