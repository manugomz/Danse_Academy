import { useRef, useState } from "react";

import Classes from "./Classes";
import Events from "./Events";
import LandingPage from "./LandingPage";
import Schedule from "./Schedule";
import FloatButton from "../components/FloatButton";

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

    </main>
  );
};

export default Home;
