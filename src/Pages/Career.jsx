import CareerMain from '../Components/Career/CareerMain';
import WhyJoinUs from '../Components/Career/WhyJoinUs';
import JoinTeam from '../Components/Career/JoinTeam';
import CareerImages from '../Components/Career/CareerImages';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';

const Career = () => {
  return (
    <div>
      <CmpltNavbar />
      <CareerMain />
      <CareerImages />
      <WhyJoinUs />
      <JoinTeam />
    </div>
  );
};
export default Career;
