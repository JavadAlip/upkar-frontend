import React from 'react';
import { Shield, Users, CheckCircle } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Assurance"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Safety"
        }
    ];

    return (
        <section className=" py-12 px-4 sm:px-6 lg:px-8">
            {/* Features Heading */}
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
                Features
            </h2>
            <div className="max-w-7xl mx-auto">


                {/* Features Container */}
                <div className="bg-black rounded-2xl p-6 sm:p-8 lg:p-12">
                    {/* Description and Image Row */}
                    <div className="flex flex-col lg:flex-row gap-8 items-start mb-8 lg:mb-12">
                        {/* Text Description */}
                        <div className="flex-1">
                            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                                Upkar Spring Woods is a BMRDA,<br className="hidden sm:block" />
                                approved residential layout.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="flex-1 w-full lg:w-auto">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
                                    alt="Upkar Habitat"
                                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Feature Icons Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 bg-[#0a1628] rounded-xl hover:bg-[#162844] transition-colors duration-300"
                            >
                                <div className="mb-4 text-blue-400">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white text-lg sm:text-xl font-medium">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;