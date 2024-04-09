import React from "react";

export default function Table() {
  const rooms = ["Salón 1", "Salón 2"];

  const timeSlots = ["6:00 PM", "7:00 PM", "8:00 PM"];

  const schedule = {
    salon1: ["clase1", "clase2"],
    salon2: ["clase3", "clase3"]
  };

  return (
    <table className="self-center border-transparent mb-32">
      <thead>
        <tr>
          <th className=" p-2"></th>
          {rooms.map((day, index) => (
            <th key={index} className="p-2 text-3xl text-yellow-light">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((time, index) => (
          <tr key={index}>
            <td className="p-2 text-2xl text-yellow-light">{time}</td>
            {rooms.map((day, index) => (
              <td key={index} className=" p-2 text-white">
                {/* Replace with your data for each day and time slot */}
                <div>{`Data for ${day} at ${time}`}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
