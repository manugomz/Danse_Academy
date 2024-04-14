import React from "react";
import { classesSchedule } from "../database/ScheduleDB";

export default function Table({ day }) {
  const dayClasses = classesSchedule[day];

  return (
    <div className="w-[90vw] self-center flex justify-center sm:w-[60%] ">
      <table className="z-30  border-collapse table-fixed">
        <colgroup>
          <col className="w-[8vw]" />
        </colgroup>

        <tbody className="text-slate-200 sm:text-lg md:text-2xl">
          {dayClasses.map(singleClass => (
            <tr
              className="h-24"
              key={day + singleClass.professor + singleClass.time[0]}>
              <td className=" text-right md:pr-3 xl:py-3">
                <p className="font-bold">{singleClass.time[0]}</p>
                <p className="font-bold"> {singleClass.time[1]}</p>
                <span className="text-sm lg:text-base">{singleClass.m}</span>
              </td>
              <td  >
                <div className="w-8 grid content-start">
                <p
                  className="w-[5.5rem] -rotate-90 bg-yellow-dark 
                            text-center text-gray-dark 
                            md:text-xl">
                  {singleClass.room}
                </p>
                </div>
              </td>
              <td className="2xl:px-8">
                <div className="grid h-20 content-center text-center 
                border-r-4 border-yellow-dark 
                pr-4 pl-8 sm:pl-10 sm:pr-7">
                  <p className="block font-bold">{singleClass.clase} </p>
                  <span className="text-xs">{singleClass.nota}</span>
                </div>
              </td>
              <td className="pl-[2vw]">
                <span className="block text-xs lg:text-base">Profe</span>
                {singleClass.professor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
