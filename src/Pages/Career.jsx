import CareerMain from '../Components/Career/CareerMain';
import WhyJoinUs from '../Components/Career/WhyJoinUs';

import Openings from '../Components/Career/CareerOpenings';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';

const Career = () => {
  return (
    <div>
      <CmpltNavbar />
      <CareerMain />
      <WhyJoinUs />
      <Openings />
    </div>
  );
};
export default Career;
