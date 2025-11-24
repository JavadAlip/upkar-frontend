import HomeMain from "../Components/HomePage/HomeMain";
import VisionMission from "../Components/HomePage/VisionMission";
import Projects from "../Components/HomePage/Projects";
import GetInTouch from "../Components/HomePage/GetInTouch";
import Certification from "../Components/HomePage/Certification";
import QnsAns from "../Components/Common/QnsAns";
import Awards from "../Components/HomePage/Awards";
import ContactUs from "../Components/Common/ContactUs";
import Navbar from "../Components/Common/NavbarHome";
import Footer from "../Components/Common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeMain />
      <VisionMission />
      <Projects />
      <GetInTouch />
      <Certification />
      <QnsAns />
      <Awards />
      <ContactUs />
      <Footer/>
    </>
  );
};

export default Home;
