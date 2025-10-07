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
      {/* Quote Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-[#001529] text-white rounded-lg p-12 relative font-[Figtree]">
          {/* Opening Quote */}
          <div className="absolute top-8 left-8 text-6xl font-[Figtree] text-gray-400">"</div>

          {/* Quote Text */}
          <div className="max-w-4xl mx-auto text-center space-y-4 text-sm leading-relaxed">
            <p>
              Since four decades, Upkar Group of Companies is a pioneer in the property and real estate business of Bangalore. Under the able guidance and mentorship of Mr. K.H Khan, Upkar Developers LLC is grown from strength to strength.
            </p>
            <p>
              He started his career as an architect and with his work, he was able to develop a deep sense of understanding of the industry. With his diligence and determination, he forayed into the real estate segment. He emerged as a qualified member of the chairman's club for his quality work. He further diversified Upkar into construction, and thus became the authorized dealer of ACC and Ultratech brands of cement. For five consecutive years, Upkar was conferred with the 'Best Seller Award' for the state of Karnataka and Goa.
            </p>
            <p>
              In 1974 when Mr. Khan decided to establish his operations in Bangalore, it was still at its nascent stage. His main aim was to offering quality housing projects at affordable prices. As he established Upkar, he not just focused on re-engineering housing in India, but also laid a strong emphasis on social responsibility. Today, Upkar is not just a brand but an emotion attached to the welfare of the society. With the ongoing support of a dynamic workforce, Upkar is set to take bigger strides in the near future under the leadership of its visionary and chairman.
            </p>
          </div>

          {/* Closing Quote */}
          <div className="absolute bottom-8 right-8 text-6xl font-[Figtree] text-gray-400">"</div>

          {/* Author */}
          <div className="text-center mt-8">
            <p className="font-semibold text-lg">Mr. K.H Khan</p>
            <p className="text-sm text-gray-300">Chairman & Managing Director</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto font-[Figtree]">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Team !</h2>
        </div>

        {/* Scrollable Team Grid */}
        <div className="overflow-y-auto max-h-[600px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
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
