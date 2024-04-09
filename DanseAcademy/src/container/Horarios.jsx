import React from "react";

import Day from "../components/Day";
import Table from "../components/Table";

const Horarios = () => {
  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ];

  return (
    <section className=" relative flex flex-col bg-gray-dark pb-40">
      <h2
        className=" 
            my-24 text-center text-6xl
            font-bold text-yellow-dark">
        Horarios
      </h2>
      <div className="pb-16">
        {days.map(day => (
          <Day key={day} day={day} />
        ))}
      </div>
      <Table />
      <div className="absolute bottom-0 w-full">
        <div className="h-[80vh] bg-gradient-to-b from-transparent via-transparent via-70% to-yellow-dark"></div>
      </div>
    </section>
  );
};

export default Horarios;
