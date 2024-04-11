import React, { useRef, createContext } from 'react';

export const refContext = createContext();

// export   const scrollToElement = ()=>{
//   if (eventRef.current)eventRef.current.scrollIntoView({behavior:'smooth'})
// }

const RefProvider = ({ children }) => {
  const classesRef = useRef();
  const eventsRef = useRef();
  const landingRef = useRef();
  const scheduleRef = useRef();

  return (
    <RefContext.Provider value={{ landingRef,eventsRef,classesRef,scheduleRef}}>
      {children}
    </RefContext.Provider>
  );
};


export default RefProvider;