import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import Project3 from "../../assets/Project3.png";
import ProjectBtn1 from "../../assets/Icons/projectBtn1.png";
import ProjectBtn2 from "../../assets/Icons/projectBtn2.png";
import ProjectBtn3 from "../../assets/Icons/projectBtn3.png";


const Projects = () => {

  return (
    <div className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2
          className="mb-5 sm:mb-5 md:mb-10 text-start text-3xl sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Noto Serif JP', serif", color: '#000000' }}
        >
          <span style={{ fontWeight: 700 }}>Our </span>
          <span style={{ fontWeight: 500 }}>Projects</span>
        </h2>

        <div className="space-y-20 hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3
                className="leading-tight"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: '48px', color: '#000000' }}
              >
                Looking Ahead to
                <br />
                <span style={{ fontWeight: 700 }}>Your Future</span>?
              </h3>


              <p
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}
              >
                Investing in an <span className="font-semibold">Ongoing project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2">
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> Early bird pricing
                </li>
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              <div className="mt-4">
                <img
                  src={ProjectBtn1}
                  alt="Explore Ongoing Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Image with Overlapping Text Box */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project1} alt="Ongoing Project" className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-6 -left-56 right-4 bg-white rounded-lg shadow-lg p-6"
                style={{ maxWidth: '77%' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image on Left */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project2} alt="Upcoming Project" className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-6 left-56 translate-x-1/3 bg-white rounded-lg shadow-lg p-6"
                style={{ width: '430px' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>

            {/* Text Content on Right */}
            <div className="space-y-6">
              <h3
                className="leading-tight"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: '48px', color: '#000000' }}
              >
                Watch Your Future <span style={{ fontWeight: 700 }}>Take Shape.</span>
              </h3>

              <p
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}
              >
                Investing in an <span className="font-semibold">Upcoming project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2 pl-80">
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Early bird pricing
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              <div className="mt-4 pl-64">
                <img
                  src={ProjectBtn2}
                  alt="Explore Upcoming Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3
                className="leading-tight"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: '48px', color: '#000000' }}
              >
                Discover Your
                <br />
                <span style={{ fontWeight: 700 }}>Ready-to-Build Plot.</span>
              </h3>


              <p
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}
              >
                Investing in a <span className="font-semibold">Completed project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Early-bird pricing
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              <div className="mt-4">
                <img
                  src={ProjectBtn3}
                  alt="Explore Completed Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project3} alt="Completed Project" className="w-full h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-6 -left-56 right-4 bg-white rounded-lg shadow-lg p-6"
                style={{ maxWidth: '77%' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16 block lg:hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pb-10 sm:pb-12">
            <div className="space-y-6">
              <h3
                className="leading-tight text-3xl sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, color: '#000000' }}
              >
                Looking Ahead to
                <br />
                <span style={{ fontWeight: 700 }}>Your Future</span>?
              </h3>


              <p
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}
              >
                Investing in an <span className="font-semibold">Ongoing project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2">
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> Early bird pricing
                </li>
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }} className="flex items-start">
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              <div className="mt-4">
                <img
                  src={ProjectBtn1}
                  alt="Explore Ongoing Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project1} alt="Ongoing Project" className="w-full h-64 sm:h-80 md:h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] sm:w-[75%] md:w-[65%] bg-white rounded-lg shadow-lg p-3 sm:p-4"
                style={{ maxWidth: '77%' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pb-10 sm:pb-12">
            <div className="space-y-6">
              <h3 className="leading-tight text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, color: '#000000' }}>
                Watch Your Future <span style={{ fontWeight: 700 }}>Take Shape.</span>
              </h3>

              <p style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}>
                Investing in an <span className="font-semibold">Upcoming project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2 sm:pl-16 md:pl-32 lg:pl-64">
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Early bird pricing
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              <div className="mt-4 sm:pl-16 md:pl-32 lg:pl-64">
                <img
                  src={ProjectBtn2}
                  alt="Explore Upcoming Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project2} alt="Upcoming Project" className="w-full h-64 sm:h-80 md:h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] sm:w-[75%] md:w-[65%] bg-white rounded-lg shadow-lg p-3 sm:p-4"
                style={{ maxWidth: '77%' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pb-10 sm:pb-12">
            <div className="space-y-6">
              <h3 className="leading-tight text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, color: '#000000' }}>
                Discover Your
                <br />
                <span style={{ fontWeight: 700 }}>Ready-to-Build Plot.</span>
              </h3>

              <p style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '20px', color: '#000000', lineHeight: '1.2' }}>
                Investing in a <span className="font-semibold">Completed project</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Early-bird pricing
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> Prime location selection
                </li>
                <li className="flex items-start" style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 300, fontSize: '18px', color: '#000000', lineHeight: '1.6' }}>
                  <span className="mr-2">•</span> A future-proof investment
                </li>
              </ul>

              <div className="mt-4">
                <img
                  src={ProjectBtn3}
                  alt="Explore Completed Projects"
                  className="w-45 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={Project3} alt="Completed Project" className="w-full h-64 sm:h-80 md:h-full object-cover" />
              </div>

              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] sm:w-[75%] md:w-[65%] bg-white rounded-lg shadow-lg p-3 sm:p-4"
                style={{ maxWidth: '77%' }}
              >
                <p
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#000000',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;



