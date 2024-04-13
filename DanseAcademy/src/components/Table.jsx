import React from "react";
import { classesSchedule } from "../database/ScheduleDB";

export default function Table({day}) {

  const dayClasses= classesSchedule[day];

  return (
    <div className="md:w-[50%] w-[90vw] self-center">
    <table className="z-30 md:mb-32 self-end border-slate-200">
      <tbody className="text-slate-200">
        {dayClasses.map(singleClass => (
          <tr
            className=""
            key={day + singleClass.professor + singleClass.time[0]}>
            <td className=" text-right">
              <p className="text-right md:text-2xl font-bold">
                {singleClass.time[0]}
              </p>
              <p className="text-right md:text-2xl font-bold"> {singleClass.time[1]}</p>
              <span className="text-right text-sm">{singleClass.m}</span>
            </td>
            <td className="w-[5%]">
              <p className="bg-yellow-dark w-[150%] -rotate-90 text-center md:text-xl text-gray-dark">
                {singleClass.room}
              </p>
            </td>
            <td className="h-24 md:h-28 w-[40%]">
              <div className="border-yellow-dark border-r-4 text-center ">
                <p className="block md:text-2xl font-bold">{singleClass.clase} </p>
                <span className="text-xs">{singleClass.nota}</span>
              </div>
            </td>
            <td className=" items-center pl-4 md:pl-10 md:text-2xl">
              <span className="block text-xs">Profe</span>
              {singleClass.professor}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
