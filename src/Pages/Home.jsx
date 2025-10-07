import React from 'react';
import Navbar from '../Components/Navbar';
import HomeMain from '../Components/HomeMain';
import VisionMission from '../Components/VisionMission';
import Projects from '../Components/Projects';
import GetInTouch from '../Components/GetInTouch';
import Certification from '../Components/Certification';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeMain />
            <VisionMission />
            <Projects />
            <GetInTouch />
            <Certification />
        </div>
    )
}

export default Home;
