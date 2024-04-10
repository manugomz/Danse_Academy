import React from "react";

import DayButton from "../components/DayButton";
import Table from "../components/Table";

const Schedule = () => {
  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ];

  return (
    <section className="relative flex flex-col bg-gray-dark pb-40">
      <h2
        className=" 
            my-24 text-center text-6xl
            font-bold text-yellow-dark">
        Horarios
      </h2>
      {/*Days for computer */}
      <div className="px-6 mb-16 hidden md:flex justify-around">
        {days.map(day => (
          <DayButton key={day} day={day} />
        ))}
      </div>
      {/*Days for mobile */}
      <Table />
      <div className="absolute bottom-0 w-full">
        <div className="h-[80vh] bg-gradient-to-b from-transparent via-transparent via-70% to-yellow-dark"></div>
      </div>
    </section>
  );
};

export default Schedule;
