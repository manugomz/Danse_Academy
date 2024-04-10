import React from "react";
import ClassSchedule from "./ClassSchedule";

export default function Table() {
  const rooms = ["Salón 1", "Salón 2"];

  const timeSlots = ["6:00 PM", "7:00 PM", "8:00 PM"];

  const classesInfo = {
    lunes: [
      {
        hora: "6:00 pm",
        clases: {
          1: {
            id: 1,
            clase: "Hip Hop",
            profesor: "Dilla",
            nota: "(Coreo)"
          },
          2: {
            id: 2,
          }
        }
      },
      {
        hora: "7:00 pm",
        clases: {
          1: {
            id: 3,
            clase: "Bachata",
            profesor: "Anna Gómez",
            nota: "(Coreo)"
          },
          2: {
            id: 4,
            clase: "Dancehall",
            profesor: "Marango",
            nota: "(Beginners)"
          }
        }
      },
      {
        hora: "8:00 pm",
        clases: {
          1: {
            id: 5,
            clase: "Afrofusión",
            profesor: "Julio Mosquera",
            nota: "(Intermedio)"
          },
          2: {
            id: 6,
            clase: "Heels",
            profesor: "José Gómez",
            nota: ""
          }
        }
      }
      // martes: {
      //   "8:00 am": {
      //     1: {
      //       clase: "Entrenamiento técnico",
      //       profesor: "Dilla",
      //       nota: "Coreo"
      //     },
      //     2: {}
      //   },
      //   "6:00 pm": {
      //     1: {
      //       clase: "Salsa shine",
      //       profesor: "Majo Buriticá",
      //       nota: "Básico"
      //     },
      //     2: {
      //       clase: "Stretching",
      //       profesor: "Maria Fernanda B.",
      //       nota: "Open level"
      //     }
      //   },
      //   "7:00 pm": {
      //     1: {},
      //     2: {
      //       clase: "Champeta",
      //       profesor: "Leidy Pino",
      //       nota: "Intermedio"
      //     }
      //   },
      //   "8:00 pm": {
      //     1: {},
      //     2: {
      //       clase: "Contemporáneo",
      //       profesor: "Camila Morales",
      //       nota: "Básico"
      //     }
      //   }
    ]
  };

  return (
    <table className="mb-32 max-w-[70%] self-center border-transparent z-30">
      <thead>
        <tr key='header'>
          <th className="p-12"></th>
          {rooms.map((roomName, index) => {
            // color = (roomName==="Salón 1") ? 'green ':'cyan-light ';
            return <th
              key={index}
              className={"text-xl md:text-3xl text-white"}>
              {roomName}
            </th>
          })}
        </tr>
      </thead>
      <tbody>
        {Object.keys(classesInfo.lunes).map((timeIndex, index) => (
          <tr key={index} className="">
            <td className="text-yellow-light"> 
            {Object.values(classesInfo.lunes[timeIndex].hora)}
            </td>
            {Object.keys(classesInfo.lunes[timeIndex].clases).map((roomIndex, index) => {

              const singleClass = classesInfo.lunes[timeIndex].clases[roomIndex];
              const classTime= Object.values(classesInfo.lunes[timeIndex].hora);
              const color = (roomIndex==='1') ? 'green ':'cyan-light ';

              return (
                <td
                  key={singleClass.id}
                  className="py-2 text-xl text-yellow-light md:text-2xl">
                  <ClassSchedule singleClass={singleClass} classTime={classTime} color={color}/>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
