import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Local image imports
import PrjctMain1 from "../../assets/PrjctMain1.png";
import PrjctMain2 from "../../assets/PrjctMain2.png";
import PrjctMain3 from "../../assets/PrjctMain3.png";
import PrjctMain4 from "../../assets/PrjctMain4.png";
import PrjctMain5 from "../../assets/PrjctMain5.png";
import PrjctMain6 from "../../assets/PrjctMain6.png";
import Phone from "../../assets/Icons/Phone.png";
import Mail from "../../assets/Icons/mail.png";
import Whatsapp from "../../assets/Icons/whatsapp.png";
import enqNow from "../../assets/Icons/enqNow.png";
import global from "../../assets/Icons/sustainability.png";

const PrjctMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [PrjctMain1, PrjctMain2, PrjctMain3, PrjctMain4];

  const customerAvatars = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
  ];

  return (
    <div className="w-full py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text + Thumbnails */}
          <div className="space-y-8">
            <h2 className="leading-tight text-[48px] text-black font-figtree font-light">
              Elevate Your Lifestyle with{' '}
              <span className="font-figtree font-semibold">
                Upkar Spring woods
              </span>
            </h2>

            <p className="font-figtree font-light text-[20px] text-upkarText leading-[1.2]">
              Join a legacy of excellence that spans over 50 years. At Upkar Developers, we don't just build structures; we shape communities and craft spaces that stand the test of time.
            </p>


            {/* Thumbnail Grid */}
            <div className="relative">
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${currentImageIndex === index ? '' : ''}`}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* White Gradient Overlay - Only Left and Right Edges */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

            {/* Arrow Navigation */}
            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => setCurrentImageIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Dynamic Main Image + Contact Icons */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[currentImageIndex]}
                alt="Upkar Spring Woods Main"
                className="w-full h-auto object-cover"
              />

              {/* Contact Icons - Top Right */}
              <div className="absolute top-24 -right-4 bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-6">
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Phone} alt="Phone" className="w-6 h-6" />
                </button>
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Mail} alt="Mail" className="w-6 h-6" />
                </button>
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Customer Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          <div className="space-y-6">
            <h3 className="leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-figtree">
              <span className="font-semibold block">
                36000+ Happy
              </span>
              <span className="font-light block">
                Customers with us
              </span>
            </h3>

            <div className="flex items-center gap-48">
              <div className="flex flex-col items-start gap-2">
                <div className="flex -space-x-3">
                  {customerAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Customer ${index + 1}`}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white"
                    />
                  ))}
                   <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#008000] border-2 border-white flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                    <span className="text-white text-2xl font-light">+</span>
                  </div>
                </div>
                <p className="font-satoshi font-normal text-sm sm:text-base text-upkarText">
                  10K ratings (4.8)
                </p>
              </div>

              {/* Globe/World Icon */}
              <div className=" sm:w-32 sm:h-48 rounded-full flex items-center justify-center">
                <img
                  src={global}
                  alt="Sustainability"
                  className="w-16 h-auto object-contain"
                />
              </div>

            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="font-figtree font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-upkarText leading-relaxed">
              Upkar Spring Woods is a BMRDA, approved residential layout, we have taken great care to aesthetically design.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center w-full">
              <img
                src={enqNow}
                alt="Enquire Now"
                className="cursor-pointer w-auto h-10 sm:h-12 md:h-[50px]"
              />

              <button className="font-satoshi font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-upkarText hover:underline transition-all sm:ml-auto md:ml-8 lg:ml-16">
                More about us!
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Global Image */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={PrjctMain6}
            alt="Upkar Global View"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default PrjctMain;