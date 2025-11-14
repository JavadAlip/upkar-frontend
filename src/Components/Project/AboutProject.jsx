
import React, { useEffect, useState } from 'react';
import { getAboutProjectsAPI } from '../../Api'; 

const AboutProject = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getAboutProjectsAPI(token);
        if (data && data.length > 0) {
          setAboutData(data[0]); 
        }
      } catch (error) {
        console.error("Error fetching about project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, [token]);

  if (loading) return <p className="text-center py-20">Loading About Project...</p>;
  if (!aboutData) return <p className="text-center py-20">No About Project data found</p>;

  return (
    <div className="w-full bg-white py-8 md:py-16 px-4 md:px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">

        {/* About Project Section */}
        <div>
          <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-figtree text-black">
            <span className="font-semibold">{aboutData.aboutHeading.split(' ')[0]}</span>{' '}
            <span className="font-light">{aboutData.aboutHeading.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="font-figtree font-light text-base sm:text-lg md:text-xl lg:text-2xl text-[#050F27] leading-relaxed md:leading-snug max-w-4xl">
            {aboutData.aboutDescription}
          </p>
        </div>

        {/* RERA & Legal Certificates Section */}
        <div>
          <h3 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-figtree text-black">
            <span className="font-semibold">{aboutData.reRaising.split(' -')[0]}</span>{' '}
            <span className="font-light">{aboutData.reRaising.split(' -').slice(1).join(' -')}</span>
          </h3>
          <p className="font-figtree font-light text-base sm:text-lg md:text-xl lg:text-2xl text-[#050F27] leading-relaxed md:leading-snug">
            {aboutData.reRadescription}
          </p>

          <div className="space-y-2 md:space-y-3 pt-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-figtree text-[#050F27]">
              <span className="font-light">NoBroker RERA Id -</span>{' '}
              <span className="font-bold">{aboutData.noBrokerHeading}</span>
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-figtree text-[#050F27]">
              <span className="font-light">Builder Project RERA Id -</span>{' '}
              <span className="font-bold break-all">{aboutData.builderHeading}</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutProject;
