import React from 'react';

const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      title: "The Advantages of Gated Community Living: Why Upkar's Townships Are the Ideal Choice?",
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
      title: "The Foundation of Trust: Expert Planning & Design",
      description: "Very great home begins with a solid plan. Our team of seasoned architects and engineers works with you to understand"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
      title: "Timely Delivery: Your Dream, Realized on Schedule",
      description: "We understand the anticipation of moving into your new home. Our project management is designed for efficiency and accountability."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
      title: "A Lifestyle of Comfort: World-Class Amenities",
      description: "Beyond the walls of your home, our developments are planned as vibrant, self-sufficient communities."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-[48px] font-semibold font-figtree mb-8">
        Popular <span className="font-light">Articles</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Article - Left Side */}
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
            <img 
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <h3 className="text-[20px] font-figtree font-medium text-center px-4">
            {articles[0].title}
          </h3>
        </div>

        {/* Right Side Articles */}
        <div className="space-y-6">
          {articles.slice(1).map((article) => (
            <div 
              key={article.id}
              className="flex flex-col sm:flex-row gap-4 group cursor-pointer"
            >
              <div className="w-full sm:w-32 h-64 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="text-[20px] font-figtree font-semibold mb-2 transition-colors">
                  {article.title}
                </h4>
                <p className="text-[20px] font-figtree font-normal text-[#050F27] leading-normal">
                  {article.description}
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
