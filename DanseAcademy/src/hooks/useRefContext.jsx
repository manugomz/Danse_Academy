import { useContext } from "react";
import { RefContext } from "../context/RefProvider";

const useRefContext = () => {
  const { landingRef, eventsRef, classesRef, scheduleRef } =
    useContext(RefContext);

  return { landingRef, eventsRef, classesRef, scheduleRef };
};

export default useRefContext;
