import React from "react";

export default function DaysForDesktop({ daysSpanish, setCurrentDay, currentDay }) {

  const styles = {
    button:`z-20 ring-0
            rounded-tl-2xl rounded-br-2xl px-5 py-2
            transition-all ease-in font-bold
            [&>p]:text-yellow-dark [&>p]:hover:text-gray-dark [&>p]:focus:text-gray-dark focus:bg-yellow-dark
            hover:scale-110  hover:bg-yellow-dark`,

    daysDesktop: `mb-16 hidden justify-center 
    lg:gap-10 lg:px-5 xl:flex
    2xl:gap-20`,

    selectedDay:`z-20 ring-0
            bg-yellow-dark rounded-tl-2xl rounded-br-2xl px-5 py-2
            transition-all ease-in font-bold
            [&>p]:text-gray-dark 
            hover:scale-110 hover:bg-yellow-dark
            shadow-[0px_10px_0px_-3px_#FFF]`,

    singleDay:`text-bold w-full text-center text-lg text-gray-dark
            lg:text-2xl`,
  };

  const days = daysSpanish;

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
