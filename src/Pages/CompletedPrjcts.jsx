
import Navbar from '../Components/CompletedPrjcts/CmpltNavbar';
import CompletedMain from '../Components/CompletedPrjcts/CompletedMain';
import ProjectsList from '../Components/CompletedPrjcts/ProjectsList';
import OurValues from '../Components/CompletedPrjcts/OurValues';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import Footer from '../Components/Common/Footer';

const CompletedPrjcts = () => {
    return (
        <div>
            <Navbar />
            <CompletedMain />
            <ProjectsList />
            <OurValues />
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default CompletedPrjcts;
