
import Classes from "./Classes";
import Events from "./Events";
import LandingPage from "./LandingPage";
import Schedule from "./Schedule";
import FloatButton from "../components/FloatButton";//!Float button for mobile

import useRefContext from "../hooks/useRefContext";

const Home = () => {

  // const {landingRef,eventsRef,classesRef,scheduleRef}=useRefContext();

  // const scrollToElement = ()=>{
  //   if (classesRef.current)classesRef.current.scrollIntoView({behavior:'smooth'});
  //   if (eventsRef.current)eventsRef.current.scrollIntoView({behavior:'smooth'});
  //   if (scheduleRef.current)scheduleRef.current.scrollIntoView({behavior:'smooth'});
  // }

  return (
    <main
      className=" md:pl-24
    bg-gradient-to-b 
    from-gray-dark from-1% 
    via-gray-light via-40% 
    to-slate-200 min-h-[55vh]"
    >
      {/* <LandingPage scrollToElement={scrollToElement} ref={landingRef}/> */}
      <LandingPage />
      <Events  />
      <Classes />
      <Schedule/>
      {/* <Schedule ref={scheduleRef}/> */}

    </main>
  );
};

export default Home;
