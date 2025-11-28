import ProjectsList from '../Components/OngoingPrjcts/projectsList';
import OurValues from '../Components/CompletedPrjcts/OurValues';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import OngoingMain from '../Components/OngoingPrjcts/OngoingMain';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
import Footer from '../Components/Common/Footer';
import ValueImage from '../Components/CompletedPrjcts/ValueImage';

const OngoingPrjcts = () => {
  return (
    <div>
      <CmpltNavbar />
      <OngoingMain />
      <ProjectsList />
      <OurValues />
      <ValueImage />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default OngoingPrjcts;
