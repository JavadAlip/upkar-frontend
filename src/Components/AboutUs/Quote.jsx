import React from "react";
import QuoteUp from "../../assets/Icons/VectorUp.png";
import QuoteDown from "../../assets/Icons/VectorDown.png";


const Quote = () => {

    return (
        <div className="bg-[#050F27] text-white py-24 px-6 sm:px-10 md:px-16 font-[Figtree] relative overflow-hidden">

            <div className="absolute top-16 left-6 sm:top-20 sm:left-12 md:top-24 md:left-20 flex gap-2 opacity-70 pointer-events-none">
                <img src={QuoteUp} alt="quote up" className="w-5 sm:w-7 md:w-9 lg:w-10" />
                <img src={QuoteUp} alt="quote up" className="w-5 sm:w-7 md:w-9 lg:w-10" />
            </div>

            <div className="absolute top-16 right-6 sm:top-20 sm:right-12 md:top-24 md:right-20 flex gap-2 opacity-70 pointer-events-none">
                <img src={QuoteDown} alt="quote down" className="w-5 sm:w-7 md:w-9 lg:w-10" />
                <img src={QuoteDown} alt="quote down" className="w-5 sm:w-7 md:w-9 lg:w-10" />
            </div>

            <div className="max-w-5xl mx-auto text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed text-center space-y-4 px-2 relative z-10 sm:mt-16 md:mt-20">
                <p>
                    Since four decades, Upkar Group of Companies is a pioneer in the property and real estate business of Bangalore. Under the able guidance and mentorship of Mr. K.H Khan, Upkar Developers has grown from strength to strength.
                </p>
                <p>
                    He started his career as an LIC agent which gave him an opportunity to develop a deep sense of understanding of the industry. With his diligence and determination, he forayed into the real estate segment. He emerged as a qualified member of the chairman’s club for his quality work. He further strengthened his affiliation towards the real estate segment by taking up distribution of all major brands of cement. For five consecutive years, Upkar was conferred with the ‘Best Seller Award’ for the state of Karnataka and Goa.
                </p>
                <p>
                    In 1974 when Mr. Khan decided set foot in the real estate segment in Bangalore, it was still at its nascent stage. His main aim was to offering quality housing projects at affordable prices. As he established Upkar, he not just focussed to reengineering housing in India, but also laid a strong emphasis on environment management, in order to offer a project that contributed generously to the welfare of the society. With the ongoing support of a dynamic workforce, Upkar is set to take bigger strides in the near future under the leadership of its visionary and chairman.
                </p>
            </div>

            <div className="max-w-5xl mx-auto mt-10 text-right px-2 relative z-10">
                <h3 className="font-semibold text-white text-base sm:text-lg md:text-xl">
                    Mr. K.H Khan
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                    Chairman & Managing Director
                </p>
            </div>
        </div>
    );
};

export default Quote;
