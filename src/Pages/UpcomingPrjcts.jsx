import ProjectsList from '../Components/UpcomingPrjcts/projectsList';
import OurValues from '../Components/CompletedPrjcts/OurValues';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import UpcomingMain from '../Components/UpcomingPrjcts/UpcomingMain';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';
import Footer from '../Components/Common/Footer';

const UpcomingPrjcts = () => {
    return (
        <div>
            <CmpltNavbar/>
            <UpcomingMain />
            <ProjectsList />
            <OurValues />
            <GetInTouch />
            <Footer/>
        </div>
    )
}

export default UpcomingPrjcts;
