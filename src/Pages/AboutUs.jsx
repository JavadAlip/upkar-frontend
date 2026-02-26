import MainSection from '../Components/AboutUs/MainSection';
import QnsAns from '../Components/Common/QnsAns';
import Quote from '../Components/AboutUs/Quote';
import Team from '../Components/AboutUs/Team';
import AboutCertification from '../Components/AboutUs/HomeBrandSections';
import Gallery from '../Components/AboutUs/Gallery';
import AboutGetInTouch from '../Components/AboutUs/AboutGetInTouch';
import Navbar from '../Components/Common/NavbarHome';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <MainSection />
        <QnsAns />
        <Quote />
        <Team />
        <AboutCertification />
        <Gallery />
        <AboutGetInTouch />
      </div>
    </>
  );
};

export default AboutUs;
