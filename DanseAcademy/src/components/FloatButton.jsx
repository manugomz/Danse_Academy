import React from "react";

import { IoLogoWhatsapp } from "react-icons/io5";

export default function FloatButton({ text }) {


  return (
      <a className="hidden bg-yellow-dark w-16 aspect-square rounded-full
                  md:flex justify-center items-center z-50 hover:scale-125 transition-all
                  hover:bg-yellow-darker hover:text-slate-100"
        href="https://wa.me/+573002424995?text=Hola%20quiero%20reservar%20una%20clase"
        target="_blank">
        <IoLogoWhatsapp className="text-4xl"/>
      </a>
  );
}
