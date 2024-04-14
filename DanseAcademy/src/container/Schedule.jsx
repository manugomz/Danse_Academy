import React, { forwardRef, useState, useEffect, useRef } from "react";
import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

import Table from "../components/Table";
import DaysForDesktop from "../components/DaysForDesktop";
import DaysForMobile from "../components/DaysForMobile";

const Schedule = forwardRef((props, ref) => {
  const [dayForSchedule, setDayForSchedule] = useState("monday");

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
      className="relative flex cursor-default flex-col justify-center bg-gray-dark pb-40"
      ref={scheduleRef}
      id="horarios">
      <h2
        className=" 
            my-10 text-center text-6xl font-bold
            text-yellow-dark md:my-24">
        Horarios
      </h2>
      {/*Days for computer */}
      <DaysForDesktop setDayForSchedule={setDayForSchedule} daysForSchedule={daysForSchedule} daysSpanish={daysSpanish}/>
      {/*Days for mobile */}
      <DaysForMobile/>
      <Table day={dayForSchedule} />
    </section>
  );
});

export default Schedule;
