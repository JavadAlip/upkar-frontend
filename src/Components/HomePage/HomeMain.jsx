import React, { useState, useEffect } from 'react';
import { getBanners } from '../../Api';
import { useNavigate } from 'react-router-dom';
import AboveIcon from '../../assets/aboveIcon.png';
import { ArrowRight } from 'lucide-react';
import BannerVideo from '../../assets/upkar.mp4';

const HomeMain = () => {
  const [banner, setBanner] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animatedTitle1, setAnimatedTitle1] = useState('');
  const [animatedTitle2, setAnimatedTitle2] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [animatedSubtitle, setAnimatedSubtitle] = useState('');
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBanners(token);
        if (data && data.length > 0) setBanner(data[0]);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanner();
  }, [token]);

  useEffect(() => {
    if (!banner?.images || banner.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === banner.images.length - 1 ? 0 : prev + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [banner]);

  useEffect(() => {
    if (!banner?.title) return;

    const titleLines = banner.title.split('\n');
    const line1 = titleLines[0] || '';
    const line2 = titleLines[1] || '';
    const subtitle = banner.subtitle || '';

    animateText(line1, setAnimatedTitle1, 1000, () => {
      animateText(line2, setAnimatedTitle2, 1000, () => {
        setAnimatedSubtitle(subtitle);
        setShowSubtitle(true);
      });
    });
  }, [banner]);

  const animateText = (text, setter, duration, callback) => {
    let index = 0;
    setter('');
    const intervalTime = duration / text.length;

    const interval = setInterval(() => {
      index++;
      setter(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, intervalTime);
  };

  const currentImage = banner?.images?.[currentImageIndex];

  return (
    <div className="w-full">
      <div className="relative w-full group cursor-pointer">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {/* Slideshow Images */}
          {/* {banner?.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`banner-${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
                ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))} */}
          {/* Banner Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={BannerVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-24">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 sm:mb-6 font-figtree">
              <span className="font-semibold">{animatedTitle1}</span>
              <br />
              <span className="font-bold">{animatedTitle2}</span>
            </h1>

            <p
              className={`block text-white max-w-[90%] sm:max-w-lg md:max-w-xl text-base sm:text-lg md:text-2xl lg:text-2xl mb-4 sm:mb-6
                font-figtree font-medium transition-opacity duration-1000 ease-in-out
                ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}
            >
              {animatedSubtitle}
            </p>

            <div className="hidden sm:flex items-start">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center bg-[#ffffff] rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              >
                <span className="px-6 py-3 text-black text-sm sm:text-base font-medium">
                  Connect us
                </span>

                <span className="relative -mr-1 w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center border-2 border-[#ffffff]">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffffff]" />
                </span>
              </button>
            </div>
          </div>

          {/* Dot Indicators */}
          {/* {banner?.images?.length > 1 && (
            <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {banner.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300
                    ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                />
              ))}
            </div>
          )} */}

          <div className="absolute bottom-2 sm:bottom-10 right-2 sm:right-8">
            <div className="bg-white px-2 py-1 sm:px-6 sm:py-2 rounded-full sm:rounded-full shadow-lg flex items-center gap-1 sm:gap-2">
              <p className="text-black text-[10px] sm:text-xs md:text-base lg:text-base font-figtree font-medium leading-tight">
                RERA & BMRDA Approved Projects
              </p>

              <img
                src={AboveIcon}
                alt="Above Icon"
                className="w-3 sm:w-8 md:w-10 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
