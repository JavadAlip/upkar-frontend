import CompletedMain from '../Components/CompletedPrjcts/CompletedMain';
import ProjectsList from '../Components/CompletedPrjcts/ProjectsList';
import OurValues from '../Components/CompletedPrjcts/OurValues';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
import ValueImage from '../Components/CompletedPrjcts/ValueImage';

const CompletedPrjcts = () => {
  return (
    <div>
      <CmpltNavbar />
      <div className="pt-24">
        <CompletedMain />
        <ProjectsList />
        <OurValues />
        <ValueImage />
        <GetInTouch />
      </div>
    </div>
  );
};

export default CompletedPrjcts;
