import React, { useState } from "react";

import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function DaysForMobile({ daysSpanish, currentDay, setCurrentDay }) {
  const styles = {
    arrowButton: "hover:scale-125 ease-in-out transition-all",

    carousel:
      "w-[60%] self-center flex justify-around items-center mb-10 xl:hidden",

    day: `rounded-br-2xl rounded-tl-2xl bg-slate-200 px-5 py-2 w-1/2
    text-center text-2xl font-bold  shadow-[0px_10px_0px_-3px_#FEBC04]`,

    icon: `h-10 text-4xl text-yellow-dark`
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
      <button className={styles.arrowButton} onClick={() => clickArrow("left")}>
        <FaCircleChevronLeft className={styles.icon} />
      </button>
      <div className={styles.day}>{days[currentDay]}</div>
      <button
        className={styles.arrowButton}
        onClick={() => clickArrow("right")}>
        <FaCircleChevronRight className={styles.icon} />
      </button>
    </div>
  );
}
