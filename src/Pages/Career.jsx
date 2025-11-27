import CareerMain from "../Components/Career/CareerMain";
import WhyJoinUs from "../Components/Career/WhyJoinUs";
import JoinTeam from "../Components/Career/JoinTeam";
import CareerImages from "../Components/Career/CareerImages";
import CmpltNavbar from "../Components/CompletedPrjcts/CmpltNavbar";
import Footer from "../Components/Common/Footer";
const Career = () => {
  return (
    <div>
      <CmpltNavbar />
      <CareerMain />
      <CareerImages />
      <WhyJoinUs />
      <JoinTeam />
      <Footer />
    </div>
  );
};
export default Career;
