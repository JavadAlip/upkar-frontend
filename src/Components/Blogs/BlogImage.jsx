import React, { useEffect, useState } from 'react';
import { getAllBlogMain } from '../../Api';

const BlogImage = () => {
  const [scale, setScale] = useState(1.6);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getAllBlogMain();

        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setBlogData(res.data[0]);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlog();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const progress = Math.min(scrollY / sectionHeight, 1);

      const newScale = 1.4 - progress * 0.4;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!blogData) return null;

  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* IMAGE */}
      <img
        src={blogData.mainImage}
        alt="Blog Banner"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.4s ease-out',
        }}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 font-figtree text-center max-w-3xl px-4">
        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
          {blogData.heading?.split(' ')[0]}{' '}
          <span className="font-semibold">
            {blogData.heading?.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-sm font-figtree sm:text-base md:text-lg lg:text-xl leading-relaxed">
          {blogData.description}
        </p>
      </div>
    </section>
  );
};

export default BlogImage;
