import React, { forwardRef, useState } from "react";

import Table from "../components/Table";

const Schedule = forwardRef((props, ref) => {

  const styles = {
    button: `z-20 rounded-tl-2xl rounded-br-2xl px-5 py-2 ring-0
            transition-all ease-in font-bold
            [&>h3]:text-yellow-dark [&>h3]:hover:text-gray-dark [&>h3]:focus:text-gray-dark
            hover:scale-110  hover:bg-yellow-dark
            focus:shadow-[0px_10px_0px_-3px_#FFF] focus:text-gray-dark focus:bg-yellow-dark`,

    day: "text-bold w-full text-center md:text-xl lg:text-2xl text-gray-dark"
  };

  const [dayForSchedule,setDayForSchedule]=useState('monday');

  

  const daysForSchedule = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  const days = [
    "LUNES",
    "MARTES",
    "MIÉRCOLES",
    "JUEVES",
    "VIERNES",
    "SÁBADO"
  ];


  return (
    <section className="relative flex flex-col bg-gray-dark pb-40" ref={ref}>
      <h2
        className=" 
            my-10 md:my-24 text-center text-6xl
            font-bold text-yellow-dark">
        Horarios
      </h2>
      {/*Days for computer */}
      <div className="lg:px-5 mb-16 hidden md:flex justify-center lg:gap-20 md:gap-2 active">
        {days.map((day,i)=> (
          <button onClick={()=>setDayForSchedule(daysForSchedule[i])}
          className={styles.button} key={day}>
          <h3 className={styles.day}>{day}</h3>
        </button>
        ))}
      </div>
      {/*Days for mobile */}
      <div className="md:hidden rounded-tl-2xl rounded-br-2xl px-5 py-2 font-bold w-[40%] self-center mb-10
          shadow-[0px_10px_0px_-3px_#FFF] text-gray-dark bg-yellow-dark">Lunes</div>
      <Table day={dayForSchedule}/>
    </section>
  );
});

export default Schedule;
