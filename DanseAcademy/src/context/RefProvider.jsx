import React, { useRef,createContext } from 'react';

export const RefContext = createContext();

export   const scrollToElement = ()=>{
  if (eventRef.current)eventRef.current.scrollIntoView({behavior:'smooth'})
}

const RefProvider = ({ children }) => {
  const classesRef = useRef();
  const eventsRef = useRef();
  const landingRef = useRef();
  const scheduleRef = useRef();
  const mondayButtonRef=useRef();


  return (
    <RefContext.Provider value={{ landingRef,eventsRef,classesRef,scheduleRef, mondayButtonRef}}>
      {children}
    </RefContext.Provider>
  );
};


export default RefProvider;