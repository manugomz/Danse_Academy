import React from "react";

export default function Day({ day }) {
  return (
    <button
      className="relative mt-2 w-[14%] pb-24 transition-all ease-in z-50
                hover:scale-110 [&>h3]:hover:text-white">
      <img src="./images/title.svg" className="absolute"></img>
      <h3 className="text-bold absolute w-full text-center text-3xl text-gray-dark md:top-[12%]">
        {day}
      </h3>
    </button>
  );
}
