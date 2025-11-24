import ProjectsList from '../Components/UpcomingPrjcts/projectsList';
import OurValues from '../Components/CompletedPrjcts/OurValues';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import UpcomingMain from '../Components/UpcomingPrjcts/UpcomingMain';

const UpcomingPrjcts = () => {
    return (
        <div>
            <UpcomingMain />
            <ProjectsList />
            <OurValues />
            <GetInTouch />
        </div>
    )
}

export default UpcomingPrjcts;
