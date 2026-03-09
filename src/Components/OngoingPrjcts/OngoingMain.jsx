// import React, { useEffect, useState } from 'react';
// import { getAllOngoingProjects } from '../../Api';
// import addEnq from '../../assets/Icons/addEnq.png';

// const OngoingMain = () => {
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [animatedHeading, setAnimatedHeading] = useState('');
//   const [showDescription, setShowDescription] = useState(false);

//   // Fetch project
//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const res = await getAllOngoingProjects();
//         if (res.success && res.data.length > 0) {
//           setProject(res.data[0]);
//         }
//       } catch (error) {
//         console.error('Error fetching ongoing projects:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProject();
//   }, []);

//   // Animate heading (1 second total)
//   useEffect(() => {
//     if (!project?.heading) return;

//     let index = 0;
//     setAnimatedHeading('');

//     const duration = 1000; // 1 second
//     const intervalTime = duration / project.heading.length;

//     const interval = setInterval(() => {
//       index++;
//       setAnimatedHeading(project.heading.slice(0, index));
//       if (index >= project.heading.length) {
//         clearInterval(interval);

//         // Show description after heading completes
//         setTimeout(() => {
//           setShowDescription(true);
//         }, 100); // small delay for smoothness
//       }
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, [project]);

//   if (loading) return <div className="text-center py-16">Loading...</div>;
//   if (!project)
//     return <div className="text-center py-16">No ongoing project found</div>;

//   const handleScrollToContact = () => {
//     const section = document.getElementById('get-in-touch');
//     if (section) section.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="w-full py-16 px-4 font-figtree">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Text Section */}
//           <div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-black mb-8 sm:mb-12 md:mb-16 lg:mb-[100px] text-left">
//               {animatedHeading.split(' ')[0]}{' '}
//               <span className="font-semibold text-[#2D5C3A]">
//                 {animatedHeading.split(' ').slice(1).join(' ')}
//               </span>
//             </h2>

//             {/* Description */}
//             <p
//               className={`font-extralight text-base sm:text-lg text-justify md:text-xl lg:text-xl text-primaryText mb-6 sm:mb-8 lg:mb-[40px]
//                 transition-opacity duration-1000 ease-in-out
//                 ${showDescription ? 'opacity-100' : 'opacity-0'}`}
//             >
//               {project.description}
//             </p>

//             {/* Enquiry Button */}
//             <div
//               className={`flex justify-start transition-opacity duration-1000 ease-in-out ${showDescription ? 'opacity-100' : 'opacity-0'}`}
//             >
//               <img
//                 src={addEnq}
//                 alt="Ask Enquiry"
//                 onClick={handleScrollToContact}
//                 className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] border-2 border-gray-300 hover:border-[#2D5C3A]">
//             <img
//               src={project.mainImage}
//               alt="Ongoing Project"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OngoingMain;

import React, { useEffect, useState } from 'react';
import { getAllOngoingProjects } from '../../Api';
import addEnq from '../../assets/Icons/addEnq2.png';

const OngoingMain = () => {
  const [scale, setScale] = useState(1.6);
  const [projectHeading, setProjectHeading] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState('');
  const [showContent, setShowContent] = useState(false);

  // Fetch ongoing project
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getAllOngoingProjects();

        if (res.success && res.data.length > 0) {
          const project = res.data[0];

          setProjectHeading(project.heading);
          setProjectDescription(project.description);
          setProjectImage(project.mainImage);
        }
      } catch (error) {
        console.error('Error fetching ongoing projects:', error);
      }
    };

    fetchProject();
  }, []);

  // Fade animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Scroll zoom effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const progress = Math.min(scrollY / sectionHeight, 1);

      const newScale = 1.4 - progress * 0.4;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const section = document.getElementById('get-in-touch');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      {projectImage && (
        <img
          src={projectImage}
          alt="Ongoing Project Banner"
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.4s ease-out',
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-3xl text-center px-6 space-y-6
        transition-all duration-1000 ease-out
        ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Heading */}
        <h1 className="text-[28px] font-figtree md:text-[48px] font-light">
          {projectHeading.split(' ')[0]}{' '}
          <span className="font-semibold ">
            {projectHeading.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        {/* Description */}
        <p className="text-base font-figtree md:text-xl lg:text-xl">
          {projectDescription || 'Loading project description...'}
        </p>

        {/* Enquiry Button */}
        <div className="flex justify-center pt-2">
          <img
            src={addEnq}
            alt="Ask Enquiry"
            onClick={handleScrollToContact}
            className="w-[120px] md:w-[150px] cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default OngoingMain;
