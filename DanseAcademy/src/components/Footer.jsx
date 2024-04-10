import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

//! Hacer responsive textos

function Footer() {

  const styles={
    column:'flex flex-wrap justify-center gap-1 md:inline md:text-left',
    icons:"text-gray-dark text-4xl hover:text-white",
    menuText:"text-2xl"
  }

  return (
    <footer className="bg-yellow-dark pb-3 pt-10 ml-24">
      <div
        className="w-full cursor-default 
      items-center justify-around 
      p-2 text-center 
      text-gray-dark md:flex">
        <div>
          <h1 className="bg-gray-dark py-2 rounded-md">
            <img
              src="../images/Round_Logo.png"
              className=" mx-auto h-32 md:h-20"
              alt="Dansé Academy Studio"
            />
          </h1>
          <p className="my-2 md:text-2xl md:text-gray-dark">
            Estudio de danza
          </p>
        </div>
        <div className={styles.column}>
          <p className={styles.menuText} >Carrera 78 #47-22</p>
          <p className={styles.menuText}>Medellín, Colombia</p>
        </div>
        <div className={styles.column}>
          <p className={styles.menuText}>Contacto</p>
          <p className={styles.menuText}>(+57) 300 242 4995</p>
        </div>
      </div>
      <div className="flex justify-center gap-3 pb-10 pt-2 md:pt-0">
        <Link
          className="rounded-md p-1 hover:scale-125"
          to="https://bit.ly/DanseAcademyStudio"
          target="_blank">
          <FaWhatsapp className={styles.icons}  />
        </Link>
        <Link
          className="rounded-md p-1 hover:scale-125"
          to="https://www.instagram.com/danseacademystudio_/"
          target="_blank">
          <FaInstagram className={styles.icons}  />
        </Link>
        <Link className="rounded-md p-1 hover:scale-125">
          <FiMail className={styles.icons} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
