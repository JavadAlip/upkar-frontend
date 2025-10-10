import React from 'react'
import PrjctMain from '../Components/Project/PrjctMain';
// import Features from '../Components/Project/Features';
import PlotLayout from '../Components/Project/PlotLayout';
import Amenities from '../Components/Project/Amenities';
import AboutProject from '../Components/Project/AboutProject';
import Directions from '../Components/Project/Directions';
import GetInTouch from '../Components/HomePage/GetInTouch';
import Footer from '../Components/Common/Footer';

const Project = () => {
    return (
        <div>
          
            <PrjctMain />
            {/* <Features /> */}
            <PlotLayout />
            <Amenities/>
            <AboutProject />
            <Directions/>
            <GetInTouch />
        
        </div>
    )
}

export default Project

