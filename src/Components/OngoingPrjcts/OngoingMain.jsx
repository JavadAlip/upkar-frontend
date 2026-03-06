// import React, { useEffect, useState } from 'react';
// import { getAllOngoingProjects } from '../../Api';
// import addEnq from '../../assets/Icons/addEnq.png';

// const OngoingMain = () => {
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

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

//   if (loading) {
//     return <div className="text-center py-16">Loading...</div>;
//   }

//   if (!project) {
//     return <div className="text-center py-16">No ongoing project found</div>;
//   }

//   const handleScrollToContact = () => {
//     const section = document.getElementById('get-in-touch');
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="w-full py-16 px-4 font-figtree">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black font-figtree mb-8 sm:mb-12 md:mb-16 lg:mb-[100px] text-left">
//               {project.heading.split(' ')[0]}{' '}
//               <span className="font-semibold">
//                 {project.heading.split(' ').slice(1).join(' ')}
//               </span>
//             </h2>

//             <p className="font-figtree font-extralight text-base sm:text-lg md:text-xl lg:text-[24px] text-primaryText text-center leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-6 sm:mb-8 lg:mb-[40px]">
//               {project.description}
//             </p>

//             <div className="flex justify-center lg:justify-center">
//               <img
//                 src={addEnq}
//                 alt="Ask Enquiry"
//                 onClick={handleScrollToContact}
//                 className="cursor-pointer hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           <div className="relative">
//             <div className="rounded-3xl overflow-hidden ">
//               <img
//                 src={project.mainImage}
//                 alt="Ongoing Project"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default OngoingMain;
import React, { useEffect, useState } from 'react';
import { getAllOngoingProjects } from '../../Api';
import addEnq from '../../assets/Icons/addEnq.png';

const OngoingMain = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const [animatedHeading, setAnimatedHeading] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  // Fetch project
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getAllOngoingProjects();
        if (res.success && res.data.length > 0) {
          setProject(res.data[0]);
        }
      } catch (error) {
        console.error('Error fetching ongoing projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);

  // Animate heading (1 second total)
  useEffect(() => {
    if (!project?.heading) return;

    let index = 0;
    setAnimatedHeading('');

    const duration = 1000; // 1 second
    const intervalTime = duration / project.heading.length;

    const interval = setInterval(() => {
      index++;
      setAnimatedHeading(project.heading.slice(0, index));
      if (index >= project.heading.length) {
        clearInterval(interval);

        // Show description after heading completes
        setTimeout(() => {
          setShowDescription(true);
        }, 100); // small delay for smoothness
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [project]);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!project)
    return <div className="text-center py-16">No ongoing project found</div>;

  const handleScrollToContact = () => {
    const section = document.getElementById('get-in-touch');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full py-16 px-4 font-figtree">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-black mb-8 sm:mb-12 md:mb-16 lg:mb-[100px] text-left">
              {animatedHeading.split(' ')[0]}{' '}
              <span className="font-light">
                {animatedHeading.split(' ').slice(1).join(' ')}
              </span>
            </h2>

            {/* Description */}
            <p
              className={`font-extralight text-base sm:text-lg text-justify md:text-xl lg:text-[24px] text-primaryText leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-6 sm:mb-8 lg:mb-[40px]
                transition-opacity duration-1000 ease-in-out
                ${showDescription ? 'opacity-100' : 'opacity-0'}`}
            >
              {project.description}
            </p>

            {/* Enquiry Button */}
            <div
              className={`flex justify-start transition-opacity duration-1000 ease-in-out ${showDescription ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={addEnq}
                alt="Ask Enquiry"
                onClick={handleScrollToContact}
                className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] border-2 border-gray-300 hover:border-[#2D5C3A]">
            <img
              src={project.mainImage}
              alt="Ongoing Project"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingMain;
