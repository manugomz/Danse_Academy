import React from "react";

export default function DayButton({ day }) {
  const styles = {
    button: `z-20 rounded-md  px-4 py-2 ring-0
            transition-all ease-in 
            hover:scale-110 [&>h3]:text-yellow-dark [&>h3]:hover:text-yellow-darker hover:shadow-[0px_10px_0px_-4px_#CB9603]
            focus:shadow-[0px_10px_0px_-4px_#FFF] [&>h3]:focus:text-white`,

    day: "text-bold w-full text-center text-2xl text-gray-dark"
  };

  if (day === "Lunes") {
    return (
      <button className={styles.button}>
        <h3 className={styles.day}>{day}</h3>
      </button>
    );
  } else {
    return (
      <button
        className={styles.button}>
        <h3 className={styles.day}>{day}</h3>
      </button>
    );
  }
}
