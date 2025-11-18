import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { getAllEvents } from "../../Api"; 
const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getAllEvents();
        setEvents(res.events || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);


  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return { day, month, year };
  };

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-[Figtree] text-[#050F27] mb-8 md:mb-12">
          <span className="font-semibold">Events </span>
          <span className="font-light">at Upkar !</span>
        </h2>

        <div className="space-y-8 md:space-y-12">
          {events.map((event) => {
            const { day, month, year } = formatEventDate(event.eventDate);
            return (
              <div
                key={event._id}
                className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start"
              >
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={event.eventImage}
                      alt={event.eventTitle}
                      className="w-full h-40 md:h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300"
                    />

                    {/* Date Box */}
                    <div className="absolute bottom-2 right-2 md:bottom-[-10px] md:right-[-80px] bg-white px-4 md:px-8 py-3 md:py-6 rounded-lg md:rounded-2xl shadow-md">
                      <p className="text-center leading-tight font-[Figtree] text-lg md:text-2xl lg:text-4xl font-light text-[#050F27]">
                        {day} {month}
                        <br />
                        <span className="font-semibold text-lg md:text-2xl lg:text-4xl text-[#050F27]">
                          {year}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div
                  className="w-full lg:w-2/3 space-y-2 md:space-y-4 border border-[#DADADA] lg:border-l-0 p-3 md:p-4 lg:pl-32 rounded lg:rounded-none"
                  style={{ backgroundColor: "#fff" }}
                >
                  <h3
                    className="font-medium text-lg md:text-2xl lg:text-3xl"
                    style={{
                      color: "#050F27",
                      fontFamily: "Figtree",
                      fontWeight: 500,
                    }}
                  >
                    {event.eventTitle}
                  </h3>

                  <p
                    className="leading-relaxed text-sm md:text-base lg:text-2xl"
                    style={{
                      color: "#050F27",
                      fontFamily: "Figtree",
                      fontWeight: 300,
                    }}
                  >
                    {event.eventDescription}
                  </p>

                  <div className="flex items-start gap-2 md:gap-3 pt-2 md:pt-0">
                    <MapPin
                      size={16}
                      className="flex-shrink-0 mt-1 md:mt-1"
                      style={{ color: "#666666" }}
                    />
                    <p
                      className="text-sm md:text-base lg:text-2xl"
                      style={{
                        color: "#666666",
                        fontFamily: "Figtree",
                        fontWeight: 500,
                      }}
                    >
                      {event.eventLocation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {events.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No events found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
