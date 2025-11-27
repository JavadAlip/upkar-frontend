import React, { useEffect, useState } from "react";
import { getAllTeamMembers } from "../../Api";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await getAllTeamMembers();
        console.log("TEAM API ===>", res);

        if (res?.members?.length > 0) {
          setTeamMembers(res.members);
        }
      } catch (err) {
        console.error("Error fetching team:", err);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight">
          Our <span className="font-semibold">Team !</span>
        </h2>
      </div>

      {/* Team Cards */}
      <div className="overflow-hidden max-h-[600px] pr-2">
        <div className="grid mb-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Member Image */}
              <div className="w-full h-48 bg-gray-200">
                <img
                  src={member.memberImage}
                  alt={member.memberName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <div className="p-4 text-center border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 text-base">
                  {member.memberName}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {member.memberPosition}
                </p>
              </div>
            </div>
          ))}

          {/* When no team members */}
          {teamMembers.length === 0 && (
            <p className="text-center text-gray-500 col-span-3">
              No team members found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
