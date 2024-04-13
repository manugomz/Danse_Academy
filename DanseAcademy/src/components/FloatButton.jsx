import React from "react";

import { IoLogoWhatsapp } from "react-icons/io5";

export default function FloatButton({ text }) {
  return (
    <a
      className="z-50 hidden aspect-square w-16 
                items-center justify-center 
                rounded-full bg-yellow-dark 
                transition-all hover:scale-125 hover:bg-yellow-darker hover:text-slate-100 
                md:flex md:mb-4"
      href={text}
      target="_blank">
      <IoLogoWhatsapp className="text-4xl" />
    </a>
  );
}
