import React, { useState } from 'react';

const WhyJoinUs = () => {
    const [formData, setFormData] = useState({
        service: '',
        name: '',
        email: '',
        phone: ''
    });

    const reasons = [
        {
            id: 1,
            title: 'Be a part of a 50-year legacy',
            description: 'Join one of Bangalore\'s most trusted real estate companies.'
        },
        {
            id: 2,
            title: 'Shape the city\'s future',
            description: 'Work on landmark projects that are actively shaping the skyline.'
        },
        {
            id: 3,
            title: 'Learn and grow professionally',
            description: 'Our diverse projects in both land development and construction offer.'
        },
        {
            id: 4,
            title: 'Enjoy a unique business model',
            description: 'Gain experience in a company that expertly combines land development'
        },
        {
            id: 5,
            title: 'Work on prime locations',
            description: 'Our projects are strategically located in and around Bangalore'
        },
        {
            id: 6,
            title: 'Learn and grow professionally',
            description: 'Our diverse projects in both land development and construction offer.'
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Why Join Us Section */}
                <h2 className="mb-12">
                    <span className="font-[Figtree] font-semibold text-[48px] text-black">
                        Why{" "}
                    </span>
                    <span className="font-[Figtree] font-light text-[48px] text-black">
                        Join us?
                    </span>
                </h2>

                <div className="text-center">


                    {/* Reasons Grid - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((reason) => (
                            <div
                                key={reason.id}
                                className="space-y-3 text-center"
                            >
                                {/* Title */}
                                <h3 className="font-[Figtree] font-semibold text-[20px] text-[#050F27]">
                                    {reason.title}
                                </h3>

                                {/* Description */}
                                <p className="font-[Figtree] font-light text-[20px] text-[#050F27] leading-[1.2]">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyJoinUs;
