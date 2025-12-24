// import React, { useEffect, useState } from 'react';
// import Sidebar from '../Components/Sidebar';
// import Navbar from '../Components/Navbar';
// import BannerTable from '../Components/HomePage/Banner';
// import VisionMission from '../Components/HomePage/VisionMission';
// import Projects from '../Components/HomePage/Projects';
// import Certification from '../Components/HomePage/Certification';
// import QAs from '../Components/HomePage/QAs';
// import Awards from '../Components/HomePage/Awards';
// import ProjectMain from '../Components/ProjectPage/ProjectMain';
// import Feature from '../Components/ProjectPage/Feature';
// import Amenity from '../Components/ProjectPage/Amenity';
// import PlotLayout from '../Components/ProjectPage/PlotLayout';
// import ProjectImages from '../Components/ProjectPage/ProjectImages';
// import AboutProject from '../Components/ProjectPage/AboutProject';
// import AboutMain from '../Components/AboutPage/AboutMain';
// import Quote from '../Components/AboutPage/Quote';
// import Team from '../Components/AboutPage/Team';
// import EventMain from '../Components/EventPage/EventMain';
// import CareerMain from '../Components/CareerPage/CareerMain';
// import WhyJoinMain from '../Components/CareerPage/WhyJoinMain';
// import CareerImages from '../Components/CareerPage/CareerImages';
// import CompletedMain from '../Components/CompletedPrjctPage/CompletedMain';
// import OurValues1 from '../Components/CompletedPrjctPage/OurValues';
// import ProjectLists1 from '../Components/CompletedPrjctPage/ProjectLists';
// import BlogMain from '../Components/BlogPage/BlogMain';
// import PopularArticles from '../Components/BlogPage/PopularArticles';
// import Readmore from '../Components/BlogPage/Readmore';
// import UpcomingMain from '../Components/UpcomingPrjctPage/UpcomingMain';
// import ProjectLists2 from '../Components/UpcomingPrjctPage/ProjectLists';
// import OurValues2 from '../Components/UpcomingPrjctPage/OurValues';
// import OngoingMain from '../Components/OngoingPrjctPage/OngoingMain';
// import ProjectLists from '../Components/OngoingPrjctPage/ProjectLists';
// import OurValues from '../Components/OngoingPrjctPage/OurValues';
// import QuoteCertificate from '../Components/HomePage/Quote';
// import ValueImages from '../Components/CompletedPrjctPage/ValueImages';
// import TreeSection from '../Components/HomePage/Tree';
// import AboutImages from '../Components/AboutPage/AboutImages';
// import EnquiryList from '../Components/Enquiries/EnquiryList';
// import Dashboard from '../Components/Dashboard/Dashboard';
// import Project from '../Components/Projects/ProjectsList';
// import Categories from '../Components/Categories/Categories';
// import CategoryDetails from '../Components/Categories/categoryDetails';

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState('banner');

//   useEffect(() => {
//     window.history.pushState(null, '', window.location.href);

//     const handlePopState = () => {
//       window.history.pushState(null, '', window.location.href);
//     };

//     window.addEventListener('popstate', handlePopState);

//     return () => {
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, []);

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'banner':
//         return <BannerTable />;
//       case 'vision':
//         return <VisionMission />;
//       case 'projects':
//         return <Projects />;
//       case 'certification':
//         return <Certification />;
//       case 'qna':
//         return <QAs />;
//       case 'awards':
//         return <Awards />;
//       case 'projectmain':
//         return <ProjectMain />;
//       case 'feature':
//         return <Feature />;
//       case 'amenity':
//         return <Amenity />;
//       case 'plotlayout':
//         return <PlotLayout />;
//       case 'projectimages':
//         return <ProjectImages />;
//       case 'aboutproject':
//         return <AboutProject />;
//       case 'aboutmain':
//         return <AboutMain />;
//       case 'quote':
//         return <Quote />;
//       case 'team':
//         return <Team />;
//       case 'eventmain':
//         return <EventMain />;
//       case 'careermain':
//         return <CareerMain />;
//       case 'whyjoin':
//         return <WhyJoinMain />;
//       case 'careerimages':
//         return <CareerImages />;
//       case 'completedmain':
//         return <CompletedMain />;
//       case 'ourvalues':
//         return <OurValues1 />;
//       case 'projectlists':
//         return <ProjectLists1 />;
//       case 'blogsmain':
//         return <BlogMain />;
//       case 'populararticles':
//         return <PopularArticles />;
//       case 'readmore':
//         return <Readmore />;
//       case 'upcomingmain':
//         return <UpcomingMain />;
//       case 'upcomingprojectlists':
//         return <ProjectLists2 />;
//       case 'upcomingourvalues':
//         return <OurValues2 />;
//       case 'ongoingmain':
//         return <OngoingMain />;
//       case 'ongoingprojectlists':
//         return <ProjectLists />;
//       case 'ongoingourvalues':
//         return <OurValues />;
//       case 'quotescertificate':
//         return <QuoteCertificate />;
//       case 'valueimages':
//         return <ValueImages />;
//       case 'tree':
//         return <TreeSection />;
//       case 'aboutimages':
//         return <AboutImages />;
//       case 'enquiry':
//         return <EnquiryList />;
//       case 'dashboard':
//         return <Dashboard />;
//       case 'projectslist':
//         return <Project />;
//       case 'category':
//         return <Category />;
//       default:
//         return <div>Welcome Admin</div>;
//     }
//   };

//   return (
//     <div>
//       <Sidebar setActiveSection={setActiveSection} />

//       <div className="fixed top-0 sm:left-64 left-0 right-0 h-16 z-10">
//         <Navbar />
//       </div>

