import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Quote = () => {
    return (
        <div className="bg-[#050F27] text-white py-20 px-6 font-[Figtree] relative overflow-hidden">
            {/* Quote Icons (Top Left & Top Right) */}
            <div className="absolute top-10 left-20 text-white opacity-90">
                <FormatQuoteIcon style={{ fontSize: "70px", transform: "scaleX(-1)" }} />
            </div>
            <div className="absolute top-10 right-20 text-white opacity-90">
                <FormatQuoteIcon style={{ fontSize: "70px" }} />
            </div>

            {/* Main Text */}
            <div className="max-w-5xl mx-auto text-gray-100 text-base sm:text-lg leading-relaxed text-center space-y-4">
                <p>
                    Since four decades, Upkar Group of Companies is a pioneer in the
                    property and real estate business of Bangalore. Under the able guidance
                    and mentorship of Mr. K.H Khan, Upkar Developers has grown from strength
                    to strength.
                </p>
                <p>
                    He started his career as an LIC agent which gave him an opportunity to
                    develop a deep sense of understanding of the industry. With his diligence
                    and determination, he forayed into the real estate segment. He emerged as
                    a qualified member of the chairman’s club for his quality work. He further
                    strengthened his affiliation towards the real estate segment by taking up
                    distribution of all major brands of cement. For five consecutive years,
                    Upkar was conferred with the ‘Best Seller Award’ for the state of
                    Karnataka and Goa.
                </p>
                <p>
                    In 1974 when Mr. Khan decided set foot in the real estate segment in
                    Bangalore, it was still at its nascent stage. His main aim was to offering
                    quality housing projects at affordable prices. As he established Upkar, he
                    not just focussed to reengineering housing in India, but also laid a
                    strong emphasis on environment management, in order to offer a project
                    that contributed generously to the welfare of the society. With the
                    ongoing support of a dynamic workforce, Upkar is set to take bigger strides
                    in the near future under the leadership of its visionary and chairman.
                </p>
            </div>

            {/* Signature (Right-Aligned) */}
            <div className="max-w-5xl mx-auto mt-10 text-right">
                <h3 className="font-semibold text-white text-lg sm:text-xl">
                    Mr. K.H Khan
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                    Chairman & Managing Director
                </p>
            </div>
        </div>
    );
};

export default Quote;
