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
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-[Figtree]">

      <div className="max-w-7xl mx-auto font-[Figtree]">
        <div className="flex items-center gap-3 mb-8">
          {/* <h2 className="text-3xl font-bold text-gray-900">Our Team !</h2> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
            Our <span className="font-bold">Team !</span>
          </h2>
        </div>

        {/* Scrollable Team Grid */}
        <div className="overflow-y-auto max-h-[600px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
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

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thumb-gray-400::-webkit-scrollbar-thumb {
          background-color: #9ca3af;
          border-radius: 4px;
        }
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background-color: #e5e7eb;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}

export default Team
