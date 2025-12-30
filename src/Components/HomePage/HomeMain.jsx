import React, { useState, useEffect } from 'react';
import { getBanners } from '../../Api';
import Connect from '../../assets/Icons/connect.png';
import Phone from '../../assets/Icons/Phone.png';
import Mail from '../../assets/Icons/mail.png';
import Whatsapp from '../../assets/Icons/whatsapp.png';
import AboveIcon from '../../assets/aboveIcon.png';
import tree from '../../assets/Tree.png';

const HomeMain = () => {
  const [banner, setBanner] = useState(null);
  const token = localStorage.getItem('adminToken');

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

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="relative w-full group cursor-pointer mb-6 lg:mb-12">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          {/* Only render image if it exists */}
          {banner?.image && (
            <img
              src={banner.image}
              alt={banner?.title || 'Home Main'}
              className="w-full h-full object-cover transition-transform duration-300 rounded-[30px]"
            />
          )}

          <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-[30px]"></div>

          <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-24">
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 sm:mb-6"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              <span className="font-semibold">
                {banner?.title?.split('\n')[0]}
              </span>
              <br />
              <span className="font-bold">{banner?.title?.split('\n')[1]}</span>
            </h1>

            <p
              className="text-white max-w-md sm:max-w-lg md:max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl mb-6 hidden sm:block"
              style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 400 }}
            >
              {banner?.subtitle || ''}
            </p>

            <div className="flex items-start">
              <img
                src={Connect}
                alt="Connect"
                className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-8 hidden sm:block">
            <div className="bg-white px-4 sm:px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
              <p className="text-black text-[10px] sm:text-[12px] md:text-[14px] font-normal">
                RERA & BMRDA Approved Projects
              </p>
              <img
                src={AboveIcon}
                alt="Above Icon"
                className="w-6 sm:w-8 md:w-10 h-auto"
              />
            </div>
          </div>

          <div className="md:hidden absolute bottom-3 right-2">
            <img
              src={Connect}
              alt="Connect"
              className="w-24 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="absolute top-6 sm:top-11 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg flex flex-col gap-3 sm:gap-6">
            <button className="hover:scale-110 transition-transform duration-300">
              <img src={Phone} alt="Phone" className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button className="hover:scale-110 transition-transform duration-300">
              <img src={Mail} alt="Mail" className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button className="hover:scale-110 transition-transform duration-300">
              <img
                src={Whatsapp}
                alt="WhatsApp"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
