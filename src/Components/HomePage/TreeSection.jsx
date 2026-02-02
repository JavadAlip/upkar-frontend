import React, { useEffect, useState } from 'react';
import tree from '../../assets/Tree.png';
import UbkarHabit from '../../assets/UbkarHabit.png';
import { getTreeSections } from '../../Api';

export default function Section() {
  const [section, setSection] = useState(null);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const data = await getTreeSections();
        if (data && data.length > 0) {
          setSection(data[0]);
        }
      } catch (error) {
        console.error('Error fetching tree sections:', error);
      }
    };

    fetchSection();
  }, []);

  if (!section) return null;

  const splitHeading2 = () => {
    if (!section.heading2) return ['', ''];
    const words = section.heading2.trim().split(' ');
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  };

  const [heading2First, heading2Second] = splitHeading2();

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-0 md:gap-6 lg:gap-6">
      {/* Heading Container */}
      <div className="text-center flex flex-col gap-4 sm:gap-4 md:gap-6 lg:gap-8 mt-4 items-center">
        <h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {section.heading1}
        </h2>

        <h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {heading2First}{' '}
          <span className="inline-flex items-center justify-center align-middle">
            <img
              src={tree}
              alt="Tree Icon"
              className="w-20 sm:w-28 lg:w-32 h-auto object-contain"
            />
          </span>{' '}
          {heading2Second}
        </h2>

        <p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#000000] font-[Figtree] leading-relaxed 
             max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[55%] mt-2"
        >
          <span className="font-bold">Upkar Developers</span>{' '}
          {section.description}
        </p>
      </div>

      <div className="relative w-full max-w-lg sm:max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl mt-4 sm:mt-6">
        <img
          src={section.image || UbkarHabit}
          alt="Upkar Habitat"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
