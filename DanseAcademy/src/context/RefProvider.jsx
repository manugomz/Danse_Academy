import React, { createContext, useRef } from 'react';

export const RefContext= createContext();

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
