import React, { forwardRef, useState, useEffect, useRef } from "react";
import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

import Table from "../components/Table";
import DaysForDesktop from "../components/DaysForDesktop";
import DaysForMobile from "../components/DaysForMobile";

const Schedule = forwardRef((props, ref) => {

  const styles={
    scheduleSection:`relative flex flex-col justify-center cursor-default 
                    bg-gray-dark px-5 pb-40`,

    title:`text-center text-4xl text-yellow-dark font-bold
          my-10 
          md:my-24 md:text-6xl`,
  }

  const [currentDay, setCurrentDay] = useState(0);

  const daysForSchedule = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  
  const daysSpanish = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];

  /*Context use for button */
  const { scheduleRef } = useRefContext(RefContext);

  /*Styles */

  return (
    <section
      className={styles.scheduleSection}
      ref={scheduleRef}
      id="horarios">
      <h2
        className={styles.title}>
        Horarios
      </h2>
      {/*Days for computer */}
      <DaysForDesktop daysSpanish={daysSpanish} currentDay={currentDay} setCurrentDay={setCurrentDay}/>
      {/*Days for mobile */}
      <DaysForMobile daysSpanish={daysSpanish} currentDay={currentDay} setCurrentDay={setCurrentDay}/>
      <Table day={daysForSchedule[currentDay]} />
    </section>
  );
});

export default Schedule;
