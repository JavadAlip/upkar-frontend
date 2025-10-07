import React from 'react';
import { ArrowRight } from 'lucide-react';
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Looking Ahead to Your Future?",
      type: "Ongoing project",
      description: "Investing in an Ongoing project offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.",
      features: [
        "Early bird pricing",
        "Prime location selection",
        "A future-proof investment"
      ],
      image: Project1, // Updated to imported image
      buttonText: "Explore Ongoing Projects",
      reverse: false
    },
    {
      id: 2,
      title: "Watch Your Future Take Shape.",
      type: "Upcoming project",
      description: "Investing in an Upcoming project offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.",
      features: [
        "Early bird pricing",
        "Prime location selection",
        "A future-proof investment"
      ],
      image: Project2, // Updated to imported image
      buttonText: "Explore Upcoming Projects",
      reverse: true
    },
    {
      id: 3,
      title: "Discover Your Ready-to-Build Plot.",
      type: "Completed project",
      description: "Investing in an Completed project offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.",
      features: [
        "Early-bird pricing",
        "Prime location selection",
        "A future-proof investment"
      ],
      image: Project3, // Updated to imported image
      buttonText: "Explore Completed Projects",
      reverse: false
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
          Our Projects
        </h2>

        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                project.reverse ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${project.reverse ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-700 text-base leading-relaxed">
                  Investing in an <span className="font-semibold">{project.type}</span> offers the unique opportunity to secure your ideal plot in a prime location. Get ahead of the market and be the first to choose from the best options available.
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 text-base flex items-start">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="text-gray-700 text-base leading-relaxed">
                  Aim is to consistently deliver exceptional homes and build lasting relationships based on trust, quality, and a commitment to customer satisfaction.
                </p>

                {/* Button */}
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center gap-3 hover:bg-gray-800 transition-all duration-300">
                  {project.buttonText}
                  <div className="bg-white text-black rounded-full p-1">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </div>

              {/* Image */}
              <div className={`${project.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
