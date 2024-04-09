import { useRef, useState } from "react";
import Events from "./Events";
import LandingPage from "./LandingPage";
import Classes from "./Classes";
import Bookings from "./Bookings";

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
      <LandingPage />
      <Events ref={eventRef}/>
      <Classes />
      <Bookings/>

    </main>
  );
};

export default Home;
