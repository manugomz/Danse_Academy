import { useContext } from "react";
import refContext from '../context/RefProvider'

const useRefContext = () => {
  const { landingRef, eventsRef, classesRef, scheduleRef } = useContext(refContext);

  return { landingRef, eventsRef, classesRef, scheduleRef };
};

export default useRefContext;