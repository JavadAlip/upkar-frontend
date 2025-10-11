// import React from 'react';
// import { MapPin } from 'lucide-react';
// import event1 from "../../assets/event1.png";
// import event2 from "../../assets/event2.png";
// import event3 from "../../assets/event3.png";

// const Events = () => {
//     const events = [
//         {
//             id: 1,
//             title: 'Property Expo - Palace Ground',
//             date: '8 Dec 2018',
//             description:
//                 'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.',
//             location: 'Upkar Orchid , 70 Feet Road , Bangalore',
//             image:event1,
//         },
//         {
//             id: 2,
//             title: 'Durga Pooja event at Gold Coin',
//             date: '28 Sep 2018',
//             description:
//                 'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.',
//             location: 'Upkar Orchid , 70 Feet Road , Bangalore',
//             image:event2,
//         },
//         {
//             id: 3,
//             title: 'Property Expo - Palace Ground',
//             date: '8 Dec 2018',
//             description:
//                 'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.',
//             location: 'Upkar Orchid , 70 Feet Road , Bangalore',
//             image:event3,
//         },
//         {
//             id: 4,
//             title: 'Property Expo News 18 - Rajajinagar',
//             date: '8 Dec 2018',
//             description:
//                 'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.',
//             location: 'Upkar Orchid , 70 Feet Road , Bangalore',
//             image:event3,
//         },
//     ];

//     return (
//         <div className="w-full bg-white py-16 px-4">
//             <div className="max-w-6xl mx-auto">
//                 {/* Section Title */}
//                 <h2 className="text-[48px] font-[Figtree] text-[#050F27] mb-12">
//                     <span className="font-semibold">Events </span>
//                     <span className="font-light">at Upkar !</span>
//                 </h2>


//                 {/* Events List */}
//                 <div className="space-y-12">
//                     {events.map((event) => (
//                         <div
//                             key={event.id}
//                             className="flex flex-col lg:flex-row gap-8 items-start"
//                         >
//                             {/* Left Side - Image */}
//                             <div className="w-full lg:w-1/3 flex-shrink-0">
//                                 <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
//                                     <img
//                                         src={event.image}
//                                         alt={event.title}
//                                         className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
//                                     />

//                                     {/* Date Box */}
//                                     <div className="absolute bottom-[-10px] right-[-80px] bg-white px-8 py-6 rounded-2xl shadow-md">
//                                         <p className="text-center leading-tight font-[Figtree] text-[36px] font-light text-[#050F27]">
//                                             8 Dec
//                                             <br />
//                                             <span className="font-semibold text-[36px] text-[#050F27]">
//                                                 2018
//                                             </span>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Right Side - Content */}
//                             <div
//                                 className="w-full lg:w-2/3 space-y-4 border border-[#DADADA] border-l-0 p-4 pl-32"
//                                 style={{
//                                     marginLeft: '-35px',
//                                     backgroundColor: '#fff',
//                                 }}
//                             >
//                                 {/* Title */}
//                                 <h3
//                                     className="font-medium"
//                                     style={{
//                                         color: '#050F27',
//                                         fontFamily: 'Figtree',
//                                         fontSize: '32px',
//                                         fontWeight: 500,
//                                     }}
//                                 >
//                                     {event.title}
//                                 </h3>

//                                 {/* Description */}
//                                 <p
//                                     className="leading-[1.2]"
//                                     style={{
//                                         color: '#050F27',
//                                         fontFamily: 'Figtree',
//                                         fontSize: '24px',
//                                         fontWeight: 300,
//                                     }}
//                                 >
//                                     {event.description}
//                                 </p>

//                                 {/* Location */}
//                                 <div className="flex items-start gap-3">
//                                     <MapPin
//                                         size={20}
//                                         className="flex-shrink-0 mt-1"
//                                         style={{ color: '#666666' }}
//                                     />
//                                     <p
//                                         style={{
//                                             color: '#666666',
//                                             fontFamily: 'Figtree',
//                                             fontSize: '24px',
//                                             fontWeight: 500,
//                                         }}
//                                     >
//                                         {event.location}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Events;


