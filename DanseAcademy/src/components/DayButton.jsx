import React from "react";

export default function DayButton({ day }) {
  const styles = {
    button: `z-20 rounded-tl-2xl rounded-br-2xl px-5 py-2 ring-0
            transition-all ease-in font-bold
            [&>h3]:text-yellow-dark [&>h3]:hover:text-gray-dark [&>h3]:focus:text-gray-dark
            hover:scale-110  hover:bg-yellow-dark
            focus:shadow-[0px_10px_0px_-3px_#FFF] focus:text-gray-dark focus:bg-yellow-dark`,

    day: "text-bold w-full text-center md:text-xl lg:text-2xl text-gray-dark"
  };

    return (
      <button
        className={styles.button}>
        <h3 className={styles.day}>{day}</h3>
      </button>
    );
  }

