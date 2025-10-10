import React from 'react';

const AboutProject = () => {
  const projectImages = [
    {
      id: 1,
      alt: 'Project View 1',
      bgColor: '#E8F0E8'
    },
    {
      id: 2,
      alt: 'Project View 2',
      bgColor: '#F0E8E8'
    },
    {
      id: 3,
      alt: 'Project View 3',
      bgColor: '#E8E8F0'
    },
    {
      id: 4,
      alt: 'Project View 4',
      bgColor: '#F0E8D8'
    }
  ];

  return (
    <div className="w-full bg-white py-8 md:py-16 px-4 md:px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">

        {/* About Project Section */}
        <div>
          <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-figtree text-black">
            <span className="font-semibold">About</span>{' '}
            <span className="font-light">Project</span>
          </h2>
          <p className="font-figtree font-light text-base sm:text-lg md:text-xl lg:text-2xl text-[#050F27] leading-relaxed md:leading-snug max-w-4xl">
            Choosing the right partner for your dream project is the most critical decision you'll make. At Upkar Developers, we don't just sell plots; we build dreams. Our integrated approach ensures a seamless journey from the moment you select your land to the day you receive the keys to your new home. This is the Upkar promise: a commitment to quality, transparency, and timely delivery.
          </p>
        </div>

        {/* RERA & Legal Certificates Section */}
        <div>
          <h3 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-figtree text-black">
            <span className="font-semibold">A Upkar Spring woods -</span>{' '}
            <span className="font-light">RERA & Legal Certificates</span>
          </h3>

          <div className="space-y-3 md:space-y-4">
            <p className="font-figtree font-light text-base sm:text-lg md:text-xl lg:text-2xl text-[#050F27] leading-relaxed md:leading-snug">
              The Real Estate (Regulation and Development) Act, 2016 is Act of the Parliament of India which seeks to protect buyers as well as help boost investments in the real estate industry. The Act came into force from 1 May 2016.
            </p>

            <div className="space-y-2 md:space-y-3 pt-2">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-figtree text-[#050F27]">
                <span className="font-light">NoBroker RERA Id -</span>{' '}
                <span className="font-bold">A51800026821</span>
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-figtree text-[#050F27]">
                <span className="font-light">Builder Project RERA Id -</span>{' '}
                <span className="font-bold break-all">PRM/KA/RERA/1251/309/PR/210319/004033</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutProject;