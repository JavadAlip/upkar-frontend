import HomeMain from '../Components/HomePage/HomeMain';
import VisionMission from '../Components/HomePage/VisionMission';
import Projects from '../Components/HomePage/Projects';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import CoreValues from '../Components/AboutUs/HomeBrandSections';
import QnsAns from '../Components/Common/QnsAns';
import Awards from '../Components/HomePage/Awards';
import ContactUs from '../Components/Common/ContactUs';
import Navbar from '../Components/Common/NavbarHome';
import Quote from '../Components/HomePage/Quote';
import TreeSection from '../Components/HomePage/TreeSection';
import Map from '../Components/HomePage/Map';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <HomeMain />
        <TreeSection />
        <VisionMission />
        <Map />
        <Projects />
        <GetInTouch />
        <CoreValues />
        <Quote />
        <QnsAns />
        <Awards />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
