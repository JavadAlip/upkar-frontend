import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import About1 from "../../assets/AboutMain1.png";
import About2 from "../../assets/AboutMain2.png";
import About3 from "../../assets/AboutMain3.png";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const MainSection = () => {

  const images = [About1, About2, About3];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };


  return (
    <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ---------- LEFT SECTION ---------- */}
          <div className="flex flex-col items-center text-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light mb-6 leading-tight">
              Shaping a 50+ years legacy of <br />
              <span className="font-bold">quality & trust !</span>
            </h2>

            {/* Button */}
            <button
              aria-label="Explore Projects"
              className="inline-flex items-center bg-[#050F27] rounded-full shadow-md mb-10 transition-colors hover:bg-[#0b2444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#071334]"
            >
              {/* Left label */}
              <span className="px-6 py-3 text-white text-sm sm:text-base font-medium">
                Explore Projects
              </span>

              {/* White circular action overlapping the pill */}
              <span className="relative -mr-1 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#071334]">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#071334]" />
              </span>
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
              <div
                className="rounded-2xl overflow-hidden relative h-44 sm:h-52 shadow-md"
                style={{
                  backgroundImage: `url(${About2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4 z-10 text-left text-white">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">30,000</div>
                  <div className="text-sm sm:text-base">Upcoming plots</div>
                </div>
              </div>
              <div
                className="rounded-2xl overflow-hidden relative h-44 sm:h-52 shadow-md"
                style={{
                  backgroundImage: `url(${About3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4 z-10 text-left text-white">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">1100+</div>
                  <div className="text-sm sm:text-base">Acres of Land Bank</div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT SECTION ---------- */}
          <div className="relative w-full">
            <div className="rounded-[2rem] overflow-hidden shadow-lg relative h-[420px] sm:h-[500px] lg:h-[560px]">
              {/* Slides */}
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                </div>
              ))}

              {/* Floating Contact Icons */}
              <div className="absolute top-10 right-0 h-content py-3 w-14 sm:w-16 bg-white flex flex-col items-center justify-center gap-1 rounded-tl-[0.8rem] rounded-bl-[0.8rem] shadow-md z-20">
                <button className="p-2 sm:p-3 rounded-full cursor-pointer">
                  <LocalPhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#050F27]" />
                </button>
                <button className="p-2 sm:p-3 rounded-full cursor-pointer">
                  <EmailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#050F27]" />
                </button>
                <button className="p-2 sm:p-3 rounded-full cursor-pointer">
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#050F27]" />
                </button>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
                <button
                  onClick={prevSlide}
                  className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-[#050F27] text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mx-auto max-w-[95%] lg:max-w-[85%] text-center pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <p className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed mb-4">
            Upkar Developers, a leading real estate company in Bangalore, has an extraordinary legacy spanning over 50 years since its foundation in 1974. Started by <span className="font-semibold">Mr. K.H. Khan</span>, the company has been a pioneering force behind the city's rapidly changing skyline.
          </p>
          <p className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed mb-4">
            Our clear vision is to offer innovative real estate services and create an environment of peace, tranquility, and comfort. We have successfully completed <span className="font-semibold">34 projects</span>, bringing the joy of housing to over <span className="font-semibold">36,000 families</span> across Bangalore.
          </p>
          <p className="text-[#050F27] text-base sm:text-lg md:text-xl lg:text-[24px] font-[Figtree] font-light leading-snug sm:leading-relaxed">
            Upkar's portfolio includes gated communities, urban townships, villas, apartments, and residential plots. Our projects are conceptualized by leading architects and engineers. We are recognized for our uncompromising business ethics, timeless values, and customer-centric approach, which ensure timely delivery and state-of-art infrastructure. We look forward to establishing our presence in cities across India.
          </p>
        </div>
    </div>
  );
};

export default MainSection;
