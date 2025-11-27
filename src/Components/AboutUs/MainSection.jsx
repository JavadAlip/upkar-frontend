import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getAllAboutMain } from "../../Api";

const MainSection = () => {
  const [data, setData] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllAboutMain();
        console.log("ABOUT MAIN RESPONSE ===>", res);
        if (res?.aboutMainList?.length > 0) {
          setData(res.aboutMainList[0]);
        }
      } catch (err) {
        console.error("Error fetching About Main:", err);
      }
    };
    fetchData();
  }, []);

  if (!data) return <div className="text-center py-10">Loading...</div>;

  const images = data.mainImages || [];

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <div className="flex flex-col items-center text-center">
          {/* Dynamic Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light mb-6 leading-tight">
            {data.heading?.split("|")[0]} <br />
            <span className="font-bold">{data.heading?.split("|")[1]}</span>
          </h2>

          {/* Explore Button */}
          <button
            aria-label="Explore Projects"
            className="inline-flex items-center bg-[#050F27] rounded-full shadow-md mb-10 transition-colors hover:bg-[#0b2444]"
          >
            <span className="px-6 py-3 text-white text-sm sm:text-base font-medium">
              Explore Projects
            </span>
            <span className="relative -mr-1 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#071334]">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#071334]" />
            </span>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            {/* Plot Card */}
            <div
              className="rounded-2xl overflow-hidden relative h-44 sm:h-52 shadow-md"
              style={{
                backgroundImage: `url(${data.plotImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-4 left-4 z-10 text-left text-white">
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  {data.plotNumber}
                </div>
                <div className="text-sm sm:text-base">{data.plotTitle}</div>
              </div>
            </div>

            {/* Acres Card */}
            <div
              className="rounded-2xl overflow-hidden relative h-44 sm:h-52 shadow-md"
              style={{
                backgroundImage: `url(${data.acresImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-4 left-4 z-10 text-left text-white">
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  {data.acresNumber}
                </div>
                <div className="text-sm sm:text-base">{data.acresTitle}</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (SLIDER) */}
        <div className="relative w-full">
          <div className="rounded-[2rem] overflow-hidden shadow-lg relative h-[420px] sm:h-[500px] lg:h-[560px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
            ))}

            {/* Contact Icons */}
            <div className="absolute top-10 right-0 py-3 w-14 sm:w-16 bg-white flex flex-col items-center gap-1 rounded-tl-[0.8rem] rounded-bl-[0.8rem] shadow-md z-20">
              <button className="p-2 sm:p-3 rounded-full">
                <LocalPhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#050F27]" />
              </button>
              <button className="p-2 sm:p-3 rounded-full">
                <EmailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#050F27]" />
              </button>
              <button className="p-2 sm:p-3 rounded-full">
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#050F27]" />
              </button>
            </div>

            {/* Slider Arrows */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4 z-30">
              <button
                onClick={prevSlide}
                className="bg-white text-gray-800 p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#050F27] text-white p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Paragraphs */}
      <div className="mx-auto max-w-[95%] lg:max-w-[85%] text-center pt-10">
        <p className="text-[#050F27] text-lg lg:text-[24px] font-light leading-relaxed mb-4">
          {data.paragraph1}
        </p>

        <p className="text-[#050F27] text-lg lg:text-[24px] font-light leading-relaxed mb-4">
          {data.paragraph2}
        </p>

        <p className="text-[#050F27] text-lg lg:text-[24px] font-light leading-relaxed">
          {data.paragraph3}
        </p>
      </div>
    </div>
  );
};

export default MainSection;
