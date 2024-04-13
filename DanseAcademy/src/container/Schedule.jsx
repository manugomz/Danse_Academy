import React, { forwardRef, useState, useEffect, useRef } from "react";
import { RefContext } from "../context/RefProvider";
import useRefContext from "../hooks/useRefContext";

import Table from "../components/Table";

const Schedule = forwardRef((props, ref) => {
  const [dayForSchedule, setDayForSchedule] = useState("monday");

  

  const styles = {
    button: `z-20 rounded-tl-2xl rounded-br-2xl px-5 py-2 ring-0
            transition-all ease-in font-bold
            [&>h3]:text-yellow-dark [&>h3]:hover:text-gray-dark [&>h3]:focus:text-gray-dark
            hover:scale-110  hover:bg-yellow-dark
            focus:shadow-[0px_10px_0px_-3px_#FFF] focus:text-gray-dark focus:bg-yellow-dark`,

    day: "text-bold w-full text-center md:text-xl lg:text-2xl text-gray-dark"
  };

  const daysForSchedule = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  const days = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];

  /*Auto click button on load */

  const dayButtonRef = useRef(null);

  useEffect(() => {
    dayButtonRef.current.click();
  }, []);

  function clickMonday(i) {
    setDayForSchedule(daysForSchedule[i]);
    console.log("button click");
  }

  /*Context use for button */
  const { scheduleRef } = useRefContext(RefContext);

  /*Styles */

  return (
    <section
      className="relative flex cursor-default flex-col bg-gray-dark pb-40"
      ref={scheduleRef}
      id="horarios">
      <h2
        className=" 
            my-10 text-center text-6xl font-bold
            text-yellow-dark md:my-24">
        Horarios
      </h2>
      {/*Days for computer */}
      <div className="active mb-16 hidden justify-center md:flex md:gap-2 lg:gap-10 lg:px-5">
        {days.map((day, i) => {
          return i === 0 ? (
            <button ref={dayButtonRef} onClick={() => clickMonday(i)} className={styles.button} key={day}>
              <h3 className={styles.day}>{day}</h3>
            </button>
          ) : (
            <button
              onClick={() => setDayForSchedule(daysForSchedule[i])}
              className={styles.button}
              key={day}>
              <h3 className={styles.day}>{day}</h3>
            </button>
          );
        })}
      </div>
      {/*Days for mobile */}
      <div
        className="mb-10 w-[40%] self-center rounded-br-2xl rounded-tl-2xl bg-yellow-dark px-5 py-2 font-bold
          text-gray-dark shadow-[0px_10px_0px_-3px_#FFF] md:hidden">
        Lunes
      </div>
      <Table day={dayForSchedule} />
    </section>
  );
});

export default Schedule;
