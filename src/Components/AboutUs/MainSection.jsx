import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { getAllAboutMain } from '../../Api';
import { Link } from 'react-router-dom';

const MainSection = () => {
  const [data, setData] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllAboutMain();
        console.log('ABOUT MAIN RESPONSE ===>', res);
        if (res?.aboutMainList?.length > 0) {
          setData(res.aboutMainList[0]);
        }
      } catch (err) {
        console.error('Error fetching About Main:', err);
      }
    };
    fetchData();
  }, []);

  const images = data?.mainImages || [];

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!data) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full bg-white px-4 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 font-[Figtree]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light mb-6 leading-tight">
            {data.heading?.split('|')[0]} <br />
            <span className="font-bold">{data.heading?.split('|')[1]}</span>
          </h2>

          <Link
            to="/ongoing-projects"
            className="inline-flex items-center bg-black rounded-full shadow-md mb-10 "
          >
            <span className="px-6 py-3 text-white font-medium">
              Explore Projects
            </span>
            <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#071334]">
              <ArrowRight className="text-[#071334]" />
            </span>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            <div
              className="rounded-2xl overflow-hidden relative h-52 shadow-md"
              style={{
                backgroundImage: `url(${data.plotImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-4 left-4 text-white">
                <div className="text-4xl font-bold">{data.plotNumber}</div>
                <div>{data.plotTitle}</div>
              </div>
            </div>

            <div
              className="rounded-2xl overflow-hidden relative h-52 shadow-md"
              style={{
                backgroundImage: `url(${data.acresImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-4 left-4 text-white">
                <div className="text-4xl font-bold">{data.acresNumber}</div>
                <div>{data.acresTitle}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="rounded-[2rem] overflow-hidden relative 
                h-[280px] sm:h-[350px] md:h-[450px] lg:h-[560px]"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover rounded-[2rem]"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="pt-8 sm:pt-10 
                max-w-full sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] 
                mx-auto 
                px-2 sm:px-0"
      >
        <p
          className="mb-4 
                text-sm sm:text-base md:text-lg 
                leading-relaxed 
                text-justify sm:text-center"
        >
          {data.paragraph1}
        </p>

        <p
          className="mb-4 
                text-sm sm:text-base md:text-lg 
                leading-relaxed 
                text-justify sm:text-center"
        >
          {data.paragraph2}
        </p>

        <p
          className="text-sm sm:text-base md:text-lg 
                leading-relaxed 
                text-justify sm:text-center"
        >
          {data.paragraph3}
        </p>
      </div>
    </div>
  );
};

export default MainSection;