//       <div className="sm:ml-64 ml-0 mt-16 p-6 overflow-auto min-h-screen bg-gray-100">
//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* Layout */
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

/* Home Page */
import BannerTable from '../Components/HomePage/Banner';
import VisionMission from '../Components/HomePage/VisionMission';
import Projects from '../Components/HomePage/Projects';
import Certification from '../Components/HomePage/Certification';
import QAs from '../Components/HomePage/QAs';
import Awards from '../Components/HomePage/Awards';
import QuoteCertificate from '../Components/HomePage/Quote';
import TreeSection from '../Components/HomePage/Tree';

/* Project Page */
import ProjectMain from '../Components/ProjectPage/ProjectMain';
import Feature from '../Components/ProjectPage/Feature';
import Amenity from '../Components/ProjectPage/Amenity';
import PlotLayout from '../Components/ProjectPage/PlotLayout';
import ProjectImages from '../Components/ProjectPage/ProjectImages';
import AboutProject from '../Components/ProjectPage/AboutProject';

/* About Page */
import AboutMain from '../Components/AboutPage/AboutMain';
import Quote from '../Components/AboutPage/Quote';
import Team from '../Components/AboutPage/Team';
import AboutImages from '../Components/AboutPage/AboutImages';

/* Event / Career */
import EventMain from '../Components/EventPage/EventMain';
import CareerMain from '../Components/CareerPage/CareerMain';
import WhyJoinMain from '../Components/CareerPage/WhyJoinMain';
import CareerImages from '../Components/CareerPage/CareerImages';

/* Completed / Upcoming / Ongoing */
import CompletedMain from '../Components/CompletedPrjctPage/CompletedMain';
import OurValues1 from '../Components/CompletedPrjctPage/OurValues';
import ProjectLists1 from '../Components/CompletedPrjctPage/ProjectLists';
import ValueImages from '../Components/CompletedPrjctPage/ValueImages';

import UpcomingMain from '../Components/UpcomingPrjctPage/UpcomingMain';
import ProjectLists2 from '../Components/UpcomingPrjctPage/ProjectLists';
import OurValues2 from '../Components/UpcomingPrjctPage/OurValues';

import OngoingMain from '../Components/OngoingPrjctPage/OngoingMain';
import ProjectLists from '../Components/OngoingPrjctPage/ProjectLists';
import OurValues from '../Components/OngoingPrjctPage/OurValues';

/* Blog */
import BlogMain from '../Components/BlogPage/BlogMain';
import PopularArticles from '../Components/BlogPage/PopularArticles';
import Readmore from '../Components/BlogPage/Readmore';

/* Others */
import EnquiryList from '../Components/Enquiries/EnquiryList';
import Dashboard from '../Components/Dashboard/Dashboard';
import Project from '../Components/Projects/ProjectsList';
import Categories from '../Components/Categories/Categories';
import CategoryDetails from '../Components/Categories/categoryDetails';

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Navbar */}
        <div className="fixed top-0 left-0 sm:left-64 right-0 h-16 z-10">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="sm:ml-64 mt-16 p-6">
          <Routes>
            {/* Default */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* Dashboard */}
            <Route path="dashboard" element={<Dashboard />} />

            {/* Home */}
            <Route path="banner" element={<BannerTable />} />
            <Route path="vision" element={<VisionMission />} />
            <Route path="home-projects" element={<Projects />} />
            <Route path="certification" element={<Certification />} />
            <Route path="qna" element={<QAs />} />
            <Route path="awards" element={<Awards />} />
            <Route path="quote-certificate" element={<QuoteCertificate />} />
            <Route path="tree" element={<TreeSection />} />

            {/* Project */}
            <Route path="project-main" element={<ProjectMain />} />
            <Route path="feature" element={<Feature />} />
            <Route path="amenity" element={<Amenity />} />
            <Route path="plot-layout" element={<PlotLayout />} />
            <Route path="project-images" element={<ProjectImages />} />
            <Route path="about-project" element={<AboutProject />} />

            {/* About */}
            <Route path="about-main" element={<AboutMain />} />
            <Route path="quote" element={<Quote />} />
            <Route path="team" element={<Team />} />
            <Route path="about-images" element={<AboutImages />} />

            {/* Event / Career */}
            <Route path="events" element={<EventMain />} />
            <Route path="career-main" element={<CareerMain />} />
            <Route path="why-join" element={<WhyJoinMain />} />
            <Route path="career-images" element={<CareerImages />} />

            {/* Completed */}
            <Route path="completed-main" element={<CompletedMain />} />
            <Route path="completed-values" element={<OurValues1 />} />
            <Route path="completed-projects" element={<ProjectLists1 />} />
            <Route path="value-images" element={<ValueImages />} />

            {/* Upcoming */}
            <Route path="upcoming-main" element={<UpcomingMain />} />
            <Route path="upcoming-projects" element={<ProjectLists2 />} />
            <Route path="upcoming-values" element={<OurValues2 />} />

            {/* Ongoing */}
            <Route path="ongoing-main" element={<OngoingMain />} />
            <Route path="ongoing-projects" element={<ProjectLists />} />
            <Route path="ongoing-values" element={<OurValues />} />

            {/* Blog */}
            <Route path="blogs" element={<BlogMain />} />
            <Route path="popular-articles" element={<PopularArticles />} />
            <Route path="read-more" element={<Readmore />} />

            {/* Others */}
            <Route path="enquiries" element={<EnquiryList />} />
            <Route path="projects-list" element={<Project />} />
            <Route path="categories" element={<Categories />} />
            <Route path="category/:id" element={<CategoryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
