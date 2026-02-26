import React, { useEffect, useState } from 'react';
import JoinTeamModal from './../Career/JoinTeam';
import { getCareerRoles } from '../../Api';

const CareerOpenings = () => {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedRole, setSelectedRole] = useState('');
  const [open, setOpen] = useState(false);

  const handleApply = (role) => {
    setSelectedRole(role);
    setOpen(true);
  };

  // FETCH ROLES
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await getCareerRoles();

        // only active roles
        const activeRoles = res.filter((item) => item.isActive);

        setOpenings(activeRoles);
      } catch (error) {
        console.error('Failed to fetch career roles', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  return (
    <div
      id="job-openings"
      className="px-4 lg:px-10 py-12 font-[Figtree] bg-white"
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-10">Openings</h1>

      {/* Header */}
      <div className="flex text-base justify-between text-gray-500 mb-4">
        <span>Available Roles</span>
        <span>Location</span>
      </div>

      {/* Loading */}
      {loading && <p className="text-gray-400 py-6">Loading openings...</p>}

      {/* Empty State */}
      {!loading && openings.length === 0 && (
        <p className="text-gray-400 py-6">No openings available right now</p>
      )}

      {/* Openings List */}
      <div className="space-y-6">
        {openings.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <h2 className="text-2xl md:text-xl lg:text-4xl font-medium  cursor-pointer">
                {item.role}
              </h2>

              <button
                onClick={() => handleApply(item.role)}
                className="text-sm font-semibold lg:text-sm text-[#2D5C3A] mt-2 hover:underline"
              >
                Apply Now →
              </button>
            </div>

            <span className="px-4 py-1 border rounded-full text-sm">
              {item.location}, IND
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <JoinTeamModal role={selectedRole} onClose={() => setOpen(false)} />
      )}
    </div>
  );
};

export default CareerOpenings;
