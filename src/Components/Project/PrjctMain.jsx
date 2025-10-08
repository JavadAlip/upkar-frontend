import React, { useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

// Local image imports
import PrjctMain1 from "../../assets/PrjctMain1.png"; 
import PrjctMain2 from "../../assets/PrjctMain2.png"; 
import PrjctMain3 from "../../assets/PrjctMain3.png"; 
import PrjctMain4 from "../../assets/PrjctMain4.png"; 
import PrjctMain5 from "../../assets/PrjctMain5.png"; 
import PrjctMain6 from "../../assets/PrjctMain6.png";

const PrjctMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [PrjctMain1, PrjctMain2, PrjctMain3, PrjctMain4];

  const customerAvatars = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4'
  ];

  return (
    <div className="w-full py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text + Thumbnails */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Elevate Your Lifestyle<br />
              with <span className="font-bold">Upkar Spring woods</span>
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              Join a legacy of excellence that spans over 50 years. At Upkar Developers, we don't just build structures; we shape communities and craft spaces that stand the test of time.
            </p>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    currentImageIndex === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? 'bg-black w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Static Main Image + Contact Icons */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={PrjctMain1} // <-- always fixed
                alt="Upkar Spring Woods Main"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Contact Buttons */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Phone size={24} className="text-gray-800" />
              </button>
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Mail size={24} className="text-gray-800" />
              </button>
              <button className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <svg 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  fill="currentColor"
                  className="text-green-600"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              36000+ Happy<br />
              Customers with us
            </h3>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {customerAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Customer ${index + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">10K ratings (4.8)</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 text-base leading-relaxed">
              Upkar Spring Woods is a BMRDA, approved residential layout, we have taken great care to aesthetically design.
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-800 transition-all duration-300">
                Enquire now
                <div className="bg-white text-black rounded-full p-1">
                  <ArrowRight size={16} />
                </div>
              </button>

              <button className="text-black font-semibold hover:underline">
                More about us!
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Image - Upkar Habitat */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={PrjctMain6}
            alt="Upkar Habitat"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PrjctMain;
