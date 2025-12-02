import ProjectsList from '../Components/UpcomingPrjcts/projectsList';
import OurValues from '../Components/CompletedPrjcts/OurValues';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import UpcomingMain from '../Components/UpcomingPrjcts/UpcomingMain';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
import ValueImage from '../Components/CompletedPrjcts/ValueImage';

const UpcomingPrjcts = () => {
  return (
    <div>
      <CmpltNavbar />
      <UpcomingMain />
      <ProjectsList />
      <OurValues />
      <ValueImage />
      <GetInTouch />
    </div>
  );
};

export default UpcomingPrjcts;
