
import Classes from "./Classes";
import Events from "./Events";
import FloatButton from "../components/FloatButton";//!Float button for mobile
import LandingPage from "./LandingPage";
import Schedule from "./Schedule";

import useRefContext from "../hooks/useRefContext";

const Home = () => {

  const styles={
    main:` lg:pl-24
    bg-gradient-to-b 
    from-gray-dark from-1% 
    via-gray-light via-40% 
    to-slate-200 min-h-[55vh]`
  }

  const {landingRef,eventsRef,classesRef,scheduleRef}=useRefContext();


  return (
    <main
      className={styles.main}
    >
      <LandingPage />
      <Events  />
      <Classes />
      <Schedule /> 

    </main>
  );
};

export default Home;
