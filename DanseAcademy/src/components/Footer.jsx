import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";


//! Hacer responsive textos

function Footer() {

  const titleFooter="";

  return (
    <footer className="font-roboto bg-black py-3">
      <div className="md:flex p-2 
      justify-around w-full 
      text-yellow-dark text-center 
      cursor-default items-center">
        <div>
          <h1><img src="../public/images/Round_Logo.png" className=" h-32 md:h-20 mx-auto" alt="Dansé Academy Studio"/></h1>
          <p className="md:text-[0.8em] my-2 md:text-yellow-light">Estudio de danza</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:inline md:text-left">
          <p>Carrera 78 #47-22</p>
          <p>Medellín, Colombia </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:inline md:text-left" >
          <p>Contacto</p>
          <p>(+57) 3002424995</p>
        </div>
      </div>
    <div className="flex pb-5 pt-2 md:pt-0 justify-center gap-3">
      <Link className=" hover:bg-slate-500 p-1 rounded-md"><FaWhatsapp className="text-yellow-dark text-[1.5rem] hover:text-white"/></Link>
      <Link className=" hover:bg-slate-500 p-1 rounded-md" to="https://www.instagram.com/danseacademystudio_/" target='_blank'><FaInstagram className="text-yellow-dark text-[1.5rem] hover:text-white"/></Link>
      <Link className=" hover:bg-slate-500 p-1 rounded-md"><FiMail className="text-yellow-dark text-[1.5rem] hover:text-white"/></Link>
    </div>
    </footer>
  );
}

export default Footer;
