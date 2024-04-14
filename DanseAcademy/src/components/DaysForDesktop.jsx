import React from 'react'

export default function DaysForDesktop({setDayForSchedule, daysForSchedule, daysSpanish}) {

  const days=daysSpanish;

  const styles = {
    button: `z-20 rounded-tl-2xl rounded-br-2xl px-5 py-2 ring-0
            transition-all ease-in font-bold
            [&>h3]:text-yellow-dark [&>h3]:hover:text-gray-dark [&>h3]:focus:text-gray-dark
            hover:scale-110  hover:bg-yellow-dark
            focus:shadow-[0px_10px_0px_-3px_#FFF] focus:text-gray-dark focus:bg-yellow-dark`,

    day: "text-bold w-full text-center text-lg lg:text-2xl text-gray-dark"
  };


  return (
    <div className="mb-16 hidden justify-center 
      lg:gap-10 lg:px-5
      md:flex CAMBIAR A xl:flex
      2xl:gap-20">
        {days.map((day, i) => {
          return i === 0 ? (
            <button
              onClick={() => setDayForSchedule(daysForSchedule[i])}
              className={styles.button}
              key={day}>
              <h3 className={styles.day}>{day}</h3>
            </button>
          ) : (
            <button
              onClick={() => setDayForSchedule(daysForSchedule[i])}
              className={styles.button}
              key={day}>
              <h3 className={styles.day}>{day}</h3>
            </button>
          );
        })}
      </div>
  )
}
