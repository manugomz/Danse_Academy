import React from "react";
import { classesSchedule } from "../database/ScheduleDB";

export default function Table({ day }) {

  const styles ={

    classTitle:"block font-bold",

    classTitleContainer:`grid content-center text-center 
              border-r-4 border-yellow-dark 
              pr-4 pl-8 h-20
              sm:pl-10 sm:pr-7`,

    meridian:`text-sm lg:text-base`,

    professorSpan:"block text-xs lg:text-base",

    roomCol:"w-[6vw] md:w-[8vw]",

    roomDiv:`w-8 grid content-start`,

    roomText:`w-[5.5rem] -rotate-90 bg-yellow-dark 
              text-center text-gray-dark 
              md:text-xl`,

    table:"z-30 border-collapse table-fixed",

    tableBody:`text-slate-200 
              sm:text-lg 
              md:text-2xl`,
    
    tableContainer:`w-[80%] self-center 
                  flex justify-center 
                  sm:w-[60%]`,

    tableRow:`h-24 
              animate-fade animate-once animate-ease-out animate-duration-500`,

    timeDiv:`text-right 
              md:pr-3 
              xl:py-3`,

  }

  const dayClasses = classesSchedule[day];

  return (
    <div className={styles.tableContainer}>
  
      <table className={styles.table}>
        <colgroup>
          <col className={styles.roomCol}/>
        </colgroup>

        <tbody className={styles.tableBody}>
          {dayClasses.map(singleClass => (
            <tr
              className={styles.tableRow}
              key={day + singleClass.professor + singleClass.time[0]}>

              <td className={styles.timeDiv}> {/*Class Time */}
                <p className="font-bold">{singleClass.time[0]}</p>
                <p className="font-bold"> {singleClass.time[1]}</p>
                <span className={styles.meridian}>{singleClass.m}</span>
              </td>

              <td> {/*Class Room */}
                <div className={styles.roomDiv}>
                <p
                  className={styles.roomText}>
                  {singleClass.room}
                </p>
                </div>
              </td>

              <td className="2xl:px-8"> {/*Class Name */}
                <div className={styles.classTitleContainer}>
                  <p className={styles.classTitle}>{singleClass.clase} </p>
                  <span className="text-xs">{singleClass.nota}</span>
                </div>
              </td>

              <td className="pl-[2vw]"> {/*Class Professor */}
                <span className={styles.professorSpan}>Profe</span>
                {singleClass.professor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
