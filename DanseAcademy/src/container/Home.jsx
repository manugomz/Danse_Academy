import { useRef, useState } from "react";

import Events from "./Events";
import LandingPage from "./LandingPage";
import Classes from "./Classes";
import Bookings from "./Bookings";
import Schedule from "./Schedule";

const Home = () => {

  const eventRef =useRef();

  const scrollToElement = ()=>{
    if (eventRef.current)eventRef.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <main
      className=" md:pl-24
    bg-gradient-to-b
    from-gray-dark from-1% 
    via-gray-light via-40% 
    to-slate-200 min-h-[55vh]"
    >
      <LandingPage scrollToElement={scrollToElement} />
      <Events />
      <Classes />
      <Schedule />
      <Bookings ref={eventRef}/>

    </main>
  );
};

export default Home;
