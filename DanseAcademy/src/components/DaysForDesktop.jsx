import React from "react";

export default function DaysForDesktop({ daysSpanish, setCurrentDay, currentDay }) {
  const days = daysSpanish;

  const styles = {
    button: `z-20 rounded-tl-2xl rounded-br-2xl px-5 py-2 ring-0
            transition-all ease-in font-bold
            [&>p]:text-yellow-dark [&>p]:hover:text-gray-dark [&>p]:focus:text-gray-dark
            hover:scale-110  hover:bg-yellow-dark`,

    selectedDay: `z-20 rounded-tl-2xl rounded-br-2xl px-5 py-2 ring-0
            transition-all ease-in font-bold
            [&>p]:hover:text-gray-dark [&>p]:focus:text-gray-dark
            hover:scale-110  hover:bg-yellow-dark
            shadow-[0px_10px_0px_-3px_#FFF] [&>p]:text-gray-dark bg-yellow-dark`,

    singleDay:
      "text-bold w-full text-center text-lg lg:text-2xl text-gray-dark",

    daysDesktop: `mb-16 hidden justify-center 
          lg:gap-10 lg:px-5 xl:flex
          2xl:gap-20`
  };

  return (
    <div className={styles.daysDesktop}>
      {days.map((day, i) => (
        <button
          onClick={() => setCurrentDay(i)}
          className={currentDay === i ? styles.selectedDay : styles.button}
          key={day}>
          <p className={styles.singleDay}>{day}</p>
        </button>
      ))}
    </div>
  );
}
