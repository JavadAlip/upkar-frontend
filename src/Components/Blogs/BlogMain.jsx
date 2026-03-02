import React, { useEffect, useState } from 'react';
import { getAllBlogMain } from '../../Api';
import addEnq from '../../assets/Icons/fullArticle.png';

const BlogMain = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllBlogMain();
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setBlogData(res.data[0]);
        }
      } catch (error) {
        console.log('Error fetching blog main data:', error);
      }
    };

    fetchData();
  }, []);

  if (!blogData) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const handleScrollToContact = () => {
    const section = document.getElementById('top-articles');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black text-center font-figtree mb-8 sm:mb-12 md:mb-16 lg:mb-[100px] text-left">
              <span className="font-semibold">{blogData.heading}</span>
            </h2>

            <p className="font-figtree font-medium text-base sm:text-lg md:text-xl lg:text-[24px] text-primaryText text-center leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-6 sm:mb-8 lg:mb-[40px]">
              {blogData.heading1}
            </p>

            <p className="font-figtree font-extralight text-base sm:text-lg md:text-xl lg:text-[24px] text-primaryText text-center leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-6 sm:mb-8 lg:mb-[40px]">
              {blogData.description}
            </p>
            <div className="flex justify-center">
              <img
                src={addEnq}
                alt="Ask Enquiry"
                onClick={handleScrollToContact}
                className=" w-32  sm:w-40 md:w-48 lg:w-56  xl:w-60 cursor-pointer hover:scale-105transition-transform duration-300"
              />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={blogData.mainImage}
                alt="Blog Main"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
