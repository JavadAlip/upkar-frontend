import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import JoinUs from '../../assets/Icons/joinUs.png';
import { getCareerMainAPI } from '../../Api';

const CareerMain = () => {
  const [careerDescription, setCareerDescription] = useState('');

  useEffect(() => {
    const fetchCareerDescription = async () => {
      try {
        const res = await getCareerMainAPI();
        if (res.success && res.data.length > 0) {
          setCareerDescription(res.data[0].careerDescription);
        }
      } catch (error) {
        console.error('Failed to fetch career description:', error);
      }
    };
    fetchCareerDescription();
  }, []);

  return (
    <div className="w-full bg-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-[48px]">
            <span className="font-[Figtree] font-light text-black">
              Careers at{' '}
            </span>
            <span className="font-[Figtree] font-semibold text-black">
              Upkar Developers
            </span>
          </h2>

          <p className="font-[Figtree] font-light text-base md:text-lg lg:text-[20px] text-[#000000] leading-[1.4] max-w-4xl mx-auto px-2 whitespace-pre-line">
            {careerDescription || 'Loading career description...'}
          </p>

          <div className="flex justify-center pt-2">
            <a href="/your-link" className="inline-block">
              <img
                src={JoinUs}
                alt="Join Us"
                className="w-32 md:w-40 lg:w-auto cursor-pointer hover:opacity-80 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerMain;
