import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import BannerTable from "../Components/HomePage/Banner";
import VisionMission from "../Components/HomePage/VisionMission";
import Projects from "../Components/HomePage/Projects";
import Certification from "../Components/HomePage/Certification";
import QAs from "../Components/HomePage/QAs";
import Awards from "../Components/HomePage/Awards";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("banner"); 

  const renderSection = () => {
    switch (activeSection) {
      case "banner":
        return <BannerTable />;
      case "vision":
        return <VisionMission />;
      case "projects":
        return <Projects/>;
      case "certification":
        return <Certification/>;
      case "qna":
        return <QAs/>;
      case "awards":
        return <Awards/>;
      default:
        return <div>Welcome Admin</div>;
    }
  };

  

  return (
    <div>
      {/* Fixed Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-64 right-0 h-16 z-10">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="ml-64 mt-16 p-6 overflow-auto h-screen bg-gray-100">
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
