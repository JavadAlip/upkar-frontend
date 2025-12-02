import MainSection from '../Components/AboutUs/MainSection';
import QnsAns from '../Components/Common/QnsAns';
import Quote from '../Components/AboutUs/Quote';
import Team from '../Components/AboutUs/Team';
import AboutCertification from '../Components/AboutUs/AboutCertification';
import Gallery from '../Components/AboutUs/Gallery';
import AboutGetInTouch from '../Components/AboutUs/AboutGetInTouch';
import Navbar from '../Components/Common/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <QnsAns />
      <Quote />
      <Team />
      <AboutCertification />
      <Gallery />
      <AboutGetInTouch />
    </>
  );
};

export default AboutUs;
