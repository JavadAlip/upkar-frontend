// import React, { useState, useEffect } from 'react';
// import { MapPin, ChevronRight, ChevronLeft, X } from 'lucide-react';
// import { getAllEvents } from '../../Api';

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [currentIndexes, setCurrentIndexes] = useState({});
//   const [modalData, setModalData] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await getAllEvents();
//         setEvents(res.events || []);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     if (modalData) return;

//     const interval = setInterval(() => {
//       setCurrentIndexes((prev) => {
//         const updated = { ...prev };

//         events.forEach((event) => {
//           if (event.eventImages?.length > 1) {
//             const current = prev[event._id] || 0;
//             updated[event._id] = (current + 1) % event.eventImages.length;
//           }
//         });

//         return updated;
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [events, modalData]);

//   useEffect(() => {
//     if (modalData) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [modalData]);

//   const formatEventDate = (dateString) => {
//     const date = new Date(dateString);
//     return {
//       day: date.getDate(),
//       month: date.toLocaleString('default', { month: 'short' }),
//       year: date.getFullYear(),
//     };
//   };

//   const openModal = (images, index) => {
//     setModalData({ images, index });
//   };

//   const closeModal = () => {
//     setModalData(null);
//   };

//   const changeModalImage = (direction) => {
//     setModalData((prev) => {
//       const newIndex =
//         direction === 'next'
//           ? (prev.index + 1) % prev.images.length
//           : (prev.index - 1 + prev.images.length) % prev.images.length;

//       return { ...prev, index: newIndex };
//     });
//   };

//   return (
//     <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl md:text-4xl lg:text-5xl font-[Figtree] text-[#000000] mb-8 md:mb-12">
//           <span className="font-semibold">Events </span>
//           <span className="font-light">at Upkar !</span>
//         </h2>

//         <div className="space-y-8 md:space-y-12">
//           {events.map((event) => {
//             const { day, month, year } = formatEventDate(event.eventDate);
//             const images = event.eventImages || [];
//             const currentIndex = currentIndexes[event._id] || 0;

//             return (
//               <div
//                 key={event._id}
//                 className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start"
//               >
//                 <div className="w-full lg:w-1/3 flex-shrink-0">
//                   <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <img
//                       src={images[currentIndex]}
//                       alt={event.eventTitle}
//                       onClick={() => openModal(images, currentIndex)}
//                       className="w-full h-40 md:h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
//                     />

