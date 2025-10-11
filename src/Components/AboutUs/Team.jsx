import React from 'react'

const Team = () => {
  const teamMembers = [
    { name: 'Mr. Francis J', position: 'Vice - President', image: null },
    { name: 'Mr. Sindhu Thomas', position: 'General Manager', image: null },
    { name: 'Mr. Francis J', position: 'Vice - President', image: null },
    { name: 'Mr. Sindhu Thomas', position: 'General Manager', image: null },
    { name: 'Mr. Sindhu Thomas', position: 'General Manager', image: null },
  ]

  return (
    <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">
      <div className="flex items-center gap-3 mb-4 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light leading-tight">
          Our <span className="font-semibold">Team !</span>
        </h2>
      </div>

      <div className="overflow-hidden max-h-[600px] pr-2">
        <div className="grid mb-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-200"></div>

              {/* Member Info */}
              <div className="p-4 text-center border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 text-base">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
