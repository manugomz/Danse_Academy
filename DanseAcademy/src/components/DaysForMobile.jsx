import React, { useState } from "react";

import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function DaysForMobile({
  daysSpanish,
  currentDay,
  setCurrentDay
}) {
  const styles = {
    arrowButton: `ease-in-out transition-all
                hover:scale-125`,

    carousel: `w-full self-center
              flex justify-between items-center mb-10 px-5 
              xl:hidden`,

    day: `rounded-br-2xl rounded-tl-2xl bg-slate-200 
        font-bold
        px-5 py-2 min-w-1/2
        text-center text-lg shadow-[0px_10px_0px_-3px_#FEBC04]
        md:text-2xl`,

    icon: `h-10 text-3xl text-yellow-dark
        md:text-4xl`
  };

  const days = daysSpanish;

  const clickArrow = side => {
    const daysForMod = days.length;
    let newCurrentDay;

    if (side === "left") {
      newCurrentDay = currentDay ? currentDay - 1 : daysForMod - 1;
    }
    if (side === "right") {
      newCurrentDay = (currentDay + 1) % daysForMod;
    }
    setCurrentDay(newCurrentDay);

    console.log(currentDay, days[currentDay]);
  };

  return (
    <div className={styles.carousel}>
      <button
        aria-label="button arrow previous"
        className={styles.arrowButton}
        onClick={() => clickArrow("left")}>
        <FaCircleChevronLeft className={styles.icon} />
      </button>
      <div className={styles.day}>{days[currentDay]}</div>
      <button
        aria-label="button arrow next"
        className={styles.arrowButton}
        onClick={() => clickArrow("right")}>
        <FaCircleChevronRight className={styles.icon} />
      </button>
    </div>
  );
}
