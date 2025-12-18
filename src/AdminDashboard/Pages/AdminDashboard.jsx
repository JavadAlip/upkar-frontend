import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import BannerTable from '../Components/HomePage/Banner';
import VisionMission from '../Components/HomePage/VisionMission';
import Projects from '../Components/HomePage/Projects';
import Certification from '../Components/HomePage/Certification';
import QAs from '../Components/HomePage/QAs';
import Awards from '../Components/HomePage/Awards';
import ProjectMain from '../Components/ProjectPage/ProjectMain';
import Feature from '../Components/ProjectPage/Feature';
import Amenity from '../Components/ProjectPage/Amenity';
import PlotLayout from '../Components/ProjectPage/PlotLayout';
import ProjectImages from '../Components/ProjectPage/ProjectImages';
import AboutProject from '../Components/ProjectPage/AboutProject';
import AboutMain from '../Components/AboutPage/AboutMain';
import Quote from '../Components/AboutPage/Quote';
import Team from '../Components/AboutPage/Team';
import EventMain from '../Components/EventPage/EventMain';
import CareerMain from '../Components/CareerPage/CareerMain';
import WhyJoinMain from '../Components/CareerPage/WhyJoinMain';
import CareerImages from '../Components/CareerPage/CareerImages';
import CompletedMain from '../Components/CompletedPrjctPage/CompletedMain';
import OurValues1 from '../Components/CompletedPrjctPage/OurValues';
import ProjectLists1 from '../Components/CompletedPrjctPage/ProjectLists';
import BlogMain from '../Components/BlogPage/BlogMain';
import PopularArticles from '../Components/BlogPage/PopularArticles';
import Readmore from '../Components/BlogPage/Readmore';
import UpcomingMain from '../Components/UpcomingPrjctPage/UpcomingMain';
import ProjectLists2 from '../Components/UpcomingPrjctPage/ProjectLists';
import OurValues2 from '../Components/UpcomingPrjctPage/OurValues';
import OngoingMain from '../Components/OngoingPrjctPage/OngoingMain';
import ProjectLists from '../Components/OngoingPrjctPage/ProjectLists';
import OurValues from '../Components/OngoingPrjctPage/OurValues';
import QuoteCertificate from '../Components/HomePage/Quote';
import ValueImages from '../Components/CompletedPrjctPage/ValueImages';
import TreeSection from '../Components/HomePage/Tree';
import AboutImages from '../Components/AboutPage/AboutImages';
import EnquiryList from '../Components/Enquiries/EnquiryList';
import Dashboard from '../Components/Dashboard/Dashboard';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('banner');

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'banner':
        return <BannerTable />;
      case 'vision':
        return <VisionMission />;
      case 'projects':
        return <Projects />;
      case 'certification':
        return <Certification />;
      case 'qna':
        return <QAs />;
      case 'awards':
        return <Awards />;
      case 'projectmain':
        return <ProjectMain />;
      case 'feature':
        return <Feature />;
      case 'amenity':
        return <Amenity />;
      case 'plotlayout':
        return <PlotLayout />;
      case 'projectimages':
        return <ProjectImages />;
      case 'aboutproject':
        return <AboutProject />;
      case 'aboutmain':
        return <AboutMain />;
      case 'quote':
        return <Quote />;
      case 'team':
        return <Team />;
      case 'eventmain':
        return <EventMain />;
      case 'careermain':
        return <CareerMain />;
      case 'whyjoin':
        return <WhyJoinMain />;
      case 'careerimages':
        return <CareerImages />;
      case 'completedmain':
        return <CompletedMain />;
      case 'ourvalues':
        return <OurValues1 />;
      case 'projectlists':
        return <ProjectLists1 />;
      case 'blogsmain':
        return <BlogMain />;
      case 'populararticles':
        return <PopularArticles />;
      case 'readmore':
        return <Readmore />;
      case 'upcomingmain':
        return <UpcomingMain />;
      case 'upcomingprojectlists':
        return <ProjectLists2 />;
      case 'upcomingourvalues':
        return <OurValues2 />;
      case 'ongoingmain':
        return <OngoingMain />;
      case 'ongoingprojectlists':
        return <ProjectLists />;
      case 'ongoingourvalues':
        return <OurValues />;
      case 'quotescertificate':
        return <QuoteCertificate />;
      case 'valueimages':
        return <ValueImages />;
      case 'tree':
        return <TreeSection />;
      case 'aboutimages':
        return <AboutImages />;
      case 'enquiry':
        return <EnquiryList />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <div>Welcome Admin</div>;
    }
  };

  return (
    <div>
      <Sidebar setActiveSection={setActiveSection} />

      <div className="fixed top-0 sm:left-64 left-0 right-0 h-16 z-10">
        <Navbar />
      </div>

      <div className="sm:ml-64 ml-0 mt-16 p-6 overflow-auto min-h-screen bg-gray-100">
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
