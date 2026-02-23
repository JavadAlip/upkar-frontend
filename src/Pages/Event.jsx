import Eventmain from '../Components/Events/EventMain';
import Events from '../Components/Events/Events';
import GetInTouch from '../Components/AboutUs/AboutGetInTouch';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';

const Event = () => {
  return (
    <div>
      <CmpltNavbar />
      <Eventmain />
      <Events />
      <GetInTouch />
    </div>
  );
};

export default Event;