import React from 'react';
import { MapPin } from 'lucide-react';
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.png";
import event3 from "../../assets/event3.png";

const Events = () => {
    const events = [
        {
            id: 1,
            title: 'Property Expo - Palace Ground',
            date: '8 Dec 2018',
            description:
                'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.',
            location: 'Upkar Orchid , 70 Feet Road , Bangalore',
            image: event1,
        },
        {
            id: 2,
            title: 'Durga Pooja event at Gold Coin',
            date: '28 Sep 2018',
            description:
                'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.',
            location: 'Upkar Orchid , 70 Feet Road , Bangalore',
            image: event2,
        },
        {
            id: 3,
            title: 'Property Expo - Palace Ground',
            date: '8 Dec 2018',
            description:
                'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.',
            location: 'Upkar Orchid , 70 Feet Road , Bangalore',
            image: event3,
        },
        {
            id: 4,
            title: 'Property Expo News 18 - Rajajinagar',
            date: '8 Dec 2018',
            description:
                'Yes, all of our projects are RERA-approved and comply with all legal and regulatory standards to ensure a safe and secure investment for our customers.',
            location: 'Upkar Orchid , 70 Feet Road , Bangalore',
            image: event3,
        },
    ];

    return (
        <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Title - Responsive */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-[Figtree] text-[#050F27] mb-8 md:mb-12">
                    <span className="font-semibold">Events </span>
                    <span className="font-light">at Upkar !</span>
                </h2>

                {/* Events List */}
                <div className="space-y-8 md:space-y-12">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start"
                        >
                            {/* Left Side - Image */}
                            <div className="w-full lg:w-1/3 flex-shrink-0">
                                <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-40 md:h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300 "
                                    />

                                    {/* Date Box - Responsive */}
                                    <div className="absolute bottom-2 right-2 md:bottom-[-10px] md:right-[-80px] bg-white px-4 md:px-8 py-3 md:py-6 rounded-lg md:rounded-2xl shadow-md">
                                        <p className="text-center leading-tight font-[Figtree] text-lg md:text-2xl lg:text-4xl font-light text-[#050F27]">
                                            8 Dec
                                            <br />
                                            <span className="font-semibold text-lg md:text-2xl lg:text-4xl text-[#050F27]">
                                                2018
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div
                                className="w-full lg:w-2/3 space-y-2 md:space-y-4 border border-[#DADADA] lg:border-l-0 p-3 md:p-4 lg:pl-32 rounded lg:rounded-none"
                                style={{
                                    marginLeft: '0',
                                    marginTop: '0',
                                    backgroundColor: '#fff',
                                }}
                            >
                                {/* Title - Responsive */}
                                <h3
                                    className="font-medium text-lg md:text-2xl lg:text-3xl"
                                    style={{
                                        color: '#050F27',
                                        fontFamily: 'Figtree',
                                        fontWeight: 500,
                                    }}
                                >
                                    {event.title}
                                </h3>

                                {/* Description - Responsive */}
                                <p
                                    className="leading-relaxed text-sm md:text-base lg:text-2xl"
                                    style={{
                                        color: '#050F27',
                                        fontFamily: 'Figtree',
                                        fontWeight: 300,
                                    }}
                                >
                                    {event.description}
                                </p>

                                {/* Location - Responsive */}
                                <div className="flex items-start gap-2 md:gap-3 pt-2 md:pt-0">
                                    <MapPin
                                        size={16}
                                        className="flex-shrink-0 mt-1 md:mt-1"
                                        style={{ color: '#666666' }}
                                    />
                                    <p
                                        className="text-sm md:text-base lg:text-2xl"
                                        style={{
                                            color: '#666666',
                                            fontFamily: 'Figtree',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {event.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;