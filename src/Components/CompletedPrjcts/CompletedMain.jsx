import React, { useEffect, useState } from "react";
import { getAllCompletedProjects } from "../../Api";
import { ArrowRight } from "lucide-react";
import addEnq from "../../assets/Icons/addEnq.png";
import Phone from "../../assets/Icons/Phone.png";
import Mail from "../../assets/Icons/mail.png";
import Whatsapp from "../../assets/Icons/whatsapp.png";

const CompletedMain = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getAllCompletedProjects();
        if (res.success && res.data.length > 0) {
          setProject(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching completed projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  if (!project) {
    return <div className="text-center py-16">No project found</div>;
  }

  return (
    <div className="w-full py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black font-figtree mb-8 sm:mb-12 md:mb-16 lg:mb-[100px] text-left">
              {project.heading.split(" ")[0]}{" "}
              <span className="font-semibold">
                {project.heading.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="font-figtree font-extralight text-base sm:text-lg md:text-xl lg:text-[24px] text-primaryText text-center leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-6 sm:mb-8 lg:mb-[40px]">
              {project.description}
            </p>

            <div className="flex justify-center lg:justify-center">
              <img
                src={addEnq}
                alt="Ask Enquiry"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={project.mainImage}
                alt="Completed Projects"
                className="w-full h-auto object-cover"
              />

              <div className="absolute top-24 -right-4 bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-6">
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Phone} alt="Phone" className="w-6 h-6" />
                </button>
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Mail} alt="Mail" className="w-6 h-6" />
                </button>
                <button className="hover:scale-110 transition-transform duration-300">
                  <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedMain;
