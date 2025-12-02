import React from 'react';
import PrjctMain from '../Components/Project/PrjctMain';
import Features from '../Components/Project/Features';
import PlotLayout from '../Components/Project/PlotLayout';
import Amenities from '../Components/Project/Amenities';
import AboutProject from '../Components/Project/AboutProject';
import PrjctGallery from '../Components/Project/PrjctGallery';
import Directions from '../Components/Project/Directions';
import PrjctGetinTouch from '../Components/Project/PrjctGetinTouch';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';

const Project = () => {
  return (
    <div>
      <CmpltNavbar />
      <PrjctMain />
      <Features />
      <PlotLayout />
      <Amenities />
      <AboutProject />
      <PrjctGallery />
      <Directions />
      <PrjctGetinTouch />
    </div>
  );
};

export default Project;
