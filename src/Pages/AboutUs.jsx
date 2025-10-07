import React from 'react';
import Navbar from '../Components/Common/Navbar';
import MainSection from '../Components/AboutUs/MainSection';
import Team from '../Components/AboutUs/Team';
import AboutCertification from '../Components/AboutUs/AboutCertification';
import AboutGetInTouch from '../Components/AboutUs/AboutGetInTouch';
import Gallery from '../Components/AboutUs/Gallery';
import Footer from '../Components/Common/Footer';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <Team />
      <AboutCertification />
      <AboutGetInTouch />
      <Gallery />
      <Footer />
    </div>
  )
}

export default AboutUs;
