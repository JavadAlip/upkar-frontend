import React from 'react';
import Navbar from '../Components/Common/Navbar';
import HomeMain from '../Components/HomePage/HomeMain';
import VisionMission from '../Components/HomePage/VisionMission';
import Projects from '../Components/HomePage/Projects';
import GetInTouch from '../Components/HomePage/GetInTouch';
import Certification from '../Components/HomePage/Certification';
import QnsAns from '../Components/Common/QnsAns';
import ContactUs from '../Components/Common/ContactUs';
import Footer from '../Components/Common/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeMain />
            <VisionMission />
            <Projects />
            <GetInTouch />
            <Certification />
            <QnsAns />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home;
