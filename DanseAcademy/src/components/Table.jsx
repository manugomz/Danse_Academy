import React from "react";
import { classesSchedule } from "../database/ScheduleDB";

export default function Table({day}) {

  const dayClasses= classesSchedule[day];

  return (
    <table className="z-30 mb-32 max-w-[80%] self-end border-slate-200">
      <tbody className="text-slate-200">
        {dayClasses.map(singleClass => (
          <tr
            className=""
            key={day + singleClass.professor + singleClass.time[0]}>
            <td className="w-[10%] text-right">
              <p className="text-right text-2xl font-bold">
                {singleClass.time[0]}
              </p>
              <p className="text-right text-2xl font-bold"> {singleClass.time[1]}</p>
              <span className="text-right text-sm">{singleClass.m}</span>
            </td>
            <td className="w-[5%]">
              <p className="bg-yellow-dark mx-2 w-[120%] -rotate-90 text-center text-xl text-gray-dark">
                {singleClass.room}
              </p>
            </td>
            <td className="h-28 w-60">
              <div className="border-yellow-dark border-r-4 text-center ">
                <p className="block text-2xl font-bold">{singleClass.clase} </p>
                <span className="text-sm">{singleClass.nota}</span>
              </div>
            </td>
            <td className="  items-center pl-10 text-2xl">
              <span className="block text-xs">Profe</span>{" "}
              {singleClass.professor}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
