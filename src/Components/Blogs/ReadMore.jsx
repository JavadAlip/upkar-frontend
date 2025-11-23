import React from 'react';

const ReadMore = () => {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      title: "Investing in Plots in Bangalore: A Financial Guide for Long-Term Growth."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      title: "Upkar's Commitment to Green Building: Our Sustainable Practices."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      title: "A Lifestyle of Comfort: World-Class Amenities"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      title: "Investing in Plots in Bangalore: A Financial Guide for Long-Term Growth."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
      title: "Upkar's Commitment to Green Building: Our Sustainable Practices."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
      title: "A Lifestyle of Comfort: World-Class Amenities"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-[48px] font-figtree font-semibold mb-10">
        Read <span className="font-normal">more</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="group cursor-pointer"
          >
            <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-[20px] font-medium leading-snug font-figtree transition-colors">
              {article.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadMore;