import CareerMain from '../Components/Career/CareerMain';
import WhyJoinUs from '../Components/Career/WhyJoinUs';
import Openings from '../Components/Career/CareerOpenings';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
import CareerImage from '../Components/Career/CareerImage';

const Career = () => {
  return (
    <div>
      <CmpltNavbar />
      <div className="pt-24">
        <CareerImage />
        <CareerMain />
        <WhyJoinUs />
        <Openings />
      </div>
    </div>
  );
};
export default Career;
