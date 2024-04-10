import React from "react";

export default function ClassSchedule({ singleClass,color }) {
  
  
  const styles={
    button:" hover:border-yellow-light border-[1px] rounded-lg mx-2 w-[90%] h-20 min-w-[20vw] border-"+color,
    professor:"text-base font-light text-"+color,
  }

  return (
    <button className={styles.button}>
      <h3 className=" text-2xl text-slate-200">{singleClass.clase}</h3>
      <p  className="text-xs font-light text-slate-200">{singleClass.nota}</p>
      <p className={styles.professor}>{singleClass.profesor}</p>
      
    </button>
  );
}
