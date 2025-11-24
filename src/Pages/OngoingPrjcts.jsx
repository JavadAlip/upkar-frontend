import ProjectsList from '../Components/OngoingPrjcts/projectsList';
import OurValues from '../Components/CompletedPrjcts/OurValues';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import OngoingMain from '../Components/OngoingPrjcts/OngoingMain';

const OngoingPrjcts = () => {
    return (
        <div>
            <OngoingMain />
            <ProjectsList />
            <OurValues />
            <GetInTouch />
        </div>
    )
}

export default OngoingPrjcts;

