import React from "react";

import DayButton from "../components/DayButton";
import Table from "../components/Table";

const Schedule = () => {
  const days = [
    "LUNES",
    "MARTES",
    "MIÉRCOLES",
    "JUEVES",
    "VIERNES",
    "SÁBADO"
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
      <div className="lg:px-5 mb-16 hidden md:flex justify-center lg:gap-20 md:gap-2 active">
        {days.map(day => (
          <DayButton key={day} day={day} />
        ))}
      </div>
      {/*Days for mobile */}
      <Table />
    </section>
  );
};

export default Schedule;
