import React, { useEffect, useState } from "react";
import { getAllReadMore } from "../../Api";

const ReadMore = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchReadMore();
  }, []);

  const fetchReadMore = async () => {
    try {
      const res = await getAllReadMore();
      setArticles(res.data);
    } catch (error) {
      console.error("Error fetching readmore:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-[48px] font-figtree font-semibold mb-10">
        Read <span className="font-normal">more</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
              <img
                src={article.mainImage}
                alt={article.description}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-[20px] font-medium leading-snug font-figtree transition-colors">
              {article.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadMore;
