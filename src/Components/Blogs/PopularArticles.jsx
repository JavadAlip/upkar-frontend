import React, { useEffect, useState } from 'react';
import { getAllArticles } from '../../Api';

const PopularArticles = () => {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await getAllArticles();
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setArticleData(res.data[0]);
        }
      } catch (error) {
        console.log('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  if (!articleData) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <div id="top-articles" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-[48px] font-semibold font-figtree mb-8">
        Popular <span className="font-light">Articles</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
            <img
              src={articleData.mainImage}
              alt="Featured Article"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <h3 className="text-[20px] font-figtree font-medium text-center px-4">
            {articleData.mainDescription}
          </h3>
        </div>

        <div className="space-y-6">
          {articleData.subItems?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 group cursor-pointer"
            >
              <div className="w-full sm:w-32 h-64 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                <img
                  src={item.subImage}
                  alt={item.subHeading}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h4 className="text-[20px] font-figtree font-semibold mb-2 transition-colors">
                  {item.subHeading}
                </h4>

                <p className="text-[20px] font-figtree font-normal text-[#000000] leading-normal">
                  {item.subDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;
