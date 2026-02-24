import Eventmain from '../Components/Events/EventMain';
import Events from '../Components/Events/Events';
import EventGetIn from '../Components/Events/EventGetIn';
import CmpltNavbar from '../Components/CompletedPrjcts/CmpltNavbar';

const Event = () => {
  return (
    <div>
      <CmpltNavbar />
      <Eventmain />
      <Events />
      <EventGetIn />
    </div>
  );
};

export default Event;