//                     <div className="absolute bottom-2 right-2 md:bottom-[-10px] md:right-[-80px] bg-white px-4 md:px-8 py-3 md:py-6 rounded-lg md:rounded-2xl shadow-md">
//                       <p className="text-center leading-tight font-[Figtree] text-lg md:text-2xl lg:text-4xl font-light text-[#000000]">
//                         {day} {month}
//                         <br />
//                         <span className="font-semibold text-lg md:text-2xl lg:text-4xl text-[#000000]">
//                           {year}
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-full lg:w-2/3 space-y-2 md:space-y-4 border border-[#DADADA] lg:border-l-0 p-3 md:p-4 lg:pl-32 rounded lg:rounded-none bg-white">
//                   <h3 className="font-semibold font-figtree text-[26px] md:text-[32px] lg:text-[32px">
//                     {event.eventTitle}
//                   </h3>

//                   <p className="leading-normal font-figtree text-[18px] md:text-[24px] lg:text-[24px]">
//                     {event.eventDescription}
//                   </p>

//                   <div className="flex items-start gap-2 md:gap-3 pt-2 md:pt-0">
//                     <MapPin
//                       size={16}
//                       className="flex-shrink-0 mt-2"
//                       style={{ color: '#666666' }}
//                     />
//                     <p className="text-[16px] md:text-[22px] lg:text-[22px] text-[#666666] font-medium">
//                       {event.eventLocation}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           {events.length === 0 && (
//             <p className="text-center text-gray-500 py-10">No events found.</p>
//           )}
//         </div>
//       </div>

//       {modalData && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="relative inline-block">
//             <img
//               src={modalData.images[modalData.index]}
//               alt="Preview"
//               className="max-h-[80vh] w-auto max-w-[90vw] object-contain rounded-lg"
//             />

//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <button
//               onClick={() => changeModalImage('prev')}
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </button>

//             <button
//               onClick={() => changeModalImage('next')}
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition"
//             >
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { getAllEvents } from '../../Api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [currentIndexes, setCurrentIndexes] = useState({});
  const [modalData, setModalData] = useState(null);
  const [showDetails, setShowDetails] = useState({});
  const [countedDates, setCountedDates] = useState({});
  const [visibleEvents, setVisibleEvents] = useState({});

  const eventRefs = useRef({});

  // Fetch Events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getAllEvents();
        setEvents(res.events || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  // Auto Image Slider
  useEffect(() => {
    if (modalData) return;
    const interval = setInterval(() => {
      setCurrentIndexes((prev) => {
        const updated = { ...prev };
        events.forEach((event) => {
          if (event.eventImages?.length > 1) {
            const current = prev[event._id] || 0;
            updated[event._id] = (current + 1) % event.eventImages.length;
          }
        });
        return updated;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [events, modalData]);

  // Intersection Observer for fade-in + slide-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleEvents((prev) => ({ ...prev, [id]: true }));
            setShowDetails((prev) => ({ ...prev, [id]: true })); // Show immediately
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    Object.values(eventRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [events]);

  // Date counter animation (kept intact)
  useEffect(() => {
    if (!events.length) return;

    events.forEach((event) => {
      const date = new Date(event.eventDate);
      const targetDay = date.getDate();
      const targetYear = date.getFullYear();
      const duration = 2000;
      const startTime = performance.now();

      const animateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCountedDates((prev) => ({
          ...prev,
          [event._id]: {
            day: Math.floor(targetDay * easeOut),
            year: Math.floor(targetYear * easeOut),
          },
        }));

        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        } else {
          setCountedDates((prev) => ({
            ...prev,
            [event._id]: { day: targetDay, year: targetYear },
          }));
        }
      };

      requestAnimationFrame(animateCounter);
    });
  }, [events]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalData ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [modalData]);

  // Floating animation for date badge
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatDateBox {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0px); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return { month: date.toLocaleString('default', { month: 'short' }) };
  };

  const openModal = (images, index) => setModalData({ images, index });
  const closeModal = () => setModalData(null);
  const changeModalImage = (direction) => {
    setModalData((prev) => {
      const newIndex =
        direction === 'next'
          ? (prev.index + 1) % prev.images.length
          : (prev.index - 1 + prev.images.length) % prev.images.length;
      return { ...prev, index: newIndex };
    });
  };

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-2xl md:text-4xl lg:text-5xl font-figtree mb-8 md:mb-12">
          <span className="font-semibold">Events </span>
          <span className="font-light">at Upkar !</span>
        </h2> */}
        <div className="flex items-center justify-center mb-12">
          <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 mr-6"></div>

          <h2 className="text-3xl md:text-4xl font-figtree text-center whitespace-nowrap">
            <span className="font-normal">Events at</span>{' '}
            <span className="font-semibold text-[#2D5C3A]">Upkar</span>
          </h2>

          <div className="hidden lg:block flex-1 h-[1px] bg-gray-300 ml-6"></div>
        </div>

        <div className="space-y-12">
          {events.map((event) => {
            const { month } = formatEventDate(event.eventDate);
            const images = event.eventImages || [];
            const currentIndex = currentIndexes[event._id] || 0;

            return (
              <div
                key={event._id}
                data-id={event._id}
                ref={(el) => (eventRefs.current[event._id] = el)}
                className={`flex flex-col lg:flex-row gap-8 items-start
                  transition-all duration-1000 ease-out
                  ${visibleEvents[event._id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/3">
                  <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={images[currentIndex]}
                      alt={event.eventTitle}
                      onClick={() => openModal(images, currentIndex)}
                      className="w-full h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    {/* Floating Date Badge */}
                    <div
                      className="absolute bottom-2 right-2 md:bottom-[-10px] md:right-[-10px] bg-[#2D5C3A] text-white px-6 py-4 rounded-2xl shadow-md z-10"
                      style={{
                        animation: 'floatDateBox 4s ease-in-out infinite',
                        minWidth: '70px',
                      }}
                    >
                      <p className="text-center font-figtree text-xl lg:text-2xl md:text-2xl font-light leading-none">
                        {countedDates[event._id]?.day || 0} {month}
                        <br />
                        <span className="font-semibold">
                          {countedDates[event._id]?.year || 0}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-full lg:w-2/3 space-y-4 border border-[#DADADA] lg:border-l-0 p-4 lg:pl-32 bg-white
                    transition-all duration-1000 ease-out
                    ${showDetails[event._id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <h3 className="font-semibold font-figtree text-[26px] md:text-[32px]">
                    {event.eventTitle}
                  </h3>

                  <p className="text-base md:text-xl lg:text-xl">
                    {event.eventDescription}
                  </p>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1 text-gray-600" />
                    <p className="text-base md:text-xl lg:text-xl text-gray-600 font-medium">
                      {event.eventLocation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={modalData.images[modalData.index]}
              alt="Preview"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black/40 text-white p-2 rounded-full"
            >
              <X size={20} />
            </button>
            <button
              onClick={() => changeModalImage('prev')}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => changeModalImage('next')}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
