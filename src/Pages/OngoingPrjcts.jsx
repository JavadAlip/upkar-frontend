import ProjectsList from '../Components/OngoingPrjcts/projectsList';
import OurValues from '../Components/CompletedPrjcts/OurValues';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import OngoingMain from '../Components/OngoingPrjcts/OngoingMain';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
import ValueImage from '../Components/CompletedPrjcts/ValueImage';

const OngoingPrjcts = () => {
  return (
    <div>
      <CmpltNavbar />
      <div className="pt-24">
        <OngoingMain />
        <ProjectsList />
        <OurValues />
        <ValueImage />
        <GetInTouch />
      </div>
    </div>
  );
};

export default OngoingPrjcts;
